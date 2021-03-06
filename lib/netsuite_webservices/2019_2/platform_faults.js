"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnexpectedErrorFault = exports.ExceededRequestLimitFault = exports.ExceededUsageLimitFault = exports.ExceededRequestSizeFault = exports.InsufficientPermissionFault = exports.InvalidCredentialsFault = exports.AsyncFault = exports.InvalidAccountFault = exports.InvalidSessionFault = exports.ExceededConcurrentRequestLimitFault = exports.InvalidVersionFault = exports.ExceededRecordCountFault = exports.SoapFault = void 0;
const soap_types_1 = require("../../soap-types");
const MAPPINGS_NAME = "com_netsuite_webservices_platform_faults_2019_2";
class SoapFault extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.code = props.code;
        this.message = props.message;
    }
}
exports.SoapFault = SoapFault;
class ExceededRecordCountFault extends SoapFault {
}
exports.ExceededRecordCountFault = ExceededRecordCountFault;
class InvalidVersionFault extends SoapFault {
}
exports.InvalidVersionFault = InvalidVersionFault;
class ExceededConcurrentRequestLimitFault extends SoapFault {
}
exports.ExceededConcurrentRequestLimitFault = ExceededConcurrentRequestLimitFault;
class InvalidSessionFault extends SoapFault {
}
exports.InvalidSessionFault = InvalidSessionFault;
class InvalidAccountFault extends SoapFault {
}
exports.InvalidAccountFault = InvalidAccountFault;
class AsyncFault extends SoapFault {
}
exports.AsyncFault = AsyncFault;
class InvalidCredentialsFault extends SoapFault {
}
exports.InvalidCredentialsFault = InvalidCredentialsFault;
class InsufficientPermissionFault extends SoapFault {
}
exports.InsufficientPermissionFault = InsufficientPermissionFault;
class ExceededRequestSizeFault extends SoapFault {
}
exports.ExceededRequestSizeFault = ExceededRequestSizeFault;
class ExceededUsageLimitFault extends SoapFault {
}
exports.ExceededUsageLimitFault = ExceededUsageLimitFault;
class ExceededRequestLimitFault extends SoapFault {
}
exports.ExceededRequestLimitFault = ExceededRequestLimitFault;
class UnexpectedErrorFault extends SoapFault {
}
exports.UnexpectedErrorFault = UnexpectedErrorFault;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fZmF1bHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25ldHN1aXRlX3dlYnNlcnZpY2VzLzIwMTlfMi9wbGF0Zm9ybV9mYXVsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsaURBQTBFO0FBQzFFLE1BQU0sYUFBYSxHQUFHLGlEQUFpRCxDQUFDO0FBTXhFLE1BQWEsU0FBVSxTQUFRLDRCQUFlO0lBRzVDLFlBQVksS0FBcUI7UUFDL0IsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBUkQsOEJBUUM7QUFFRCxNQUFhLHdCQUF5QixTQUFRLFNBQVM7Q0FBRztBQUExRCw0REFBMEQ7QUFFMUQsTUFBYSxtQkFBb0IsU0FBUSxTQUFTO0NBQUc7QUFBckQsa0RBQXFEO0FBRXJELE1BQWEsbUNBQW9DLFNBQVEsU0FBUztDQUFHO0FBQXJFLGtGQUFxRTtBQUVyRSxNQUFhLG1CQUFvQixTQUFRLFNBQVM7Q0FBRztBQUFyRCxrREFBcUQ7QUFFckQsTUFBYSxtQkFBb0IsU0FBUSxTQUFTO0NBQUc7QUFBckQsa0RBQXFEO0FBRXJELE1BQWEsVUFBVyxTQUFRLFNBQVM7Q0FBRztBQUE1QyxnQ0FBNEM7QUFFNUMsTUFBYSx1QkFBd0IsU0FBUSxTQUFTO0NBQUc7QUFBekQsMERBQXlEO0FBRXpELE1BQWEsMkJBQTRCLFNBQVEsU0FBUztDQUFHO0FBQTdELGtFQUE2RDtBQUU3RCxNQUFhLHdCQUF5QixTQUFRLFNBQVM7Q0FBRztBQUExRCw0REFBMEQ7QUFFMUQsTUFBYSx1QkFBd0IsU0FBUSxTQUFTO0NBQUc7QUFBekQsMERBQXlEO0FBRXpELE1BQWEseUJBQTBCLFNBQVEsU0FBUztDQUFHO0FBQTNELDhEQUEyRDtBQUUzRCxNQUFhLG9CQUFxQixTQUFRLFNBQVM7Q0FBRztBQUF0RCxvREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQbGF0Zm9ybUZhdWx0c1R5cGVzIGZyb20gXCIuL3BsYXRmb3JtX2ZhdWx0c190eXBlc1wiO1xuaW1wb3J0IHsgU29hcE1hcHBpbmdCYXNlLCBwcm9wc1dpdGhNYXBwaW5nc05hbWUgfSBmcm9tIFwiLi4vLi4vc29hcC10eXBlc1wiO1xuY29uc3QgTUFQUElOR1NfTkFNRSA9IFwiY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2ZhdWx0c18yMDE5XzJcIjtcbmV4cG9ydCB0eXBlIFNvYXBGYXVsdFByb3BzID0ge1xuICBjb2RlOiBQbGF0Zm9ybUZhdWx0c1R5cGVzLkZhdWx0Q29kZVR5cGU7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBTb2FwRmF1bHQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBjb2RlOiBQbGF0Zm9ybUZhdWx0c1R5cGVzLkZhdWx0Q29kZVR5cGU7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IFNvYXBGYXVsdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5jb2RlID0gcHJvcHMuY29kZTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBwcm9wcy5tZXNzYWdlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeGNlZWRlZFJlY29yZENvdW50RmF1bHQgZXh0ZW5kcyBTb2FwRmF1bHQge31cblxuZXhwb3J0IGNsYXNzIEludmFsaWRWZXJzaW9uRmF1bHQgZXh0ZW5kcyBTb2FwRmF1bHQge31cblxuZXhwb3J0IGNsYXNzIEV4Y2VlZGVkQ29uY3VycmVudFJlcXVlc3RMaW1pdEZhdWx0IGV4dGVuZHMgU29hcEZhdWx0IHt9XG5cbmV4cG9ydCBjbGFzcyBJbnZhbGlkU2Vzc2lvbkZhdWx0IGV4dGVuZHMgU29hcEZhdWx0IHt9XG5cbmV4cG9ydCBjbGFzcyBJbnZhbGlkQWNjb3VudEZhdWx0IGV4dGVuZHMgU29hcEZhdWx0IHt9XG5cbmV4cG9ydCBjbGFzcyBBc3luY0ZhdWx0IGV4dGVuZHMgU29hcEZhdWx0IHt9XG5cbmV4cG9ydCBjbGFzcyBJbnZhbGlkQ3JlZGVudGlhbHNGYXVsdCBleHRlbmRzIFNvYXBGYXVsdCB7fVxuXG5leHBvcnQgY2xhc3MgSW5zdWZmaWNpZW50UGVybWlzc2lvbkZhdWx0IGV4dGVuZHMgU29hcEZhdWx0IHt9XG5cbmV4cG9ydCBjbGFzcyBFeGNlZWRlZFJlcXVlc3RTaXplRmF1bHQgZXh0ZW5kcyBTb2FwRmF1bHQge31cblxuZXhwb3J0IGNsYXNzIEV4Y2VlZGVkVXNhZ2VMaW1pdEZhdWx0IGV4dGVuZHMgU29hcEZhdWx0IHt9XG5cbmV4cG9ydCBjbGFzcyBFeGNlZWRlZFJlcXVlc3RMaW1pdEZhdWx0IGV4dGVuZHMgU29hcEZhdWx0IHt9XG5cbmV4cG9ydCBjbGFzcyBVbmV4cGVjdGVkRXJyb3JGYXVsdCBleHRlbmRzIFNvYXBGYXVsdCB7fVxuIl19