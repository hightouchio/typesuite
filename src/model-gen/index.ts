import fs, { WriteStream } from "fs";
import util from "util";
import {
  Writer,
  EntityTypeInfo,
  TypeInfo,
  MappingsLoader,
  Mappings,
  MappingsInfo,
} from "./types";
import {
  isEnumTypeInfo,
  isLocalType,
  fileNameForMappings,
  importNameForMappings,
} from "./parsing";
import {
  UnionTypeGenerator,
  TypeAliasGenerator,
  ClassGenerator,
} from "./generators";

const availableBaseTypes = new Set<string>();

export class FileWriter implements Writer {
  private readonly targetDirectory: string;
  private writable: WriteStream | undefined;
  constructor(targetDirectory: string) {
    this.targetDirectory = targetDirectory;
    fs.mkdirSync(this.targetDirectory, { recursive: true });
  }

  open(fileName: string): void {
    if (this.writable !== undefined) {
      throw new Error(`FileWriter is already open for ${fileName}`);
    }
    this.writable = fs.createWriteStream(
      `${this.targetDirectory}/${fileName}.json`
    );
  }

  close(): void {
    if (this.writable === undefined) {
      throw new Error(`Failed to close FileWriter. Call open() first.`);
    }
    this.writable.close();
    this.writable = undefined;
  }

  write(message?: string, ...optionalParams: string[]): void {
    if (this.writable === undefined) {
      throw new Error("FileWrite is not open. Call open() before writing");
    }
    this.writable.write(util.format(message, ...optionalParams));
  }
}

function typeInfoExtends(typeInfo: TypeInfo, localBaseType: string): boolean {
  if (!isEnumTypeInfo(typeInfo)) {
    return typeInfo.baseTypeInfo === `.${localBaseType}`;
  }
  return false;
}

export class FileMappingsLoader implements MappingsLoader {
  private readonly mappingsDir: string;

  constructor(mappingsDir: string) {
    this.mappingsDir = mappingsDir;
  }

  load(mappingsName: string): MappingsInfo {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mappings: Mappings = require(this.mappingsDir + mappingsName + ".js")[
      mappingsName
    ];

    const sortedTypeInfos: TypeInfo[] = [];
    const referencedTypes: string[] = [];
    let needsSoapTypesImport = false;

    mappings.typeInfos.forEach((typeInfo) => {
      if (isEnumTypeInfo(typeInfo)) {
        sortedTypeInfos.push(typeInfo);
      } else {
        needsSoapTypesImport = true;
        if (referencedTypes.includes(typeInfo.localName)) {
          const index = sortedTypeInfos.findIndex((sortedTypeInfo) => {
            return typeInfoExtends(sortedTypeInfo, typeInfo.localName);
          });
          sortedTypeInfos.splice(index, 0, typeInfo);
        } else {
          sortedTypeInfos.push(typeInfo);
        }
        if (typeInfo.baseTypeInfo) {
          if (isLocalType(typeInfo.baseTypeInfo)) {
            referencedTypes.push(typeInfo.baseTypeInfo.substr(1));
          }
          availableBaseTypes.add(typeInfo.baseTypeInfo);
        }
      }
    });

    return {
      ...mappings,
      sortedTypeInfos,
      needsSoapTypesImport: needsSoapTypesImport,
    };
  }

  allMappingsFiles(): string[] {
    return fs
      .readdirSync(this.mappingsDir, { withFileTypes: true })
      .map((item) => item.name.replace(/\.js$/, ""));
  }
}

export default class ModelGenerator {
  private readonly mappingsLoader: MappingsLoader;
  private readonly writer: Writer;

  constructor(loader: MappingsLoader, writer: Writer) {
    this.mappingsLoader = loader;
    this.writer = writer;
  }

  async generateTypesFromMappings(): Promise<void> {
    const models: { [namespace: string]: any } = {};

    await this.mappingsLoader
      .allMappingsFiles()
      .forEach((mappingsName) => {
        const namespace = toPascalCase(mappingsName.replace("com_netsuite_webservices_", "").replace("_2019_2", ""));
        const mappings = this.mappingsLoader.load(mappingsName);

        // Remove anything that is not a Record
        const model: { [name: string]: any } = {};
        mappings.typeInfos.filter((t: any) => {
          return t.baseTypeInfo === "com_netsuite_webservices_platform_core_2019_2.Record" && t.propertyInfos
        }).map((t: EntityTypeInfo) => {
          if (!t.propertyInfos) return;
          
          const entity: { [property: string]: any } = {};

          for(const property of t.propertyInfos) {
            entity[property.name] = {
              type: property.typeInfo || "string",
              required: false,
              typeInfo: property
            }
          }

          model[t.localName] = entity
        });
        models[namespace] = model
      });

    this.writeFile(models);
  }

  private writeFile(models: any) {
    const fileName = fileNameForMappings("models");
    console.log(`Writing ${fileName}...`);
    this.writer.open(fileName);

    this.writer.write(JSON.stringify(models, null, 2));

    this.writer.close();
  }
}

function toPascalCase(value: string): string {
  return value.replace("_", " ").replace(/\w\S*/g, match => match.charAt(0).toUpperCase() + match.substr(1).toLowerCase()).replace(" ", "");
}