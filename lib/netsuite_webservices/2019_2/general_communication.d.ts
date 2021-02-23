import * as GeneralCommunicationTypes from "./general_communication_types";
import * as PlatformCore from "./platform_core";
import * as DocumentsFilecabinet from "./documents_filecabinet";
import * as PlatformCommon from "./platform_common";
import { SoapMappingBase } from "../../soap-types";
export declare type NoteSearchAdvancedProps = {
    criteria?: NoteSearch;
    columns?: NoteSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class NoteSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: NoteSearch;
    columns?: NoteSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: NoteSearchAdvancedProps);
}
export declare type MessageMediaItemListProps = {
    mediaItem: DocumentsFilecabinet.File[];
    replaceAll?: boolean;
};
export declare class MessageMediaItemList extends SoapMappingBase {
    mediaItem: DocumentsFilecabinet.File[];
    replaceAll?: boolean;
    constructor(props: MessageMediaItemListProps);
}
export declare type NoteSearchProps = {
    basic?: PlatformCommon.NoteSearchBasic;
    authorJoin?: PlatformCommon.EmployeeSearchBasic;
    callJoin?: PlatformCommon.PhoneCallSearchBasic;
    campaignJoin?: PlatformCommon.CampaignSearchBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchBasic;
    contactJoin?: PlatformCommon.ContactSearchBasic;
    customerJoin?: PlatformCommon.CustomerSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    entityJoin?: PlatformCommon.EntitySearchBasic;
    eventJoin?: PlatformCommon.CalendarEventSearchBasic;
    issueJoin?: PlatformCommon.IssueSearchBasic;
    itemJoin?: PlatformCommon.ItemSearchBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
    partnerJoin?: PlatformCommon.PartnerSearchBasic;
    solutionJoin?: PlatformCommon.SolutionSearchBasic;
    taskJoin?: PlatformCommon.TaskSearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    vendorJoin?: PlatformCommon.VendorSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class NoteSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.NoteSearchBasic;
    authorJoin?: PlatformCommon.EmployeeSearchBasic;
    callJoin?: PlatformCommon.PhoneCallSearchBasic;
    campaignJoin?: PlatformCommon.CampaignSearchBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchBasic;
    contactJoin?: PlatformCommon.ContactSearchBasic;
    customerJoin?: PlatformCommon.CustomerSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    entityJoin?: PlatformCommon.EntitySearchBasic;
    eventJoin?: PlatformCommon.CalendarEventSearchBasic;
    issueJoin?: PlatformCommon.IssueSearchBasic;
    itemJoin?: PlatformCommon.ItemSearchBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
    partnerJoin?: PlatformCommon.PartnerSearchBasic;
    solutionJoin?: PlatformCommon.SolutionSearchBasic;
    taskJoin?: PlatformCommon.TaskSearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    vendorJoin?: PlatformCommon.VendorSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: NoteSearchProps);
}
export declare type MessageSearchRowProps = {
    basic?: PlatformCommon.MessageSearchRowBasic;
    attachmentsJoin?: PlatformCommon.FileSearchRowBasic;
    authorJoin?: PlatformCommon.EntitySearchRowBasic;
    campaignJoin?: PlatformCommon.CampaignSearchRowBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
    contactJoin?: PlatformCommon.ContactSearchRowBasic;
    customerJoin?: PlatformCommon.CustomerSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    entityJoin?: PlatformCommon.EntitySearchRowBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
    partnerJoin?: PlatformCommon.PartnerSearchRowBasic;
    recipientJoin?: PlatformCommon.EntitySearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    vendorJoin?: PlatformCommon.VendorSearchRowBasic;
};
export declare class MessageSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.MessageSearchRowBasic;
    attachmentsJoin?: PlatformCommon.FileSearchRowBasic;
    authorJoin?: PlatformCommon.EntitySearchRowBasic;
    campaignJoin?: PlatformCommon.CampaignSearchRowBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
    contactJoin?: PlatformCommon.ContactSearchRowBasic;
    customerJoin?: PlatformCommon.CustomerSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    entityJoin?: PlatformCommon.EntitySearchRowBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
    partnerJoin?: PlatformCommon.PartnerSearchRowBasic;
    recipientJoin?: PlatformCommon.EntitySearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    vendorJoin?: PlatformCommon.VendorSearchRowBasic;
    constructor(props: MessageSearchRowProps);
}
export declare type NoteProps = {
    title?: string;
    noteType?: PlatformCore.RecordRef;
    direction?: GeneralCommunicationTypes.NoteDirection;
    noteDate?: string;
    note?: string;
    lastModifiedDate?: string;
    activity?: PlatformCore.RecordRef;
    author?: PlatformCore.RecordRef;
    entity?: PlatformCore.RecordRef;
    folder?: PlatformCore.RecordRef;
    item?: PlatformCore.RecordRef;
    media?: PlatformCore.RecordRef;
    record?: PlatformCore.RecordRef;
    recordType?: PlatformCore.RecordRef;
    topic?: PlatformCore.RecordRef;
    transaction?: PlatformCore.RecordRef;
    customForm?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class Note extends PlatformCore.Record {
    title?: string;
    noteType?: PlatformCore.RecordRef;
    direction?: GeneralCommunicationTypes.NoteDirection;
    noteDate?: string;
    note?: string;
    lastModifiedDate?: string;
    activity?: PlatformCore.RecordRef;
    author?: PlatformCore.RecordRef;
    entity?: PlatformCore.RecordRef;
    folder?: PlatformCore.RecordRef;
    item?: PlatformCore.RecordRef;
    media?: PlatformCore.RecordRef;
    record?: PlatformCore.RecordRef;
    recordType?: PlatformCore.RecordRef;
    topic?: PlatformCore.RecordRef;
    transaction?: PlatformCore.RecordRef;
    customForm?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: NoteProps);
}
export declare type MessageSearchProps = {
    basic?: PlatformCommon.MessageSearchBasic;
    attachmentsJoin?: PlatformCommon.FileSearchBasic;
    authorJoin?: PlatformCommon.EntitySearchBasic;
    campaignJoin?: PlatformCommon.CampaignSearchBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchBasic;
    contactJoin?: PlatformCommon.ContactSearchBasic;
    customerJoin?: PlatformCommon.CustomerSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    entityJoin?: PlatformCommon.EntitySearchBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
    partnerJoin?: PlatformCommon.PartnerSearchBasic;
    recipientJoin?: PlatformCommon.EntitySearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    vendorJoin?: PlatformCommon.VendorSearchBasic;
};
export declare class MessageSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.MessageSearchBasic;
    attachmentsJoin?: PlatformCommon.FileSearchBasic;
    authorJoin?: PlatformCommon.EntitySearchBasic;
    campaignJoin?: PlatformCommon.CampaignSearchBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchBasic;
    contactJoin?: PlatformCommon.ContactSearchBasic;
    customerJoin?: PlatformCommon.CustomerSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    entityJoin?: PlatformCommon.EntitySearchBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
    partnerJoin?: PlatformCommon.PartnerSearchBasic;
    recipientJoin?: PlatformCommon.EntitySearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    vendorJoin?: PlatformCommon.VendorSearchBasic;
    constructor(props: MessageSearchProps);
}
export declare type MessageProps = {
    author?: PlatformCore.RecordRef;
    authorEmail?: string;
    recipient?: PlatformCore.RecordRef;
    recipientEmail?: string;
    cc?: string;
    bcc?: string;
    messageDate?: string;
    recordName?: string;
    recordTypeName?: string;
    subject?: string;
    message?: string;
    emailed?: boolean;
    activity?: PlatformCore.RecordRef;
    compressAttachments?: boolean;
    incoming?: boolean;
    lastModifiedDate?: string;
    transaction?: PlatformCore.RecordRef;
    mediaItemList?: MessageMediaItemList;
    dateTime?: string;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class Message extends PlatformCore.Record {
    author?: PlatformCore.RecordRef;
    authorEmail?: string;
    recipient?: PlatformCore.RecordRef;
    recipientEmail?: string;
    cc?: string;
    bcc?: string;
    messageDate?: string;
    recordName?: string;
    recordTypeName?: string;
    subject?: string;
    message?: string;
    emailed?: boolean;
    activity?: PlatformCore.RecordRef;
    compressAttachments?: boolean;
    incoming?: boolean;
    lastModifiedDate?: string;
    transaction?: PlatformCore.RecordRef;
    mediaItemList?: MessageMediaItemList;
    dateTime?: string;
    internalId?: string;
    externalId?: string;
    constructor(props: MessageProps);
}
export declare type MessageSearchAdvancedProps = {
    criteria?: MessageSearch;
    columns?: MessageSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class MessageSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: MessageSearch;
    columns?: MessageSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: MessageSearchAdvancedProps);
}
export declare type NoteSearchRowProps = {
    basic?: PlatformCommon.NoteSearchRowBasic;
    authorJoin?: PlatformCommon.EmployeeSearchRowBasic;
    callJoin?: PlatformCommon.PhoneCallSearchRowBasic;
    campaignJoin?: PlatformCommon.CampaignSearchRowBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
    contactJoin?: PlatformCommon.ContactSearchRowBasic;
    customerJoin?: PlatformCommon.CustomerSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    entityJoin?: PlatformCommon.EntitySearchRowBasic;
    eventJoin?: PlatformCommon.CalendarEventSearchRowBasic;
    issueJoin?: PlatformCommon.IssueSearchRowBasic;
    itemJoin?: PlatformCommon.ItemSearchRowBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
    partnerJoin?: PlatformCommon.PartnerSearchRowBasic;
    solutionJoin?: PlatformCommon.SolutionSearchRowBasic;
    taskJoin?: PlatformCommon.TaskSearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    vendorJoin?: PlatformCommon.VendorSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class NoteSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.NoteSearchRowBasic;
    authorJoin?: PlatformCommon.EmployeeSearchRowBasic;
    callJoin?: PlatformCommon.PhoneCallSearchRowBasic;
    campaignJoin?: PlatformCommon.CampaignSearchRowBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
    contactJoin?: PlatformCommon.ContactSearchRowBasic;
    customerJoin?: PlatformCommon.CustomerSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    entityJoin?: PlatformCommon.EntitySearchRowBasic;
    eventJoin?: PlatformCommon.CalendarEventSearchRowBasic;
    issueJoin?: PlatformCommon.IssueSearchRowBasic;
    itemJoin?: PlatformCommon.ItemSearchRowBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
    partnerJoin?: PlatformCommon.PartnerSearchRowBasic;
    solutionJoin?: PlatformCommon.SolutionSearchRowBasic;
    taskJoin?: PlatformCommon.TaskSearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    vendorJoin?: PlatformCommon.VendorSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: NoteSearchRowProps);
}
