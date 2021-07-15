import path from "path";
import ModelGenerator, { FileMappingsLoader, FileWriter } from "../src/model-gen";

const ROOT_DIR = path.dirname(__dirname);

const netSuitBasePath = `${ROOT_DIR}/src/netsuite_models/2019_2`;
const mappingsDir = `${ROOT_DIR}/src/netsuite_webservices/2019_2/__mappings/`;

const nsGenerator = new ModelGenerator(
  new FileMappingsLoader(mappingsDir),
  new FileWriter(netSuitBasePath)
);
nsGenerator.generateTypesFromMappings();

// TODO: run the generator for the XML Soap types
// const xmlSoapBasePath = `${ROOT_DIR}/src/xmlsoap`;
// const soapGenerator = new TypeGenerator(xmlSoapBasePath);
// soapGenerator.generateTypesFromMappings();
