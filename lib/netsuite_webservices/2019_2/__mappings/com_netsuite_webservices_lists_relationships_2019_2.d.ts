export namespace com_netsuite_webservices_lists_relationships_2019_2 {
    const name: string;
    const defaultElementNamespaceURI: string;
    const dependencies: string[];
    const typeInfos: ({
        localName: string;
        propertyInfos: ({
            name: string;
            typeInfo?: undefined;
        } | {
            name: string;
            typeInfo: string;
        })[];
        baseTypeInfo?: undefined;
    } | {
        localName: string;
        propertyInfos: {
            name: string;
            required: boolean;
            collection: boolean;
            typeInfo: string;
        }[];
        baseTypeInfo?: undefined;
    } | {
        localName: string;
        propertyInfos: ({
            name: string;
            minOccurs: number;
            collection: boolean;
            typeInfo: string;
            attributeName?: undefined;
            type?: undefined;
        } | {
            name: string;
            typeInfo: string;
            attributeName: {
                localPart: string;
            };
            type: string;
            minOccurs?: undefined;
            collection?: undefined;
        })[];
        baseTypeInfo?: undefined;
    } | {
        localName: string;
        baseTypeInfo: string;
        propertyInfos: ({
            name: string;
            typeInfo: string;
            minOccurs?: undefined;
            collection?: undefined;
        } | {
            name: string;
            minOccurs: number;
            collection: boolean;
            typeInfo: string;
        })[];
    } | {
        localName: string;
        baseTypeInfo: string;
        propertyInfos: ({
            name: string;
            typeInfo: string;
            values?: undefined;
            elementName?: undefined;
            attributeName?: undefined;
            type?: undefined;
        } | {
            name: string;
            typeInfo?: undefined;
            values?: undefined;
            elementName?: undefined;
            attributeName?: undefined;
            type?: undefined;
        } | {
            name: string;
            values: string[];
            typeInfo?: undefined;
            elementName?: undefined;
            attributeName?: undefined;
            type?: undefined;
        } | {
            name: string;
            elementName: string;
            typeInfo: string;
            values?: undefined;
            attributeName?: undefined;
            type?: undefined;
        } | {
            name: string;
            attributeName: {
                localPart: string;
            };
            type: string;
            typeInfo?: undefined;
            values?: undefined;
            elementName?: undefined;
        })[];
    })[];
    const elementInfos: {
        typeInfo: string;
        elementName: string;
    }[];
}
