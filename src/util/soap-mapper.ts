import { Jsonix } from "jsonix";
import { TokenPassport } from "../netsuite_webservices/2019_2/platform_core";
import { AllMappings } from "../netsuite_webservices/2019_2/__mappings/netsuite";
import { Body, Envelope, Header } from "../xmlsoap/xmlsoap_envelope";

const JSONIX_CONTEXT_OPTIONS = {
  namespacePrefixes: {
    "http://www.w3.org/2001/XMLSchema-instance": "xsi",
    "http://schemas.xmlsoap.org/soap/envelope/": "soap",
    "urn:common_2019_2.platform.webservices.netsuite.com": "platform_common",
    "urn:core_2019_2.platform.webservices.netsuite.com": "platform_core",
    "urn:messages_2019_2.platform.webservices.netsuite.com":
      "platform_messages",
  },
};

interface soapObject {}

interface ElementInfo {
  typeInfo: string;
  elementName: string;
}

function elementKeyFor(object: { constructor: { name: string } }) {
  const elementName = require("../netsuite_webservices/2019_2/__mappings/com_netsuite_webservices_platform_messages_2019_2").com_netsuite_webservices_platform_messages_2019_2.elementInfos.find(
    (elementInfo: ElementInfo) => {
      const typeInfo = elementInfo.typeInfo.split(".").slice(-1)[0];
      return typeInfo === object.constructor.name;
    }
  )?.elementName;
  return `platform_messages:${
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    elementName ?? "<<" + object.constructor.name + ">>"
  }`;
}

export function serializeSoapRequest(
  header: TokenPassport,
  body: soapObject
): string {
  const headerElementKey = elementKeyFor(header);
  const bodyElementKey = elementKeyFor(body);
  const envelope = new Envelope({
    header: new Header({ any: [{ name: headerElementKey, value: header }] }),
    body: new Body({ any: [{ name: bodyElementKey, value: body }] }),
  });

  const mappings = [
    require("../xmlsoap/org_xmlsoap_schemas_soap_envelope")
      .org_xmlsoap_schemas_soap_envelope,
  ].concat(AllMappings);

  const data = { "soap:Envelope": envelope };
  const context = new Jsonix.Context(mappings, JSONIX_CONTEXT_OPTIONS);
  const xmlString = context.createMarshaller().marshalString(data);

  return '<?xml version="1.0" encoding="utf-8"?>' + xmlString;
}

export function deserializeSoapResponse(xmlContent: string): XmlObject {
  const mappings = [
    require("../xmlsoap/org_xmlsoap_schemas_soap_envelope")
      .org_xmlsoap_schemas_soap_envelope,
  ].concat(AllMappings);

  const context = new Jsonix.Context(mappings);
  return context.createUnmarshaller<XmlObject>().unmarshalString(xmlContent);
}

export interface XmlObject {
  value: {
    body: {
      any: [{ value: unknown }];
    };
  };
}