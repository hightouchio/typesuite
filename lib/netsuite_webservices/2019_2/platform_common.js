"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturingOperationTaskSearchRowBasic = exports.ItemSupplyPlanSearchRowBasic = exports.PriceLevelSearchBasic = exports.JobTypeSearchRowBasic = exports.ConsolidatedExchangeRateSearchRowBasic = exports.ClassificationSearchBasic = exports.ClassificationSearchRowBasic = exports.OpportunitySearchRowBasic = exports.BomRevisionSearchRowBasic = exports.UsageSearchBasic = exports.BillingScheduleSearchRowBasic = exports.CouponCodeSearchRowBasic = exports.VendorCategorySearchRowBasic = exports.InventoryAssignmentList = exports.ContactCategorySearchBasic = exports.PartnerSearchBasic = exports.VendorSearchRowBasic = exports.ExpenseCategorySearchRowBasic = exports.CouponCodeSearchBasic = exports.ItemSearchBasic = exports.RevRecTemplateSearchRowBasic = exports.BillingAccountSearchRowBasic = exports.ItemSupplyPlanSearchBasic = exports.IssueSearchRowBasic = exports.CustomRecordSearchRowBasic = exports.EntityTaxRegistrationSearchRowBasic = exports.BinSearchRowBasic = exports.EntitySearchRowBasic = exports.CampaignSearchBasic = exports.CustomerSearchRowBasic = exports.AccountingTransactionSearchRowBasic = exports.TopicSearchRowBasic = exports.CustomerSearchBasic = exports.FolderSearchRowBasic = exports.DepartmentSearchRowBasic = exports.InventoryDetailSearchBasic = exports.ItemAccountMappingSearchRowBasic = exports.CustomSearchRowBasic = exports.MerchandiseHierarchyNodeSearchBasic = exports.SalesRoleSearchBasic = exports.BomSearchBasic = exports.AssemblyItemBomSearchRowBasic = exports.TransactionSearchRowBasic = exports.PhoneCallSearchRowBasic = exports.EntityGroupSearchBasic = exports.NoteSearchBasic = exports.LocationSearchRowBasic = exports.PartnerCategorySearchRowBasic = exports.GiftCertRedemption = exports.ManufacturingCostTemplateSearchRowBasic = void 0;
exports.MessageSearchBasic = exports.ChargeSearchBasic = exports.InboundShipmentSearchBasic = exports.JobSearchRowBasic = exports.FolderSearchBasic = exports.SupportCaseSearchRowBasic = exports.TaxGroupSearchBasic = exports.Partners = exports.EmployeeSearchBasic = exports.CustomerStatusSearchBasic = exports.IssueSearchBasic = exports.PricingGroupSearchRowBasic = exports.SalesTaxItemSearchRowBasic = exports.EntityGroupSearchRowBasic = exports.FairValuePriceSearchBasic = exports.MseSubsidiarySearchBasic = exports.PriceLevelSearchRowBasic = exports.RecurrenceDowMaskList = exports.TaxDetails = exports.TimeSheetSearchBasic = exports.PayrollItemSearchRowBasic = exports.CampaignSearchRowBasic = exports.CustomerCategorySearchBasic = exports.SiteCategorySearchRowBasic = exports.CostCategorySearchRowBasic = exports.LandedCost = exports.RevRecScheduleSearchRowBasic = exports.InventoryNumberSearchBasic = exports.PartnerCategorySearchBasic = exports.UsageSearchRowBasic = exports.WinLossReasonSearchBasic = exports.ProjectTaskAssignmentSearchRowBasic = exports.VendorSearchBasic = exports.InventoryDetail = exports.NexusSearchBasic = exports.AccountSearchRowBasic = exports.NoteTypeSearchRowBasic = exports.GlobalAccountMappingSearchBasic = exports.EmployeeSearchRowBasic = exports.WinLossReasonSearchRowBasic = exports.FileSearchBasic = exports.ItemBinNumberSearchBasic = exports.TimeBillSearchBasic = exports.ProjectTaskAssignmentSearchBasic = exports.OriginatingLeadSearchRowBasic = exports.LandedCostSummary = exports.PartnerSearchRowBasic = exports.BomRevisionComponentSearchBasic = exports.CostCategorySearchBasic = exports.ContactSearchRowBasic = void 0;
exports.OriginatingLeadSearchBasic = exports.SolutionSearchRowBasic = exports.BomSearchRowBasic = exports.LandedCostDataList = exports.PricingSearchRowBasic = exports.OtherNameCategorySearchBasic = exports.CustomerSalesTeam = exports.HcmJobSearchRowBasic = exports.PaycheckSearchRowBasic = exports.InventoryDetailSearchRowBasic = exports.TermSearchRowBasic = exports.TimeEntrySearchRowBasic = exports.GlobalAccountMappingSearchRowBasic = exports.NoteTypeSearchBasic = exports.TransactionSearchBasic = exports.TermSearchBasic = exports.TimeItem = exports.InstallmentSearchRowBasic = exports.ItemAccountMappingSearchBasic = exports.SalesTaxItemSearchBasic = exports.OtherNameCategorySearchRowBasic = exports.TimeBillSearchRowBasic = exports.AccountSearchBasic = exports.CustomerCategorySearchRowBasic = exports.CalendarEventSearchRowBasic = exports.Address = exports.GiftCertificateSearchBasic = exports.NoteSearchRowBasic = exports.ManufacturingCostTemplateSearchBasic = exports.PayrollItemSearchBasic = exports.PresentationItem = exports.BillingAccountSearchBasic = exports.PricingGroupSearchBasic = exports.CustomerSubsidiaryRelationshipSearchBasic = exports.AddressSearchRowBasic = exports.ProjectTaskSearchBasic = exports.AssemblyItemBomSearchBasic = exports.PhoneCallSearchBasic = exports.EntityTaxRegistrationSearchBasic = exports.VendorCategorySearchBasic = exports.EntitySearchBasic = exports.GroupMemberSearchBasic = exports.OpportunitySearchBasic = exports.ManufacturingRoutingSearchBasic = exports.ChargeSearchRowBasic = exports.LandedCostData = exports.CurrencyRateSearchBasic = exports.JobStatusSearchRowBasic = exports.TopicSearchBasic = exports.PaymentMethodSearchRowBasic = void 0;
exports.ResourceAllocationSearchRowBasic = exports.ItemRevisionSearchRowBasic = exports.ContactSearchBasic = exports.BinSearchBasic = exports.CustomerMessageSearchBasic = exports.CustomerStatusSearchRowBasic = exports.CalendarEventSearchBasic = exports.LocationSearchBasic = exports.FileSearchRowBasic = exports.ItemRevisionSearchBasic = exports.CustomListSearchRowBasic = exports.ContactCategorySearchRowBasic = exports.NexusSearchRowBasic = exports.SiteCategorySearchBasic = exports.TaxDetailsList = exports.BomRevisionComponentSearchRowBasic = exports.ManufacturingOperationTaskSearchBasic = exports.InstallmentSearchBasic = exports.PromotionCodeSearchBasic = exports.PaycheckSearchBasic = exports.MseSubsidiarySearchRowBasic = exports.ContactRoleSearchBasic = exports.CurrencyRateSearchRowBasic = exports.ItemDemandPlanSearchRowBasic = exports.ContactRoleSearchRowBasic = exports.JobTypeSearchBasic = exports.MessageSearchRowBasic = exports.GiftCertificateSearchRowBasic = exports.AccountingTransactionSearchBasic = exports.JobSearchBasic = exports.MerchandiseHierarchyNodeSearchRowBasic = exports.InventoryNumberBinSearchBasic = exports.RevRecTemplateSearchBasic = exports.BudgetSearchRowBasic = exports.ItemSearchRowBasic = exports.TaxGroupSearchRowBasic = exports.JobStatusSearchBasic = exports.FairValuePriceSearchRowBasic = exports.UnitsTypeSearchRowBasic = exports.AddressSearchBasic = exports.CustomSearchJoin = exports.DepartmentSearchBasic = exports.TimeSheetSearchRowBasic = exports.CustomerSubsidiaryRelationshipSearchRowBasic = exports.TaxTypeSearchRowBasic = exports.UnitsTypeSearchBasic = exports.GiftCertRedemptionList = exports.AccountingBookDetailList = exports.InventoryNumberBinSearchRowBasic = exports.AccountingBookDetail = void 0;
exports.TaxDetailSearchRowBasic = exports.ItemDemandPlanSearchBasic = exports.ResourceAllocationSearchBasic = exports.ManufacturingRoutingSearchRowBasic = exports.ItemBinNumberSearchRowBasic = exports.ConsolidatedExchangeRateSearchBasic = exports.TaskSearchBasic = exports.TaskSearchRowBasic = exports.TaxTypeSearchBasic = exports.AccountingPeriodSearchRowBasic = exports.PricingSearchBasic = exports.SolutionSearchBasic = exports.InboundShipmentSearchRowBasic = exports.VendorSubsidiaryRelationshipSearchRowBasic = exports.BudgetSearchBasic = exports.TimeEntrySearchBasic = exports.SalesRoleSearchRowBasic = exports.SubsidiarySearchRowBasic = exports.RevRecScheduleSearchBasic = exports.CustomRecordSearchBasic = exports.InventoryAssignment = exports.BillingScheduleSearchBasic = exports.InventoryNumberSearchRowBasic = exports.SubsidiarySearchBasic = exports.HcmJobSearchBasic = exports.VendorSubsidiaryRelationshipSearchBasic = exports.ExpenseCategorySearchBasic = exports.CustomerMessageSearchRowBasic = exports.ProjectTaskSearchRowBasic = exports.PaymentMethodSearchBasic = exports.AccountingPeriodSearchBasic = exports.CustomListSearchBasic = exports.TaxDetailSearchBasic = exports.PromotionCodeSearchRowBasic = exports.SupportCaseSearchBasic = exports.BomRevisionSearchBasic = void 0;
const PlatformCore = __importStar(require("./platform_core"));
const soap_types_1 = require("../../soap-types");
const MAPPINGS_NAME = "com_netsuite_webservices_platform_common_2019_2";
class ManufacturingCostTemplateSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.item = props.item;
        this.memo = props.memo;
        this.name = props.name;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.ManufacturingCostTemplateSearchRowBasic = ManufacturingCostTemplateSearchRowBasic;
class GiftCertRedemption extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.authCode = props.authCode;
        this.authCodeApplied = props.authCodeApplied;
        this.authCodeAmtRemaining = props.authCodeAmtRemaining;
        this.giftCertAvailable = props.giftCertAvailable;
    }
}
exports.GiftCertRedemption = GiftCertRedemption;
class PartnerCategorySearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.parent = props.parent;
    }
}
exports.PartnerCategorySearchRowBasic = PartnerCategorySearchRowBasic;
class LocationSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.address1 = props.address1;
        this.address2 = props.address2;
        this.address3 = props.address3;
        this.allowStorePickup = props.allowStorePickup;
        this.autoAssignmentRegionSetting = props.autoAssignmentRegionSetting;
        this.bufferStock = props.bufferStock;
        this.city = props.city;
        this.country = props.country;
        this.dailyShippingCapacity = props.dailyShippingCapacity;
        this.endTime = props.endTime;
        this.externalId = props.externalId;
        this.geolocationMethod = props.geolocationMethod;
        this.internalId = props.internalId;
        this.isFriday = props.isFriday;
        this.isInactive = props.isInactive;
        this.isIncludeInCt = props.isIncludeInCt;
        this.isMonday = props.isMonday;
        this.isOffice = props.isOffice;
        this.isSaturday = props.isSaturday;
        this.isSunday = props.isSunday;
        this.isThursday = props.isThursday;
        this.isTuesday = props.isTuesday;
        this.isWednesday = props.isWednesday;
        this.latitude = props.latitude;
        this.locationType = props.locationType;
        this.longitude = props.longitude;
        this.makeInventoryAvailable = props.makeInventoryAvailable;
        this.makeInventoryAvailableStore = props.makeInventoryAvailableStore;
        this.name = props.name;
        this.nameNoHierarchy = props.nameNoHierarchy;
        this.nextPickupCutOffTime = props.nextPickupCutOffTime;
        this.phone = props.phone;
        this.sameDayPickupCutOffTime = props.sameDayPickupCutOffTime;
        this.startTime = props.startTime;
        this.state = props.state;
        this.storePickupBufferStock = props.storePickupBufferStock;
        this.subsidiary = props.subsidiary;
        this.timeZone = props.timeZone;
        this.totalShippingCapacity = props.totalShippingCapacity;
        this.tranPrefix = props.tranPrefix;
        this.usesBins = props.usesBins;
        this.zip = props.zip;
        this.customFieldList = props.customFieldList;
    }
}
exports.LocationSearchRowBasic = LocationSearchRowBasic;
class NoteSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.author = props.author;
        this.direction = props.direction;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.note = props.note;
        this.noteDate = props.noteDate;
        this.noteType = props.noteType;
        this.title = props.title;
        this.customFieldList = props.customFieldList;
    }
}
exports.NoteSearchBasic = NoteSearchBasic;
class EntityGroupSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.email = props.email;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.groupName = props.groupName;
        this.groupOwner = props.groupOwner;
        this.groupType = props.groupType;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isDynamic = props.isDynamic;
        this.isInactive = props.isInactive;
        this.isManufacturingWorkCenter = props.isManufacturingWorkCenter;
        this.isPrivate = props.isPrivate;
        this.laborResources = props.laborResources;
        this.lastModifiedDate = props.lastModifiedDate;
        this.machineResources = props.machineResources;
        this.subsidiary = props.subsidiary;
        this.workCalendar = props.workCalendar;
        this.customFieldList = props.customFieldList;
    }
}
exports.EntityGroupSearchBasic = EntityGroupSearchBasic;
class PhoneCallSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accessLevel = props.accessLevel;
        this.assigned = props.assigned;
        this.company = props.company;
        this.completedDate = props.completedDate;
        this.contact = props.contact;
        this.createdDate = props.createdDate;
        this.endDate = props.endDate;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.lastModifiedDate = props.lastModifiedDate;
        this.markdone = props.markdone;
        this.message = props.message;
        this.owner = props.owner;
        this.phone = props.phone;
        this.priority = props.priority;
        this.startDate = props.startDate;
        this.startTime = props.startTime;
        this.status = props.status;
        this.title = props.title;
        this.transaction = props.transaction;
        this.customFieldList = props.customFieldList;
    }
}
exports.PhoneCallSearchRowBasic = PhoneCallSearchRowBasic;
class TransactionSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.abbrev = props.abbrev;
        this.account = props.account;
        this.accountType = props.accountType;
        this.acctCorpCardExp = props.acctCorpCardExp;
        this.actualShipDate = props.actualShipDate;
        this.altSalesAmount = props.altSalesAmount;
        this.altSalesNetAmount = props.altSalesNetAmount;
        this.amount = props.amount;
        this.amountPaid = props.amountPaid;
        this.amountRemaining = props.amountRemaining;
        this.amountUnbilled = props.amountUnbilled;
        this.appliedToForeignAmount = props.appliedToForeignAmount;
        this.appliedToIsFxVariance = props.appliedToIsFxVariance;
        this.appliedToLinkAmount = props.appliedToLinkAmount;
        this.appliedToLinkType = props.appliedToLinkType;
        this.appliedToTransaction = props.appliedToTransaction;
        this.applyingForeignAmount = props.applyingForeignAmount;
        this.applyingIsFxVariance = props.applyingIsFxVariance;
        this.applyingLinkAmount = props.applyingLinkAmount;
        this.applyingLinkType = props.applyingLinkType;
        this.applyingTransaction = props.applyingTransaction;
        this.approvalStatus = props.approvalStatus;
        this.authCode = props.authCode;
        this.autoCalculateLag = props.autoCalculateLag;
        this.avsStreetMatch = props.avsStreetMatch;
        this.avsZipMatch = props.avsZipMatch;
        this.billable = props.billable;
        this.billAddress = props.billAddress;
        this.billAddress1 = props.billAddress1;
        this.billAddress2 = props.billAddress2;
        this.billAddress3 = props.billAddress3;
        this.billAddressee = props.billAddressee;
        this.billAttention = props.billAttention;
        this.billCity = props.billCity;
        this.billCountry = props.billCountry;
        this.billCountryCode = props.billCountryCode;
        this.billedDate = props.billedDate;
        this.billingAccount = props.billingAccount;
        this.billingAmount = props.billingAmount;
        this.billingSchedule = props.billingSchedule;
        this.billingTransaction = props.billingTransaction;
        this.billPhone = props.billPhone;
        this.billState = props.billState;
        this.billVarianceStatus = props.billVarianceStatus;
        this.billZip = props.billZip;
        this.binNumber = props.binNumber;
        this.binNumberQuantity = props.binNumberQuantity;
        this.bomQuantity = props.bomQuantity;
        this.buildEntireAssembly = props.buildEntireAssembly;
        this.buildVariance = props.buildVariance;
        this.built = props.built;
        this.canHaveStackablePromotions = props.canHaveStackablePromotions;
        this.catchUpPeriod = props.catchUpPeriod;
        this.ccCustomerCode = props.ccCustomerCode;
        this.ccExpDate = props.ccExpDate;
        this.ccHolderName = props.ccHolderName;
        this.ccNumber = props.ccNumber;
        this.ccStreet = props.ccStreet;
        this.ccZipCode = props.ccZipCode;
        this.clazz = props.clazz;
        this.cleared = props.cleared;
        this.closed = props.closed;
        this.closeDate = props.closeDate;
        this.cogsAmount = props.cogsAmount;
        this.commissionEffectiveDate = props.commissionEffectiveDate;
        this.commit = props.commit;
        this.componentYield = props.componentYield;
        this.confirmationNumber = props.confirmationNumber;
        this.contribution = props.contribution;
        this.contributionPrimary = props.contributionPrimary;
        this.costComponentAmount = props.costComponentAmount;
        this.costComponentCategory = props.costComponentCategory;
        this.costComponentItem = props.costComponentItem;
        this.costComponentQuantity = props.costComponentQuantity;
        this.costComponentStandardCost = props.costComponentStandardCost;
        this.costEstimate = props.costEstimate;
        this.costEstimateRate = props.costEstimateRate;
        this.costEstimateType = props.costEstimateType;
        this.createdBy = props.createdBy;
        this.createdFrom = props.createdFrom;
        this.creditAmount = props.creditAmount;
        this.cscMatch = props.cscMatch;
        this.currency = props.currency;
        this.customForm = props.customForm;
        this.customGL = props.customGL;
        this.custType = props.custType;
        this.dateCreated = props.dateCreated;
        this.daysOpen = props.daysOpen;
        this.daysOverdue = props.daysOverdue;
        this.debitAmount = props.debitAmount;
        this.deferredRevenue = props.deferredRevenue;
        this.deferRevRec = props.deferRevRec;
        this.department = props.department;
        this.depositDate = props.depositDate;
        this.depositTransaction = props.depositTransaction;
        this.discountAmount = props.discountAmount;
        this.docUnit = props.docUnit;
        this.drAccount = props.drAccount;
        this.dueDate = props.dueDate;
        this.effectiveRate = props.effectiveRate;
        this.email = props.email;
        this.endDate = props.endDate;
        this.entity = props.entity;
        this.entityStatus = props.entityStatus;
        this.estGrossProfit = props.estGrossProfit;
        this.estGrossProfitPct = props.estGrossProfitPct;
        this.estGrossProfitPercent = props.estGrossProfitPercent;
        this.exchangeRate = props.exchangeRate;
        this.excludeCommission = props.excludeCommission;
        this.excludeFromRateRequest = props.excludeFromRateRequest;
        this.expectedCloseDate = props.expectedCloseDate;
        this.expectedReceiptDate = props.expectedReceiptDate;
        this.expenseCategory = props.expenseCategory;
        this.expenseDate = props.expenseDate;
        this.externalId = props.externalId;
        this.firmed = props.firmed;
        this.forecastType = props.forecastType;
        this.fulfillingTransaction = props.fulfillingTransaction;
        this.fxAccount = props.fxAccount;
        this.fxAmount = props.fxAmount;
        this.fxCostEstimate = props.fxCostEstimate;
        this.fxCostEstimateRate = props.fxCostEstimateRate;
        this.fxEstGrossProfit = props.fxEstGrossProfit;
        this.fxTranCostEstimate = props.fxTranCostEstimate;
        this.fxVsoeAllocation = props.fxVsoeAllocation;
        this.fxVsoeAmount = props.fxVsoeAmount;
        this.fxVsoePrice = props.fxVsoePrice;
        this.gcoAvailabelToCharge = props.gcoAvailabelToCharge;
        this.gcoAvailableToRefund = props.gcoAvailableToRefund;
        this.gcoAvsStreetMatch = props.gcoAvsStreetMatch;
        this.gcoAvsZipMatch = props.gcoAvsZipMatch;
        this.gcoBuyerAccountAge = props.gcoBuyerAccountAge;
        this.gcoBuyerIp = props.gcoBuyerIp;
        this.gcoChargeAmount = props.gcoChargeAmount;
        this.gcoChargebackAmount = props.gcoChargebackAmount;
        this.gcoConfirmedChargedTotal = props.gcoConfirmedChargedTotal;
        this.gcoConfirmedRefundedTotal = props.gcoConfirmedRefundedTotal;
        this.gcoCreditcardNumber = props.gcoCreditcardNumber;
        this.gcoCscMatch = props.gcoCscMatch;
        this.gcoFinancialState = props.gcoFinancialState;
        this.gcoFulfillmentState = props.gcoFulfillmentState;
        this.gcoOrderId = props.gcoOrderId;
        this.gcoOrderTotal = props.gcoOrderTotal;
        this.gcoPromotionAmount = props.gcoPromotionAmount;
        this.gcoPromotionName = props.gcoPromotionName;
        this.gcoRefundAmount = props.gcoRefundAmount;
        this.gcoShippingTotal = props.gcoShippingTotal;
        this.gcoStateChangedDetail = props.gcoStateChangedDetail;
        this.giftCert = props.giftCert;
        this.grossAmount = props.grossAmount;
        this.includeInForecast = props.includeInForecast;
        this.incoterm = props.incoterm;
        this.intercoStatus = props.intercoStatus;
        this.intercoTransaction = props.intercoTransaction;
        this.internalId = props.internalId;
        this.inventoryLocation = props.inventoryLocation;
        this.inventorySubsidiary = props.inventorySubsidiary;
        this.inVsoeBundle = props.inVsoeBundle;
        this.isAllocation = props.isAllocation;
        this.isBackflush = props.isBackflush;
        this.isGcoChargeback = props.isGcoChargeback;
        this.isGcoChargeConfirmed = props.isGcoChargeConfirmed;
        this.isGcoPaymentGuaranteed = props.isGcoPaymentGuaranteed;
        this.isGcoRefundConfirmed = props.isGcoRefundConfirmed;
        this.isInsideDelivery = props.isInsideDelivery;
        this.isInsidePickup = props.isInsidePickup;
        this.isIntercompanyAdjustment = props.isIntercompanyAdjustment;
        this.isInTransitPayment = props.isInTransitPayment;
        this.isMultiShipTo = props.isMultiShipTo;
        this.isReversal = props.isReversal;
        this.isRevRecTransaction = props.isRevRecTransaction;
        this.isScrap = props.isScrap;
        this.isShipAddress = props.isShipAddress;
        this.isTransferPriceCosting = props.isTransferPriceCosting;
        this.isWip = props.isWip;
        this.item = props.item;
        this.itemFulfillmentChoice = props.itemFulfillmentChoice;
        this.itemRevision = props.itemRevision;
        this.landedCostPerLine = props.landedCostPerLine;
        this.lastModifiedDate = props.lastModifiedDate;
        this.leadSource = props.leadSource;
        this.line = props.line;
        this.lineSequenceNumber = props.lineSequenceNumber;
        this.lineUniqueKey = props.lineUniqueKey;
        this.location = props.location;
        this.locationAutoAssigned = props.locationAutoAssigned;
        this.mainLine = props.mainLine;
        this.mainName = props.mainName;
        this.manufacturingRouting = props.manufacturingRouting;
        this.matchBillToReceipt = props.matchBillToReceipt;
        this.memo = props.memo;
        this.memoMain = props.memoMain;
        this.memorized = props.memorized;
        this.merchantAccount = props.merchantAccount;
        this.message = props.message;
        this.multiSubsidiary = props.multiSubsidiary;
        this.netAmount = props.netAmount;
        this.netAmountNoTax = props.netAmountNoTax;
        this.nextApprover = props.nextApprover;
        this.nextBillDate = props.nextBillDate;
        this.nexus = props.nexus;
        this.noAutoAssignLocation = props.noAutoAssignLocation;
        this.nonReimbursable = props.nonReimbursable;
        this.oneTimeTotal = props.oneTimeTotal;
        this.opportunity = props.opportunity;
        this.options = props.options;
        this.orderPriority = props.orderPriority;
        this.originator = props.originator;
        this.otherRefNum = props.otherRefNum;
        this.overheadParentItem = props.overheadParentItem;
        this.overrideInstallments = props.overrideInstallments;
        this.packageCount = props.packageCount;
        this.paidAmount = props.paidAmount;
        this.paidTransaction = props.paidTransaction;
        this.partner = props.partner;
        this.partnerContribution = props.partnerContribution;
        this.partnerRole = props.partnerRole;
        this.partnerTeamMember = props.partnerTeamMember;
        this.payingAmount = props.payingAmount;
        this.payingTransaction = props.payingTransaction;
        this.paymentApproved = props.paymentApproved;
        this.paymentEventDate = props.paymentEventDate;
        this.paymentEventHoldReason = props.paymentEventHoldReason;
        this.paymentEventPurchaseCardUsed = props.paymentEventPurchaseCardUsed;
        this.paymentEventPurchaseDataSent = props.paymentEventPurchaseDataSent;
        this.paymentEventResult = props.paymentEventResult;
        this.paymentEventType = props.paymentEventType;
        this.paymentHold = props.paymentHold;
        this.paymentMethod = props.paymentMethod;
        this.paymentOption = props.paymentOption;
        this.payPalPending = props.payPalPending;
        this.payPalStatus = props.payPalStatus;
        this.payPalTranId = props.payPalTranId;
        this.payrollBatch = props.payrollBatch;
        this.pnRefNum = props.pnRefNum;
        this.poRate = props.poRate;
        this.posting = props.posting;
        this.postingPeriod = props.postingPeriod;
        this.priceLevel = props.priceLevel;
        this.print = props.print;
        this.probability = props.probability;
        this.projectedAmount = props.projectedAmount;
        this.projectTask = props.projectTask;
        this.promoCode = props.promoCode;
        this.purchaseOrder = props.purchaseOrder;
        this.quantity = props.quantity;
        this.quantityBilled = props.quantityBilled;
        this.quantityCommitted = props.quantityCommitted;
        this.quantityPacked = props.quantityPacked;
        this.quantityPicked = props.quantityPicked;
        this.quantityRevCommitted = props.quantityRevCommitted;
        this.quantityShipRecv = props.quantityShipRecv;
        this.quantityUom = props.quantityUom;
        this.rate = props.rate;
        this.realizedGainPostingTransaction = props.realizedGainPostingTransaction;
        this.recognizedRevenue = props.recognizedRevenue;
        this.recordType = props.recordType;
        this.recurAnnuallyTotal = props.recurAnnuallyTotal;
        this.recurMonthlyTotal = props.recurMonthlyTotal;
        this.recurQuarterlyTotal = props.recurQuarterlyTotal;
        this.recurringBill = props.recurringBill;
        this.recurWeeklyTotal = props.recurWeeklyTotal;
        this.refNumber = props.refNumber;
        this.revCommitStatus = props.revCommitStatus;
        this.revCommittingTransaction = props.revCommittingTransaction;
        this.revenueStatus = props.revenueStatus;
        this.reversalDate = props.reversalDate;
        this.reversalNumber = props.reversalNumber;
        this.revRecEndDate = props.revRecEndDate;
        this.revRecOnRevCommitment = props.revRecOnRevCommitment;
        this.revRecStartDate = props.revRecStartDate;
        this.rgAccount = props.rgAccount;
        this.rgAmount = props.rgAmount;
        this.salesEffectiveDate = props.salesEffectiveDate;
        this.salesOrder = props.salesOrder;
        this.salesRep = props.salesRep;
        this.salesTeamMember = props.salesTeamMember;
        this.salesTeamRole = props.salesTeamRole;
        this.schedulingMethod = props.schedulingMethod;
        this.serialNumber = props.serialNumber;
        this.serialNumberCost = props.serialNumberCost;
        this.serialNumberCostAdjustment = props.serialNumberCostAdjustment;
        this.serialNumberQuantity = props.serialNumberQuantity;
        this.serialNumbers = props.serialNumbers;
        this.shipAddress = props.shipAddress;
        this.shipAddress1 = props.shipAddress1;
        this.shipAddress2 = props.shipAddress2;
        this.shipAddress3 = props.shipAddress3;
        this.shipAddressee = props.shipAddressee;
        this.shipAttention = props.shipAttention;
        this.shipCarrier = props.shipCarrier;
        this.shipCity = props.shipCity;
        this.shipComplete = props.shipComplete;
        this.shipCountry = props.shipCountry;
        this.shipCountryCode = props.shipCountryCode;
        this.shipDate = props.shipDate;
        this.shipGroup = props.shipGroup;
        this.shipMethod = props.shipMethod;
        this.shipPhone = props.shipPhone;
        this.shippingAmount = props.shippingAmount;
        this.shipRecvStatusLine = props.shipRecvStatusLine;
        this.shipState = props.shipState;
        this.shipTo = props.shipTo;
        this.shipZip = props.shipZip;
        this.signedAmount = props.signedAmount;
        this.source = props.source;
        this.startDate = props.startDate;
        this.status = props.status;
        this.subscription = props.subscription;
        this.subscriptionLine = props.subscriptionLine;
        this.subsidiary = props.subsidiary;
        this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
        this.taxAmount = props.taxAmount;
        this.taxCode = props.taxCode;
        this.taxLine = props.taxLine;
        this.taxPeriod = props.taxPeriod;
        this.taxPointDate = props.taxPointDate;
        this.taxTotal = props.taxTotal;
        this.termInMonths = props.termInMonths;
        this.terms = props.terms;
        this.termsOfSale = props.termsOfSale;
        this.title = props.title;
        this.toBeEmailed = props.toBeEmailed;
        this.toBePrinted = props.toBePrinted;
        this.toSubsidiary = props.toSubsidiary;
        this.total = props.total;
        this.totalCostEstimate = props.totalCostEstimate;
        this.trackingNumbers = props.trackingNumbers;
        this.tranDate = props.tranDate;
        this.tranEstGrossProfit = props.tranEstGrossProfit;
        this.tranFxEstGrossProfit = props.tranFxEstGrossProfit;
        this.tranId = props.tranId;
        this.tranIsVsoeBundle = props.tranIsVsoeBundle;
        this.transactionDiscount = props.transactionDiscount;
        this.transactionLineType = props.transactionLineType;
        this.transactionNumber = props.transactionNumber;
        this.transferLocation = props.transferLocation;
        this.transferOrderItemLine = props.transferOrderItemLine;
        this.transferOrderQuantityCommitted = props.transferOrderQuantityCommitted;
        this.transferOrderQuantityPacked = props.transferOrderQuantityPacked;
        this.transferOrderQuantityPicked = props.transferOrderQuantityPicked;
        this.transferOrderQuantityReceived = props.transferOrderQuantityReceived;
        this.transferOrderQuantityShipped = props.transferOrderQuantityShipped;
        this.type = props.type;
        this.unit = props.unit;
        this.unitCostOverride = props.unitCostOverride;
        this.vendType = props.vendType;
        this.visibleToCustomer = props.visibleToCustomer;
        this.vsoeAllocation = props.vsoeAllocation;
        this.vsoeAmount = props.vsoeAmount;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoeDelivered = props.vsoeDelivered;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoePrice = props.vsoePrice;
        this.webSite = props.webSite;
        this.customFieldList = props.customFieldList;
    }
}
exports.TransactionSearchRowBasic = TransactionSearchRowBasic;
class AssemblyItemBomSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.assembly = props.assembly;
        this.billOfMaterials = props.billOfMaterials;
        this._default = props._default;
        this.locations = props.locations;
    }
}
exports.AssemblyItemBomSearchRowBasic = AssemblyItemBomSearchRowBasic;
class BomSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.availableForAllAssemblies = props.availableForAllAssemblies;
        this.availableForAllLocations = props.availableForAllLocations;
        this.createdDate = props.createdDate;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.includeChildren = props.includeChildren;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.legacyBomForAssembly = props.legacyBomForAssembly;
        this.memo = props.memo;
        this.name = props.name;
        this.restrictToAssemblies = props.restrictToAssemblies;
        this.restrictToLocations = props.restrictToLocations;
        this.subsidiary = props.subsidiary;
        this.useComponentYield = props.useComponentYield;
        this.usedOnAssembly = props.usedOnAssembly;
    }
}
exports.BomSearchBasic = BomSearchBasic;
class SalesRoleSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.SalesRoleSearchBasic = SalesRoleSearchBasic;
class MerchandiseHierarchyNodeSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.hierarchyLevel = props.hierarchyLevel;
        this.hierarchyVersion = props.hierarchyVersion;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.name = props.name;
        this.parentNode = props.parentNode;
    }
}
exports.MerchandiseHierarchyNodeSearchBasic = MerchandiseHierarchyNodeSearchBasic;
class CustomSearchRowBasic extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customizationRef = props.customizationRef;
        this.searchRowBasic = props.searchRowBasic;
    }
}
exports.CustomSearchRowBasic = CustomSearchRowBasic;
class ItemAccountMappingSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBook = props.accountingBook;
        this.clazz = props.clazz;
        this.customDimension = props.customDimension;
        this.department = props.department;
        this.destinationAccount = props.destinationAccount;
        this.effectiveDate = props.effectiveDate;
        this.endDate = props.endDate;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.itemAccount = props.itemAccount;
        this.location = props.location;
        this.sourceAccount = props.sourceAccount;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.ItemAccountMappingSearchRowBasic = ItemAccountMappingSearchRowBasic;
class InventoryDetailSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.binNumber = props.binNumber;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.inventoryNumber = props.inventoryNumber;
        this.quantity = props.quantity;
    }
}
exports.InventoryDetailSearchBasic = InventoryDetailSearchBasic;
class DepartmentSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.nameNoHierarchy = props.nameNoHierarchy;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.DepartmentSearchRowBasic = DepartmentSearchRowBasic;
class FolderSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.clazz = props.clazz;
        this.department = props.department;
        this.description = props.description;
        this.externalId = props.externalId;
        this.folderSize = props.folderSize;
        this.group = props.group;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.lastModifiedDate = props.lastModifiedDate;
        this.location = props.location;
        this.name = props.name;
        this.numFiles = props.numFiles;
        this.owner = props.owner;
        this.parent = props.parent;
        this.subsidiary = props.subsidiary;
    }
}
exports.FolderSearchRowBasic = FolderSearchRowBasic;
class CustomerSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountNumber = props.accountNumber;
        this.address = props.address;
        this.addressee = props.addressee;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.assignedSite = props.assignedSite;
        this.assignedSiteId = props.assignedSiteId;
        this.attention = props.attention;
        this.availableOffline = props.availableOffline;
        this.balance = props.balance;
        this.billAddress = props.billAddress;
        this.boughtAmount = props.boughtAmount;
        this.boughtDate = props.boughtDate;
        this.buyingReason = props.buyingReason;
        this.buyingTimeFrame = props.buyingTimeFrame;
        this.category = props.category;
        this.ccCustomerCode = props.ccCustomerCode;
        this.ccDefault = props.ccDefault;
        this.ccExpDate = props.ccExpDate;
        this.ccHolderName = props.ccHolderName;
        this.ccNumber = props.ccNumber;
        this.ccState = props.ccState;
        this.ccStateFrom = props.ccStateFrom;
        this.ccType = props.ccType;
        this.city = props.city;
        this.classBought = props.classBought;
        this.comments = props.comments;
        this.companyName = props.companyName;
        this.consolBalance = props.consolBalance;
        this.consolDaysOverdue = props.consolDaysOverdue;
        this.consolDepositBalance = props.consolDepositBalance;
        this.consolOverdueBalance = props.consolOverdueBalance;
        this.consolUnbilledOrders = props.consolUnbilledOrders;
        this.contact = props.contact;
        this.contribution = props.contribution;
        this.conversionDate = props.conversionDate;
        this.country = props.country;
        this.county = props.county;
        this.creditHold = props.creditHold;
        this.creditHoldOverride = props.creditHoldOverride;
        this.creditLimit = props.creditLimit;
        this.currency = props.currency;
        this.custStage = props.custStage;
        this.custStatus = props.custStatus;
        this.dateClosed = props.dateClosed;
        this.dateCreated = props.dateCreated;
        this.daysOverdue = props.daysOverdue;
        this.defaultOrderPriority = props.defaultOrderPriority;
        this.defaultTaxReg = props.defaultTaxReg;
        this.defaultTaxRegText = props.defaultTaxRegText;
        this.depositBalance = props.depositBalance;
        this.deptBought = props.deptBought;
        this.drAccount = props.drAccount;
        this.email = props.email;
        this.emailPreference = props.emailPreference;
        this.emailTransactions = props.emailTransactions;
        this.endDate = props.endDate;
        this.entityId = props.entityId;
        this.entityStatus = props.entityStatus;
        this.estimatedBudget = props.estimatedBudget;
        this.explicitConversion = props.explicitConversion;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.fax = props.fax;
        this.faxTransactions = props.faxTransactions;
        this.firstName = props.firstName;
        this.firstOrderDate = props.firstOrderDate;
        this.firstSaleDate = props.firstSaleDate;
        this.fxAccount = props.fxAccount;
        this.fxBalance = props.fxBalance;
        this.fxConsolBalance = props.fxConsolBalance;
        this.fxConsolUnbilledOrders = props.fxConsolUnbilledOrders;
        this.fxUnbilledOrders = props.fxUnbilledOrders;
        this.giveAccess = props.giveAccess;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.group = props.group;
        this.groupPricingLevel = props.groupPricingLevel;
        this.hasDuplicates = props.hasDuplicates;
        this.image = props.image;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isBudgetApproved = props.isBudgetApproved;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isInactive = props.isInactive;
        this.isPerson = props.isPerson;
        this.isReportedLead = props.isReportedLead;
        this.isShipAddress = props.isShipAddress;
        this.itemPricingLevel = props.itemPricingLevel;
        this.itemPricingUnitPrice = props.itemPricingUnitPrice;
        this.itemsBought = props.itemsBought;
        this.itemsOrdered = props.itemsOrdered;
        this.language = props.language;
        this.lastModifiedDate = props.lastModifiedDate;
        this.lastName = props.lastName;
        this.lastOrderDate = props.lastOrderDate;
        this.lastSaleDate = props.lastSaleDate;
        this.leadDate = props.leadDate;
        this.leadSource = props.leadSource;
        this.level = props.level;
        this.locationBought = props.locationBought;
        this.manualCreditHold = props.manualCreditHold;
        this.merchantAccount = props.merchantAccount;
        this.middleName = props.middleName;
        this.monthlyClosing = props.monthlyClosing;
        this.onCreditHold = props.onCreditHold;
        this.orderedAmount = props.orderedAmount;
        this.orderedDate = props.orderedDate;
        this.otherRelationships = props.otherRelationships;
        this.overdueBalance = props.overdueBalance;
        this.parent = props.parent;
        this.parentItemsBought = props.parentItemsBought;
        this.parentItemsOrdered = props.parentItemsOrdered;
        this.partner = props.partner;
        this.partnerContribution = props.partnerContribution;
        this.partnerRole = props.partnerRole;
        this.partnerTeamMember = props.partnerTeamMember;
        this.pec = props.pec;
        this.permission = props.permission;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.priceLevel = props.priceLevel;
        this.pricingGroup = props.pricingGroup;
        this.pricingItem = props.pricingItem;
        this.printTransactions = props.printTransactions;
        this.prospectDate = props.prospectDate;
        this.pstExempt = props.pstExempt;
        this.receivablesAccount = props.receivablesAccount;
        this.reminderDate = props.reminderDate;
        this.resaleNumber = props.resaleNumber;
        this.role = props.role;
        this.salesReadiness = props.salesReadiness;
        this.salesRep = props.salesRep;
        this.salesTeamMember = props.salesTeamMember;
        this.salesTeamRole = props.salesTeamRole;
        this.salutation = props.salutation;
        this.shipAddress = props.shipAddress;
        this.shipComplete = props.shipComplete;
        this.shippingItem = props.shippingItem;
        this.sourceSite = props.sourceSite;
        this.sourceSiteId = props.sourceSiteId;
        this.stage = props.stage;
        this.startDate = props.startDate;
        this.state = props.state;
        this.subsidBought = props.subsidBought;
        this.subsidiary = props.subsidiary;
        this.taxable = props.taxable;
        this.terms = props.terms;
        this.territory = props.territory;
        this.title = props.title;
        this.unbilledOrders = props.unbilledOrders;
        this.url = props.url;
        this.vatRegNumber = props.vatRegNumber;
        this.webLead = props.webLead;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.CustomerSearchBasic = CustomerSearchBasic;
class TopicSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.TopicSearchRowBasic = TopicSearchRowBasic;
class AccountingTransactionSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.accountingBook = props.accountingBook;
        this.accountType = props.accountType;
        this.altSalesAmount = props.altSalesAmount;
        this.altSalesNetAmount = props.altSalesNetAmount;
        this.amount = props.amount;
        this.baseCurrency = props.baseCurrency;
        this.catchUpPeriod = props.catchUpPeriod;
        this.creditAmount = props.creditAmount;
        this.customGL = props.customGL;
        this.dateCreated = props.dateCreated;
        this.debitAmount = props.debitAmount;
        this.deferRevRec = props.deferRevRec;
        this.exchangeRate = props.exchangeRate;
        this.fxAmount = props.fxAmount;
        this.grossAmount = props.grossAmount;
        this.internalId = props.internalId;
        this.lastModifiedDate = props.lastModifiedDate;
        this.multiSubsidiary = props.multiSubsidiary;
        this.netAmount = props.netAmount;
        this.posting = props.posting;
        this.quantityRevCommitted = props.quantityRevCommitted;
        this.recognizedRevenue = props.recognizedRevenue;
        this.revCommitStatus = props.revCommitStatus;
        this.revenueStatus = props.revenueStatus;
        this.revRecEndDate = props.revRecEndDate;
        this.revRecOnRevCommitment = props.revRecOnRevCommitment;
        this.revRecStartDate = props.revRecStartDate;
        this.subsidiary = props.subsidiary;
        this.tranIsVsoeBundle = props.tranIsVsoeBundle;
        this.vsoeAllocation = props.vsoeAllocation;
    }
}
exports.AccountingTransactionSearchRowBasic = AccountingTransactionSearchRowBasic;
class CustomerSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountNumber = props.accountNumber;
        this.address = props.address;
        this.address1 = props.address1;
        this.address2 = props.address2;
        this.address3 = props.address3;
        this.addressee = props.addressee;
        this.addressInternalId = props.addressInternalId;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.altContact = props.altContact;
        this.altEmail = props.altEmail;
        this.altName = props.altName;
        this.altPhone = props.altPhone;
        this.assignedSite = props.assignedSite;
        this.assignedSiteId = props.assignedSiteId;
        this.attention = props.attention;
        this.availableOffline = props.availableOffline;
        this.balance = props.balance;
        this.billAddress = props.billAddress;
        this.billAddress1 = props.billAddress1;
        this.billAddress2 = props.billAddress2;
        this.billAddress3 = props.billAddress3;
        this.billAddressee = props.billAddressee;
        this.billAttention = props.billAttention;
        this.billCity = props.billCity;
        this.billCountry = props.billCountry;
        this.billCountryCode = props.billCountryCode;
        this.billPhone = props.billPhone;
        this.billState = props.billState;
        this.billZipCode = props.billZipCode;
        this.buyingReason = props.buyingReason;
        this.buyingTimeFrame = props.buyingTimeFrame;
        this.category = props.category;
        this.ccCustomerCode = props.ccCustomerCode;
        this.ccDefault = props.ccDefault;
        this.ccExpDate = props.ccExpDate;
        this.ccHolderName = props.ccHolderName;
        this.ccInternalId = props.ccInternalId;
        this.ccNumber = props.ccNumber;
        this.ccState = props.ccState;
        this.ccStateFrom = props.ccStateFrom;
        this.ccType = props.ccType;
        this.city = props.city;
        this.comments = props.comments;
        this.companyName = props.companyName;
        this.consolBalance = props.consolBalance;
        this.consolDaysOverdue = props.consolDaysOverdue;
        this.consolDepositBalance = props.consolDepositBalance;
        this.consolOverdueBalance = props.consolOverdueBalance;
        this.consolUnbilledOrders = props.consolUnbilledOrders;
        this.contact = props.contact;
        this.contribution = props.contribution;
        this.contributionPrimary = props.contributionPrimary;
        this.conversionDate = props.conversionDate;
        this.country = props.country;
        this.countryCode = props.countryCode;
        this.creditHold = props.creditHold;
        this.creditHoldOverride = props.creditHoldOverride;
        this.creditLimit = props.creditLimit;
        this.currency = props.currency;
        this.dateClosed = props.dateClosed;
        this.dateCreated = props.dateCreated;
        this.daysOverdue = props.daysOverdue;
        this.defaultOrderPriority = props.defaultOrderPriority;
        this.defaultTaxReg = props.defaultTaxReg;
        this.depositBalance = props.depositBalance;
        this.drAccount = props.drAccount;
        this.email = props.email;
        this.emailPreference = props.emailPreference;
        this.emailTransactions = props.emailTransactions;
        this.endDate = props.endDate;
        this.entityId = props.entityId;
        this.entityNumber = props.entityNumber;
        this.entityStatus = props.entityStatus;
        this.estimatedBudget = props.estimatedBudget;
        this.explicitConversion = props.explicitConversion;
        this.externalId = props.externalId;
        this.fax = props.fax;
        this.faxTransactions = props.faxTransactions;
        this.firstName = props.firstName;
        this.firstOrderDate = props.firstOrderDate;
        this.firstSaleDate = props.firstSaleDate;
        this.fxAccount = props.fxAccount;
        this.fxBalance = props.fxBalance;
        this.fxConsolBalance = props.fxConsolBalance;
        this.fxConsolUnbilledOrders = props.fxConsolUnbilledOrders;
        this.fxUnbilledOrders = props.fxUnbilledOrders;
        this.giveAccess = props.giveAccess;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.groupPricingLevel = props.groupPricingLevel;
        this.hasDuplicates = props.hasDuplicates;
        this.homePhone = props.homePhone;
        this.image = props.image;
        this.internalId = props.internalId;
        this.isBudgetApproved = props.isBudgetApproved;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isInactive = props.isInactive;
        this.isPerson = props.isPerson;
        this.isShipAddress = props.isShipAddress;
        this.itemPricingLevel = props.itemPricingLevel;
        this.itemPricingUnitPrice = props.itemPricingUnitPrice;
        this.jobEndDate = props.jobEndDate;
        this.jobProjectedEnd = props.jobProjectedEnd;
        this.jobStartDate = props.jobStartDate;
        this.jobType = props.jobType;
        this.language = props.language;
        this.lastModifiedDate = props.lastModifiedDate;
        this.lastName = props.lastName;
        this.lastOrderDate = props.lastOrderDate;
        this.lastSaleDate = props.lastSaleDate;
        this.leadDate = props.leadDate;
        this.leadSource = props.leadSource;
        this.level = props.level;
        this.manualCreditHold = props.manualCreditHold;
        this.middleName = props.middleName;
        this.mobilePhone = props.mobilePhone;
        this.monthlyClosing = props.monthlyClosing;
        this.onCreditHold = props.onCreditHold;
        this.overdueBalance = props.overdueBalance;
        this.parent = props.parent;
        this.partner = props.partner;
        this.partnerContribution = props.partnerContribution;
        this.partnerRole = props.partnerRole;
        this.partnerTeamMember = props.partnerTeamMember;
        this.pec = props.pec;
        this.permission = props.permission;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.prefCCProcessor = props.prefCCProcessor;
        this.priceLevel = props.priceLevel;
        this.pricingGroup = props.pricingGroup;
        this.pricingItem = props.pricingItem;
        this.printTransactions = props.printTransactions;
        this.prospectDate = props.prospectDate;
        this.receivablesAccount = props.receivablesAccount;
        this.reminderDays = props.reminderDays;
        this.resaleNumber = props.resaleNumber;
        this.role = props.role;
        this.salesReadiness = props.salesReadiness;
        this.salesRep = props.salesRep;
        this.salesTeamMember = props.salesTeamMember;
        this.salesTeamRole = props.salesTeamRole;
        this.salutation = props.salutation;
        this.shipAddress = props.shipAddress;
        this.shipAddress1 = props.shipAddress1;
        this.shipAddress2 = props.shipAddress2;
        this.shipAddress3 = props.shipAddress3;
        this.shipAddressee = props.shipAddressee;
        this.shipAttention = props.shipAttention;
        this.shipCity = props.shipCity;
        this.shipComplete = props.shipComplete;
        this.shipCountry = props.shipCountry;
        this.shipCountryCode = props.shipCountryCode;
        this.shipPhone = props.shipPhone;
        this.shippingItem = props.shippingItem;
        this.shipState = props.shipState;
        this.shipZip = props.shipZip;
        this.sourceSite = props.sourceSite;
        this.sourceSiteId = props.sourceSiteId;
        this.stage = props.stage;
        this.startDate = props.startDate;
        this.state = props.state;
        this.subscription = props.subscription;
        this.subscriptionDate = props.subscriptionDate;
        this.subscriptionStatus = props.subscriptionStatus;
        this.subsidiary = props.subsidiary;
        this.taxable = props.taxable;
        this.taxItem = props.taxItem;
        this.terms = props.terms;
        this.territory = props.territory;
        this.title = props.title;
        this.unbilledOrders = props.unbilledOrders;
        this.url = props.url;
        this.vatRegNumber = props.vatRegNumber;
        this.webLead = props.webLead;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.CustomerSearchRowBasic = CustomerSearchRowBasic;
class CampaignSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.audience = props.audience;
        this.baseCost = props.baseCost;
        this.campaignEventType = props.campaignEventType;
        this.campaignId = props.campaignId;
        this.category = props.category;
        this.channel = props.channel;
        this.cost = props.cost;
        this.createdDate = props.createdDate;
        this.endDate = props.endDate;
        this.event = props.event;
        this.expectedRevenue = props.expectedRevenue;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.family = props.family;
        this.group = props.group;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.isSalesCampaign = props.isSalesCampaign;
        this.item = props.item;
        this.keyword = props.keyword;
        this.lastModifiedDate = props.lastModifiedDate;
        this.manager = props.manager;
        this.managerRole = props.managerRole;
        this.number = props.number;
        this.offer = props.offer;
        this.promoCode = props.promoCode;
        this.recipient = props.recipient;
        this.response = props.response;
        this.responseCategory = props.responseCategory;
        this.responseCode = props.responseCode;
        this.responseComments = props.responseComments;
        this.responseDate = props.responseDate;
        this.scheduleDate = props.scheduleDate;
        this.searchEngine = props.searchEngine;
        this.startDate = props.startDate;
        this.status = props.status;
        this.subscription = props.subscription;
        this.template = props.template;
        this.title = props.title;
        this.vertical = props.vertical;
        this.customFieldList = props.customFieldList;
    }
}
exports.CampaignSearchBasic = CampaignSearchBasic;
class EntitySearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.address = props.address;
        this.address1 = props.address1;
        this.address2 = props.address2;
        this.address3 = props.address3;
        this.addressee = props.addressee;
        this.addressInternalId = props.addressInternalId;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.altEmail = props.altEmail;
        this.altName = props.altName;
        this.altPhone = props.altPhone;
        this.attention = props.attention;
        this.billAddress1 = props.billAddress1;
        this.billAddress2 = props.billAddress2;
        this.billAddress3 = props.billAddress3;
        this.billAddressee = props.billAddressee;
        this.billAttention = props.billAttention;
        this.billCity = props.billCity;
        this.billCountry = props.billCountry;
        this.billCountryCode = props.billCountryCode;
        this.billPhone = props.billPhone;
        this.billState = props.billState;
        this.billZipCode = props.billZipCode;
        this.city = props.city;
        this.comments = props.comments;
        this.country = props.country;
        this.countryCode = props.countryCode;
        this.dateCreated = props.dateCreated;
        this.defaultTaxReg = props.defaultTaxReg;
        this.email = props.email;
        this.entityId = props.entityId;
        this.entityNumber = props.entityNumber;
        this.externalId = props.externalId;
        this.fax = props.fax;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.image = props.image;
        this.internalId = props.internalId;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isInactive = props.isInactive;
        this.language = props.language;
        this.lastModifiedDate = props.lastModifiedDate;
        this.level = props.level;
        this.permission = props.permission;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.shipAddress1 = props.shipAddress1;
        this.shipAddress2 = props.shipAddress2;
        this.shipAddress3 = props.shipAddress3;
        this.shipAddressee = props.shipAddressee;
        this.shipAttention = props.shipAttention;
        this.shipCity = props.shipCity;
        this.shipCountry = props.shipCountry;
        this.shipCountryCode = props.shipCountryCode;
        this.shipPhone = props.shipPhone;
        this.shipState = props.shipState;
        this.shipZip = props.shipZip;
        this.state = props.state;
        this.subscription = props.subscription;
        this.subscriptionDate = props.subscriptionDate;
        this.subscriptionStatus = props.subscriptionStatus;
        this.subsidiary = props.subsidiary;
        this.type = props.type;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.EntitySearchRowBasic = EntitySearchRowBasic;
class BinSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.binNumber = props.binNumber;
        this.externalId = props.externalId;
        this.inactive = props.inactive;
        this.internalId = props.internalId;
        this.location = props.location;
        this.memo = props.memo;
        this.customFieldList = props.customFieldList;
    }
}
exports.BinSearchRowBasic = BinSearchRowBasic;
class EntityTaxRegistrationSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.address = props.address;
        this.id = props.id;
        this.nexusCountry = props.nexusCountry;
        this.taxRegistrationNumber = props.taxRegistrationNumber;
    }
}
exports.EntityTaxRegistrationSearchRowBasic = EntityTaxRegistrationSearchRowBasic;
class CustomRecordSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.recType = props.recType;
        this.altName = props.altName;
        this.availableOffline = props.availableOffline;
        this.created = props.created;
        this.externalId = props.externalId;
        this.id = props.id;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.lastModified = props.lastModified;
        this.lastModifiedBy = props.lastModifiedBy;
        this.name = props.name;
        this.owner = props.owner;
        this.parent = props.parent;
        this.customFieldList = props.customFieldList;
    }
}
exports.CustomRecordSearchRowBasic = CustomRecordSearchRowBasic;
class IssueSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.ageInMonths = props.ageInMonths;
        this.assigned = props.assigned;
        this.buildBroken = props.buildBroken;
        this.buildFixed = props.buildFixed;
        this.buildTarget = props.buildTarget;
        this.caseCount = props.caseCount;
        this.caseNumber = props.caseNumber;
        this.closedDate = props.closedDate;
        this.createdDate = props.createdDate;
        this.dateReleased = props.dateReleased;
        this.duplicateOf = props.duplicateOf;
        this.employeeOrTeam = props.employeeOrTeam;
        this.eventStatus = props.eventStatus;
        this.externalAbstract = props.externalAbstract;
        this.externalDetails = props.externalDetails;
        this.externalFixedIn = props.externalFixedIn;
        this.externalId = props.externalId;
        this.externalStatus = props.externalStatus;
        this.fixed = props.fixed;
        this.fixedBy = props.fixedBy;
        this.internalId = props.internalId;
        this.isOwner = props.isOwner;
        this.isReviewed = props.isReviewed;
        this.isShowStopper = props.isShowStopper;
        this.issueAbstract = props.issueAbstract;
        this.issueStatus = props.issueStatus;
        this.item = props.item;
        this.lastModifiedDate = props.lastModifiedDate;
        this.module = props.module;
        this.number = props.number;
        this.originalFixedIn = props.originalFixedIn;
        this.priority = props.priority;
        this.product = props.product;
        this.productTeam = props.productTeam;
        this.relatedIssue = props.relatedIssue;
        this.relationship = props.relationship;
        this.relationshipComment = props.relationshipComment;
        this.reportedBy = props.reportedBy;
        this.reproduce = props.reproduce;
        this.resolved = props.resolved;
        this.resolvedBy = props.resolvedBy;
        this.reviewer = props.reviewer;
        this.severity = props.severity;
        this.source = props.source;
        this.tags = props.tags;
        this.type = props.type;
        this.userType = props.userType;
        this.versionBroken = props.versionBroken;
        this.versionFixed = props.versionFixed;
        this.versionTarget = props.versionTarget;
        this.customFieldList = props.customFieldList;
    }
}
exports.IssueSearchRowBasic = IssueSearchRowBasic;
class ItemSupplyPlanSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.item = props.item;
        this.lastModifiedDate = props.lastModifiedDate;
        this.location = props.location;
        this.memo = props.memo;
        this.orderCreated = props.orderCreated;
        this.orderDate = props.orderDate;
        this.orderType = props.orderType;
        this.quantity = props.quantity;
        this.receiptDate = props.receiptDate;
        this.subsidiary = props.subsidiary;
        this.units = props.units;
        this.customFieldList = props.customFieldList;
    }
}
exports.ItemSupplyPlanSearchBasic = ItemSupplyPlanSearchBasic;
class BillingAccountSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.billingSchedule = props.billingSchedule;
        this.cashSaleForm = props.cashSaleForm;
        this.clazz = props.clazz;
        this.currency = props.currency;
        this.customer = props.customer;
        this.customerDefault = props.customerDefault;
        this.dateCreated = props.dateCreated;
        this.department = props.department;
        this.externalId = props.externalId;
        this.frequency = props.frequency;
        this.idNumber = props.idNumber;
        this.inactive = props.inactive;
        this.internalId = props.internalId;
        this.invoiceForm = props.invoiceForm;
        this.lastBillCycleDate = props.lastBillCycleDate;
        this.lastBillDate = props.lastBillDate;
        this.location = props.location;
        this.memo = props.memo;
        this.name = props.name;
        this.nextBillCycleDate = props.nextBillCycleDate;
        this.startDate = props.startDate;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.BillingAccountSearchRowBasic = BillingAccountSearchRowBasic;
class RevRecTemplateSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.amorMethod = props.amorMethod;
        this.amorPeriod = props.amorPeriod;
        this.amorStartOffset = props.amorStartOffset;
        this.amorTermSrc = props.amorTermSrc;
        this.amorType = props.amorType;
        this.contraAccount = props.contraAccount;
        this.deferralAccount = props.deferralAccount;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.periodOffset = props.periodOffset;
        this.targetAccount = props.targetAccount;
        this.useForeignAmounts = props.useForeignAmounts;
    }
}
exports.RevRecTemplateSearchRowBasic = RevRecTemplateSearchRowBasic;
class ItemSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accBookRevRecForecastRule = props.accBookRevRecForecastRule;
        this.account = props.account;
        this.accountingBook = props.accountingBook;
        this.accountingBookAmortization = props.accountingBookAmortization;
        this.accountingBookCreatePlansOn = props.accountingBookCreatePlansOn;
        this.accountingBookRevRecRule = props.accountingBookRevRecRule;
        this.accountingBookRevRecSchedule = props.accountingBookRevRecSchedule;
        this.allowedShippingMethod = props.allowedShippingMethod;
        this.alternateDemandSourceItem = props.alternateDemandSourceItem;
        this.atpLeadTime = props.atpLeadTime;
        this.atpMethod = props.atpMethod;
        this.autoLeadTime = props.autoLeadTime;
        this.autoPreferredStockLevel = props.autoPreferredStockLevel;
        this.autoReorderPoint = props.autoReorderPoint;
        this.availableToPartners = props.availableToPartners;
        this.averageCost = props.averageCost;
        this.backwardConsumptionDays = props.backwardConsumptionDays;
        this.binNumber = props.binNumber;
        this.binOnHandAvail = props.binOnHandAvail;
        this.binOnHandCount = props.binOnHandCount;
        this.bomQuantity = props.bomQuantity;
        this.buildEntireAssembly = props.buildEntireAssembly;
        this.buildTime = props.buildTime;
        this.buyItNowPrice = props.buyItNowPrice;
        this.caption = props.caption;
        this.category = props.category;
        this.clazz = props.clazz;
        this.component = props.component;
        this.componentOf = props.componentOf;
        this.componentYield = props.componentYield;
        this.consumptionUnit = props.consumptionUnit;
        this.contingentRevenueHandling = props.contingentRevenueHandling;
        this.copyDescription = props.copyDescription;
        this.correlatedItem = props.correlatedItem;
        this.correlatedItemCorrelation = props.correlatedItemCorrelation;
        this.correlatedItemCount = props.correlatedItemCount;
        this.correlatedItemLift = props.correlatedItemLift;
        this.correlatedItemPurchaseRate = props.correlatedItemPurchaseRate;
        this.cost = props.cost;
        this.costAccountingStatus = props.costAccountingStatus;
        this.costCategory = props.costCategory;
        this.costEstimate = props.costEstimate;
        this.costEstimateType = props.costEstimateType;
        this.costingMethod = props.costingMethod;
        this.countryOfManufacture = props.countryOfManufacture;
        this.created = props.created;
        this.createJob = props.createJob;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.dateViewed = props.dateViewed;
        this.daysBeforeExpiration = props.daysBeforeExpiration;
        this.defaultReturnCost = props.defaultReturnCost;
        this.defaultShippingMethod = props.defaultShippingMethod;
        this.deferRevRec = props.deferRevRec;
        this.demandModifier = props.demandModifier;
        this.demandSource = props.demandSource;
        this.demandTimeFence = props.demandTimeFence;
        this.department = props.department;
        this.directRevenuePosting = props.directRevenuePosting;
        this.displayIneBayStore = props.displayIneBayStore;
        this.displayName = props.displayName;
        this.distributionCategory = props.distributionCategory;
        this.distributionNetwork = props.distributionNetwork;
        this.dontShowPrice = props.dontShowPrice;
        this.eBayItemDescription = props.eBayItemDescription;
        this.eBayItemSubtitle = props.eBayItemSubtitle;
        this.eBayItemTitle = props.eBayItemTitle;
        this.ebayRelistingOption = props.ebayRelistingOption;
        this.effectiveBomControl = props.effectiveBomControl;
        this.effectiveDate = props.effectiveDate;
        this.effectiveRevision = props.effectiveRevision;
        this.endAuctionsWhenOutOfStock = props.endAuctionsWhenOutOfStock;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.featuredDescription = props.featuredDescription;
        this.feedDescription = props.feedDescription;
        this.feedName = props.feedName;
        this.fixedLotSize = props.fixedLotSize;
        this.forwardConsumptionDays = props.forwardConsumptionDays;
        this.fraudRisk = props.fraudRisk;
        this.froogleProductFeed = props.froogleProductFeed;
        this.futureHorizon = props.futureHorizon;
        this.fxCost = props.fxCost;
        this.generateAccruals = props.generateAccruals;
        this.giftCertAuthCode = props.giftCertAuthCode;
        this.giftCertEmail = props.giftCertEmail;
        this.giftCertExpDate = props.giftCertExpDate;
        this.giftCertFrom = props.giftCertFrom;
        this.giftCertMsg = props.giftCertMsg;
        this.giftCertOrigAmt = props.giftCertOrigAmt;
        this.giftCertRecipient = props.giftCertRecipient;
        this.hierarchyNode = props.hierarchyNode;
        this.hierarchyVersion = props.hierarchyVersion;
        this.imageUrl = props.imageUrl;
        this.includeChildren = props.includeChildren;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.inventoryLocation = props.inventoryLocation;
        this.invtClassification = props.invtClassification;
        this.invtCountInterval = props.invtCountInterval;
        this.isAvailable = props.isAvailable;
        this.isDropShipItem = props.isDropShipItem;
        this.isFulfillable = props.isFulfillable;
        this.isGcoCompliant = props.isGcoCompliant;
        this.isInactive = props.isInactive;
        this.isLotItem = props.isLotItem;
        this.isOnline = props.isOnline;
        this.isPreferredVendor = props.isPreferredVendor;
        this.isSerialItem = props.isSerialItem;
        this.isSpecialOrderItem = props.isSpecialOrderItem;
        this.isSpecialWorkOrderItem = props.isSpecialWorkOrderItem;
        this.isStorePickupAllowed = props.isStorePickupAllowed;
        this.issueProduct = props.issueProduct;
        this.isTaxable = props.isTaxable;
        this.isVsoeBundle = props.isVsoeBundle;
        this.isWip = props.isWip;
        this.itemId = props.itemId;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.itemUrl = props.itemUrl;
        this.lastInvtCountDate = props.lastInvtCountDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.lastPurchasePrice = props.lastPurchasePrice;
        this.lastQuantityAvailableChange = props.lastQuantityAvailableChange;
        this.leadTime = props.leadTime;
        this.listingDuration = props.listingDuration;
        this.location = props.location;
        this.locationAllowStorePickup = props.locationAllowStorePickup;
        this.locationAtpLeadTime = props.locationAtpLeadTime;
        this.locationAverageCost = props.locationAverageCost;
        this.locationBuildTime = props.locationBuildTime;
        this.locationCost = props.locationCost;
        this.locationCostAccountingStatus = props.locationCostAccountingStatus;
        this.locationDefaultReturnCost = props.locationDefaultReturnCost;
        this.locationDemandSource = props.locationDemandSource;
        this.locationDemandTimeFence = props.locationDemandTimeFence;
        this.locationFixedLotSize = props.locationFixedLotSize;
        this.locationInventoryCostTemplate = props.locationInventoryCostTemplate;
        this.locationInvtClassification = props.locationInvtClassification;
        this.locationInvtCountInterval = props.locationInvtCountInterval;
        this.locationLastInvtCountDate = props.locationLastInvtCountDate;
        this.locationLeadTime = props.locationLeadTime;
        this.locationNextInvtCountDate = props.locationNextInvtCountDate;
        this.locationPeriodicLotSizeDays = props.locationPeriodicLotSizeDays;
        this.locationPeriodicLotSizeType = props.locationPeriodicLotSizeType;
        this.locationPreferredStockLevel = props.locationPreferredStockLevel;
        this.locationQtyAvailForStorePickup = props.locationQtyAvailForStorePickup;
        this.locationQuantityAvailable = props.locationQuantityAvailable;
        this.locationQuantityBackOrdered = props.locationQuantityBackOrdered;
        this.locationQuantityCommitted = props.locationQuantityCommitted;
        this.locationQuantityInTransit = props.locationQuantityInTransit;
        this.locationQuantityOnHand = props.locationQuantityOnHand;
        this.locationQuantityOnOrder = props.locationQuantityOnOrder;
        this.locationReorderPoint = props.locationReorderPoint;
        this.locationRescheduleInDays = props.locationRescheduleInDays;
        this.locationRescheduleOutDays = props.locationRescheduleOutDays;
        this.locationSafetyStockLevel = props.locationSafetyStockLevel;
        this.locationStorePickupBufferStock = props.locationStorePickupBufferStock;
        this.locationSupplyLotSizingMethod = props.locationSupplyLotSizingMethod;
        this.locationSupplyTimeFence = props.locationSupplyTimeFence;
        this.locationSupplyType = props.locationSupplyType;
        this.locationTotalValue = props.locationTotalValue;
        this.locBackwardConsumptionDays = props.locBackwardConsumptionDays;
        this.locForwardConsumptionDays = props.locForwardConsumptionDays;
        this.manufacturer = props.manufacturer;
        this.manufactureraddr1 = props.manufactureraddr1;
        this.manufacturerCity = props.manufacturerCity;
        this.manufacturerState = props.manufacturerState;
        this.manufacturerTariff = props.manufacturerTariff;
        this.manufacturerTaxId = props.manufacturerTaxId;
        this.manufacturerZip = props.manufacturerZip;
        this.manufacturingChargeItem = props.manufacturingChargeItem;
        this.matchBillToReceipt = props.matchBillToReceipt;
        this.matrix = props.matrix;
        this.matrixChild = props.matrixChild;
        this.maximumQuantity = props.maximumQuantity;
        this.metaTagHtml = props.metaTagHtml;
        this.minimumQuantity = props.minimumQuantity;
        this.mossApplies = props.mossApplies;
        this.mpn = props.mpn;
        this.multManufactureAddr = props.multManufactureAddr;
        this.nexTagCategory = props.nexTagCategory;
        this.nexTagProductFeed = props.nexTagProductFeed;
        this.nextInvtCountDate = props.nextInvtCountDate;
        this.numActiveListings = props.numActiveListings;
        this.numberAllowedDownloads = props.numberAllowedDownloads;
        this.numCurrentlyListed = props.numCurrentlyListed;
        this.obsoleteDate = props.obsoleteDate;
        this.obsoleteRevision = props.obsoleteRevision;
        this.offerSupport = props.offerSupport;
        this.onlineCustomerPrice = props.onlineCustomerPrice;
        this.onSpecial = props.onSpecial;
        this.otherVendor = props.otherVendor;
        this.outOfStockBehavior = props.outOfStockBehavior;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.overheadType = props.overheadType;
        this.pageTitle = props.pageTitle;
        this.parent = props.parent;
        this.periodicLotSizeDays = props.periodicLotSizeDays;
        this.periodicLotSizeType = props.periodicLotSizeType;
        this.preferenceCriterion = props.preferenceCriterion;
        this.preferredBin = props.preferredBin;
        this.preferredLocation = props.preferredLocation;
        this.preferredStockLevel = props.preferredStockLevel;
        this.preferredStockLevelDays = props.preferredStockLevelDays;
        this.price = props.price;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.pricingGroup = props.pricingGroup;
        this.primaryCategory = props.primaryCategory;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.purchaseUnit = props.purchaseUnit;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityBackOrdered = props.quantityBackOrdered;
        this.quantityCommitted = props.quantityCommitted;
        this.quantityOnHand = props.quantityOnHand;
        this.quantityOnOrder = props.quantityOnOrder;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.reorderMultiple = props.reorderMultiple;
        this.reorderPoint = props.reorderPoint;
        this.rescheduleInDays = props.rescheduleInDays;
        this.rescheduleOutDays = props.rescheduleOutDays;
        this.reservePrice = props.reservePrice;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revRecSchedule = props.revRecSchedule;
        this.roundUpAsComponent = props.roundUpAsComponent;
        this.safetyStockLevel = props.safetyStockLevel;
        this.safetyStockLevelDays = props.safetyStockLevelDays;
        this.salesDescription = props.salesDescription;
        this.saleUnit = props.saleUnit;
        this.sameAsPrimaryBookAmortization = props.sameAsPrimaryBookAmortization;
        this.sameAsPrimaryBookRevRec = props.sameAsPrimaryBookRevRec;
        this.scheduleBCode = props.scheduleBCode;
        this.scheduleBNumber = props.scheduleBNumber;
        this.scheduleBQuantity = props.scheduleBQuantity;
        this.searchKeywords = props.searchKeywords;
        this.seasonalDemand = props.seasonalDemand;
        this.sellOnEBay = props.sellOnEBay;
        this.serialNumber = props.serialNumber;
        this.serialNumberLocation = props.serialNumberLocation;
        this.shipIndividually = props.shipIndividually;
        this.shipPackage = props.shipPackage;
        this.shippingCarrier = props.shippingCarrier;
        this.shippingRate = props.shippingRate;
        this.shoppingDotComCategory = props.shoppingDotComCategory;
        this.shoppingProductFeed = props.shoppingProductFeed;
        this.shopzillaCategoryId = props.shopzillaCategoryId;
        this.shopzillaProductFeed = props.shopzillaProductFeed;
        this.sitemapPriority = props.sitemapPriority;
        this.softDescriptor = props.softDescriptor;
        this.startingPrice = props.startingPrice;
        this.stockDescription = props.stockDescription;
        this.stockUnit = props.stockUnit;
        this.storeDescription = props.storeDescription;
        this.subsidiary = props.subsidiary;
        this.subType = props.subType;
        this.supplyLotSizingMethod = props.supplyLotSizingMethod;
        this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
        this.supplyTimeFence = props.supplyTimeFence;
        this.supplyType = props.supplyType;
        this.taxCode = props.taxCode;
        this.taxSchedule = props.taxSchedule;
        this.thumbnailUrl = props.thumbnailUrl;
        this.totalValue = props.totalValue;
        this.trackLandedCost = props.trackLandedCost;
        this.transferPrice = props.transferPrice;
        this.type = props.type;
        this.unitsType = props.unitsType;
        this.upcCode = props.upcCode;
        this.urlComponent = props.urlComponent;
        this.useBins = props.useBins;
        this.useComponentYield = props.useComponentYield;
        this.useMarginalRates = props.useMarginalRates;
        this.vendor = props.vendor;
        this.vendorCode = props.vendorCode;
        this.vendorCost = props.vendorCost;
        this.vendorCostEntered = props.vendorCostEntered;
        this.vendorName = props.vendorName;
        this.vendorPriceCurrency = props.vendorPriceCurrency;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoeDelivered = props.vsoeDelivered;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.webSite = props.webSite;
        this.weight = props.weight;
        this.yahooProductFeed = props.yahooProductFeed;
        this.customFieldList = props.customFieldList;
    }
}
exports.ItemSearchBasic = ItemSearchBasic;
class CouponCodeSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.code = props.code;
        this.dateSent = props.dateSent;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.id = props.id;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.promotion = props.promotion;
        this.recipient = props.recipient;
        this.useCount = props.useCount;
        this.used = props.used;
    }
}
exports.CouponCodeSearchBasic = CouponCodeSearchBasic;
class ExpenseCategorySearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.description = props.description;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.rateRequired = props.rateRequired;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.ExpenseCategorySearchRowBasic = ExpenseCategorySearchRowBasic;
class VendorSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountNumber = props.accountNumber;
        this.address = props.address;
        this.address1 = props.address1;
        this.address2 = props.address2;
        this.address3 = props.address3;
        this.addressee = props.addressee;
        this.addressInternalId = props.addressInternalId;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.altContact = props.altContact;
        this.altEmail = props.altEmail;
        this.altName = props.altName;
        this.altPhone = props.altPhone;
        this.attention = props.attention;
        this.balance = props.balance;
        this.billAddress = props.billAddress;
        this.billAddress1 = props.billAddress1;
        this.billAddress2 = props.billAddress2;
        this.billAddress3 = props.billAddress3;
        this.billAddressee = props.billAddressee;
        this.billAttention = props.billAttention;
        this.billCity = props.billCity;
        this.billCountry = props.billCountry;
        this.billCountryCode = props.billCountryCode;
        this.billPhone = props.billPhone;
        this.billState = props.billState;
        this.billZipCode = props.billZipCode;
        this.category = props.category;
        this.city = props.city;
        this.comments = props.comments;
        this.companyName = props.companyName;
        this.contact = props.contact;
        this.country = props.country;
        this.countryCode = props.countryCode;
        this.creditLimit = props.creditLimit;
        this.currency = props.currency;
        this.currentExchangeRate = props.currentExchangeRate;
        this.dateCreated = props.dateCreated;
        this.defaultTaxReg = props.defaultTaxReg;
        this.eligibleForCommission = props.eligibleForCommission;
        this.email = props.email;
        this.emailPreference = props.emailPreference;
        this.emailTransactions = props.emailTransactions;
        this.entityId = props.entityId;
        this.entityNumber = props.entityNumber;
        this.expenseAccount = props.expenseAccount;
        this.externalId = props.externalId;
        this.fax = props.fax;
        this.faxTransactions = props.faxTransactions;
        this.firstName = props.firstName;
        this.fxBalance = props.fxBalance;
        this.fxUnbilledOrders = props.fxUnbilledOrders;
        this.giveAccess = props.giveAccess;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.hasDuplicates = props.hasDuplicates;
        this.homePhone = props.homePhone;
        this.image = props.image;
        this.incoterm = props.incoterm;
        this.internalId = props.internalId;
        this.is1099Eligible = props.is1099Eligible;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isInactive = props.isInactive;
        this.isJobResourceVend = props.isJobResourceVend;
        this.isPerson = props.isPerson;
        this.laborCost = props.laborCost;
        this.language = props.language;
        this.lastModifiedDate = props.lastModifiedDate;
        this.lastName = props.lastName;
        this.level = props.level;
        this.middleName = props.middleName;
        this.mobilePhone = props.mobilePhone;
        this.payablesAccount = props.payablesAccount;
        this.pec = props.pec;
        this.permission = props.permission;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.predConfidence = props.predConfidence;
        this.predictedDays = props.predictedDays;
        this.printOnCheckAs = props.printOnCheckAs;
        this.printTransactions = props.printTransactions;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.salutation = props.salutation;
        this.shipAddress = props.shipAddress;
        this.shipAddress1 = props.shipAddress1;
        this.shipAddress2 = props.shipAddress2;
        this.shipAddress3 = props.shipAddress3;
        this.shipAddressee = props.shipAddressee;
        this.shipAttention = props.shipAttention;
        this.shipCity = props.shipCity;
        this.shipCountry = props.shipCountry;
        this.shipCountryCode = props.shipCountryCode;
        this.shipPhone = props.shipPhone;
        this.shipState = props.shipState;
        this.shipZip = props.shipZip;
        this.state = props.state;
        this.subscription = props.subscription;
        this.subscriptionDate = props.subscriptionDate;
        this.subscriptionStatus = props.subscriptionStatus;
        this.subsidiary = props.subsidiary;
        this.taxIdNum = props.taxIdNum;
        this.terms = props.terms;
        this.timeApprover = props.timeApprover;
        this.title = props.title;
        this.unbilledOrders = props.unbilledOrders;
        this.url = props.url;
        this.vatRegNumber = props.vatRegNumber;
        this.workCalendar = props.workCalendar;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.VendorSearchRowBasic = VendorSearchRowBasic;
class PartnerSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.address = props.address;
        this.addressee = props.addressee;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.assignTasks = props.assignTasks;
        this.attention = props.attention;
        this.billAddress = props.billAddress;
        this.category = props.category;
        this.city = props.city;
        this.clazz = props.clazz;
        this.comments = props.comments;
        this.commissionPlan = props.commissionPlan;
        this.country = props.country;
        this.county = props.county;
        this.dateCreated = props.dateCreated;
        this.defaultTaxReg = props.defaultTaxReg;
        this.defaultTaxRegText = props.defaultTaxRegText;
        this.department = props.department;
        this.eligibleForCommission = props.eligibleForCommission;
        this.email = props.email;
        this.emailPreference = props.emailPreference;
        this.entityId = props.entityId;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.fax = props.fax;
        this.firstName = props.firstName;
        this.giveAccess = props.giveAccess;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.group = props.group;
        this.hasDuplicates = props.hasDuplicates;
        this.image = props.image;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isInactive = props.isInactive;
        this.isPerson = props.isPerson;
        this.language = props.language;
        this.lastModifiedDate = props.lastModifiedDate;
        this.lastName = props.lastName;
        this.level = props.level;
        this.location = props.location;
        this.middleName = props.middleName;
        this.otherRelationships = props.otherRelationships;
        this.parent = props.parent;
        this.partnerCode = props.partnerCode;
        this.permission = props.permission;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.promoCode = props.promoCode;
        this.salutation = props.salutation;
        this.shipAddress = props.shipAddress;
        this.state = props.state;
        this.subsidiary = props.subsidiary;
        this.title = props.title;
        this.url = props.url;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.PartnerSearchBasic = PartnerSearchBasic;
class ContactCategorySearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this._private = props._private;
        this.sync = props.sync;
    }
}
exports.ContactCategorySearchBasic = ContactCategorySearchBasic;
class InventoryAssignmentList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.inventoryAssignment = props.inventoryAssignment;
        this.replaceAll = props.replaceAll;
    }
}
exports.InventoryAssignmentList = InventoryAssignmentList;
class VendorCategorySearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.isTaxAgency = props.isTaxAgency;
        this.name = props.name;
    }
}
exports.VendorCategorySearchRowBasic = VendorCategorySearchRowBasic;
class CouponCodeSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.code = props.code;
        this.dateSent = props.dateSent;
        this.externalId = props.externalId;
        this.id = props.id;
        this.internalId = props.internalId;
        this.promotion = props.promotion;
        this.recipient = props.recipient;
        this.useCount = props.useCount;
        this.used = props.used;
    }
}
exports.CouponCodeSearchRowBasic = CouponCodeSearchRowBasic;
class BillingScheduleSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.applyToSubtotal = props.applyToSubtotal;
        this.externalId = props.externalId;
        this.frequency = props.frequency;
        this.inArrears = props.inArrears;
        this.initialAmount = props.initialAmount;
        this.initialTerms = props.initialTerms;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.isPublic = props.isPublic;
        this.name = props.name;
        this.recurrenceCount = props.recurrenceCount;
        this.recurrencePattern = props.recurrencePattern;
        this.recurrenceTerms = props.recurrenceTerms;
        this.repeatEvery = props.repeatEvery;
        this.type = props.type;
    }
}
exports.BillingScheduleSearchRowBasic = BillingScheduleSearchRowBasic;
class UsageSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customer = props.customer;
        this.date = props.date;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.item = props.item;
        this.memo = props.memo;
        this.quantity = props.quantity;
        this.subscription = props.subscription;
        this.subscriptionLine = props.subscriptionLine;
        this.subscriptionPlan = props.subscriptionPlan;
    }
}
exports.UsageSearchBasic = UsageSearchBasic;
class BomRevisionSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.billOfMaterials = props.billOfMaterials;
        this.createdDate = props.createdDate;
        this.effectiveEndDate = props.effectiveEndDate;
        this.effectiveStartDate = props.effectiveStartDate;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.memo = props.memo;
        this.name = props.name;
        this.customFieldList = props.customFieldList;
    }
}
exports.BomRevisionSearchRowBasic = BomRevisionSearchRowBasic;
class OpportunitySearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.actionItem = props.actionItem;
        this.availableOffline = props.availableOffline;
        this.buyingReason = props.buyingReason;
        this.buyingTimeFrame = props.buyingTimeFrame;
        this.clazz = props.clazz;
        this.closeDate = props.closeDate;
        this.competitor = props.competitor;
        this.contribution = props.contribution;
        this.contributionPrimary = props.contributionPrimary;
        this.currency = props.currency;
        this.custType = props.custType;
        this.dateCreated = props.dateCreated;
        this.daysOpen = props.daysOpen;
        this.daysToClose = props.daysToClose;
        this.decisionMaker = props.decisionMaker;
        this.department = props.department;
        this.status = props.status;
        this.entity = props.entity;
        this.entityStatus = props.entityStatus;
        this.estimatedBudget = props.estimatedBudget;
        this.expectedCloseDate = props.expectedCloseDate;
        this.externalId = props.externalId;
        this.forecastType = props.forecastType;
        this.foreignProjectedAmount = props.foreignProjectedAmount;
        this.foreignRangeHigh = props.foreignRangeHigh;
        this.foreignRangeLow = props.foreignRangeLow;
        this.fxTranCostEstimate = props.fxTranCostEstimate;
        this.internalId = props.internalId;
        this.isBudgetApproved = props.isBudgetApproved;
        this.lastModifiedDate = props.lastModifiedDate;
        this.leadSource = props.leadSource;
        this.location = props.location;
        this.memo = props.memo;
        this.partner = props.partner;
        this.partnerContribution = props.partnerContribution;
        this.partnerRole = props.partnerRole;
        this.partnerTeamMember = props.partnerTeamMember;
        this.period = props.period;
        this.probability = props.probability;
        this.projAltSalesAmt = props.projAltSalesAmt;
        this.projectedTotal = props.projectedTotal;
        this.rangeHigh = props.rangeHigh;
        this.rangeHighAlt = props.rangeHighAlt;
        this.rangeLow = props.rangeLow;
        this.rangeLowAlt = props.rangeLowAlt;
        this.salesReadiness = props.salesReadiness;
        this.salesRep = props.salesRep;
        this.salesTeamMember = props.salesTeamMember;
        this.salesTeamRole = props.salesTeamRole;
        this.subsidiary = props.subsidiary;
        this.taxPeriod = props.taxPeriod;
        this.title = props.title;
        this.total = props.total;
        this.tranCostEstimate = props.tranCostEstimate;
        this.tranDate = props.tranDate;
        this.tranEstGrossProfit = props.tranEstGrossProfit;
        this.tranEstGrossProfitPct = props.tranEstGrossProfitPct;
        this.tranFxEstGrossProfit = props.tranFxEstGrossProfit;
        this.tranId = props.tranId;
        this.weightedTotal = props.weightedTotal;
        this.winLossReason = props.winLossReason;
        this.wonBy = props.wonBy;
        this.customFieldList = props.customFieldList;
    }
}
exports.OpportunitySearchRowBasic = OpportunitySearchRowBasic;
class ClassificationSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.nameNoHierarchy = props.nameNoHierarchy;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.ClassificationSearchRowBasic = ClassificationSearchRowBasic;
class ClassificationSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.nameNoHierarchy = props.nameNoHierarchy;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.ClassificationSearchBasic = ClassificationSearchBasic;
class ConsolidatedExchangeRateSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBook = props.accountingBook;
        this.averageRate = props.averageRate;
        this.closed = props.closed;
        this.currentRate = props.currentRate;
        this.externalId = props.externalId;
        this.fromCurrency = props.fromCurrency;
        this.fromSubsidiary = props.fromSubsidiary;
        this.historicalRate = props.historicalRate;
        this.internalId = props.internalId;
        this.periodEndDate = props.periodEndDate;
        this.periodName = props.periodName;
        this.periodStartDate = props.periodStartDate;
        this.toCurrency = props.toCurrency;
        this.toSubsidiary = props.toSubsidiary;
    }
}
exports.ConsolidatedExchangeRateSearchRowBasic = ConsolidatedExchangeRateSearchRowBasic;
class JobTypeSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.parent = props.parent;
    }
}
exports.JobTypeSearchRowBasic = JobTypeSearchRowBasic;
class PriceLevelSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.discountPct = props.discountPct;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.isOnline = props.isOnline;
        this.name = props.name;
    }
}
exports.PriceLevelSearchBasic = PriceLevelSearchBasic;
class ItemSupplyPlanSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.item = props.item;
        this.lastModifiedDate = props.lastModifiedDate;
        this.location = props.location;
        this.memo = props.memo;
        this.orderCreated = props.orderCreated;
        this.orderDate = props.orderDate;
        this.orderType = props.orderType;
        this.quantity = props.quantity;
        this.quantityUom = props.quantityUom;
        this.receiptDate = props.receiptDate;
        this.subsidiary = props.subsidiary;
        this.units = props.units;
        this.customFieldList = props.customFieldList;
    }
}
exports.ItemSupplyPlanSearchRowBasic = ItemSupplyPlanSearchRowBasic;
class ManufacturingOperationTaskSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.actualRunTime = props.actualRunTime;
        this.actualSetupTime = props.actualSetupTime;
        this.completedQuantity = props.completedQuantity;
        this.endDate = props.endDate;
        this.estimatedWork = props.estimatedWork;
        this.externalId = props.externalId;
        this.id = props.id;
        this.inputQuantity = props.inputQuantity;
        this.internalId = props.internalId;
        this.laborResources = props.laborResources;
        this.lagAmount = props.lagAmount;
        this.lagType = props.lagType;
        this.lagUnits = props.lagUnits;
        this.machineResources = props.machineResources;
        this.manufacturingCostTemplate = props.manufacturingCostTemplate;
        this.manufacturingWorkCenter = props.manufacturingWorkCenter;
        this.message = props.message;
        this.name = props.name;
        this.order = props.order;
        this.predecessor = props.predecessor;
        this.predecessorType = props.predecessorType;
        this.remainingQuantity = props.remainingQuantity;
        this.runRate = props.runRate;
        this.runTime = props.runTime;
        this.sequence = props.sequence;
        this.setupTime = props.setupTime;
        this.startDate = props.startDate;
        this.status = props.status;
        this.workOrder = props.workOrder;
        this.customFieldList = props.customFieldList;
    }
}
exports.ManufacturingOperationTaskSearchRowBasic = ManufacturingOperationTaskSearchRowBasic;
class ContactSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.address = props.address;
        this.address1 = props.address1;
        this.address2 = props.address2;
        this.address3 = props.address3;
        this.addressee = props.addressee;
        this.addressInternalId = props.addressInternalId;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.altEmail = props.altEmail;
        this.altName = props.altName;
        this.altPhone = props.altPhone;
        this.attention = props.attention;
        this.availableOffline = props.availableOffline;
        this.billAddress1 = props.billAddress1;
        this.billAddress2 = props.billAddress2;
        this.billAddress3 = props.billAddress3;
        this.billAddressee = props.billAddressee;
        this.billAttention = props.billAttention;
        this.billCity = props.billCity;
        this.billCountry = props.billCountry;
        this.billCountryCode = props.billCountryCode;
        this.billPhone = props.billPhone;
        this.billState = props.billState;
        this.billZipCode = props.billZipCode;
        this.category = props.category;
        this.city = props.city;
        this.comments = props.comments;
        this.company = props.company;
        this.contactRole = props.contactRole;
        this.contactSource = props.contactSource;
        this.country = props.country;
        this.countryCode = props.countryCode;
        this.dateCreated = props.dateCreated;
        this.defaultTaxReg = props.defaultTaxReg;
        this.email = props.email;
        this.entityId = props.entityId;
        this.entityNumber = props.entityNumber;
        this.externalId = props.externalId;
        this.fax = props.fax;
        this.firstName = props.firstName;
        this.giveAccess = props.giveAccess;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.hasDuplicates = props.hasDuplicates;
        this.homePhone = props.homePhone;
        this.image = props.image;
        this.internalId = props.internalId;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isInactive = props.isInactive;
        this.language = props.language;
        this.lastModifiedDate = props.lastModifiedDate;
        this.lastName = props.lastName;
        this.level = props.level;
        this.middleName = props.middleName;
        this.mobilePhone = props.mobilePhone;
        this.owner = props.owner;
        this.permission = props.permission;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.salutation = props.salutation;
        this.shipAddress1 = props.shipAddress1;
        this.shipAddress2 = props.shipAddress2;
        this.shipAddress3 = props.shipAddress3;
        this.shipAddressee = props.shipAddressee;
        this.shipAttention = props.shipAttention;
        this.shipCity = props.shipCity;
        this.shipCountry = props.shipCountry;
        this.shipCountryCode = props.shipCountryCode;
        this.shipPhone = props.shipPhone;
        this.shipState = props.shipState;
        this.shipZip = props.shipZip;
        this.state = props.state;
        this.subscription = props.subscription;
        this.subscriptionDate = props.subscriptionDate;
        this.subscriptionStatus = props.subscriptionStatus;
        this.subsidiary = props.subsidiary;
        this.title = props.title;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.ContactSearchRowBasic = ContactSearchRowBasic;
class CostCategorySearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.itemCostType = props.itemCostType;
        this.name = props.name;
    }
}
exports.CostCategorySearchBasic = CostCategorySearchBasic;
class BomRevisionComponentSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.bomQuantity = props.bomQuantity;
        this.bomRevision = props.bomRevision;
        this.componentYield = props.componentYield;
        this.description = props.description;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.item = props.item;
        this.itemSource = props.itemSource;
        this.itemSubtype = props.itemSubtype;
        this.itemType = props.itemType;
        this.lineId = props.lineId;
        this.quantity = props.quantity;
        this.units = props.units;
        this.weight = props.weight;
    }
}
exports.BomRevisionComponentSearchBasic = BomRevisionComponentSearchBasic;
class PartnerSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.address = props.address;
        this.address1 = props.address1;
        this.address2 = props.address2;
        this.address3 = props.address3;
        this.addressee = props.addressee;
        this.addressInternalId = props.addressInternalId;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.altEmail = props.altEmail;
        this.altName = props.altName;
        this.altPhone = props.altPhone;
        this.assignTasks = props.assignTasks;
        this.attention = props.attention;
        this.billAddress = props.billAddress;
        this.billAddress1 = props.billAddress1;
        this.billAddress2 = props.billAddress2;
        this.billAddress3 = props.billAddress3;
        this.billAddressee = props.billAddressee;
        this.billAttention = props.billAttention;
        this.billCity = props.billCity;
        this.billCountry = props.billCountry;
        this.billCountryCode = props.billCountryCode;
        this.billPhone = props.billPhone;
        this.billState = props.billState;
        this.billZipCode = props.billZipCode;
        this.category = props.category;
        this.city = props.city;
        this.clazz = props.clazz;
        this.comments = props.comments;
        this.companyName = props.companyName;
        this.country = props.country;
        this.countryCode = props.countryCode;
        this.dateCreated = props.dateCreated;
        this.defaultTaxReg = props.defaultTaxReg;
        this.department = props.department;
        this.eligibleForCommission = props.eligibleForCommission;
        this.email = props.email;
        this.emailPreference = props.emailPreference;
        this.entityId = props.entityId;
        this.entityNumber = props.entityNumber;
        this.externalId = props.externalId;
        this.fax = props.fax;
        this.firstName = props.firstName;
        this.giveAccess = props.giveAccess;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.hasDuplicates = props.hasDuplicates;
        this.homePhone = props.homePhone;
        this.image = props.image;
        this.internalId = props.internalId;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isInactive = props.isInactive;
        this.isPerson = props.isPerson;
        this.language = props.language;
        this.lastModifiedDate = props.lastModifiedDate;
        this.lastName = props.lastName;
        this.level = props.level;
        this.location = props.location;
        this.middleName = props.middleName;
        this.mobilePhone = props.mobilePhone;
        this.parent = props.parent;
        this.partnerCode = props.partnerCode;
        this.permission = props.permission;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.promoCode = props.promoCode;
        this.salutation = props.salutation;
        this.shipAddress = props.shipAddress;
        this.shipAddress1 = props.shipAddress1;
        this.shipAddress2 = props.shipAddress2;
        this.shipAddress3 = props.shipAddress3;
        this.shipAddressee = props.shipAddressee;
        this.shipAttention = props.shipAttention;
        this.shipCity = props.shipCity;
        this.shipCountry = props.shipCountry;
        this.shipCountryCode = props.shipCountryCode;
        this.shipPhone = props.shipPhone;
        this.shipState = props.shipState;
        this.shipZip = props.shipZip;
        this.state = props.state;
        this.subscription = props.subscription;
        this.subscriptionDate = props.subscriptionDate;
        this.subscriptionStatus = props.subscriptionStatus;
        this.subsidiary = props.subsidiary;
        this.title = props.title;
        this.url = props.url;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.PartnerSearchRowBasic = PartnerSearchRowBasic;
class LandedCostSummary extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.category = props.category;
        this.amount = props.amount;
        this.source = props.source;
        this.transaction = props.transaction;
    }
}
exports.LandedCostSummary = LandedCostSummary;
class OriginatingLeadSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountNumber = props.accountNumber;
        this.address = props.address;
        this.address1 = props.address1;
        this.address2 = props.address2;
        this.address3 = props.address3;
        this.addressee = props.addressee;
        this.addressInternalId = props.addressInternalId;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.altContact = props.altContact;
        this.altEmail = props.altEmail;
        this.altName = props.altName;
        this.altPhone = props.altPhone;
        this.assignedSite = props.assignedSite;
        this.assignedSiteId = props.assignedSiteId;
        this.attention = props.attention;
        this.availableOffline = props.availableOffline;
        this.balance = props.balance;
        this.billAddress = props.billAddress;
        this.billAddress1 = props.billAddress1;
        this.billAddress2 = props.billAddress2;
        this.billAddress3 = props.billAddress3;
        this.billAddressee = props.billAddressee;
        this.billAttention = props.billAttention;
        this.billCity = props.billCity;
        this.billCountry = props.billCountry;
        this.billCountryCode = props.billCountryCode;
        this.billPhone = props.billPhone;
        this.billState = props.billState;
        this.billZipCode = props.billZipCode;
        this.buyingReason = props.buyingReason;
        this.buyingTimeFrame = props.buyingTimeFrame;
        this.category = props.category;
        this.ccCustomerCode = props.ccCustomerCode;
        this.ccDefault = props.ccDefault;
        this.ccExpDate = props.ccExpDate;
        this.ccHolderName = props.ccHolderName;
        this.ccInternalId = props.ccInternalId;
        this.ccNumber = props.ccNumber;
        this.ccState = props.ccState;
        this.ccStateFrom = props.ccStateFrom;
        this.ccType = props.ccType;
        this.city = props.city;
        this.comments = props.comments;
        this.companyName = props.companyName;
        this.consolBalance = props.consolBalance;
        this.consolDaysOverdue = props.consolDaysOverdue;
        this.consolDepositBalance = props.consolDepositBalance;
        this.consolOverdueBalance = props.consolOverdueBalance;
        this.consolUnbilledOrders = props.consolUnbilledOrders;
        this.contact = props.contact;
        this.contribution = props.contribution;
        this.contributionPrimary = props.contributionPrimary;
        this.conversionDate = props.conversionDate;
        this.country = props.country;
        this.countryCode = props.countryCode;
        this.creditHold = props.creditHold;
        this.creditHoldOverride = props.creditHoldOverride;
        this.creditLimit = props.creditLimit;
        this.currency = props.currency;
        this.dateClosed = props.dateClosed;
        this.dateCreated = props.dateCreated;
        this.daysOverdue = props.daysOverdue;
        this.defaultOrderPriority = props.defaultOrderPriority;
        this.defaultTaxReg = props.defaultTaxReg;
        this.depositBalance = props.depositBalance;
        this.drAccount = props.drAccount;
        this.email = props.email;
        this.emailPreference = props.emailPreference;
        this.emailTransactions = props.emailTransactions;
        this.endDate = props.endDate;
        this.entityId = props.entityId;
        this.entityNumber = props.entityNumber;
        this.entityStatus = props.entityStatus;
        this.estimatedBudget = props.estimatedBudget;
        this.explicitConversion = props.explicitConversion;
        this.externalId = props.externalId;
        this.fax = props.fax;
        this.faxTransactions = props.faxTransactions;
        this.firstName = props.firstName;
        this.firstOrderDate = props.firstOrderDate;
        this.firstSaleDate = props.firstSaleDate;
        this.fxAccount = props.fxAccount;
        this.fxBalance = props.fxBalance;
        this.fxConsolBalance = props.fxConsolBalance;
        this.fxConsolUnbilledOrders = props.fxConsolUnbilledOrders;
        this.fxUnbilledOrders = props.fxUnbilledOrders;
        this.giveAccess = props.giveAccess;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.groupPricingLevel = props.groupPricingLevel;
        this.hasDuplicates = props.hasDuplicates;
        this.homePhone = props.homePhone;
        this.image = props.image;
        this.internalId = props.internalId;
        this.isBudgetApproved = props.isBudgetApproved;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isInactive = props.isInactive;
        this.isPerson = props.isPerson;
        this.isShipAddress = props.isShipAddress;
        this.itemPricingLevel = props.itemPricingLevel;
        this.itemPricingUnitPrice = props.itemPricingUnitPrice;
        this.jobEndDate = props.jobEndDate;
        this.jobProjectedEnd = props.jobProjectedEnd;
        this.jobStartDate = props.jobStartDate;
        this.jobType = props.jobType;
        this.language = props.language;
        this.lastModifiedDate = props.lastModifiedDate;
        this.lastName = props.lastName;
        this.lastOrderDate = props.lastOrderDate;
        this.lastSaleDate = props.lastSaleDate;
        this.leadDate = props.leadDate;
        this.leadSource = props.leadSource;
        this.level = props.level;
        this.manualCreditHold = props.manualCreditHold;
        this.middleName = props.middleName;
        this.mobilePhone = props.mobilePhone;
        this.monthlyClosing = props.monthlyClosing;
        this.onCreditHold = props.onCreditHold;
        this.overdueBalance = props.overdueBalance;
        this.parent = props.parent;
        this.partner = props.partner;
        this.partnerContribution = props.partnerContribution;
        this.partnerRole = props.partnerRole;
        this.partnerTeamMember = props.partnerTeamMember;
        this.pec = props.pec;
        this.permission = props.permission;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.prefCCProcessor = props.prefCCProcessor;
        this.priceLevel = props.priceLevel;
        this.pricingGroup = props.pricingGroup;
        this.pricingItem = props.pricingItem;
        this.printTransactions = props.printTransactions;
        this.prospectDate = props.prospectDate;
        this.receivablesAccount = props.receivablesAccount;
        this.reminderDays = props.reminderDays;
        this.resaleNumber = props.resaleNumber;
        this.role = props.role;
        this.salesReadiness = props.salesReadiness;
        this.salesRep = props.salesRep;
        this.salesTeamMember = props.salesTeamMember;
        this.salesTeamRole = props.salesTeamRole;
        this.salutation = props.salutation;
        this.shipAddress = props.shipAddress;
        this.shipAddress1 = props.shipAddress1;
        this.shipAddress2 = props.shipAddress2;
        this.shipAddress3 = props.shipAddress3;
        this.shipAddressee = props.shipAddressee;
        this.shipAttention = props.shipAttention;
        this.shipCity = props.shipCity;
        this.shipComplete = props.shipComplete;
        this.shipCountry = props.shipCountry;
        this.shipCountryCode = props.shipCountryCode;
        this.shipPhone = props.shipPhone;
        this.shippingItem = props.shippingItem;
        this.shipState = props.shipState;
        this.shipZip = props.shipZip;
        this.sourceSite = props.sourceSite;
        this.sourceSiteId = props.sourceSiteId;
        this.stage = props.stage;
        this.startDate = props.startDate;
        this.state = props.state;
        this.subscription = props.subscription;
        this.subscriptionDate = props.subscriptionDate;
        this.subscriptionStatus = props.subscriptionStatus;
        this.subsidiary = props.subsidiary;
        this.taxable = props.taxable;
        this.taxItem = props.taxItem;
        this.terms = props.terms;
        this.territory = props.territory;
        this.title = props.title;
        this.unbilledOrders = props.unbilledOrders;
        this.url = props.url;
        this.vatRegNumber = props.vatRegNumber;
        this.webLead = props.webLead;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.OriginatingLeadSearchRowBasic = OriginatingLeadSearchRowBasic;
class ProjectTaskAssignmentSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.actualWork = props.actualWork;
        this.cost = props.cost;
        this.costBase = props.costBase;
        this.endDate = props.endDate;
        this.estimatedWork = props.estimatedWork;
        this.estimatedWorkBaseline = props.estimatedWorkBaseline;
        this.grossProfit = props.grossProfit;
        this.grossProfitBase = props.grossProfitBase;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.price = props.price;
        this.priceBase = props.priceBase;
        this.resource = props.resource;
        this.resourceName = props.resourceName;
        this.serviceItem = props.serviceItem;
        this.serviceItemDesc = props.serviceItemDesc;
        this.startDate = props.startDate;
        this.unitCost = props.unitCost;
        this.unitCostBase = props.unitCostBase;
        this.unitPrice = props.unitPrice;
        this.unitPriceBase = props.unitPriceBase;
        this.units = props.units;
        this.workCalendar = props.workCalendar;
    }
}
exports.ProjectTaskAssignmentSearchBasic = ProjectTaskAssignmentSearchBasic;
class TimeBillSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.approvalStatus = props.approvalStatus;
        this.approved = props.approved;
        this.billable = props.billable;
        this.clazz = props.clazz;
        this.customer = props.customer;
        this.date = props.date;
        this.dateCreated = props.dateCreated;
        this.department = props.department;
        this.duration = props.duration;
        this.employee = props.employee;
        this.exempt = props.exempt;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.item = props.item;
        this.lastModified = props.lastModified;
        this.location = props.location;
        this.memo = props.memo;
        this.paidByPayroll = props.paidByPayroll;
        this.paidExternally = props.paidExternally;
        this.payItem = props.payItem;
        this.productive = props.productive;
        this.rejectionNote = props.rejectionNote;
        this.status = props.status;
        this.subsidiary = props.subsidiary;
        this.temporaryLocalJurisdiction = props.temporaryLocalJurisdiction;
        this.temporaryStateJurisdiction = props.temporaryStateJurisdiction;
        this.timeModified = props.timeModified;
        this.timeSheet = props.timeSheet;
        this.type = props.type;
        this.utilized = props.utilized;
        this.customFieldList = props.customFieldList;
    }
}
exports.TimeBillSearchBasic = TimeBillSearchBasic;
class ItemBinNumberSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.binNumber = props.binNumber;
        this.location = props.location;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityOnHand = props.quantityOnHand;
    }
}
exports.ItemBinNumberSearchBasic = ItemBinNumberSearchBasic;
class FileSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.availableWithoutLogin = props.availableWithoutLogin;
        this.created = props.created;
        this.dateViewed = props.dateViewed;
        this.description = props.description;
        this.documentSize = props.documentSize;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.fileType = props.fileType;
        this.folder = props.folder;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isAvailable = props.isAvailable;
        this.isLink = props.isLink;
        this.modified = props.modified;
        this.name = props.name;
        this.owner = props.owner;
        this.url = props.url;
    }
}
exports.FileSearchBasic = FileSearchBasic;
class WinLossReasonSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.WinLossReasonSearchRowBasic = WinLossReasonSearchRowBasic;
class EmployeeSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountNumber = props.accountNumber;
        this.address = props.address;
        this.address1 = props.address1;
        this.address2 = props.address2;
        this.address3 = props.address3;
        this.addressee = props.addressee;
        this.addressInternalId = props.addressInternalId;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.alienNumber = props.alienNumber;
        this.allocation = props.allocation;
        this.altEmail = props.altEmail;
        this.altName = props.altName;
        this.altPhone = props.altPhone;
        this.approvalLimit = props.approvalLimit;
        this.approver = props.approver;
        this.attention = props.attention;
        this.authWorkDate = props.authWorkDate;
        this.baseWage = props.baseWage;
        this.baseWageType = props.baseWageType;
        this.billAddress = props.billAddress;
        this.billAddress1 = props.billAddress1;
        this.billAddress2 = props.billAddress2;
        this.billAddress3 = props.billAddress3;
        this.billAddressee = props.billAddressee;
        this.billAttention = props.billAttention;
        this.billCity = props.billCity;
        this.billCountry = props.billCountry;
        this.billCountryCode = props.billCountryCode;
        this.billingClass = props.billingClass;
        this.billPhone = props.billPhone;
        this.billState = props.billState;
        this.billZipCode = props.billZipCode;
        this.birthDate = props.birthDate;
        this.birthDay = props.birthDay;
        this.city = props.city;
        this.clazz = props.clazz;
        this.comments = props.comments;
        this.compensationCurrency = props.compensationCurrency;
        this.concurrentWebServicesUser = props.concurrentWebServicesUser;
        this.country = props.country;
        this.countryCode = props.countryCode;
        this.dateCreated = props.dateCreated;
        this.defaultAcctCorpCardExp = props.defaultAcctCorpCardExp;
        this.defaultExpenseReportCurrency = props.defaultExpenseReportCurrency;
        this.defaultTaxReg = props.defaultTaxReg;
        this.department = props.department;
        this.eligibleForCommission = props.eligibleForCommission;
        this.email = props.email;
        this.employeeStatus = props.employeeStatus;
        this.employeeType = props.employeeType;
        this.entityId = props.entityId;
        this.entityNumber = props.entityNumber;
        this.ethnicity = props.ethnicity;
        this.expenseLimit = props.expenseLimit;
        this.expenseReportCurrency = props.expenseReportCurrency;
        this.externalId = props.externalId;
        this.fax = props.fax;
        this.firstName = props.firstName;
        this.gender = props.gender;
        this.giveAccess = props.giveAccess;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.hireDate = props.hireDate;
        this.homePhone = props.homePhone;
        this.i9Verified = props.i9Verified;
        this.image = props.image;
        this.internalId = props.internalId;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isInactive = props.isInactive;
        this.isJobResource = props.isJobResource;
        this.isSalesRep = props.isSalesRep;
        this.isSupportRep = props.isSupportRep;
        this.isTemplate = props.isTemplate;
        this.job = props.job;
        this.laborCost = props.laborCost;
        this.language = props.language;
        this.lastModifiedDate = props.lastModifiedDate;
        this.lastName = props.lastName;
        this.lastPaidDate = props.lastPaidDate;
        this.lastReviewDate = props.lastReviewDate;
        this.level = props.level;
        this.location = props.location;
        this.maritalStatus = props.maritalStatus;
        this.middleName = props.middleName;
        this.mobilePhone = props.mobilePhone;
        this.nextReviewDate = props.nextReviewDate;
        this.offlineAccess = props.offlineAccess;
        this.payFrequency = props.payFrequency;
        this.permChangeDate = props.permChangeDate;
        this.permChangeLevel = props.permChangeLevel;
        this.permission = props.permission;
        this.permissionChange = props.permissionChange;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.positionTitle = props.positionTitle;
        this.primaryEarningAmount = props.primaryEarningAmount;
        this.primaryEarningItem = props.primaryEarningItem;
        this.primaryEarningType = props.primaryEarningType;
        this.purchaseOrderApprovalLimit = props.purchaseOrderApprovalLimit;
        this.purchaseOrderApprover = props.purchaseOrderApprover;
        this.purchaseOrderLimit = props.purchaseOrderLimit;
        this.releaseDate = props.releaseDate;
        this.residentStatus = props.residentStatus;
        this.role = props.role;
        this.roleChange = props.roleChange;
        this.roleChangeAction = props.roleChangeAction;
        this.roleChangeDate = props.roleChangeDate;
        this.salesRole = props.salesRole;
        this.salutation = props.salutation;
        this.shipAddress1 = props.shipAddress1;
        this.shipAddress2 = props.shipAddress2;
        this.shipAddress3 = props.shipAddress3;
        this.shipAddressee = props.shipAddressee;
        this.shipAttention = props.shipAttention;
        this.shipCity = props.shipCity;
        this.shipCountry = props.shipCountry;
        this.shipCountryCode = props.shipCountryCode;
        this.shipPhone = props.shipPhone;
        this.shipState = props.shipState;
        this.shipZip = props.shipZip;
        this.socialSecurityNumber = props.socialSecurityNumber;
        this.startDateTimeOffCalc = props.startDateTimeOffCalc;
        this.state = props.state;
        this.subscription = props.subscription;
        this.subscriptionDate = props.subscriptionDate;
        this.subscriptionStatus = props.subscriptionStatus;
        this.subsidiary = props.subsidiary;
        this.supervisor = props.supervisor;
        this.terminationCategory = props.terminationCategory;
        this.terminationDetails = props.terminationDetails;
        this.terminationReason = props.terminationReason;
        this.terminationRegretted = props.terminationRegretted;
        this.timeApprover = props.timeApprover;
        this.timeOffPlan = props.timeOffPlan;
        this.title = props.title;
        this.usePerquest = props.usePerquest;
        this.useTimeData = props.useTimeData;
        this.visaExpDate = props.visaExpDate;
        this.visaType = props.visaType;
        this.workCalendar = props.workCalendar;
        this.workplace = props.workplace;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.EmployeeSearchRowBasic = EmployeeSearchRowBasic;
class GlobalAccountMappingSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBook = props.accountingBook;
        this.clazz = props.clazz;
        this.customDimension = props.customDimension;
        this.department = props.department;
        this.destinationAccount = props.destinationAccount;
        this.effectiveDate = props.effectiveDate;
        this.endDate = props.endDate;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.location = props.location;
        this.sourceAccount = props.sourceAccount;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.GlobalAccountMappingSearchBasic = GlobalAccountMappingSearchBasic;
class NoteTypeSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.NoteTypeSearchRowBasic = NoteTypeSearchRowBasic;
class AccountSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingContext = props.accountingContext;
        this.balance = props.balance;
        this.cashFlowRateType = props.cashFlowRateType;
        this.category1099Misc = props.category1099Misc;
        this.description = props.description;
        this.externalId = props.externalId;
        this.generalRateType = props.generalRateType;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.legalName = props.legalName;
        this.locale = props.locale;
        this.localizedLegalName = props.localizedLegalName;
        this.localizedName = props.localizedName;
        this.localizedNumber = props.localizedNumber;
        this.name = props.name;
        this.number = props.number;
        this.subsidiary = props.subsidiary;
        this.type = props.type;
        this.customFieldList = props.customFieldList;
    }
}
exports.AccountSearchRowBasic = AccountSearchRowBasic;
class NexusSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.country = props.country;
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.parentNexus = props.parentNexus;
        this.state = props.state;
        this.taxAgency = props.taxAgency;
        this.taxDateFromFulfillment = props.taxDateFromFulfillment;
    }
}
exports.NexusSearchBasic = NexusSearchBasic;
class InventoryDetail extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.inventoryAssignmentList = props.inventoryAssignmentList;
        this.customForm = props.customForm;
    }
}
exports.InventoryDetail = InventoryDetail;
class VendorSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountNumber = props.accountNumber;
        this.address = props.address;
        this.addressee = props.addressee;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.attention = props.attention;
        this.balance = props.balance;
        this.billAddress = props.billAddress;
        this.category = props.category;
        this.city = props.city;
        this.comments = props.comments;
        this.contact = props.contact;
        this.country = props.country;
        this.county = props.county;
        this.creditLimit = props.creditLimit;
        this.currency = props.currency;
        this.currentExchangeRate = props.currentExchangeRate;
        this.dateCreated = props.dateCreated;
        this.defaultTaxReg = props.defaultTaxReg;
        this.defaultTaxRegText = props.defaultTaxRegText;
        this.eligibleForCommission = props.eligibleForCommission;
        this.email = props.email;
        this.emailPreference = props.emailPreference;
        this.emailTransactions = props.emailTransactions;
        this.entityId = props.entityId;
        this.expenseAccount = props.expenseAccount;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.fax = props.fax;
        this.faxTransactions = props.faxTransactions;
        this.firstName = props.firstName;
        this.fxBalance = props.fxBalance;
        this.fxUnbilledOrders = props.fxUnbilledOrders;
        this.giveAccess = props.giveAccess;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.group = props.group;
        this.hasDuplicates = props.hasDuplicates;
        this.image = props.image;
        this.incoterm = props.incoterm;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.is1099Eligible = props.is1099Eligible;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isInactive = props.isInactive;
        this.isJobResourceVend = props.isJobResourceVend;
        this.isPerson = props.isPerson;
        this.laborCost = props.laborCost;
        this.language = props.language;
        this.lastModifiedDate = props.lastModifiedDate;
        this.lastName = props.lastName;
        this.level = props.level;
        this.middleName = props.middleName;
        this.otherRelationships = props.otherRelationships;
        this.payablesAccount = props.payablesAccount;
        this.pec = props.pec;
        this.permission = props.permission;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.predConfidence = props.predConfidence;
        this.predictedDays = props.predictedDays;
        this.printTransactions = props.printTransactions;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.salutation = props.salutation;
        this.shipAddress = props.shipAddress;
        this.state = props.state;
        this.subsidiary = props.subsidiary;
        this.taxIdNum = props.taxIdNum;
        this.timeApprover = props.timeApprover;
        this.title = props.title;
        this.unbilledOrders = props.unbilledOrders;
        this.url = props.url;
        this.vatRegNumber = props.vatRegNumber;
        this.workCalendar = props.workCalendar;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.VendorSearchBasic = VendorSearchBasic;
class ProjectTaskAssignmentSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.actualWork = props.actualWork;
        this.cost = props.cost;
        this.costBase = props.costBase;
        this.endDate = props.endDate;
        this.estimatedWork = props.estimatedWork;
        this.estimatedWorkBaseline = props.estimatedWorkBaseline;
        this.grossProfit = props.grossProfit;
        this.grossProfitBase = props.grossProfitBase;
        this.internalId = props.internalId;
        this.price = props.price;
        this.priceBase = props.priceBase;
        this.resource = props.resource;
        this.resourceName = props.resourceName;
        this.serviceItem = props.serviceItem;
        this.serviceItemDesc = props.serviceItemDesc;
        this.startDate = props.startDate;
        this.unitCost = props.unitCost;
        this.unitCostBase = props.unitCostBase;
        this.unitPrice = props.unitPrice;
        this.unitPriceBase = props.unitPriceBase;
        this.units = props.units;
        this.workCalendar = props.workCalendar;
    }
}
exports.ProjectTaskAssignmentSearchRowBasic = ProjectTaskAssignmentSearchRowBasic;
class WinLossReasonSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.WinLossReasonSearchBasic = WinLossReasonSearchBasic;
class UsageSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customer = props.customer;
        this.date = props.date;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.item = props.item;
        this.memo = props.memo;
        this.quantity = props.quantity;
        this.subscription = props.subscription;
        this.subscriptionLine = props.subscriptionLine;
        this.subscriptionPlan = props.subscriptionPlan;
    }
}
exports.UsageSearchRowBasic = UsageSearchRowBasic;
class PartnerCategorySearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.parent = props.parent;
    }
}
exports.PartnerCategorySearchBasic = PartnerCategorySearchBasic;
class InventoryNumberSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.expirationDate = props.expirationDate;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.inventoryNumber = props.inventoryNumber;
        this.isOnHand = props.isOnHand;
        this.item = props.item;
        this.location = props.location;
        this.memo = props.memo;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityInTransit = props.quantityInTransit;
        this.quantityOnHand = props.quantityOnHand;
        this.quantityOnOrder = props.quantityOnOrder;
        this.customFieldList = props.customFieldList;
    }
}
exports.InventoryNumberSearchBasic = InventoryNumberSearchBasic;
class RevRecScheduleSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBook = props.accountingBook;
        this.amorStatus = props.amorStatus;
        this.amorTemplate = props.amorTemplate;
        this.amortizedAmount = props.amortizedAmount;
        this.amorType = props.amorType;
        this.amount = props.amount;
        this.currency = props.currency;
        this.deferredAmount = props.deferredAmount;
        this.destAcct = props.destAcct;
        this.externalId = props.externalId;
        this.initialAmt = props.initialAmt;
        this.internalId = props.internalId;
        this.isRecognized = props.isRecognized;
        this.jeDoc = props.jeDoc;
        this.lineSequenceNumber = props.lineSequenceNumber;
        this.name = props.name;
        this.nameUrl = props.nameUrl;
        this.pctComplete = props.pctComplete;
        this.pctRecognition = props.pctRecognition;
        this.periodOffset = props.periodOffset;
        this.recurAmount = props.recurAmount;
        this.recurFxAmount = props.recurFxAmount;
        this.schedDate = props.schedDate;
        this.scheduleNumber = props.scheduleNumber;
        this.sourceAcct = props.sourceAcct;
        this.srcDocLine = props.srcDocLine;
        this.srcTran = props.srcTran;
        this.srcTranPostPeriod = props.srcTranPostPeriod;
        this.startOffset = props.startOffset;
        this.useForeignAmounts = props.useForeignAmounts;
    }
}
exports.RevRecScheduleSearchRowBasic = RevRecScheduleSearchRowBasic;
class LandedCost extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.landedCostDataList = props.landedCostDataList;
    }
}
exports.LandedCost = LandedCost;
class CostCategorySearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.itemCostType = props.itemCostType;
        this.name = props.name;
    }
}
exports.CostCategorySearchRowBasic = CostCategorySearchRowBasic;
class SiteCategorySearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.dateViewed = props.dateViewed;
        this.description = props.description;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.externalId = props.externalId;
        this.fullName = props.fullName;
        this.hidden = props.hidden;
        this.hits = props.hits;
        this.internalId = props.internalId;
        this.longDescription = props.longDescription;
        this.name = props.name;
        this.pageTitle = props.pageTitle;
        this.sitemapPriority = props.sitemapPriority;
        this.urlComponent = props.urlComponent;
    }
}
exports.SiteCategorySearchRowBasic = SiteCategorySearchRowBasic;
class CustomerCategorySearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.CustomerCategorySearchBasic = CustomerCategorySearchBasic;
class CampaignSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.audience = props.audience;
        this.baseCost = props.baseCost;
        this.campaignId = props.campaignId;
        this.category = props.category;
        this.channel = props.channel;
        this.cost = props.cost;
        this.createdDate = props.createdDate;
        this.endDate = props.endDate;
        this.event = props.event;
        this.executedDate = props.executedDate;
        this.expectedRevenue = props.expectedRevenue;
        this.externalId = props.externalId;
        this.family = props.family;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.isSalesCampaign = props.isSalesCampaign;
        this.item = props.item;
        this.keyword = props.keyword;
        this.lastModifiedDate = props.lastModifiedDate;
        this.managerRole = props.managerRole;
        this.message = props.message;
        this.offer = props.offer;
        this.owner = props.owner;
        this.promoCode = props.promoCode;
        this.recipient = props.recipient;
        this.response = props.response;
        this.responseCategory = props.responseCategory;
        this.responseCode = props.responseCode;
        this.responseDate = props.responseDate;
        this.responseNotes = props.responseNotes;
        this.revenue = props.revenue;
        this.roi = props.roi;
        this.scheduledDate = props.scheduledDate;
        this.searchEngine = props.searchEngine;
        this.startDate = props.startDate;
        this.status = props.status;
        this.subscription = props.subscription;
        this.title = props.title;
        this.url = props.url;
        this.vertical = props.vertical;
        this.customFieldList = props.customFieldList;
    }
}
exports.CampaignSearchRowBasic = CampaignSearchRowBasic;
class PayrollItemSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.expenseAccount = props.expenseAccount;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.itemTypeNoHierarchy = props.itemTypeNoHierarchy;
        this.liabilityAccount = props.liabilityAccount;
        this.name = props.name;
        this.subsidiary = props.subsidiary;
        this.vendor = props.vendor;
        this.customFieldList = props.customFieldList;
    }
}
exports.PayrollItemSearchRowBasic = PayrollItemSearchRowBasic;
class TimeSheetSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.approvalStatus = props.approvalStatus;
        this.employee = props.employee;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.id = props.id;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.timeSheetDate = props.timeSheetDate;
        this.totalHours = props.totalHours;
        this.customFieldList = props.customFieldList;
    }
}
exports.TimeSheetSearchBasic = TimeSheetSearchBasic;
class TaxDetails extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.taxDetailsReference = props.taxDetailsReference;
        this.lineType = props.lineType;
        this.lineName = props.lineName;
        this.netAmount = props.netAmount;
        this.grossAmount = props.grossAmount;
        this.taxType = props.taxType;
        this.taxCode = props.taxCode;
        this.taxBasis = props.taxBasis;
        this.taxRate = props.taxRate;
        this.taxAmount = props.taxAmount;
        this.calcDetail = props.calcDetail;
    }
}
exports.TaxDetails = TaxDetails;
class RecurrenceDowMaskList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.recurrenceDowMask = props.recurrenceDowMask;
    }
}
exports.RecurrenceDowMaskList = RecurrenceDowMaskList;
class PriceLevelSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.discountPct = props.discountPct;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.isOnline = props.isOnline;
        this.name = props.name;
    }
}
exports.PriceLevelSearchRowBasic = PriceLevelSearchRowBasic;
class MseSubsidiarySearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBook = props.accountingBook;
        this.accountingBookCurrency = props.accountingBookCurrency;
        this.address = props.address;
        this.city = props.city;
        this.country = props.country;
        this.currency = props.currency;
        this.effectiveFrom = props.effectiveFrom;
        this.email = props.email;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.fax = props.fax;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isElimination = props.isElimination;
        this.isInactive = props.isInactive;
        this.legalName = props.legalName;
        this.name = props.name;
        this.nameNoHierarchy = props.nameNoHierarchy;
        this.nexus = props.nexus;
        this.phone = props.phone;
        this.primary = props.primary;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.state = props.state;
        this.subsidiary = props.subsidiary;
        this.taxEngine = props.taxEngine;
        this.taxIdNum = props.taxIdNum;
        this.taxRegistrationNumber = props.taxRegistrationNumber;
        this.tranPrefix = props.tranPrefix;
        this.url = props.url;
        this.validUntil = props.validUntil;
        this.zip = props.zip;
        this.customFieldList = props.customFieldList;
    }
}
exports.MseSubsidiarySearchBasic = MseSubsidiarySearchBasic;
class FairValuePriceSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.currency = props.currency;
        this.endDate = props.endDate;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.fairValue = props.fairValue;
        this.fairValueFormula = props.fairValueFormula;
        this.fairValueRangePolicy = props.fairValueRangePolicy;
        this.highValue = props.highValue;
        this.highValuePercent = props.highValuePercent;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isVsoePrice = props.isVsoePrice;
        this.item = props.item;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.lowValue = props.lowValue;
        this.lowValuePercent = props.lowValuePercent;
        this.startDate = props.startDate;
        this.unitsType = props.unitsType;
    }
}
exports.FairValuePriceSearchBasic = FairValuePriceSearchBasic;
class EntityGroupSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.email = props.email;
        this.externalId = props.externalId;
        this.groupName = props.groupName;
        this.groupType = props.groupType;
        this.internalId = props.internalId;
        this.isDynamic = props.isDynamic;
        this.isInactive = props.isInactive;
        this.isManufacturingWorkCenter = props.isManufacturingWorkCenter;
        this.isPrivate = props.isPrivate;
        this.laborResources = props.laborResources;
        this.lastModifiedDate = props.lastModifiedDate;
        this.machineResources = props.machineResources;
        this.owner = props.owner;
        this.savedSearch = props.savedSearch;
        this.size = props.size;
        this.subsidiary = props.subsidiary;
        this.workCalendar = props.workCalendar;
        this.customFieldList = props.customFieldList;
    }
}
exports.EntityGroupSearchRowBasic = EntityGroupSearchRowBasic;
class SalesTaxItemSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.itemId = props.itemId;
        this.name = props.name;
        this.taxType = props.taxType;
    }
}
exports.SalesTaxItemSearchRowBasic = SalesTaxItemSearchRowBasic;
class PricingGroupSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.PricingGroupSearchRowBasic = PricingGroupSearchRowBasic;
class IssueSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.ageInMonths = props.ageInMonths;
        this.assigned = props.assigned;
        this.buildBroken = props.buildBroken;
        this.buildBrokenName = props.buildBrokenName;
        this.buildFixed = props.buildFixed;
        this.buildFixedName = props.buildFixedName;
        this.buildTarget = props.buildTarget;
        this.buildTargetName = props.buildTargetName;
        this.caseCount = props.caseCount;
        this.caseNumber = props.caseNumber;
        this.closedDate = props.closedDate;
        this.createdDate = props.createdDate;
        this.dateReleased = props.dateReleased;
        this.details = props.details;
        this.duplicateOf = props.duplicateOf;
        this.eFix = props.eFix;
        this.employeeOrTeam = props.employeeOrTeam;
        this.eventStatus = props.eventStatus;
        this.externalAbstract = props.externalAbstract;
        this.externalDetails = props.externalDetails;
        this.externalFixedIn = props.externalFixedIn;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.externalStatus = props.externalStatus;
        this.fixed = props.fixed;
        this.fixedBy = props.fixedBy;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isOwner = props.isOwner;
        this.isReviewed = props.isReviewed;
        this.isShowStopper = props.isShowStopper;
        this.issueAbstract = props.issueAbstract;
        this.issueNumber = props.issueNumber;
        this.item = props.item;
        this.lastModifiedDate = props.lastModifiedDate;
        this.module = props.module;
        this.number = props.number;
        this.originalFixedIn = props.originalFixedIn;
        this.priority = props.priority;
        this.product = props.product;
        this.productTeam = props.productTeam;
        this.relatedIssue = props.relatedIssue;
        this.relationship = props.relationship;
        this.relationshipComment = props.relationshipComment;
        this.reportedBy = props.reportedBy;
        this.reproduce = props.reproduce;
        this.resolved = props.resolved;
        this.resolvedBy = props.resolvedBy;
        this.reviewer = props.reviewer;
        this.severity = props.severity;
        this.source = props.source;
        this.status = props.status;
        this.tags = props.tags;
        this.tracking = props.tracking;
        this.type = props.type;
        this.userType = props.userType;
        this.versionBroken = props.versionBroken;
        this.versionFixed = props.versionFixed;
        this.versionTarget = props.versionTarget;
        this.customFieldList = props.customFieldList;
    }
}
exports.IssueSearchBasic = IssueSearchBasic;
class CustomerStatusSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.includeInLeadReports = props.includeInLeadReports;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.probability = props.probability;
    }
}
exports.CustomerStatusSearchBasic = CustomerStatusSearchBasic;
class EmployeeSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.address = props.address;
        this.addressee = props.addressee;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.alienNumber = props.alienNumber;
        this.allocation = props.allocation;
        this.anniversary = props.anniversary;
        this.approvalLimit = props.approvalLimit;
        this.approver = props.approver;
        this.attention = props.attention;
        this.authWorkDate = props.authWorkDate;
        this.baseWage = props.baseWage;
        this.baseWageType = props.baseWageType;
        this.billAddress = props.billAddress;
        this.billingClass = props.billingClass;
        this.birthDate = props.birthDate;
        this.birthDay = props.birthDay;
        this.cContribution = props.cContribution;
        this.city = props.city;
        this.clazz = props.clazz;
        this.comments = props.comments;
        this.commissionPlan = props.commissionPlan;
        this.compensationCurrency = props.compensationCurrency;
        this.concurrentWebServicesUser = props.concurrentWebServicesUser;
        this.country = props.country;
        this.county = props.county;
        this.dateCreated = props.dateCreated;
        this.deduction = props.deduction;
        this.defaultAcctCorpCardExp = props.defaultAcctCorpCardExp;
        this.defaultExpenseReportCurrency = props.defaultExpenseReportCurrency;
        this.defaultTaxReg = props.defaultTaxReg;
        this.defaultTaxRegText = props.defaultTaxRegText;
        this.department = props.department;
        this.earning = props.earning;
        this.education = props.education;
        this.eligibleForCommission = props.eligibleForCommission;
        this.email = props.email;
        this.employeeStatus = props.employeeStatus;
        this.employeeType = props.employeeType;
        this.employeeTypeKpi = props.employeeTypeKpi;
        this.entityId = props.entityId;
        this.ethnicity = props.ethnicity;
        this.expenseLimit = props.expenseLimit;
        this.expenseReportCurrency = props.expenseReportCurrency;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.fax = props.fax;
        this.firstName = props.firstName;
        this.gender = props.gender;
        this.giveAccess = props.giveAccess;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.group = props.group;
        this.hireDate = props.hireDate;
        this.i9Verified = props.i9Verified;
        this.image = props.image;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isInactive = props.isInactive;
        this.isJobResource = props.isJobResource;
        this.isTemplate = props.isTemplate;
        this.job = props.job;
        this.jobDescription = props.jobDescription;
        this.laborCost = props.laborCost;
        this.language = props.language;
        this.lastModifiedDate = props.lastModifiedDate;
        this.lastName = props.lastName;
        this.lastPaidDate = props.lastPaidDate;
        this.lastReviewDate = props.lastReviewDate;
        this.level = props.level;
        this.location = props.location;
        this.maritalStatus = props.maritalStatus;
        this.middleName = props.middleName;
        this.nextReviewDate = props.nextReviewDate;
        this.offlineAccess = props.offlineAccess;
        this.payFrequency = props.payFrequency;
        this.permChangeDate = props.permChangeDate;
        this.permission = props.permission;
        this.permissionChange = props.permissionChange;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.positionTitle = props.positionTitle;
        this.primaryEarningAmount = props.primaryEarningAmount;
        this.primaryEarningItem = props.primaryEarningItem;
        this.primaryEarningType = props.primaryEarningType;
        this.purchaseOrderApprovalLimit = props.purchaseOrderApprovalLimit;
        this.purchaseOrderApprover = props.purchaseOrderApprover;
        this.purchaseOrderLimit = props.purchaseOrderLimit;
        this.releaseDate = props.releaseDate;
        this.residentStatus = props.residentStatus;
        this.role = props.role;
        this.roleChange = props.roleChange;
        this.roleChangeDate = props.roleChangeDate;
        this.salesRep = props.salesRep;
        this.salesRole = props.salesRole;
        this.salutation = props.salutation;
        this.socialSecurityNumber = props.socialSecurityNumber;
        this.startDateTimeOffCalc = props.startDateTimeOffCalc;
        this.state = props.state;
        this.subsidiary = props.subsidiary;
        this.supervisor = props.supervisor;
        this.supportRep = props.supportRep;
        this.terminationCategory = props.terminationCategory;
        this.terminationDetails = props.terminationDetails;
        this.terminationReason = props.terminationReason;
        this.terminationRegretted = props.terminationRegretted;
        this.timeApprover = props.timeApprover;
        this.timeOffPlan = props.timeOffPlan;
        this.title = props.title;
        this.usePerquest = props.usePerquest;
        this.useTimeData = props.useTimeData;
        this.visaExpDate = props.visaExpDate;
        this.visaType = props.visaType;
        this.withholding = props.withholding;
        this.workCalendar = props.workCalendar;
        this.workplace = props.workplace;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.EmployeeSearchBasic = EmployeeSearchBasic;
class Partners extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.partner = props.partner;
        this.partnerRole = props.partnerRole;
        this.isPrimary = props.isPrimary;
        this.contribution = props.contribution;
    }
}
exports.Partners = Partners;
class TaxGroupSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.city = props.city;
        this.country = props.country;
        this.county = props.county;
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.includeChildren = props.includeChildren;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isDefault = props.isDefault;
        this.isInactive = props.isInactive;
        this.itemId = props.itemId;
        this.piggyBack = props.piggyBack;
        this.rate = props.rate;
        this.state = props.state;
        this.subsidiary = props.subsidiary;
        this.taxItem1 = props.taxItem1;
        this.taxItem2 = props.taxItem2;
        this.taxType = props.taxType;
        this.unitPrice1 = props.unitPrice1;
        this.unitPrice2 = props.unitPrice2;
        this.zip = props.zip;
    }
}
exports.TaxGroupSearchBasic = TaxGroupSearchBasic;
class SupportCaseSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.assigned = props.assigned;
        this.awaitingReply = props.awaitingReply;
        this.caseNumber = props.caseNumber;
        this.category = props.category;
        this.company = props.company;
        this.contact = props.contact;
        this.createdDate = props.createdDate;
        this.customerStage = props.customerStage;
        this.email = props.email;
        this.endDate = props.endDate;
        this.escalatee = props.escalatee;
        this.externalId = props.externalId;
        this.helpDesk = props.helpDesk;
        this.inboundEmail = props.inboundEmail;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.issue = props.issue;
        this.issueNumber = props.issueNumber;
        this.item = props.item;
        this.lastMessageDate = props.lastMessageDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.lastReopenedDate = props.lastReopenedDate;
        this.locked = props.locked;
        this.module = props.module;
        this.origin = props.origin;
        this.priority = props.priority;
        this.product = props.product;
        this.profile = props.profile;
        this.serialNumber = props.serialNumber;
        this.stage = props.stage;
        this.startDate = props.startDate;
        this.status = props.status;
        this.subsidiary = props.subsidiary;
        this.title = props.title;
        this.customFieldList = props.customFieldList;
    }
}
exports.SupportCaseSearchRowBasic = SupportCaseSearchRowBasic;
class FolderSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.clazz = props.clazz;
        this.department = props.department;
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.group = props.group;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.isTopLevel = props.isTopLevel;
        this.lastModifiedDate = props.lastModifiedDate;
        this.location = props.location;
        this.name = props.name;
        this.numFiles = props.numFiles;
        this.owner = props.owner;
        this.parent = props.parent;
        this.predecessor = props.predecessor;
        this._private = props._private;
        this.size = props.size;
        this.subsidiary = props.subsidiary;
    }
}
exports.FolderSearchBasic = FolderSearchBasic;
class JobSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountNumber = props.accountNumber;
        this.actualTime = props.actualTime;
        this.address = props.address;
        this.address1 = props.address1;
        this.address2 = props.address2;
        this.address3 = props.address3;
        this.addressee = props.addressee;
        this.addressInternalId = props.addressInternalId;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.allocatePayrollExpenses = props.allocatePayrollExpenses;
        this.allowAllResourcesForTasks = props.allowAllResourcesForTasks;
        this.allowExpenses = props.allowExpenses;
        this.allowTime = props.allowTime;
        this.altContact = props.altContact;
        this.altEmail = props.altEmail;
        this.altName = props.altName;
        this.altPhone = props.altPhone;
        this.attention = props.attention;
        this.billAddress1 = props.billAddress1;
        this.billAddress2 = props.billAddress2;
        this.billAddress3 = props.billAddress3;
        this.billAddressee = props.billAddressee;
        this.billAttention = props.billAttention;
        this.billCity = props.billCity;
        this.billCountry = props.billCountry;
        this.billCountryCode = props.billCountryCode;
        this.billingSchedule = props.billingSchedule;
        this.billPhone = props.billPhone;
        this.billState = props.billState;
        this.billZipCode = props.billZipCode;
        this.calculatedEndDate = props.calculatedEndDate;
        this.calculatedEndDateBaseline = props.calculatedEndDateBaseline;
        this.category = props.category;
        this.city = props.city;
        this.comments = props.comments;
        this.companyName = props.companyName;
        this.contact = props.contact;
        this.country = props.country;
        this.countryCode = props.countryCode;
        this.customer = props.customer;
        this.dateCreated = props.dateCreated;
        this.defaultTaxReg = props.defaultTaxReg;
        this.email = props.email;
        this.endDate = props.endDate;
        this.entityId = props.entityId;
        this.entityNumber = props.entityNumber;
        this.entityStatus = props.entityStatus;
        this.estimatedCost = props.estimatedCost;
        this.estimatedGrossProfit = props.estimatedGrossProfit;
        this.estimatedGrossProfitPercent = props.estimatedGrossProfitPercent;
        this.estimatedLaborCost = props.estimatedLaborCost;
        this.estimatedLaborCostBaseline = props.estimatedLaborCostBaseline;
        this.estimatedLaborRevenue = props.estimatedLaborRevenue;
        this.estimatedRevenue = props.estimatedRevenue;
        this.estimatedTime = props.estimatedTime;
        this.estimatedTimeOverride = props.estimatedTimeOverride;
        this.estimatedTimeOverrideBaseline = props.estimatedTimeOverrideBaseline;
        this.externalId = props.externalId;
        this.fax = props.fax;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.image = props.image;
        this.includeCrmTasksInTotals = props.includeCrmTasksInTotals;
        this.internalId = props.internalId;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isExemptTime = props.isExemptTime;
        this.isInactive = props.isInactive;
        this.isProductiveTime = props.isProductiveTime;
        this.isUtilizedTime = props.isUtilizedTime;
        this.jobBillingType = props.jobBillingType;
        this.jobItem = props.jobItem;
        this.jobPrice = props.jobPrice;
        this.jobResource = props.jobResource;
        this.jobResourceRole = props.jobResourceRole;
        this.language = props.language;
        this.lastBaselineDate = props.lastBaselineDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.level = props.level;
        this.limitTimeToAssignees = props.limitTimeToAssignees;
        this.materializeTime = props.materializeTime;
        this.percentComplete = props.percentComplete;
        this.percentTimeComplete = props.percentTimeComplete;
        this.permission = props.permission;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.projectedEndDate = props.projectedEndDate;
        this.projectedEndDateBaseline = props.projectedEndDateBaseline;
        this.projectExpenseType = props.projectExpenseType;
        this.revRecForecastRule = props.revRecForecastRule;
        this.shipAddress1 = props.shipAddress1;
        this.shipAddress2 = props.shipAddress2;
        this.shipAddress3 = props.shipAddress3;
        this.shipAddressee = props.shipAddressee;
        this.shipAttention = props.shipAttention;
        this.shipCity = props.shipCity;
        this.shipCountry = props.shipCountry;
        this.shipCountryCode = props.shipCountryCode;
        this.shipPhone = props.shipPhone;
        this.shipState = props.shipState;
        this.shipZip = props.shipZip;
        this.startDate = props.startDate;
        this.startDateBaseline = props.startDateBaseline;
        this.state = props.state;
        this.subscription = props.subscription;
        this.subscriptionDate = props.subscriptionDate;
        this.subscriptionStatus = props.subscriptionStatus;
        this.subsidiary = props.subsidiary;
        this.timeApproval = props.timeApproval;
        this.timeRemaining = props.timeRemaining;
        this.usePercentCompleteOverride = props.usePercentCompleteOverride;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.JobSearchRowBasic = JobSearchRowBasic;
class InboundShipmentSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.actualDeliveryDate = props.actualDeliveryDate;
        this.actualShippingDate = props.actualShippingDate;
        this.billOfLading = props.billOfLading;
        this.createdDate = props.createdDate;
        this.currency = props.currency;
        this.description = props.description;
        this.expectedDeliveryDate = props.expectedDeliveryDate;
        this.expectedRate = props.expectedRate;
        this.expectedShippingDate = props.expectedShippingDate;
        this.externalDocumentNumber = props.externalDocumentNumber;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.incoterm = props.incoterm;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.item = props.item;
        this.itemEffectiveDate = props.itemEffectiveDate;
        this.itemExchangeRate = props.itemExchangeRate;
        this.landedCostAllocationMethod = props.landedCostAllocationMethod;
        this.landedCostAmount = props.landedCostAmount;
        this.landedCostCostCategory = props.landedCostCostCategory;
        this.landedCostCurrency = props.landedCostCurrency;
        this.landedCostEffectiveDate = props.landedCostEffectiveDate;
        this.landedCostExchangeRate = props.landedCostExchangeRate;
        this.memo = props.memo;
        this.poAmount = props.poAmount;
        this.poRate = props.poRate;
        this.purchaseOrder = props.purchaseOrder;
        this.quantityBilled = props.quantityBilled;
        this.quantityExpected = props.quantityExpected;
        this.quantityReceived = props.quantityReceived;
        this.quantityRemaining = props.quantityRemaining;
        this.receivingLocation = props.receivingLocation;
        this.shipmentBaseCurrency = props.shipmentBaseCurrency;
        this.shipmentNumber = props.shipmentNumber;
        this.status = props.status;
        this.totalUnitCost = props.totalUnitCost;
        this.unit = props.unit;
        this.unitLandedCost = props.unitLandedCost;
        this.vendor = props.vendor;
        this.vesselNumber = props.vesselNumber;
        this.customFieldList = props.customFieldList;
    }
}
exports.InboundShipmentSearchBasic = InboundShipmentSearchBasic;
class ChargeSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.amount = props.amount;
        this.billingAccount = props.billingAccount;
        this.billingItem = props.billingItem;
        this.billTo = props.billTo;
        this.chargeDate = props.chargeDate;
        this.chargeType = props.chargeType;
        this.clazz = props.clazz;
        this.createdDate = props.createdDate;
        this.currency = props.currency;
        this.department = props.department;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.location = props.location;
        this.modifiedDate = props.modifiedDate;
        this.postingPeriod = props.postingPeriod;
        this.postingPeriodRelative = props.postingPeriodRelative;
        this.quantity = props.quantity;
        this.rate = props.rate;
        this.rule = props.rule;
        this.runId = props.runId;
        this.salesOrder = props.salesOrder;
        this.stage = props.stage;
        this.subscriptionLine = props.subscriptionLine;
        this.use = props.use;
        this.customFieldList = props.customFieldList;
    }
}
exports.ChargeSearchBasic = ChargeSearchBasic;
class MessageSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.author = props.author;
        this.authorEmail = props.authorEmail;
        this.bcc = props.bcc;
        this.cc = props.cc;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.hasAttachment = props.hasAttachment;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.internalOnly = props.internalOnly;
        this.message = props.message;
        this.messageDate = props.messageDate;
        this.messageType = props.messageType;
        this.recipient = props.recipient;
        this.recipientEmail = props.recipientEmail;
        this.subject = props.subject;
    }
}
exports.MessageSearchBasic = MessageSearchBasic;
class PaymentMethodSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.creditCard = props.creditCard;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isDebitCard = props.isDebitCard;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.PaymentMethodSearchRowBasic = PaymentMethodSearchRowBasic;
class TopicSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.TopicSearchBasic = TopicSearchBasic;
class JobStatusSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.JobStatusSearchRowBasic = JobStatusSearchRowBasic;
class CurrencyRateSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.baseCurrency = props.baseCurrency;
        this.effectiveDate = props.effectiveDate;
        this.exchangeRate = props.exchangeRate;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.transactionCurrency = props.transactionCurrency;
    }
}
exports.CurrencyRateSearchBasic = CurrencyRateSearchBasic;
class LandedCostData extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.costCategory = props.costCategory;
        this.amount = props.amount;
    }
}
exports.LandedCostData = LandedCostData;
class ChargeSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.amount = props.amount;
        this.billingAccount = props.billingAccount;
        this.billingItem = props.billingItem;
        this.billTo = props.billTo;
        this.chargeDate = props.chargeDate;
        this.chargeType = props.chargeType;
        this.clazz = props.clazz;
        this.createdDate = props.createdDate;
        this.currency = props.currency;
        this.department = props.department;
        this.description = props.description;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.location = props.location;
        this.modifiedDate = props.modifiedDate;
        this.postingPeriod = props.postingPeriod;
        this.quantity = props.quantity;
        this.rate = props.rate;
        this.rule = props.rule;
        this.runId = props.runId;
        this.salesOrder = props.salesOrder;
        this.stage = props.stage;
        this.subscriptionLine = props.subscriptionLine;
        this.use = props.use;
        this.customFieldList = props.customFieldList;
    }
}
exports.ChargeSearchRowBasic = ChargeSearchRowBasic;
class ManufacturingRoutingSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.autoCalculateLag = props.autoCalculateLag;
        this.billOfMaterials = props.billOfMaterials;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isDefault = props.isDefault;
        this.isInactive = props.isInactive;
        this.item = props.item;
        this.lagAmount = props.lagAmount;
        this.lagType = props.lagType;
        this.lagUnits = props.lagUnits;
        this.location = props.location;
        this.manufacturingCostTemplate = props.manufacturingCostTemplate;
        this.manufacturingWorkCenter = props.manufacturingWorkCenter;
        this.memo = props.memo;
        this.name = props.name;
        this.operationName = props.operationName;
        this.operationYield = props.operationYield;
        this.runRate = props.runRate;
        this.sequence = props.sequence;
        this.setupTime = props.setupTime;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.ManufacturingRoutingSearchBasic = ManufacturingRoutingSearchBasic;
class OpportunitySearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.amount = props.amount;
        this.availableOffline = props.availableOffline;
        this.buyingReason = props.buyingReason;
        this.buyingTimeFrame = props.buyingTimeFrame;
        this.clazz = props.clazz;
        this.closeDate = props.closeDate;
        this.competitor = props.competitor;
        this.contribution = props.contribution;
        this.currency = props.currency;
        this.custType = props.custType;
        this.dateCreated = props.dateCreated;
        this.daysOpen = props.daysOpen;
        this.daysToClose = props.daysToClose;
        this.department = props.department;
        this.entity = props.entity;
        this.entityStatus = props.entityStatus;
        this.estimatedBudget = props.estimatedBudget;
        this.expectedCloseDate = props.expectedCloseDate;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.forecastType = props.forecastType;
        this.foreignProjectedAmount = props.foreignProjectedAmount;
        this.foreignRangeHigh = props.foreignRangeHigh;
        this.foreignRangeLow = props.foreignRangeLow;
        this.fxTranCostEstimate = props.fxTranCostEstimate;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isBudgetApproved = props.isBudgetApproved;
        this.item = props.item;
        this.lastModifiedDate = props.lastModifiedDate;
        this.leadSource = props.leadSource;
        this.location = props.location;
        this.memo = props.memo;
        this.number = props.number;
        this.partner = props.partner;
        this.partnerContribution = props.partnerContribution;
        this.partnerRole = props.partnerRole;
        this.partnerTeamMember = props.partnerTeamMember;
        this.postingPeriod = props.postingPeriod;
        this.postingPeriodRelative = props.postingPeriodRelative;
        this.probability = props.probability;
        this.projAltSalesAmt = props.projAltSalesAmt;
        this.projectedTotal = props.projectedTotal;
        this.rangeHigh = props.rangeHigh;
        this.rangeHighAlt = props.rangeHighAlt;
        this.rangeLow = props.rangeLow;
        this.rangeLowAlt = props.rangeLowAlt;
        this.salesReadiness = props.salesReadiness;
        this.salesRep = props.salesRep;
        this.salesTeamMember = props.salesTeamMember;
        this.salesTeamRole = props.salesTeamRole;
        this.status = props.status;
        this.subsidiary = props.subsidiary;
        this.taxPeriod = props.taxPeriod;
        this.taxPeriodRelative = props.taxPeriodRelative;
        this.title = props.title;
        this.tranCostEstimate = props.tranCostEstimate;
        this.tranDate = props.tranDate;
        this.tranEstGrossProfit = props.tranEstGrossProfit;
        this.tranEstGrossProfitPct = props.tranEstGrossProfitPct;
        this.tranFxEstGrossProfit = props.tranFxEstGrossProfit;
        this.tranId = props.tranId;
        this.winLossReason = props.winLossReason;
        this.wonBy = props.wonBy;
        this.customFieldList = props.customFieldList;
    }
}
exports.OpportunitySearchBasic = OpportunitySearchBasic;
class GroupMemberSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.groupId = props.groupId;
    }
}
exports.GroupMemberSearchBasic = GroupMemberSearchBasic;
class EntitySearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.address = props.address;
        this.addressee = props.addressee;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.attention = props.attention;
        this.city = props.city;
        this.comments = props.comments;
        this.country = props.country;
        this.county = props.county;
        this.dateCreated = props.dateCreated;
        this.defaultTaxReg = props.defaultTaxReg;
        this.defaultTaxRegText = props.defaultTaxRegText;
        this.email = props.email;
        this.entityId = props.entityId;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.fax = props.fax;
        this.giveAccess = props.giveAccess;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.image = props.image;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isInactive = props.isInactive;
        this.language = props.language;
        this.lastModifiedDate = props.lastModifiedDate;
        this.level = props.level;
        this.permission = props.permission;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.state = props.state;
        this.subsidiary = props.subsidiary;
        this.type = props.type;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.EntitySearchBasic = EntitySearchBasic;
class VendorCategorySearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.isTaxAgency = props.isTaxAgency;
        this.name = props.name;
    }
}
exports.VendorCategorySearchBasic = VendorCategorySearchBasic;
class EntityTaxRegistrationSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.address = props.address;
        this.id = props.id;
        this.nexusCountry = props.nexusCountry;
        this.taxRegistrationNumber = props.taxRegistrationNumber;
    }
}
exports.EntityTaxRegistrationSearchBasic = EntityTaxRegistrationSearchBasic;
class PhoneCallSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.assigned = props.assigned;
        this.company = props.company;
        this.completedDate = props.completedDate;
        this.contact = props.contact;
        this.createdBy = props.createdBy;
        this.createdDate = props.createdDate;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isPrivate = props.isPrivate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.owner = props.owner;
        this.phone = props.phone;
        this.priority = props.priority;
        this.startDate = props.startDate;
        this.status = props.status;
        this.title = props.title;
        this.customFieldList = props.customFieldList;
    }
}
exports.PhoneCallSearchBasic = PhoneCallSearchBasic;
class AssemblyItemBomSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.assembly = props.assembly;
        this.billOfMaterials = props.billOfMaterials;
        this._default = props._default;
        this.locations = props.locations;
    }
}
exports.AssemblyItemBomSearchBasic = AssemblyItemBomSearchBasic;
class ProjectTaskSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.actualWork = props.actualWork;
        this.assignee = props.assignee;
        this.company = props.company;
        this.constraintType = props.constraintType;
        this.contact = props.contact;
        this.cost = props.cost;
        this.costBase = props.costBase;
        this.costBaseBaseline = props.costBaseBaseline;
        this.costBaseline = props.costBaseline;
        this.costBaseVariance = props.costBaseVariance;
        this.costVariance = props.costVariance;
        this.costVariancePercent = props.costVariancePercent;
        this.createdDate = props.createdDate;
        this.endDate = props.endDate;
        this.endDateBaseline = props.endDateBaseline;
        this.endDateVariance = props.endDateVariance;
        this.estimatedWork = props.estimatedWork;
        this.estimatedWorkBaseline = props.estimatedWorkBaseline;
        this.estimatedWorkVariance = props.estimatedWorkVariance;
        this.estimatedWorkVariancePercent = props.estimatedWorkVariancePercent;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.finishByDate = props.finishByDate;
        this.id = props.id;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isMilestone = props.isMilestone;
        this.isSummaryTask = props.isSummaryTask;
        this.lastModifiedDate = props.lastModifiedDate;
        this.nonBillableTask = props.nonBillableTask;
        this.owner = props.owner;
        this.parent = props.parent;
        this.percentWorkComplete = props.percentWorkComplete;
        this.predecessor = props.predecessor;
        this.predecessors = props.predecessors;
        this.priority = props.priority;
        this.remainingWork = props.remainingWork;
        this.startDate = props.startDate;
        this.startDateBaseline = props.startDateBaseline;
        this.startDateVariance = props.startDateVariance;
        this.status = props.status;
        this.successor = props.successor;
        this.title = props.title;
        this.customFieldList = props.customFieldList;
    }
}
exports.ProjectTaskSearchBasic = ProjectTaskSearchBasic;
class AddressSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.address = props.address;
        this.address1 = props.address1;
        this.address2 = props.address2;
        this.address3 = props.address3;
        this.addressee = props.addressee;
        this.attention = props.attention;
        this.city = props.city;
        this.country = props.country;
        this.countryCode = props.countryCode;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.override = props.override;
        this.phone = props.phone;
        this.state = props.state;
        this.zip = props.zip;
        this.customFieldList = props.customFieldList;
    }
}
exports.AddressSearchRowBasic = AddressSearchRowBasic;
class CustomerSubsidiaryRelationshipSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.balance = props.balance;
        this.depositBalance = props.depositBalance;
        this.entity = props.entity;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isPrimarySub = props.isPrimarySub;
        this.primaryCurrency = props.primaryCurrency;
        this.subsidiary = props.subsidiary;
        this.unbilledOrders = props.unbilledOrders;
        this.customFieldList = props.customFieldList;
    }
}
exports.CustomerSubsidiaryRelationshipSearchBasic = CustomerSubsidiaryRelationshipSearchBasic;
class PricingGroupSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.PricingGroupSearchBasic = PricingGroupSearchBasic;
class BillingAccountSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.billingSchedule = props.billingSchedule;
        this.cashSaleForm = props.cashSaleForm;
        this.clazz = props.clazz;
        this.currency = props.currency;
        this.customer = props.customer;
        this.customerDefault = props.customerDefault;
        this.dateCreated = props.dateCreated;
        this.department = props.department;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.frequency = props.frequency;
        this.idNumber = props.idNumber;
        this.inactive = props.inactive;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.invoiceForm = props.invoiceForm;
        this.lastBillCycleDate = props.lastBillCycleDate;
        this.lastBillDate = props.lastBillDate;
        this.location = props.location;
        this.memo = props.memo;
        this.name = props.name;
        this.nextBillCycleDate = props.nextBillCycleDate;
        this.startDate = props.startDate;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.BillingAccountSearchBasic = BillingAccountSearchBasic;
class PresentationItem extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.item = props.item;
        this.itemType = props.itemType;
        this.description = props.description;
        this.onlinePrice = props.onlinePrice;
        this.basePrice = props.basePrice;
    }
}
exports.PresentationItem = PresentationItem;
class PayrollItemSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.expenseAccount = props.expenseAccount;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.itemTypeNoHierarchy = props.itemTypeNoHierarchy;
        this.liabilityAccount = props.liabilityAccount;
        this.name = props.name;
        this.subsidiary = props.subsidiary;
        this.vendor = props.vendor;
        this.customFieldList = props.customFieldList;
    }
}
exports.PayrollItemSearchBasic = PayrollItemSearchBasic;
class ManufacturingCostTemplateSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.item = props.item;
        this.memo = props.memo;
        this.name = props.name;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.ManufacturingCostTemplateSearchBasic = ManufacturingCostTemplateSearchBasic;
class NoteSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.author = props.author;
        this.direction = props.direction;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.note = props.note;
        this.noteDate = props.noteDate;
        this.noteType = props.noteType;
        this.title = props.title;
        this.customFieldList = props.customFieldList;
    }
}
exports.NoteSearchRowBasic = NoteSearchRowBasic;
class GiftCertificateSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.amountAvailableBilled = props.amountAvailableBilled;
        this.amountRemaining = props.amountRemaining;
        this.createdDate = props.createdDate;
        this.email = props.email;
        this.expirationDate = props.expirationDate;
        this.giftCertCode = props.giftCertCode;
        this.incomeAccount = props.incomeAccount;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isActive = props.isActive;
        this.item = props.item;
        this.liabilityAccount = props.liabilityAccount;
        this.message = props.message;
        this.name = props.name;
        this.originalAmount = props.originalAmount;
        this.purchaseDate = props.purchaseDate;
        this.sender = props.sender;
        this.customFieldList = props.customFieldList;
    }
}
exports.GiftCertificateSearchBasic = GiftCertificateSearchBasic;
class Address extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.internalId = props.internalId;
        this.country = props.country;
        this.attention = props.attention;
        this.addressee = props.addressee;
        this.addrPhone = props.addrPhone;
        this.addr1 = props.addr1;
        this.addr2 = props.addr2;
        this.addr3 = props.addr3;
        this.city = props.city;
        this.state = props.state;
        this.zip = props.zip;
        this.addrText = props.addrText;
        this.override = props.override;
        this.customFieldList = props.customFieldList;
    }
}
exports.Address = Address;
class CalendarEventSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accessLevel = props.accessLevel;
        this.attendee = props.attendee;
        this.company = props.company;
        this.completedDate = props.completedDate;
        this.contact = props.contact;
        this.createdDate = props.createdDate;
        this.endTime = props.endTime;
        this.externalId = props.externalId;
        this.instanceEnd = props.instanceEnd;
        this.instanceStart = props.instanceStart;
        this.internalId = props.internalId;
        this.lastModifiedDate = props.lastModifiedDate;
        this.location = props.location;
        this.markdone = props.markdone;
        this.message = props.message;
        this.organizer = props.organizer;
        this.owner = props.owner;
        this.recurrence = props.recurrence;
        this.resource = props.resource;
        this.response = props.response;
        this.startDate = props.startDate;
        this.startTime = props.startTime;
        this.status = props.status;
        this.title = props.title;
        this.transaction = props.transaction;
        this.customFieldList = props.customFieldList;
    }
}
exports.CalendarEventSearchRowBasic = CalendarEventSearchRowBasic;
class CustomerCategorySearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.CustomerCategorySearchRowBasic = CustomerCategorySearchRowBasic;
class AccountSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingContext = props.accountingContext;
        this.balance = props.balance;
        this.cashFlowRateType = props.cashFlowRateType;
        this.category1099Misc = props.category1099Misc;
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.generalRateType = props.generalRateType;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.legalName = props.legalName;
        this.locale = props.locale;
        this.localizedLegalName = props.localizedLegalName;
        this.localizedName = props.localizedName;
        this.localizedNumber = props.localizedNumber;
        this.name = props.name;
        this.number = props.number;
        this.parent = props.parent;
        this.subsidiary = props.subsidiary;
        this.type = props.type;
        this.customFieldList = props.customFieldList;
    }
}
exports.AccountSearchBasic = AccountSearchBasic;
class TimeBillSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.approvalStatus = props.approvalStatus;
        this._break = props._break;
        this.clazz = props.clazz;
        this.customer = props.customer;
        this.date = props.date;
        this.dateCreated = props.dateCreated;
        this.department = props.department;
        this.durationDecimal = props.durationDecimal;
        this.employee = props.employee;
        this.endTime = props.endTime;
        this.externalId = props.externalId;
        this.hours = props.hours;
        this.internalId = props.internalId;
        this.isBillable = props.isBillable;
        this.isExempt = props.isExempt;
        this.isProductive = props.isProductive;
        this.isUtilized = props.isUtilized;
        this.item = props.item;
        this.lastModified = props.lastModified;
        this.location = props.location;
        this.memo = props.memo;
        this.paidExternally = props.paidExternally;
        this.payItem = props.payItem;
        this.payrollDate = props.payrollDate;
        this.rate = props.rate;
        this.rejectionNote = props.rejectionNote;
        this.startTime = props.startTime;
        this.status = props.status;
        this.subsidiary = props.subsidiary;
        this.supervisorApproval = props.supervisorApproval;
        this.temporaryLocalJurisdiction = props.temporaryLocalJurisdiction;
        this.temporaryStateJurisdiction = props.temporaryStateJurisdiction;
        this.timeModified = props.timeModified;
        this.timeSheet = props.timeSheet;
        this.type = props.type;
        this.customFieldList = props.customFieldList;
    }
}
exports.TimeBillSearchRowBasic = TimeBillSearchRowBasic;
class OtherNameCategorySearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.OtherNameCategorySearchRowBasic = OtherNameCategorySearchRowBasic;
class SalesTaxItemSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.itemId = props.itemId;
        this.name = props.name;
        this.taxType = props.taxType;
    }
}
exports.SalesTaxItemSearchBasic = SalesTaxItemSearchBasic;
class ItemAccountMappingSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBook = props.accountingBook;
        this.clazz = props.clazz;
        this.customDimension = props.customDimension;
        this.department = props.department;
        this.destinationAccount = props.destinationAccount;
        this.effectiveDate = props.effectiveDate;
        this.endDate = props.endDate;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.itemAccount = props.itemAccount;
        this.location = props.location;
        this.sourceAccount = props.sourceAccount;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.ItemAccountMappingSearchBasic = ItemAccountMappingSearchBasic;
class InstallmentSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.amount = props.amount;
        this.amountPaid = props.amountPaid;
        this.amountRemaining = props.amountRemaining;
        this.daysOverdue = props.daysOverdue;
        this.dueDate = props.dueDate;
        this.fxAmount = props.fxAmount;
        this.fxAmountPaid = props.fxAmountPaid;
        this.fxAmountRemaining = props.fxAmountRemaining;
        this.installmentNumber = props.installmentNumber;
        this.status = props.status;
        this.customFieldList = props.customFieldList;
    }
}
exports.InstallmentSearchRowBasic = InstallmentSearchRowBasic;
class TimeItem extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.id = props.id;
        this.employee = props.employee;
        this.timeType = props.timeType;
        this.tranDate = props.tranDate;
        this.customer = props.customer;
        this.isBillable = props.isBillable;
        this.payrollItem = props.payrollItem;
        this.item = props.item;
        this.temporaryLocalJurisdiction = props.temporaryLocalJurisdiction;
        this.temporaryStateJurisdiction = props.temporaryStateJurisdiction;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.hours = props.hours;
        this.price = props.price;
        this.rate = props.rate;
        this.overrideRate = props.overrideRate;
        this.hoursTotal = props.hoursTotal;
        this.caseTaskEvent = props.caseTaskEvent;
        this.memo = props.memo;
        this.isUtilized = props.isUtilized;
        this.isProductive = props.isProductive;
        this.isExempt = props.isExempt;
    }
}
exports.TimeItem = TimeItem;
class TermSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.dateDriven = props.dateDriven;
        this.dayDiscountExpires = props.dayDiscountExpires;
        this.dayOfMonthNetDue = props.dayOfMonthNetDue;
        this.daysUntilExpiry = props.daysUntilExpiry;
        this.daysUntilNetDue = props.daysUntilNetDue;
        this.discountPercent = props.discountPercent;
        this.discountPercentDateDriven = props.discountPercentDateDriven;
        this.dueNextMonthIfWithinDays = props.dueNextMonthIfWithinDays;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.installment = props.installment;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.preferred = props.preferred;
        this.recurrenceCount = props.recurrenceCount;
        this.recurrenceFrequency = props.recurrenceFrequency;
        this.repeatEvery = props.repeatEvery;
        this.splitEvenly = props.splitEvenly;
    }
}
exports.TermSearchBasic = TermSearchBasic;
class TransactionSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.accountType = props.accountType;
        this.acctCorpCardExp = props.acctCorpCardExp;
        this.actualShipDate = props.actualShipDate;
        this.altSalesAmount = props.altSalesAmount;
        this.altSalesNetAmount = props.altSalesNetAmount;
        this.amount = props.amount;
        this.amountPaid = props.amountPaid;
        this.amountRemaining = props.amountRemaining;
        this.amountUnbilled = props.amountUnbilled;
        this.anyLineItem = props.anyLineItem;
        this.appliedToForeignAmount = props.appliedToForeignAmount;
        this.appliedToIsFxVariance = props.appliedToIsFxVariance;
        this.appliedToLinkAmount = props.appliedToLinkAmount;
        this.appliedToLinkType = props.appliedToLinkType;
        this.appliedToTransaction = props.appliedToTransaction;
        this.applyingForeignAmount = props.applyingForeignAmount;
        this.applyingIsFxVariance = props.applyingIsFxVariance;
        this.applyingLinkAmount = props.applyingLinkAmount;
        this.applyingLinkType = props.applyingLinkType;
        this.applyingTransaction = props.applyingTransaction;
        this.approvalStatus = props.approvalStatus;
        this.authCode = props.authCode;
        this.autoCalculateLag = props.autoCalculateLag;
        this.avsStreetMatch = props.avsStreetMatch;
        this.avsZipMatch = props.avsZipMatch;
        this.billable = props.billable;
        this.billAddress = props.billAddress;
        this.billAddressee = props.billAddressee;
        this.billAttention = props.billAttention;
        this.billCity = props.billCity;
        this.billCountry = props.billCountry;
        this.billCounty = props.billCounty;
        this.billedDate = props.billedDate;
        this.billingAccount = props.billingAccount;
        this.billingSchedule = props.billingSchedule;
        this.billingStatus = props.billingStatus;
        this.billingTransaction = props.billingTransaction;
        this.billPhone = props.billPhone;
        this.billState = props.billState;
        this.billVarianceStatus = props.billVarianceStatus;
        this.billZip = props.billZip;
        this.binNumber = props.binNumber;
        this.binNumberQuantity = props.binNumberQuantity;
        this.bomQuantity = props.bomQuantity;
        this.bookSpecificTransaction = props.bookSpecificTransaction;
        this.buildEntireAssembly = props.buildEntireAssembly;
        this.buildVariance = props.buildVariance;
        this.built = props.built;
        this.canHaveStackablePromotions = props.canHaveStackablePromotions;
        this.catchUpPeriod = props.catchUpPeriod;
        this.ccCustomerCode = props.ccCustomerCode;
        this.ccExpireDate = props.ccExpireDate;
        this.ccName = props.ccName;
        this.ccNumber = props.ccNumber;
        this.chargeType = props.chargeType;
        this.clazz = props.clazz;
        this.cleared = props.cleared;
        this.closed = props.closed;
        this.closeDate = props.closeDate;
        this.cogs = props.cogs;
        this.commissionEffectiveDate = props.commissionEffectiveDate;
        this.commit = props.commit;
        this.componentYield = props.componentYield;
        this.confirmationNumber = props.confirmationNumber;
        this.contribution = props.contribution;
        this.costComponentAmount = props.costComponentAmount;
        this.costComponentCategory = props.costComponentCategory;
        this.costComponentItem = props.costComponentItem;
        this.costComponentQuantity = props.costComponentQuantity;
        this.costComponentStandardCost = props.costComponentStandardCost;
        this.costEstimate = props.costEstimate;
        this.costEstimateRate = props.costEstimateRate;
        this.costEstimateType = props.costEstimateType;
        this.createdBy = props.createdBy;
        this.createdFrom = props.createdFrom;
        this.creditAmount = props.creditAmount;
        this.cscMatch = props.cscMatch;
        this.currency = props.currency;
        this.customerSubOf = props.customerSubOf;
        this.customForm = props.customForm;
        this.customGL = props.customGL;
        this.custType = props.custType;
        this.dateCreated = props.dateCreated;
        this.daysOpen = props.daysOpen;
        this.daysOverdue = props.daysOverdue;
        this.debitAmount = props.debitAmount;
        this.deferredRevenue = props.deferredRevenue;
        this.deferRevRec = props.deferRevRec;
        this.department = props.department;
        this.depositDate = props.depositDate;
        this.depositTransaction = props.depositTransaction;
        this.drAccount = props.drAccount;
        this.dueDate = props.dueDate;
        this.email = props.email;
        this.employee = props.employee;
        this.endDate = props.endDate;
        this.entity = props.entity;
        this.entityStatus = props.entityStatus;
        this.estGrossProfit = props.estGrossProfit;
        this.estGrossProfitPct = props.estGrossProfitPct;
        this.exchangeRate = props.exchangeRate;
        this.excludeCommission = props.excludeCommission;
        this.excludeFromRateRequest = props.excludeFromRateRequest;
        this.expectedCloseDate = props.expectedCloseDate;
        this.expectedReceiptDate = props.expectedReceiptDate;
        this.expenseCategory = props.expenseCategory;
        this.expenseDate = props.expenseDate;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.finChrg = props.finChrg;
        this.firmed = props.firmed;
        this.forecastType = props.forecastType;
        this.fulfillingTransaction = props.fulfillingTransaction;
        this.fxAccount = props.fxAccount;
        this.fxAmount = props.fxAmount;
        this.fxCostEstimate = props.fxCostEstimate;
        this.fxCostEstimateRate = props.fxCostEstimateRate;
        this.fxEstGrossProfit = props.fxEstGrossProfit;
        this.fxTranCostEstimate = props.fxTranCostEstimate;
        this.fxVsoeAllocation = props.fxVsoeAllocation;
        this.fxVsoeAmount = props.fxVsoeAmount;
        this.fxVsoePrice = props.fxVsoePrice;
        this.gcoAvailabelToCharge = props.gcoAvailabelToCharge;
        this.gcoAvailableToRefund = props.gcoAvailableToRefund;
        this.gcoAvsStreetMatch = props.gcoAvsStreetMatch;
        this.gcoAvsZipMatch = props.gcoAvsZipMatch;
        this.gcoBuyerAccountAge = props.gcoBuyerAccountAge;
        this.gcoBuyerIp = props.gcoBuyerIp;
        this.gcoChargeAmount = props.gcoChargeAmount;
        this.gcoChargebackAmount = props.gcoChargebackAmount;
        this.gcoConfirmedChargedTotal = props.gcoConfirmedChargedTotal;
        this.gcoConfirmedRefundedTotal = props.gcoConfirmedRefundedTotal;
        this.gcoCreditcardNumber = props.gcoCreditcardNumber;
        this.gcoCscMatch = props.gcoCscMatch;
        this.gcoFinancialState = props.gcoFinancialState;
        this.gcoFulfillmentState = props.gcoFulfillmentState;
        this.gcoOrderId = props.gcoOrderId;
        this.gcoOrderTotal = props.gcoOrderTotal;
        this.gcoPromotionAmount = props.gcoPromotionAmount;
        this.gcoPromotionName = props.gcoPromotionName;
        this.gcoRefundAmount = props.gcoRefundAmount;
        this.gcoShippingTotal = props.gcoShippingTotal;
        this.gcoStateChangedDetail = props.gcoStateChangedDetail;
        this.giftCertificate = props.giftCertificate;
        this.grossAmount = props.grossAmount;
        this.includeInForecast = props.includeInForecast;
        this.incoterm = props.incoterm;
        this.intercoStatus = props.intercoStatus;
        this.intercoTransaction = props.intercoTransaction;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.inventoryLocation = props.inventoryLocation;
        this.inventorySubsidiary = props.inventorySubsidiary;
        this.inVsoeBundle = props.inVsoeBundle;
        this.isAllocation = props.isAllocation;
        this.isBackflush = props.isBackflush;
        this.isGcoChargeback = props.isGcoChargeback;
        this.isGcoChargeConfirmed = props.isGcoChargeConfirmed;
        this.isGcoPaymentGuaranteed = props.isGcoPaymentGuaranteed;
        this.isGcoRefundConfirmed = props.isGcoRefundConfirmed;
        this.isInsideDelivery = props.isInsideDelivery;
        this.isInsidePickup = props.isInsidePickup;
        this.isIntercompanyAdjustment = props.isIntercompanyAdjustment;
        this.isInTransitPayment = props.isInTransitPayment;
        this.isMultiShipTo = props.isMultiShipTo;
        this.isPayPalMeth = props.isPayPalMeth;
        this.isReversal = props.isReversal;
        this.isRevRecTransaction = props.isRevRecTransaction;
        this.isScrap = props.isScrap;
        this.isShipAddress = props.isShipAddress;
        this.isTransferPriceCosting = props.isTransferPriceCosting;
        this.isVsoeAlloc = props.isVsoeAlloc;
        this.isWip = props.isWip;
        this.item = props.item;
        this.itemFulfillmentChoice = props.itemFulfillmentChoice;
        this.itemRevision = props.itemRevision;
        this.itemSubOf = props.itemSubOf;
        this.landedCostPerLine = props.landedCostPerLine;
        this.lastModifiedDate = props.lastModifiedDate;
        this.leadSource = props.leadSource;
        this.lineUniqueKey = props.lineUniqueKey;
        this.location = props.location;
        this.locationAutoAssigned = props.locationAutoAssigned;
        this.mainLine = props.mainLine;
        this.mainName = props.mainName;
        this.manufacturingRouting = props.manufacturingRouting;
        this.matchBillToReceipt = props.matchBillToReceipt;
        this.memo = props.memo;
        this.memoMain = props.memoMain;
        this.memorized = props.memorized;
        this.merchantAccount = props.merchantAccount;
        this.message = props.message;
        this.multiSubsidiary = props.multiSubsidiary;
        this.nameText = props.nameText;
        this.netAmount = props.netAmount;
        this.nextApprover = props.nextApprover;
        this.nextBillDate = props.nextBillDate;
        this.nexus = props.nexus;
        this.noAutoAssignLocation = props.noAutoAssignLocation;
        this.nonReimbursable = props.nonReimbursable;
        this.number = props.number;
        this.oneTimeTotal = props.oneTimeTotal;
        this.opportunity = props.opportunity;
        this.orderPriority = props.orderPriority;
        this.otherRefNum = props.otherRefNum;
        this.otherRefNumNonDeposit = props.otherRefNumNonDeposit;
        this.overheadParentItem = props.overheadParentItem;
        this.overrideInstallments = props.overrideInstallments;
        this.packageCount = props.packageCount;
        this.paidTransaction = props.paidTransaction;
        this.parent = props.parent;
        this.partner = props.partner;
        this.partnerContribution = props.partnerContribution;
        this.partnerRole = props.partnerRole;
        this.partnerTeamMember = props.partnerTeamMember;
        this.payingTransaction = props.payingTransaction;
        this.paymentApproved = props.paymentApproved;
        this.paymentEventDate = props.paymentEventDate;
        this.paymentEventHoldReason = props.paymentEventHoldReason;
        this.paymentEventPurchaseCardUsed = props.paymentEventPurchaseCardUsed;
        this.paymentEventPurchaseDataSent = props.paymentEventPurchaseDataSent;
        this.paymentEventResult = props.paymentEventResult;
        this.paymentEventType = props.paymentEventType;
        this.paymentHold = props.paymentHold;
        this.paymentMethod = props.paymentMethod;
        this.paymentOption = props.paymentOption;
        this.payPalPending = props.payPalPending;
        this.payPalStatus = props.payPalStatus;
        this.payPalTranId = props.payPalTranId;
        this.pnRefNum = props.pnRefNum;
        this.poAsText = props.poAsText;
        this.posting = props.posting;
        this.postingPeriod = props.postingPeriod;
        this.postingPeriodRelative = props.postingPeriodRelative;
        this.priceLevel = props.priceLevel;
        this.printedPickingTicket = props.printedPickingTicket;
        this.probability = props.probability;
        this.projectedAmount = props.projectedAmount;
        this.projectTask = props.projectTask;
        this.promoCode = props.promoCode;
        this.purchaseOrder = props.purchaseOrder;
        this.quantity = props.quantity;
        this.quantityBilled = props.quantityBilled;
        this.quantityCommitted = props.quantityCommitted;
        this.quantityPacked = props.quantityPacked;
        this.quantityPicked = props.quantityPicked;
        this.quantityRevCommitted = props.quantityRevCommitted;
        this.quantityShipRecv = props.quantityShipRecv;
        this.recognizedRevenue = props.recognizedRevenue;
        this.recordType = props.recordType;
        this.recurAnnuallyTotal = props.recurAnnuallyTotal;
        this.recurMonthlyTotal = props.recurMonthlyTotal;
        this.recurQuarterlyTotal = props.recurQuarterlyTotal;
        this.recurringBill = props.recurringBill;
        this.recurWeeklyTotal = props.recurWeeklyTotal;
        this.refNumber = props.refNumber;
        this.revCommitStatus = props.revCommitStatus;
        this.revCommittingStatus = props.revCommittingStatus;
        this.revCommittingTransaction = props.revCommittingTransaction;
        this.revenueStatus = props.revenueStatus;
        this.reversalDate = props.reversalDate;
        this.reversalNumber = props.reversalNumber;
        this.revRecEndDate = props.revRecEndDate;
        this.revRecOnRevCommitment = props.revRecOnRevCommitment;
        this.revRecStartDate = props.revRecStartDate;
        this.revRecTermInMonths = props.revRecTermInMonths;
        this.salesEffectiveDate = props.salesEffectiveDate;
        this.salesOrder = props.salesOrder;
        this.salesRep = props.salesRep;
        this.salesTeamMember = props.salesTeamMember;
        this.salesTeamRole = props.salesTeamRole;
        this.schedulingMethod = props.schedulingMethod;
        this.serialNumber = props.serialNumber;
        this.serialNumberCost = props.serialNumberCost;
        this.serialNumberCostAdjustment = props.serialNumberCostAdjustment;
        this.serialNumberQuantity = props.serialNumberQuantity;
        this.serialNumbers = props.serialNumbers;
        this.shipAddress = props.shipAddress;
        this.shipAddressee = props.shipAddressee;
        this.shipAttention = props.shipAttention;
        this.shipCarrier = props.shipCarrier;
        this.shipCity = props.shipCity;
        this.shipComplete = props.shipComplete;
        this.shipCountry = props.shipCountry;
        this.shipCounty = props.shipCounty;
        this.shipDate = props.shipDate;
        this.shipGroup = props.shipGroup;
        this.shipMethod = props.shipMethod;
        this.shipPhone = props.shipPhone;
        this.shipping = props.shipping;
        this.shipRecvStatus = props.shipRecvStatus;
        this.shipRecvStatusLine = props.shipRecvStatusLine;
        this.shipState = props.shipState;
        this.shipTo = props.shipTo;
        this.shipZip = props.shipZip;
        this.source = props.source;
        this.startDate = props.startDate;
        this.statistical = props.statistical;
        this.status = props.status;
        this.subscription = props.subscription;
        this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
        this.subscriptionLine = props.subscriptionLine;
        this.subsidiary = props.subsidiary;
        this.taxItem = props.taxItem;
        this.taxLine = props.taxLine;
        this.taxPeriod = props.taxPeriod;
        this.taxPeriodRelative = props.taxPeriodRelative;
        this.taxPointDate = props.taxPointDate;
        this.taxRate = props.taxRate;
        this.terms = props.terms;
        this.termsOfSale = props.termsOfSale;
        this.title = props.title;
        this.toBeEmailed = props.toBeEmailed;
        this.toBePrinted = props.toBePrinted;
        this.toSubsidiary = props.toSubsidiary;
        this.totalAmount = props.totalAmount;
        this.trackingNumbers = props.trackingNumbers;
        this.tranCostEstimate = props.tranCostEstimate;
        this.tranDate = props.tranDate;
        this.tranEstGrossProfit = props.tranEstGrossProfit;
        this.tranEstGrossProfitPct = props.tranEstGrossProfitPct;
        this.tranFxEstGrossProfit = props.tranFxEstGrossProfit;
        this.tranId = props.tranId;
        this.tranIsVsoeBundle = props.tranIsVsoeBundle;
        this.transactionDiscount = props.transactionDiscount;
        this.transactionLineType = props.transactionLineType;
        this.transactionNumber = props.transactionNumber;
        this.transferLocation = props.transferLocation;
        this.transferOrderQuantityCommitted = props.transferOrderQuantityCommitted;
        this.transferOrderQuantityPacked = props.transferOrderQuantityPacked;
        this.transferOrderQuantityPicked = props.transferOrderQuantityPicked;
        this.transferOrderQuantityReceived = props.transferOrderQuantityReceived;
        this.transferOrderQuantityShipped = props.transferOrderQuantityShipped;
        this.type = props.type;
        this.unit = props.unit;
        this.unitCostOverride = props.unitCostOverride;
        this.unitsType = props.unitsType;
        this.vendType = props.vendType;
        this.visibleToCustomer = props.visibleToCustomer;
        this.voided = props.voided;
        this.vsoeAllocation = props.vsoeAllocation;
        this.vsoeAmount = props.vsoeAmount;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoeDelivered = props.vsoeDelivered;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoePrice = props.vsoePrice;
        this.webSite = props.webSite;
        this.customFieldList = props.customFieldList;
    }
}
exports.TransactionSearchBasic = TransactionSearchBasic;
class NoteTypeSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.NoteTypeSearchBasic = NoteTypeSearchBasic;
class GlobalAccountMappingSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBook = props.accountingBook;
        this.clazz = props.clazz;
        this.customDimension = props.customDimension;
        this.department = props.department;
        this.destinationAccount = props.destinationAccount;
        this.effectiveDate = props.effectiveDate;
        this.endDate = props.endDate;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.location = props.location;
        this.sourceAccount = props.sourceAccount;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.GlobalAccountMappingSearchRowBasic = GlobalAccountMappingSearchRowBasic;
class TimeEntrySearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.approvalStatus = props.approvalStatus;
        this.billingClass = props.billingClass;
        this.billingStatus = props.billingStatus;
        this._break = props._break;
        this.caseTaskEvent = props.caseTaskEvent;
        this.clazz = props.clazz;
        this.classNoHierarchy = props.classNoHierarchy;
        this.customer = props.customer;
        this.date = props.date;
        this.dateCreated = props.dateCreated;
        this.department = props.department;
        this.departmentNoHierarchy = props.departmentNoHierarchy;
        this.durationDecimal = props.durationDecimal;
        this.employee = props.employee;
        this.endTime = props.endTime;
        this.externalId = props.externalId;
        this.hours = props.hours;
        this.internalId = props.internalId;
        this.isBillable = props.isBillable;
        this.isExempt = props.isExempt;
        this.isProductive = props.isProductive;
        this.isUtilized = props.isUtilized;
        this.item = props.item;
        this.lastModified = props.lastModified;
        this.location = props.location;
        this.locationNoHierarchy = props.locationNoHierarchy;
        this.memo = props.memo;
        this.nextApprover = props.nextApprover;
        this.paidExternally = props.paidExternally;
        this.payItem = props.payItem;
        this.payrollDate = props.payrollDate;
        this.rate = props.rate;
        this.startTime = props.startTime;
        this.subsidiary = props.subsidiary;
        this.subsidiaryNoHierarchy = props.subsidiaryNoHierarchy;
        this.timeSheet = props.timeSheet;
        this.type = props.type;
        this.customFieldList = props.customFieldList;
    }
}
exports.TimeEntrySearchRowBasic = TimeEntrySearchRowBasic;
class TermSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.dateDriven = props.dateDriven;
        this.dayDiscountExpires = props.dayDiscountExpires;
        this.dayOfMonthNetDue = props.dayOfMonthNetDue;
        this.daysUntilExpiry = props.daysUntilExpiry;
        this.daysUntilNetDue = props.daysUntilNetDue;
        this.discountPercent = props.discountPercent;
        this.discountPercentDateDriven = props.discountPercentDateDriven;
        this.dueNextMonthIfWithinDays = props.dueNextMonthIfWithinDays;
        this.externalId = props.externalId;
        this.installment = props.installment;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.preferred = props.preferred;
        this.recurrenceCount = props.recurrenceCount;
        this.recurrenceFrequency = props.recurrenceFrequency;
        this.repeatEvery = props.repeatEvery;
        this.splitEvenly = props.splitEvenly;
    }
}
exports.TermSearchRowBasic = TermSearchRowBasic;
class InventoryDetailSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.binNumber = props.binNumber;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.inventoryNumber = props.inventoryNumber;
        this.quantity = props.quantity;
    }
}
exports.InventoryDetailSearchRowBasic = InventoryDetailSearchRowBasic;
class PaycheckSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.amendedDate = props.amendedDate;
        this.amount = props.amount;
        this.batchNumber = props.batchNumber;
        this.checkDate = props.checkDate;
        this.employee = props.employee;
        this.externalId = props.externalId;
        this.hasGLImpact = props.hasGLImpact;
        this.hours = props.hours;
        this.internalId = props.internalId;
        this.payrollItem = props.payrollItem;
        this.payrollItemType = props.payrollItemType;
        this.subjectWages = props.subjectWages;
        this.taxableWages = props.taxableWages;
    }
}
exports.PaycheckSearchRowBasic = PaycheckSearchRowBasic;
class HcmJobSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.employmentCategory = props.employmentCategory;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.jobId = props.jobId;
        this.title = props.title;
        this.customFieldList = props.customFieldList;
    }
}
exports.HcmJobSearchRowBasic = HcmJobSearchRowBasic;
class CustomerSalesTeam extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.employee = props.employee;
        this.salesRole = props.salesRole;
        this.isPrimary = props.isPrimary;
        this.contribution = props.contribution;
    }
}
exports.CustomerSalesTeam = CustomerSalesTeam;
class OtherNameCategorySearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.OtherNameCategorySearchBasic = OtherNameCategorySearchBasic;
class PricingSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.currency = props.currency;
        this.customer = props.customer;
        this.internalId = props.internalId;
        this.item = props.item;
        this.maximumQuantity = props.maximumQuantity;
        this.minimumQuantity = props.minimumQuantity;
        this.priceLevel = props.priceLevel;
        this.quantityRange = props.quantityRange;
        this.saleUnit = props.saleUnit;
        this.unitPrice = props.unitPrice;
    }
}
exports.PricingSearchRowBasic = PricingSearchRowBasic;
class LandedCostDataList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.landedCostData = props.landedCostData;
        this.replaceAll = props.replaceAll;
    }
}
exports.LandedCostDataList = LandedCostDataList;
class BomSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.availableForAllAssemblies = props.availableForAllAssemblies;
        this.availableForAllLocations = props.availableForAllLocations;
        this.createdDate = props.createdDate;
        this.externalId = props.externalId;
        this.includeChildren = props.includeChildren;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.legacyBomForAssembly = props.legacyBomForAssembly;
        this.memo = props.memo;
        this.name = props.name;
        this.restrictToAssemblies = props.restrictToAssemblies;
        this.restrictToLocations = props.restrictToLocations;
        this.revisionName = props.revisionName;
        this.subsidiary = props.subsidiary;
        this.subsidiaryNoHierarchy = props.subsidiaryNoHierarchy;
        this.useComponentYield = props.useComponentYield;
        this.usedOnAssembly = props.usedOnAssembly;
    }
}
exports.BomSearchRowBasic = BomSearchRowBasic;
class SolutionSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.assigned = props.assigned;
        this.caseCount = props.caseCount;
        this.createdDate = props.createdDate;
        this.description = props.description;
        this.displayOnline = props.displayOnline;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.lastModifiedDate = props.lastModifiedDate;
        this.message = props.message;
        this.previewref = props.previewref;
        this.solutionCode = props.solutionCode;
        this.status = props.status;
        this.title = props.title;
        this.customFieldList = props.customFieldList;
    }
}
exports.SolutionSearchRowBasic = SolutionSearchRowBasic;
class OriginatingLeadSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountNumber = props.accountNumber;
        this.address = props.address;
        this.addressee = props.addressee;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.assignedSite = props.assignedSite;
        this.assignedSiteId = props.assignedSiteId;
        this.attention = props.attention;
        this.availableOffline = props.availableOffline;
        this.balance = props.balance;
        this.billAddress = props.billAddress;
        this.boughtAmount = props.boughtAmount;
        this.boughtDate = props.boughtDate;
        this.buyingReason = props.buyingReason;
        this.buyingTimeFrame = props.buyingTimeFrame;
        this.category = props.category;
        this.ccCustomerCode = props.ccCustomerCode;
        this.ccDefault = props.ccDefault;
        this.ccExpDate = props.ccExpDate;
        this.ccHolderName = props.ccHolderName;
        this.ccNumber = props.ccNumber;
        this.ccState = props.ccState;
        this.ccStateFrom = props.ccStateFrom;
        this.ccType = props.ccType;
        this.city = props.city;
        this.classBought = props.classBought;
        this.comments = props.comments;
        this.companyName = props.companyName;
        this.consolBalance = props.consolBalance;
        this.consolDaysOverdue = props.consolDaysOverdue;
        this.consolDepositBalance = props.consolDepositBalance;
        this.consolOverdueBalance = props.consolOverdueBalance;
        this.consolUnbilledOrders = props.consolUnbilledOrders;
        this.contact = props.contact;
        this.contribution = props.contribution;
        this.conversionDate = props.conversionDate;
        this.country = props.country;
        this.county = props.county;
        this.creditHold = props.creditHold;
        this.creditHoldOverride = props.creditHoldOverride;
        this.creditLimit = props.creditLimit;
        this.currency = props.currency;
        this.custStage = props.custStage;
        this.custStatus = props.custStatus;
        this.dateClosed = props.dateClosed;
        this.dateCreated = props.dateCreated;
        this.daysOverdue = props.daysOverdue;
        this.defaultOrderPriority = props.defaultOrderPriority;
        this.defaultTaxReg = props.defaultTaxReg;
        this.defaultTaxRegText = props.defaultTaxRegText;
        this.depositBalance = props.depositBalance;
        this.deptBought = props.deptBought;
        this.drAccount = props.drAccount;
        this.email = props.email;
        this.emailPreference = props.emailPreference;
        this.emailTransactions = props.emailTransactions;
        this.endDate = props.endDate;
        this.entityId = props.entityId;
        this.entityStatus = props.entityStatus;
        this.estimatedBudget = props.estimatedBudget;
        this.explicitConversion = props.explicitConversion;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.fax = props.fax;
        this.faxTransactions = props.faxTransactions;
        this.firstName = props.firstName;
        this.firstOrderDate = props.firstOrderDate;
        this.firstSaleDate = props.firstSaleDate;
        this.fxAccount = props.fxAccount;
        this.fxBalance = props.fxBalance;
        this.fxConsolBalance = props.fxConsolBalance;
        this.fxConsolUnbilledOrders = props.fxConsolUnbilledOrders;
        this.fxUnbilledOrders = props.fxUnbilledOrders;
        this.giveAccess = props.giveAccess;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.group = props.group;
        this.groupPricingLevel = props.groupPricingLevel;
        this.hasDuplicates = props.hasDuplicates;
        this.image = props.image;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isBudgetApproved = props.isBudgetApproved;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isInactive = props.isInactive;
        this.isPerson = props.isPerson;
        this.isReportedLead = props.isReportedLead;
        this.isShipAddress = props.isShipAddress;
        this.itemPricingLevel = props.itemPricingLevel;
        this.itemPricingUnitPrice = props.itemPricingUnitPrice;
        this.itemsBought = props.itemsBought;
        this.itemsOrdered = props.itemsOrdered;
        this.language = props.language;
        this.lastModifiedDate = props.lastModifiedDate;
        this.lastName = props.lastName;
        this.lastOrderDate = props.lastOrderDate;
        this.lastSaleDate = props.lastSaleDate;
        this.leadDate = props.leadDate;
        this.leadSource = props.leadSource;
        this.level = props.level;
        this.locationBought = props.locationBought;
        this.manualCreditHold = props.manualCreditHold;
        this.merchantAccount = props.merchantAccount;
        this.middleName = props.middleName;
        this.monthlyClosing = props.monthlyClosing;
        this.onCreditHold = props.onCreditHold;
        this.orderedAmount = props.orderedAmount;
        this.orderedDate = props.orderedDate;
        this.otherRelationships = props.otherRelationships;
        this.overdueBalance = props.overdueBalance;
        this.parent = props.parent;
        this.parentItemsBought = props.parentItemsBought;
        this.parentItemsOrdered = props.parentItemsOrdered;
        this.partner = props.partner;
        this.partnerContribution = props.partnerContribution;
        this.partnerRole = props.partnerRole;
        this.partnerTeamMember = props.partnerTeamMember;
        this.pec = props.pec;
        this.permission = props.permission;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.priceLevel = props.priceLevel;
        this.pricingGroup = props.pricingGroup;
        this.pricingItem = props.pricingItem;
        this.printTransactions = props.printTransactions;
        this.prospectDate = props.prospectDate;
        this.pstExempt = props.pstExempt;
        this.receivablesAccount = props.receivablesAccount;
        this.reminderDate = props.reminderDate;
        this.resaleNumber = props.resaleNumber;
        this.role = props.role;
        this.salesReadiness = props.salesReadiness;
        this.salesRep = props.salesRep;
        this.salesTeamMember = props.salesTeamMember;
        this.salesTeamRole = props.salesTeamRole;
        this.salutation = props.salutation;
        this.shipAddress = props.shipAddress;
        this.shipComplete = props.shipComplete;
        this.shippingItem = props.shippingItem;
        this.sourceSite = props.sourceSite;
        this.sourceSiteId = props.sourceSiteId;
        this.stage = props.stage;
        this.startDate = props.startDate;
        this.state = props.state;
        this.subsidBought = props.subsidBought;
        this.subsidiary = props.subsidiary;
        this.taxable = props.taxable;
        this.terms = props.terms;
        this.territory = props.territory;
        this.title = props.title;
        this.unbilledOrders = props.unbilledOrders;
        this.url = props.url;
        this.vatRegNumber = props.vatRegNumber;
        this.webLead = props.webLead;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.OriginatingLeadSearchBasic = OriginatingLeadSearchBasic;
class AccountingBookDetail extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBook = props.accountingBook;
        this.currency = props.currency;
        this.exchangeRate = props.exchangeRate;
    }
}
exports.AccountingBookDetail = AccountingBookDetail;
class InventoryNumberBinSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.binNumber = props.binNumber;
        this.inventoryNumber = props.inventoryNumber;
        this.location = props.location;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityOnHand = props.quantityOnHand;
    }
}
exports.InventoryNumberBinSearchRowBasic = InventoryNumberBinSearchRowBasic;
class AccountingBookDetailList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBookDetail = props.accountingBookDetail;
        this.replaceAll = props.replaceAll;
    }
}
exports.AccountingBookDetailList = AccountingBookDetailList;
class GiftCertRedemptionList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.giftCertRedemption = props.giftCertRedemption;
        this.replaceAll = props.replaceAll;
    }
}
exports.GiftCertRedemptionList = GiftCertRedemptionList;
class UnitsTypeSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.abbreviation = props.abbreviation;
        this.baseUnit = props.baseUnit;
        this.conversionRate = props.conversionRate;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInActive = props.isInActive;
        this.name = props.name;
        this.pluralAbbreviation = props.pluralAbbreviation;
        this.pluralName = props.pluralName;
        this.unitName = props.unitName;
    }
}
exports.UnitsTypeSearchBasic = UnitsTypeSearchBasic;
class TaxTypeSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.country = props.country;
        this.description = props.description;
        this.doesNotAddToTotal = props.doesNotAddToTotal;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.nexus = props.nexus;
        this.payablesAccount = props.payablesAccount;
        this.postToItemCost = props.postToItemCost;
        this.receivablesAccount = props.receivablesAccount;
        this.reverseCharge = props.reverseCharge;
        this.taxInNetAmount = props.taxInNetAmount;
    }
}
exports.TaxTypeSearchRowBasic = TaxTypeSearchRowBasic;
class CustomerSubsidiaryRelationshipSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.balance = props.balance;
        this.depositbalance = props.depositbalance;
        this.entity = props.entity;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isprimarysub = props.isprimarysub;
        this.primaryCurrency = props.primaryCurrency;
        this.subsidiary = props.subsidiary;
        this.unbilledorders = props.unbilledorders;
        this.customFieldList = props.customFieldList;
    }
}
exports.CustomerSubsidiaryRelationshipSearchRowBasic = CustomerSubsidiaryRelationshipSearchRowBasic;
class TimeSheetSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.approvalStatus = props.approvalStatus;
        this.employee = props.employee;
        this.endDate = props.endDate;
        this.externalId = props.externalId;
        this.id = props.id;
        this.internalId = props.internalId;
        this.startDate = props.startDate;
        this.totalHours = props.totalHours;
        this.customFieldList = props.customFieldList;
    }
}
exports.TimeSheetSearchRowBasic = TimeSheetSearchRowBasic;
class DepartmentSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.nameNoHierarchy = props.nameNoHierarchy;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.DepartmentSearchBasic = DepartmentSearchBasic;
class CustomSearchJoin extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customizationRef = props.customizationRef;
        this.searchRecordBasic = props.searchRecordBasic;
    }
}
exports.CustomSearchJoin = CustomSearchJoin;
class AddressSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.address = props.address;
        this.address1 = props.address1;
        this.address2 = props.address2;
        this.address3 = props.address3;
        this.addressee = props.addressee;
        this.attention = props.attention;
        this.city = props.city;
        this.country = props.country;
        this.countryCode = props.countryCode;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.override = props.override;
        this.phone = props.phone;
        this.state = props.state;
        this.zip = props.zip;
        this.customFieldList = props.customFieldList;
    }
}
exports.AddressSearchBasic = AddressSearchBasic;
class UnitsTypeSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.abbreviation = props.abbreviation;
        this.baseUnit = props.baseUnit;
        this.conversionRate = props.conversionRate;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInActive = props.isInActive;
        this.name = props.name;
        this.pluralAbbreviation = props.pluralAbbreviation;
        this.pluralName = props.pluralName;
        this.unitName = props.unitName;
    }
}
exports.UnitsTypeSearchRowBasic = UnitsTypeSearchRowBasic;
class FairValuePriceSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.currency = props.currency;
        this.endDate = props.endDate;
        this.externalId = props.externalId;
        this.fairValue = props.fairValue;
        this.fairValueFormula = props.fairValueFormula;
        this.fairValueRangePolicy = props.fairValueRangePolicy;
        this.highValue = props.highValue;
        this.highValuePercent = props.highValuePercent;
        this.internalId = props.internalId;
        this.isVsoePrice = props.isVsoePrice;
        this.item = props.item;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.lowValue = props.lowValue;
        this.lowValuePercent = props.lowValuePercent;
        this.startDate = props.startDate;
        this.units = props.units;
        this.unitsType = props.unitsType;
    }
}
exports.FairValuePriceSearchRowBasic = FairValuePriceSearchRowBasic;
class JobStatusSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.JobStatusSearchBasic = JobStatusSearchBasic;
class TaxGroupSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.city = props.city;
        this.country = props.country;
        this.county = props.county;
        this.externalId = props.externalId;
        this.includeChildren = props.includeChildren;
        this.internalId = props.internalId;
        this.isDefault = props.isDefault;
        this.isInactive = props.isInactive;
        this.itemId = props.itemId;
        this.piggyBack = props.piggyBack;
        this.rate = props.rate;
        this.state = props.state;
        this.stateDisplayName = props.stateDisplayName;
        this.subsidiary = props.subsidiary;
        this.subsidiaryNoHierarchy = props.subsidiaryNoHierarchy;
        this.taxItem1 = props.taxItem1;
        this.taxItem2 = props.taxItem2;
        this.taxType = props.taxType;
        this.unitPrice1 = props.unitPrice1;
        this.unitPrice2 = props.unitPrice2;
        this.zip = props.zip;
    }
}
exports.TaxGroupSearchRowBasic = TaxGroupSearchRowBasic;
class ItemSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accBookRevRecForecastRule = props.accBookRevRecForecastRule;
        this.accountingBook = props.accountingBook;
        this.accountingBookAmortization = props.accountingBookAmortization;
        this.accountingBookCreatePlansOn = props.accountingBookCreatePlansOn;
        this.accountingBookRevRecRule = props.accountingBookRevRecRule;
        this.accountingBookRevRecSchedule = props.accountingBookRevRecSchedule;
        this.allowedShippingMethod = props.allowedShippingMethod;
        this.alternateDemandSourceItem = props.alternateDemandSourceItem;
        this.assetAccount = props.assetAccount;
        this.atpLeadTime = props.atpLeadTime;
        this.atpMethod = props.atpMethod;
        this.autoLeadTime = props.autoLeadTime;
        this.autoPreferredStockLevel = props.autoPreferredStockLevel;
        this.autoReorderPoint = props.autoReorderPoint;
        this.availableToPartners = props.availableToPartners;
        this.averageCost = props.averageCost;
        this.backwardConsumptionDays = props.backwardConsumptionDays;
        this.basePrice = props.basePrice;
        this.billExchRateVarianceAcct = props.billExchRateVarianceAcct;
        this.billPriceVarianceAcct = props.billPriceVarianceAcct;
        this.billQtyVarianceAcct = props.billQtyVarianceAcct;
        this.binNumber = props.binNumber;
        this.binOnHandAvail = props.binOnHandAvail;
        this.binOnHandCount = props.binOnHandCount;
        this.bomQuantity = props.bomQuantity;
        this.buildEntireAssembly = props.buildEntireAssembly;
        this.buildTime = props.buildTime;
        this.buyItNowPrice = props.buyItNowPrice;
        this.category = props.category;
        this.categoryPreferred = props.categoryPreferred;
        this.clazz = props.clazz;
        this.componentYield = props.componentYield;
        this.consumptionUnit = props.consumptionUnit;
        this.contingentRevenueHandling = props.contingentRevenueHandling;
        this.copyDescription = props.copyDescription;
        this.correlatedItem = props.correlatedItem;
        this.correlatedItemCorrelation = props.correlatedItemCorrelation;
        this.correlatedItemCount = props.correlatedItemCount;
        this.correlatedItemLift = props.correlatedItemLift;
        this.correlatedItemPurchaseRate = props.correlatedItemPurchaseRate;
        this.cost = props.cost;
        this.costAccountingStatus = props.costAccountingStatus;
        this.costCategory = props.costCategory;
        this.costEstimate = props.costEstimate;
        this.costEstimateType = props.costEstimateType;
        this.costingMethod = props.costingMethod;
        this.countryOfManufacture = props.countryOfManufacture;
        this.created = props.created;
        this.createJob = props.createJob;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.custReturnVarianceAccount = props.custReturnVarianceAccount;
        this.dateViewed = props.dateViewed;
        this.daysBeforeExpiration = props.daysBeforeExpiration;
        this.defaultReturnCost = props.defaultReturnCost;
        this.defaultShippingMethod = props.defaultShippingMethod;
        this.deferredExpenseAccount = props.deferredExpenseAccount;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.deferRevRec = props.deferRevRec;
        this.demandModifier = props.demandModifier;
        this.demandSource = props.demandSource;
        this.demandTimeFence = props.demandTimeFence;
        this.department = props.department;
        this.departmentnohierarchy = props.departmentnohierarchy;
        this.directRevenuePosting = props.directRevenuePosting;
        this.displayIneBayStore = props.displayIneBayStore;
        this.displayName = props.displayName;
        this.distributionCategory = props.distributionCategory;
        this.distributionNetwork = props.distributionNetwork;
        this.dontShowPrice = props.dontShowPrice;
        this.eBayItemDescription = props.eBayItemDescription;
        this.eBayItemSubtitle = props.eBayItemSubtitle;
        this.eBayItemTitle = props.eBayItemTitle;
        this.ebayRelistingOption = props.ebayRelistingOption;
        this.effectiveBomControl = props.effectiveBomControl;
        this.effectiveDate = props.effectiveDate;
        this.effectiveRevision = props.effectiveRevision;
        this.endAuctionsWhenOutOfStock = props.endAuctionsWhenOutOfStock;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.expenseAccount = props.expenseAccount;
        this.externalId = props.externalId;
        this.featuredDescription = props.featuredDescription;
        this.feedDescription = props.feedDescription;
        this.feedName = props.feedName;
        this.fixedLotSize = props.fixedLotSize;
        this.forwardConsumptionDays = props.forwardConsumptionDays;
        this.fraudRisk = props.fraudRisk;
        this.froogleProductFeed = props.froogleProductFeed;
        this.futureHorizon = props.futureHorizon;
        this.fxCost = props.fxCost;
        this.gainLossAccount = props.gainLossAccount;
        this.generateAccruals = props.generateAccruals;
        this.giftCertAuthCode = props.giftCertAuthCode;
        this.giftCertEmail = props.giftCertEmail;
        this.giftCertExpirationDate = props.giftCertExpirationDate;
        this.giftCertFrom = props.giftCertFrom;
        this.giftCertMessage = props.giftCertMessage;
        this.giftCertOriginalAmount = props.giftCertOriginalAmount;
        this.giftCertRecipient = props.giftCertRecipient;
        this.hierarchyNode = props.hierarchyNode;
        this.hierarchyVersion = props.hierarchyVersion;
        this.hits = props.hits;
        this.imageUrl = props.imageUrl;
        this.includeChildren = props.includeChildren;
        this.incomeAccount = props.incomeAccount;
        this.intercoDefRevAccount = props.intercoDefRevAccount;
        this.intercoExpenseAccount = props.intercoExpenseAccount;
        this.intercoIncomeAccount = props.intercoIncomeAccount;
        this.internalId = props.internalId;
        this.inventoryLocation = props.inventoryLocation;
        this.invtClassification = props.invtClassification;
        this.invtCountInterval = props.invtCountInterval;
        this.isAvailable = props.isAvailable;
        this.isDropShipItem = props.isDropShipItem;
        this.isFulfillable = props.isFulfillable;
        this.isGcoCompliant = props.isGcoCompliant;
        this.isInactive = props.isInactive;
        this.isLotItem = props.isLotItem;
        this.isOnline = props.isOnline;
        this.isSerialItem = props.isSerialItem;
        this.isSpecialOrderItem = props.isSpecialOrderItem;
        this.isSpecialWorkOrderItem = props.isSpecialWorkOrderItem;
        this.isStorePickupAllowed = props.isStorePickupAllowed;
        this.issueProduct = props.issueProduct;
        this.isTaxable = props.isTaxable;
        this.isVsoeBundle = props.isVsoeBundle;
        this.isWip = props.isWip;
        this.itemId = props.itemId;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.itemUrl = props.itemUrl;
        this.lastInvtCountDate = props.lastInvtCountDate;
        this.lastPurchasePrice = props.lastPurchasePrice;
        this.lastQuantityAvailableChange = props.lastQuantityAvailableChange;
        this.leadTime = props.leadTime;
        this.liabilityAccount = props.liabilityAccount;
        this.listingDuration = props.listingDuration;
        this.location = props.location;
        this.locationAllowStorePickup = props.locationAllowStorePickup;
        this.locationAtpLeadTime = props.locationAtpLeadTime;
        this.locationAverageCost = props.locationAverageCost;
        this.locationBinQuantityAvailable = props.locationBinQuantityAvailable;
        this.locationBuildTime = props.locationBuildTime;
        this.locationCost = props.locationCost;
        this.locationCostAccountingStatus = props.locationCostAccountingStatus;
        this.locationDefaultReturnCost = props.locationDefaultReturnCost;
        this.locationDemandSource = props.locationDemandSource;
        this.locationDemandTimeFence = props.locationDemandTimeFence;
        this.locationFixedLotSize = props.locationFixedLotSize;
        this.locationInventoryCostTemplate = props.locationInventoryCostTemplate;
        this.locationInvtClassification = props.locationInvtClassification;
        this.locationInvtCountInterval = props.locationInvtCountInterval;
        this.locationLastInvtCountDate = props.locationLastInvtCountDate;
        this.locationLeadTime = props.locationLeadTime;
        this.locationNextInvtCountDate = props.locationNextInvtCountDate;
        this.locationPeriodicLotSizeDays = props.locationPeriodicLotSizeDays;
        this.locationPeriodicLotSizeType = props.locationPeriodicLotSizeType;
        this.locationPreferredStockLevel = props.locationPreferredStockLevel;
        this.locationQtyAvailForStorePickup = props.locationQtyAvailForStorePickup;
        this.locationQuantityAvailable = props.locationQuantityAvailable;
        this.locationQuantityBackOrdered = props.locationQuantityBackOrdered;
        this.locationQuantityCommitted = props.locationQuantityCommitted;
        this.locationQuantityInTransit = props.locationQuantityInTransit;
        this.locationQuantityOnHand = props.locationQuantityOnHand;
        this.locationQuantityOnOrder = props.locationQuantityOnOrder;
        this.locationReOrderPoint = props.locationReOrderPoint;
        this.locationRescheduleInDays = props.locationRescheduleInDays;
        this.locationRescheduleOutDays = props.locationRescheduleOutDays;
        this.locationSafetyStockLevel = props.locationSafetyStockLevel;
        this.locationStorePickupBufferStock = props.locationStorePickupBufferStock;
        this.locationSupplyLotSizingMethod = props.locationSupplyLotSizingMethod;
        this.locationSupplyTimeFence = props.locationSupplyTimeFence;
        this.locationSupplyType = props.locationSupplyType;
        this.locationTotalValue = props.locationTotalValue;
        this.locBackwardConsumptionDays = props.locBackwardConsumptionDays;
        this.locForwardConsumptionDays = props.locForwardConsumptionDays;
        this.manufacturer = props.manufacturer;
        this.manufacturerAddr1 = props.manufacturerAddr1;
        this.manufacturerCity = props.manufacturerCity;
        this.manufacturerState = props.manufacturerState;
        this.manufacturerTariff = props.manufacturerTariff;
        this.manufacturerTaxId = props.manufacturerTaxId;
        this.manufacturerZip = props.manufacturerZip;
        this.manufacturingChargeItem = props.manufacturingChargeItem;
        this.matchBillToReceipt = props.matchBillToReceipt;
        this.maximumQuantity = props.maximumQuantity;
        this.memberItem = props.memberItem;
        this.memberQuantity = props.memberQuantity;
        this.metaTagHtml = props.metaTagHtml;
        this.minimumQuantity = props.minimumQuantity;
        this.modified = props.modified;
        this.mossApplies = props.mossApplies;
        this.mpn = props.mpn;
        this.multManufactureAddr = props.multManufactureAddr;
        this.nextagCategory = props.nextagCategory;
        this.nextagProductFeed = props.nextagProductFeed;
        this.nextInvtCountDate = props.nextInvtCountDate;
        this.noPriceMessage = props.noPriceMessage;
        this.numActiveListings = props.numActiveListings;
        this.numberAllowedDownloads = props.numberAllowedDownloads;
        this.numCurrentlyListed = props.numCurrentlyListed;
        this.obsoleteDate = props.obsoleteDate;
        this.obsoleteRevision = props.obsoleteRevision;
        this.offerSupport = props.offerSupport;
        this.onlineCustomerPrice = props.onlineCustomerPrice;
        this.onlinePrice = props.onlinePrice;
        this.onSpecial = props.onSpecial;
        this.otherPrices = props.otherPrices;
        this.otherVendor = props.otherVendor;
        this.outOfStockBehavior = props.outOfStockBehavior;
        this.outOfStockMessage = props.outOfStockMessage;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.overheadType = props.overheadType;
        this.pageTitle = props.pageTitle;
        this.parent = props.parent;
        this.periodicLotSizeDays = props.periodicLotSizeDays;
        this.periodicLotSizeType = props.periodicLotSizeType;
        this.preferenceCriterion = props.preferenceCriterion;
        this.preferredBin = props.preferredBin;
        this.preferredLocation = props.preferredLocation;
        this.preferredStockLevel = props.preferredStockLevel;
        this.preferredStockLevelDays = props.preferredStockLevelDays;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.pricingGroup = props.pricingGroup;
        this.primaryCategory = props.primaryCategory;
        this.prodPriceVarianceAcct = props.prodPriceVarianceAcct;
        this.prodQtyVarianceAcct = props.prodQtyVarianceAcct;
        this.purchaseDescription = props.purchaseDescription;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.purchasePriceVarianceAcct = props.purchasePriceVarianceAcct;
        this.purchaseUnit = props.purchaseUnit;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityBackOrdered = props.quantityBackOrdered;
        this.quantityCommitted = props.quantityCommitted;
        this.quantityOnHand = props.quantityOnHand;
        this.quantityOnOrder = props.quantityOnOrder;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.reorderMultiple = props.reorderMultiple;
        this.reOrderPoint = props.reOrderPoint;
        this.rescheduleInDays = props.rescheduleInDays;
        this.rescheduleOutDays = props.rescheduleOutDays;
        this.reservePrice = props.reservePrice;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revReclassFXAccount = props.revReclassFXAccount;
        this.revRecSchedule = props.revRecSchedule;
        this.roundUpAsComponent = props.roundUpAsComponent;
        this.safetyStockLevel = props.safetyStockLevel;
        this.safetyStockLevelDays = props.safetyStockLevelDays;
        this.salesDescription = props.salesDescription;
        this.salesTaxCode = props.salesTaxCode;
        this.saleUnit = props.saleUnit;
        this.sameAsPrimaryBookAmortization = props.sameAsPrimaryBookAmortization;
        this.sameAsPrimaryBookRevRec = props.sameAsPrimaryBookRevRec;
        this.scheduleBCode = props.scheduleBCode;
        this.scheduleBNumber = props.scheduleBNumber;
        this.scheduleBQuantity = props.scheduleBQuantity;
        this.scrapAcct = props.scrapAcct;
        this.searchKeywords = props.searchKeywords;
        this.seasonalDemand = props.seasonalDemand;
        this.sellOnEBay = props.sellOnEBay;
        this.serialNumber = props.serialNumber;
        this.serialNumberLocation = props.serialNumberLocation;
        this.shipIndividually = props.shipIndividually;
        this.shipPackage = props.shipPackage;
        this.shippingCarrier = props.shippingCarrier;
        this.shippingRate = props.shippingRate;
        this.shoppingDotComCategory = props.shoppingDotComCategory;
        this.shoppingProductFeed = props.shoppingProductFeed;
        this.shopzillaCategoryId = props.shopzillaCategoryId;
        this.shopzillaProductFeed = props.shopzillaProductFeed;
        this.sitemapPriority = props.sitemapPriority;
        this.softDescriptor = props.softDescriptor;
        this.startingPrice = props.startingPrice;
        this.stockDescription = props.stockDescription;
        this.stockUnit = props.stockUnit;
        this.storeDescription = props.storeDescription;
        this.storeDetailedDescription = props.storeDetailedDescription;
        this.storeDisplayImage = props.storeDisplayImage;
        this.storeDisplayName = props.storeDisplayName;
        this.storeDisplayThumbnail = props.storeDisplayThumbnail;
        this.subsidiary = props.subsidiary;
        this.subType = props.subType;
        this.supplyLotSizingMethod = props.supplyLotSizingMethod;
        this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
        this.supplyTimeFence = props.supplyTimeFence;
        this.supplyType = props.supplyType;
        this.taxSchedule = props.taxSchedule;
        this.thumbNailUrl = props.thumbNailUrl;
        this.totalValue = props.totalValue;
        this.trackLandedCost = props.trackLandedCost;
        this.transferPrice = props.transferPrice;
        this.type = props.type;
        this.unbuildVarianceAccount = props.unbuildVarianceAccount;
        this.unitsType = props.unitsType;
        this.upcCode = props.upcCode;
        this.urlComponent = props.urlComponent;
        this.useBins = props.useBins;
        this.useComponentYield = props.useComponentYield;
        this.useMarginalRates = props.useMarginalRates;
        this.vendor = props.vendor;
        this.vendorCode = props.vendorCode;
        this.vendorCost = props.vendorCost;
        this.vendorCostEntered = props.vendorCostEntered;
        this.vendorName = props.vendorName;
        this.vendorPriceCurrency = props.vendorPriceCurrency;
        this.vendorSchedule = props.vendorSchedule;
        this.vendReturnVarianceAccount = props.vendReturnVarianceAccount;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoeDelivered = props.vsoeDelivered;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.webSite = props.webSite;
        this.weight = props.weight;
        this.weightUnit = props.weightUnit;
        this.wipAcct = props.wipAcct;
        this.wipVarianceAcct = props.wipVarianceAcct;
        this.yahooProductFeed = props.yahooProductFeed;
        this.customFieldList = props.customFieldList;
    }
}
exports.ItemSearchRowBasic = ItemSearchRowBasic;
class BudgetSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.accountingBook = props.accountingBook;
        this.amount = props.amount;
        this.category = props.category;
        this.clazz = props.clazz;
        this.classnohierarchy = props.classnohierarchy;
        this.currency = props.currency;
        this.customer = props.customer;
        this.department = props.department;
        this.departmentnohierarchy = props.departmentnohierarchy;
        this.global = props.global;
        this.internalId = props.internalId;
        this.item = props.item;
        this.location = props.location;
        this.locationnohierarchy = props.locationnohierarchy;
        this.subsidiary = props.subsidiary;
        this.subsidiarynohierarchy = props.subsidiarynohierarchy;
        this.year = props.year;
        this.year2 = props.year2;
        this.customFieldList = props.customFieldList;
    }
}
exports.BudgetSearchRowBasic = BudgetSearchRowBasic;
class RevRecTemplateSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.amorMethod = props.amorMethod;
        this.amorPeriod = props.amorPeriod;
        this.amorStartOffset = props.amorStartOffset;
        this.amorTermSrc = props.amorTermSrc;
        this.amorType = props.amorType;
        this.contraAccount = props.contraAccount;
        this.deferralAccount = props.deferralAccount;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.periodOffset = props.periodOffset;
        this.targetAccount = props.targetAccount;
        this.useForeignAmounts = props.useForeignAmounts;
    }
}
exports.RevRecTemplateSearchBasic = RevRecTemplateSearchBasic;
class InventoryNumberBinSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.binNumber = props.binNumber;
        this.inventoryNumber = props.inventoryNumber;
        this.location = props.location;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityOnHand = props.quantityOnHand;
    }
}
exports.InventoryNumberBinSearchBasic = InventoryNumberBinSearchBasic;
class MerchandiseHierarchyNodeSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.hierarchyLevel = props.hierarchyLevel;
        this.hierarchyVersion = props.hierarchyVersion;
        this.internalId = props.internalId;
        this.name = props.name;
        this.parentNode = props.parentNode;
    }
}
exports.MerchandiseHierarchyNodeSearchRowBasic = MerchandiseHierarchyNodeSearchRowBasic;
class JobSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountNumber = props.accountNumber;
        this.actualTime = props.actualTime;
        this.address = props.address;
        this.addressee = props.addressee;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.allocatePayrollExpenses = props.allocatePayrollExpenses;
        this.allowAllResourcesForTasks = props.allowAllResourcesForTasks;
        this.allowExpenses = props.allowExpenses;
        this.allowTime = props.allowTime;
        this.applyProjectExpenseTypeToAll = props.applyProjectExpenseTypeToAll;
        this.attention = props.attention;
        this.billingSchedule = props.billingSchedule;
        this.calculatedEndDate = props.calculatedEndDate;
        this.calculatedEndDateBaseline = props.calculatedEndDateBaseline;
        this.category = props.category;
        this.city = props.city;
        this.comments = props.comments;
        this.contact = props.contact;
        this.country = props.country;
        this.county = props.county;
        this.customer = props.customer;
        this.dateCreated = props.dateCreated;
        this.defaultTaxReg = props.defaultTaxReg;
        this.defaultTaxRegText = props.defaultTaxRegText;
        this.email = props.email;
        this.endDate = props.endDate;
        this.entityId = props.entityId;
        this.estCost = props.estCost;
        this.estEndDate = props.estEndDate;
        this.estimatedGrossProfit = props.estimatedGrossProfit;
        this.estimatedGrossProfitPercent = props.estimatedGrossProfitPercent;
        this.estimatedLaborCost = props.estimatedLaborCost;
        this.estimatedLaborCostBaseline = props.estimatedLaborCostBaseline;
        this.estimatedLaborRevenue = props.estimatedLaborRevenue;
        this.estimatedTime = props.estimatedTime;
        this.estimatedTimeOverride = props.estimatedTimeOverride;
        this.estimatedTimeOverrideBaseline = props.estimatedTimeOverrideBaseline;
        this.estRevenue = props.estRevenue;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.fax = props.fax;
        this.giveAccess = props.giveAccess;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.image = props.image;
        this.includeCrmTasksInTotals = props.includeCrmTasksInTotals;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isExemptTime = props.isExemptTime;
        this.isInactive = props.isInactive;
        this.isProductiveTime = props.isProductiveTime;
        this.isUtilizedTime = props.isUtilizedTime;
        this.jobBillingType = props.jobBillingType;
        this.jobItem = props.jobItem;
        this.jobPrice = props.jobPrice;
        this.jobResource = props.jobResource;
        this.jobResourceRole = props.jobResourceRole;
        this.language = props.language;
        this.lastBaselineDate = props.lastBaselineDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.level = props.level;
        this.limitTimeToAssignees = props.limitTimeToAssignees;
        this.materializeTime = props.materializeTime;
        this.parent = props.parent;
        this.pctComplete = props.pctComplete;
        this.percentTimeComplete = props.percentTimeComplete;
        this.permission = props.permission;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.projectedEndDateBaseline = props.projectedEndDateBaseline;
        this.projectExpenseType = props.projectExpenseType;
        this.revRecForecastRule = props.revRecForecastRule;
        this.startDate = props.startDate;
        this.startDateBaseline = props.startDateBaseline;
        this.state = props.state;
        this.status = props.status;
        this.subsidiary = props.subsidiary;
        this.timeApproval = props.timeApproval;
        this.timeRemaining = props.timeRemaining;
        this.type = props.type;
        this.usePercentCompleteOverride = props.usePercentCompleteOverride;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.JobSearchBasic = JobSearchBasic;
class AccountingTransactionSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.accountingBook = props.accountingBook;
        this.accountType = props.accountType;
        this.altSalesAmount = props.altSalesAmount;
        this.altSalesNetAmount = props.altSalesNetAmount;
        this.amount = props.amount;
        this.bookSpecificTransaction = props.bookSpecificTransaction;
        this.catchUpPeriod = props.catchUpPeriod;
        this.creditAmount = props.creditAmount;
        this.customGL = props.customGL;
        this.debitAmount = props.debitAmount;
        this.deferRevRec = props.deferRevRec;
        this.exchangeRate = props.exchangeRate;
        this.grossAmount = props.grossAmount;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.multiSubsidiary = props.multiSubsidiary;
        this.netAmount = props.netAmount;
        this.posting = props.posting;
        this.quantityRevCommitted = props.quantityRevCommitted;
        this.recognizedRevenue = props.recognizedRevenue;
        this.revCommitStatus = props.revCommitStatus;
        this.revenueStatus = props.revenueStatus;
        this.revRecEndDate = props.revRecEndDate;
        this.revRecOnRevCommitment = props.revRecOnRevCommitment;
        this.revRecStartDate = props.revRecStartDate;
        this.subsidiary = props.subsidiary;
        this.tranIsVsoeBundle = props.tranIsVsoeBundle;
        this.type = props.type;
        this.vsoeAllocation = props.vsoeAllocation;
    }
}
exports.AccountingTransactionSearchBasic = AccountingTransactionSearchBasic;
class GiftCertificateSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.amountRemaining = props.amountRemaining;
        this.amtAvailBilled = props.amtAvailBilled;
        this.createdDate = props.createdDate;
        this.email = props.email;
        this.expirationDate = props.expirationDate;
        this.gcActive = props.gcActive;
        this.giftCertCode = props.giftCertCode;
        this.incomeAcct = props.incomeAcct;
        this.internalId = props.internalId;
        this.item = props.item;
        this.liabilityAcct = props.liabilityAcct;
        this.message = props.message;
        this.name = props.name;
        this.originalAmount = props.originalAmount;
        this.purchaseDate = props.purchaseDate;
        this.sender = props.sender;
        this.customFieldList = props.customFieldList;
    }
}
exports.GiftCertificateSearchRowBasic = GiftCertificateSearchRowBasic;
class MessageSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.author = props.author;
        this.authorEmail = props.authorEmail;
        this.bcc = props.bcc;
        this.cc = props.cc;
        this.externalId = props.externalId;
        this.hasAttachment = props.hasAttachment;
        this.internalId = props.internalId;
        this.internalOnly = props.internalOnly;
        this.isEmailed = props.isEmailed;
        this.isIncoming = props.isIncoming;
        this.message = props.message;
        this.messageDate = props.messageDate;
        this.messageType = props.messageType;
        this.recipient = props.recipient;
        this.recipientEmail = props.recipientEmail;
        this.subject = props.subject;
    }
}
exports.MessageSearchRowBasic = MessageSearchRowBasic;
class JobTypeSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.parent = props.parent;
    }
}
exports.JobTypeSearchBasic = JobTypeSearchBasic;
class ContactRoleSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.ContactRoleSearchRowBasic = ContactRoleSearchRowBasic;
class ItemDemandPlanSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.alternateSourceItem = props.alternateSourceItem;
        this.analysisDuration = props.analysisDuration;
        this.demandDate = props.demandDate;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.item = props.item;
        this.lastModifiedDate = props.lastModifiedDate;
        this.location = props.location;
        this.memo = props.memo;
        this.projectionDuration = props.projectionDuration;
        this.projectionInterval = props.projectionInterval;
        this.projectionMethod = props.projectionMethod;
        this.projectionStartDate = props.projectionStartDate;
        this.quantity = props.quantity;
        this.quantityUom = props.quantityUom;
        this.subsidiary = props.subsidiary;
        this.units = props.units;
        this.customFieldList = props.customFieldList;
    }
}
exports.ItemDemandPlanSearchRowBasic = ItemDemandPlanSearchRowBasic;
class CurrencyRateSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.baseCurrency = props.baseCurrency;
        this.effectiveDate = props.effectiveDate;
        this.exchangeRate = props.exchangeRate;
        this.internalId = props.internalId;
        this.transactionCurrency = props.transactionCurrency;
    }
}
exports.CurrencyRateSearchRowBasic = CurrencyRateSearchRowBasic;
class ContactRoleSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.ContactRoleSearchBasic = ContactRoleSearchBasic;
class MseSubsidiarySearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBook = props.accountingBook;
        this.accountingBookCurrency = props.accountingBookCurrency;
        this.address1 = props.address1;
        this.address2 = props.address2;
        this.address3 = props.address3;
        this.anonymousCustomerInboundEmail = props.anonymousCustomerInboundEmail;
        this.anonymousCustomerOnlineForms = props.anonymousCustomerOnlineForms;
        this.caseAssignmentTemplate = props.caseAssignmentTemplate;
        this.caseAutomaticClosureTemplate = props.caseAutomaticClosureTemplate;
        this.caseCopyEmployeeTemplate = props.caseCopyEmployeeTemplate;
        this.caseCreationTemplate = props.caseCreationTemplate;
        this.caseEscalationTemplate = props.caseEscalationTemplate;
        this.caseUpdateTemplate = props.caseUpdateTemplate;
        this.city = props.city;
        this.companyNameForSupportMessages = props.companyNameForSupportMessages;
        this.country = props.country;
        this.currency = props.currency;
        this.effectiveFrom = props.effectiveFrom;
        this.email = props.email;
        this.employeeCaseUpdateTemplate = props.employeeCaseUpdateTemplate;
        this.externalId = props.externalId;
        this.fax = props.fax;
        this.internalId = props.internalId;
        this.isElimination = props.isElimination;
        this.isInactive = props.isInactive;
        this.legalName = props.legalName;
        this.mainSupportEmailAddress = props.mainSupportEmailAddress;
        this.name = props.name;
        this.nameNoHierarchy = props.nameNoHierarchy;
        this.nexus = props.nexus;
        this.phone = props.phone;
        this.primary = props.primary;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.state = props.state;
        this.taxEngine = props.taxEngine;
        this.taxIdNum = props.taxIdNum;
        this.taxRegistrationNumber = props.taxRegistrationNumber;
        this.tranPrefix = props.tranPrefix;
        this.url = props.url;
        this.validUntil = props.validUntil;
        this.zip = props.zip;
        this.customFieldList = props.customFieldList;
    }
}
exports.MseSubsidiarySearchRowBasic = MseSubsidiarySearchRowBasic;
class PaycheckSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.batchNumber = props.batchNumber;
        this.checkDate = props.checkDate;
        this.employee = props.employee;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.hasGLImpact = props.hasGLImpact;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.payrollItem = props.payrollItem;
        this.payrollItemType = props.payrollItemType;
    }
}
exports.PaycheckSearchBasic = PaycheckSearchBasic;
class PromotionCodeSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.applyDiscountTo = props.applyDiscountTo;
        this.code = props.code;
        this.description = props.description;
        this.discount = props.discount;
        this.endDate = props.endDate;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.freeShipItem = props.freeShipItem;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.isPublic = props.isPublic;
        this.item = props.item;
        this.location = props.location;
        this.name = props.name;
        this.partner = props.partner;
        this.startDate = props.startDate;
        this.customFieldList = props.customFieldList;
    }
}
exports.PromotionCodeSearchBasic = PromotionCodeSearchBasic;
class InstallmentSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.amount = props.amount;
        this.amountPaid = props.amountPaid;
        this.amountRemaining = props.amountRemaining;
        this.daysOverdue = props.daysOverdue;
        this.dueDate = props.dueDate;
        this.fxAmount = props.fxAmount;
        this.fxAmountPaid = props.fxAmountPaid;
        this.fxAmountRemaining = props.fxAmountRemaining;
        this.installmentNumber = props.installmentNumber;
        this.customFieldList = props.customFieldList;
    }
}
exports.InstallmentSearchBasic = InstallmentSearchBasic;
class ManufacturingOperationTaskSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.actualRunTime = props.actualRunTime;
        this.actualSetupTime = props.actualSetupTime;
        this.completedQuantity = props.completedQuantity;
        this.endDate = props.endDate;
        this.estimatedWork = props.estimatedWork;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.id = props.id;
        this.inputQuantity = props.inputQuantity;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.laborResources = props.laborResources;
        this.lagAmount = props.lagAmount;
        this.lagType = props.lagType;
        this.lagUnits = props.lagUnits;
        this.machineResources = props.machineResources;
        this.manufacturingCostTemplate = props.manufacturingCostTemplate;
        this.manufacturingWorkCenter = props.manufacturingWorkCenter;
        this.name = props.name;
        this.order = props.order;
        this.predecessor = props.predecessor;
        this.remainingQuantity = props.remainingQuantity;
        this.runRate = props.runRate;
        this.runTime = props.runTime;
        this.sequence = props.sequence;
        this.setupTime = props.setupTime;
        this.startDate = props.startDate;
        this.status = props.status;
        this.workOrder = props.workOrder;
        this.customFieldList = props.customFieldList;
    }
}
exports.ManufacturingOperationTaskSearchBasic = ManufacturingOperationTaskSearchBasic;
class BomRevisionComponentSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.bomQuantity = props.bomQuantity;
        this.bomRevision = props.bomRevision;
        this.componentYield = props.componentYield;
        this.description = props.description;
        this.internalId = props.internalId;
        this.item = props.item;
        this.itemSource = props.itemSource;
        this.itemSubtype = props.itemSubtype;
        this.itemType = props.itemType;
        this.lineId = props.lineId;
        this.quantity = props.quantity;
        this.units = props.units;
        this.weight = props.weight;
        this.customFieldList = props.customFieldList;
    }
}
exports.BomRevisionComponentSearchRowBasic = BomRevisionComponentSearchRowBasic;
class TaxDetailsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.taxDetails = props.taxDetails;
        this.replaceAll = props.replaceAll;
    }
}
exports.TaxDetailsList = TaxDetailsList;
class SiteCategorySearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.dateViewed = props.dateViewed;
        this.description = props.description;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.name = props.name;
        this.sitemapPriority = props.sitemapPriority;
    }
}
exports.SiteCategorySearchBasic = SiteCategorySearchBasic;
class NexusSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.country = props.country;
        this.description = props.description;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.parentNexus = props.parentNexus;
        this.state = props.state;
        this.taxAgency = props.taxAgency;
        this.taxDateFromFulfillment = props.taxDateFromFulfillment;
    }
}
exports.NexusSearchRowBasic = NexusSearchRowBasic;
class ContactCategorySearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this._private = props._private;
        this.sync = props.sync;
    }
}
exports.ContactCategorySearchRowBasic = ContactCategorySearchRowBasic;
class CustomListSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.isOrdered = props.isOrdered;
        this.name = props.name;
        this.owner = props.owner;
        this.scriptId = props.scriptId;
    }
}
exports.CustomListSearchRowBasic = CustomListSearchRowBasic;
class ItemRevisionSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.effectiveDate = props.effectiveDate;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.item = props.item;
        this.name = props.name;
        this.obsoleteDate = props.obsoleteDate;
    }
}
exports.ItemRevisionSearchBasic = ItemRevisionSearchBasic;
class FileSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.availableWithoutLogin = props.availableWithoutLogin;
        this.created = props.created;
        this.dateViewed = props.dateViewed;
        this.description = props.description;
        this.documentSize = props.documentSize;
        this.externalId = props.externalId;
        this.fileType = props.fileType;
        this.folder = props.folder;
        this.hits = props.hits;
        this.hostedPath = props.hostedPath;
        this.internalId = props.internalId;
        this.isAvailable = props.isAvailable;
        this.modified = props.modified;
        this.name = props.name;
        this.owner = props.owner;
        this.url = props.url;
    }
}
exports.FileSearchRowBasic = FileSearchRowBasic;
class LocationSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.address = props.address;
        this.allowStorePickup = props.allowStorePickup;
        this.autoAssignmentRegionSetting = props.autoAssignmentRegionSetting;
        this.bufferStock = props.bufferStock;
        this.city = props.city;
        this.country = props.country;
        this.county = props.county;
        this.dailyShippingCapacity = props.dailyShippingCapacity;
        this.endTime = props.endTime;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.geolocationMethod = props.geolocationMethod;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isFriday = props.isFriday;
        this.isInactive = props.isInactive;
        this.isIncludeInCt = props.isIncludeInCt;
        this.isMonday = props.isMonday;
        this.isOffice = props.isOffice;
        this.isSaturday = props.isSaturday;
        this.isSunday = props.isSunday;
        this.isThursday = props.isThursday;
        this.isTuesday = props.isTuesday;
        this.isWednesday = props.isWednesday;
        this.latitude = props.latitude;
        this.locationType = props.locationType;
        this.longitude = props.longitude;
        this.makeInventoryAvailable = props.makeInventoryAvailable;
        this.makeInventoryAvailableStore = props.makeInventoryAvailableStore;
        this.name = props.name;
        this.nameNoHierarchy = props.nameNoHierarchy;
        this.nextPickupCutOffTime = props.nextPickupCutOffTime;
        this.phone = props.phone;
        this.sameDayPickupCutOffTime = props.sameDayPickupCutOffTime;
        this.startTime = props.startTime;
        this.state = props.state;
        this.storePickupBufferStock = props.storePickupBufferStock;
        this.subsidiary = props.subsidiary;
        this.timeZone = props.timeZone;
        this.totalShippingCapacity = props.totalShippingCapacity;
        this.tranprefix = props.tranprefix;
        this.usesBins = props.usesBins;
        this.zip = props.zip;
        this.customFieldList = props.customFieldList;
    }
}
exports.LocationSearchBasic = LocationSearchBasic;
class CalendarEventSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accessLevel = props.accessLevel;
        this.attendee = props.attendee;
        this.calendar = props.calendar;
        this.completedDate = props.completedDate;
        this.createdDate = props.createdDate;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.instanceStart = props.instanceStart;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isUpcomingEvent = props.isUpcomingEvent;
        this.lastModifiedDate = props.lastModifiedDate;
        this.location = props.location;
        this.message = props.message;
        this.organizer = props.organizer;
        this.owner = props.owner;
        this.resource = props.resource;
        this.response = props.response;
        this.startDate = props.startDate;
        this.status = props.status;
        this.title = props.title;
        this.customFieldList = props.customFieldList;
    }
}
exports.CalendarEventSearchBasic = CalendarEventSearchBasic;
class CustomerStatusSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.includeInLeadReports = props.includeInLeadReports;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.probability = props.probability;
    }
}
exports.CustomerStatusSearchRowBasic = CustomerStatusSearchRowBasic;
class CustomerMessageSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.preferred = props.preferred;
    }
}
exports.CustomerMessageSearchBasic = CustomerMessageSearchBasic;
class BinSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.binNumber = props.binNumber;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.inactive = props.inactive;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.location = props.location;
        this.memo = props.memo;
        this.customFieldList = props.customFieldList;
    }
}
exports.BinSearchBasic = BinSearchBasic;
class ContactSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.address = props.address;
        this.addressee = props.addressee;
        this.addressLabel = props.addressLabel;
        this.addressPhone = props.addressPhone;
        this.attention = props.attention;
        this.availableOffline = props.availableOffline;
        this.category = props.category;
        this.city = props.city;
        this.comments = props.comments;
        this.company = props.company;
        this.contactRole = props.contactRole;
        this.contactSource = props.contactSource;
        this.country = props.country;
        this.county = props.county;
        this.dateCreated = props.dateCreated;
        this.defaultTaxReg = props.defaultTaxReg;
        this.defaultTaxRegText = props.defaultTaxRegText;
        this.email = props.email;
        this.employer = props.employer;
        this.entityId = props.entityId;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.fax = props.fax;
        this.firstName = props.firstName;
        this.giveAccess = props.giveAccess;
        this.globalSubscriptionStatus = props.globalSubscriptionStatus;
        this.group = props.group;
        this.hasDuplicates = props.hasDuplicates;
        this.image = props.image;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isDefaultBilling = props.isDefaultBilling;
        this.isDefaultShipping = props.isDefaultShipping;
        this.isInactive = props.isInactive;
        this.isPrivate = props.isPrivate;
        this.language = props.language;
        this.lastModifiedDate = props.lastModifiedDate;
        this.lastName = props.lastName;
        this.level = props.level;
        this.middleName = props.middleName;
        this.owner = props.owner;
        this.permission = props.permission;
        this.phone = props.phone;
        this.phoneticName = props.phoneticName;
        this.salutation = props.salutation;
        this.state = props.state;
        this.subsidiary = props.subsidiary;
        this.title = props.title;
        this.type = props.type;
        this.zipCode = props.zipCode;
        this.customFieldList = props.customFieldList;
    }
}
exports.ContactSearchBasic = ContactSearchBasic;
class ItemRevisionSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.effectiveDate = props.effectiveDate;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.item = props.item;
        this.memo = props.memo;
        this.name = props.name;
        this.obsoleteDate = props.obsoleteDate;
    }
}
exports.ItemRevisionSearchRowBasic = ItemRevisionSearchRowBasic;
class ResourceAllocationSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.allocationType = props.allocationType;
        this.allocationUnit = props.allocationUnit;
        this.approvalStatus = props.approvalStatus;
        this.project = props.project;
        this.customer = props.customer;
        this.endDate = props.endDate;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.nextApprover = props.nextApprover;
        this.notes = props.notes;
        this.numberHours = props.numberHours;
        this.percentOfTime = props.percentOfTime;
        this.requestedBy = props.requestedBy;
        this.resource = props.resource;
        this.startDate = props.startDate;
        this.customFieldList = props.customFieldList;
    }
}
exports.ResourceAllocationSearchRowBasic = ResourceAllocationSearchRowBasic;
class BomRevisionSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.billOfMaterials = props.billOfMaterials;
        this.createdDate = props.createdDate;
        this.effectiveEndDate = props.effectiveEndDate;
        this.effectiveStartDate = props.effectiveStartDate;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.memo = props.memo;
        this.name = props.name;
    }
}
exports.BomRevisionSearchBasic = BomRevisionSearchBasic;
class SupportCaseSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.assigned = props.assigned;
        this.awaitingReply = props.awaitingReply;
        this.caseNumber = props.caseNumber;
        this.category = props.category;
        this.closedDate = props.closedDate;
        this.company = props.company;
        this.contact = props.contact;
        this.createdDate = props.createdDate;
        this.email = props.email;
        this.escalateTo = props.escalateTo;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.helpDesk = props.helpDesk;
        this.inboundEmail = props.inboundEmail;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.issue = props.issue;
        this.item = props.item;
        this.lastMessage = props.lastMessage;
        this.lastModifiedDate = props.lastModifiedDate;
        this.lastReopenedDate = props.lastReopenedDate;
        this.locked = props.locked;
        this.message = props.message;
        this.messageAuthor = props.messageAuthor;
        this.messageDate = props.messageDate;
        this.messageType = props.messageType;
        this.module = props.module;
        this.number = props.number;
        this.origin = props.origin;
        this.priority = props.priority;
        this.product = props.product;
        this.profile = props.profile;
        this.serialNumber = props.serialNumber;
        this.stage = props.stage;
        this.startDate = props.startDate;
        this.status = props.status;
        this.subsidiary = props.subsidiary;
        this.title = props.title;
        this.customFieldList = props.customFieldList;
    }
}
exports.SupportCaseSearchBasic = SupportCaseSearchBasic;
class PromotionCodeSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.code = props.code;
        this.description = props.description;
        this.discount = props.discount;
        this.endDate = props.endDate;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.isPublic = props.isPublic;
        this.location = props.location;
        this.name = props.name;
        this.startDate = props.startDate;
        this.customFieldList = props.customFieldList;
    }
}
exports.PromotionCodeSearchRowBasic = PromotionCodeSearchRowBasic;
class TaxDetailSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.lineNumber = props.lineNumber;
        this.taxAmount = props.taxAmount;
        this.taxBasis = props.taxBasis;
        this.taxCode = props.taxCode;
        this.taxRate = props.taxRate;
        this.taxType = props.taxType;
        this.tranId = props.tranId;
    }
}
exports.TaxDetailSearchBasic = TaxDetailSearchBasic;
class CustomListSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.isOrdered = props.isOrdered;
        this.name = props.name;
        this.owner = props.owner;
        this.scriptId = props.scriptId;
    }
}
exports.CustomListSearchBasic = CustomListSearchBasic;
class AccountingPeriodSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.allLocked = props.allLocked;
        this.allowNonGlChanges = props.allowNonGlChanges;
        this.apLocked = props.apLocked;
        this.arLocked = props.arLocked;
        this.closed = props.closed;
        this.closedOnDate = props.closedOnDate;
        this.endDate = props.endDate;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isAdjust = props.isAdjust;
        this.isInactive = props.isInactive;
        this.isQuarter = props.isQuarter;
        this.isYear = props.isYear;
        this.parent = props.parent;
        this.payrollLocked = props.payrollLocked;
        this.periodName = props.periodName;
        this.startDate = props.startDate;
    }
}
exports.AccountingPeriodSearchBasic = AccountingPeriodSearchBasic;
class PaymentMethodSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.creditCard = props.creditCard;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isDebitCard = props.isDebitCard;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.PaymentMethodSearchBasic = PaymentMethodSearchBasic;
class ProjectTaskSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.actualWork = props.actualWork;
        this.company = props.company;
        this.constraintType = props.constraintType;
        this.contact = props.contact;
        this.cost = props.cost;
        this.costBase = props.costBase;
        this.costBaseBaseline = props.costBaseBaseline;
        this.costBaseline = props.costBaseline;
        this.costBaseVariance = props.costBaseVariance;
        this.costVariance = props.costVariance;
        this.costVariancePercent = props.costVariancePercent;
        this.createdDate = props.createdDate;
        this.endDate = props.endDate;
        this.endDateBaseline = props.endDateBaseline;
        this.endDateVariance = props.endDateVariance;
        this.estimatedWork = props.estimatedWork;
        this.estimatedWorkBaseline = props.estimatedWorkBaseline;
        this.estimatedWorkVariance = props.estimatedWorkVariance;
        this.estimatedWorkVariancePercent = props.estimatedWorkVariancePercent;
        this.externalId = props.externalId;
        this.finishByDate = props.finishByDate;
        this.id = props.id;
        this.internalId = props.internalId;
        this.isMilestone = props.isMilestone;
        this.isSummaryTask = props.isSummaryTask;
        this.lastModifiedDate = props.lastModifiedDate;
        this.message = props.message;
        this.nonBillableTask = props.nonBillableTask;
        this.owner = props.owner;
        this.parent = props.parent;
        this.percentWorkComplete = props.percentWorkComplete;
        this.predecessor = props.predecessor;
        this.predecessorLagDays = props.predecessorLagDays;
        this.predecessors = props.predecessors;
        this.predecessorType = props.predecessorType;
        this.priority = props.priority;
        this.remainingWork = props.remainingWork;
        this.startDate = props.startDate;
        this.startDateBaseline = props.startDateBaseline;
        this.startDateVariance = props.startDateVariance;
        this.status = props.status;
        this.successor = props.successor;
        this.successorType = props.successorType;
        this.title = props.title;
        this.customFieldList = props.customFieldList;
    }
}
exports.ProjectTaskSearchRowBasic = ProjectTaskSearchRowBasic;
class CustomerMessageSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.preferred = props.preferred;
    }
}
exports.CustomerMessageSearchRowBasic = CustomerMessageSearchRowBasic;
class ExpenseCategorySearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.rateRequired = props.rateRequired;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.ExpenseCategorySearchBasic = ExpenseCategorySearchBasic;
class VendorSubsidiaryRelationshipSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.balance = props.balance;
        this.balanceBase = props.balanceBase;
        this.baseCurrency = props.baseCurrency;
        this.creditLimit = props.creditLimit;
        this.entity = props.entity;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.inTransitBalance = props.inTransitBalance;
        this.inTransitBalanceBase = props.inTransitBalanceBase;
        this.isPrimarySub = props.isPrimarySub;
        this.primaryCurrency = props.primaryCurrency;
        this.subsidiary = props.subsidiary;
        this.taxItem = props.taxItem;
        this.unbilledOrders = props.unbilledOrders;
        this.unbilledOrdersBase = props.unbilledOrdersBase;
        this.customFieldList = props.customFieldList;
    }
}
exports.VendorSubsidiaryRelationshipSearchBasic = VendorSubsidiaryRelationshipSearchBasic;
class HcmJobSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.jobId = props.jobId;
        this.title = props.title;
        this.customFieldList = props.customFieldList;
    }
}
exports.HcmJobSearchBasic = HcmJobSearchBasic;
class SubsidiarySearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBook = props.accountingBook;
        this.accountingBookCurrency = props.accountingBookCurrency;
        this.address = props.address;
        this.city = props.city;
        this.country = props.country;
        this.currency = props.currency;
        this.effectiveFrom = props.effectiveFrom;
        this.email = props.email;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.fax = props.fax;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isElimination = props.isElimination;
        this.isInactive = props.isInactive;
        this.legalName = props.legalName;
        this.name = props.name;
        this.nameNoHierarchy = props.nameNoHierarchy;
        this.nexus = props.nexus;
        this.phone = props.phone;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.state = props.state;
        this.taxEngine = props.taxEngine;
        this.taxIdNum = props.taxIdNum;
        this.taxRegistrationNumber = props.taxRegistrationNumber;
        this.tranPrefix = props.tranPrefix;
        this.url = props.url;
        this.validUntil = props.validUntil;
        this.zip = props.zip;
        this.customFieldList = props.customFieldList;
    }
}
exports.SubsidiarySearchBasic = SubsidiarySearchBasic;
class InventoryNumberSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.expirationDate = props.expirationDate;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.inventoryNumber = props.inventoryNumber;
        this.isonhand = props.isonhand;
        this.item = props.item;
        this.location = props.location;
        this.memo = props.memo;
        this.quantityavailable = props.quantityavailable;
        this.quantityintransit = props.quantityintransit;
        this.quantityonhand = props.quantityonhand;
        this.quantityonorder = props.quantityonorder;
        this.customFieldList = props.customFieldList;
    }
}
exports.InventoryNumberSearchRowBasic = InventoryNumberSearchRowBasic;
class BillingScheduleSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.applyToSubtotal = props.applyToSubtotal;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.frequency = props.frequency;
        this.inArrears = props.inArrears;
        this.initialAmount = props.initialAmount;
        this.initialTerms = props.initialTerms;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.isPublic = props.isPublic;
        this.name = props.name;
        this.recurrenceCount = props.recurrenceCount;
        this.recurrencePattern = props.recurrencePattern;
        this.recurrenceTerms = props.recurrenceTerms;
        this.repeatEvery = props.repeatEvery;
        this.type = props.type;
    }
}
exports.BillingScheduleSearchBasic = BillingScheduleSearchBasic;
class InventoryAssignment extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.internalId = props.internalId;
        this.issueInventoryNumber = props.issueInventoryNumber;
        this.receiptInventoryNumber = props.receiptInventoryNumber;
        this.binNumber = props.binNumber;
        this.toBinNumber = props.toBinNumber;
        this.quantity = props.quantity;
        this.expirationDate = props.expirationDate;
        this.quantityAvailable = props.quantityAvailable;
    }
}
exports.InventoryAssignment = InventoryAssignment;
class CustomRecordSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.recType = props.recType;
        this.availableOffline = props.availableOffline;
        this.created = props.created;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.id = props.id;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.lastModified = props.lastModified;
        this.lastModifiedBy = props.lastModifiedBy;
        this.name = props.name;
        this.owner = props.owner;
        this.parent = props.parent;
        this.customFieldList = props.customFieldList;
    }
}
exports.CustomRecordSearchBasic = CustomRecordSearchBasic;
class RevRecScheduleSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBook = props.accountingBook;
        this.amorStatus = props.amorStatus;
        this.amortizedAmount = props.amortizedAmount;
        this.amorType = props.amorType;
        this.amount = props.amount;
        this.currency = props.currency;
        this.deferredAmount = props.deferredAmount;
        this.destAcct = props.destAcct;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.initialAmt = props.initialAmt;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isRecognized = props.isRecognized;
        this.jeDoc = props.jeDoc;
        this.name = props.name;
        this.pctComplete = props.pctComplete;
        this.pctRecognition = props.pctRecognition;
        this.periodOffset = props.periodOffset;
        this.postPeriod = props.postPeriod;
        this.schedDate = props.schedDate;
        this.scheduleNumber = props.scheduleNumber;
        this.scheduleNumberText = props.scheduleNumberText;
        this.sourceAcct = props.sourceAcct;
        this.srcTranPostPeriod = props.srcTranPostPeriod;
        this.srcTranType = props.srcTranType;
        this.startOffset = props.startOffset;
        this.templateName = props.templateName;
        this.useForeignAmounts = props.useForeignAmounts;
    }
}
exports.RevRecScheduleSearchBasic = RevRecScheduleSearchBasic;
class SubsidiarySearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBook = props.accountingBook;
        this.accountingBookCurrency = props.accountingBookCurrency;
        this.address1 = props.address1;
        this.address2 = props.address2;
        this.address3 = props.address3;
        this.anonymousCustomerInboundEmail = props.anonymousCustomerInboundEmail;
        this.anonymousCustomerOnlineForms = props.anonymousCustomerOnlineForms;
        this.caseAssignmentTemplate = props.caseAssignmentTemplate;
        this.caseAutomaticClosureTemplate = props.caseAutomaticClosureTemplate;
        this.caseCopyEmployeeTemplate = props.caseCopyEmployeeTemplate;
        this.caseCreationTemplate = props.caseCreationTemplate;
        this.caseEscalationTemplate = props.caseEscalationTemplate;
        this.caseUpdateTemplate = props.caseUpdateTemplate;
        this.city = props.city;
        this.companyNameForSupportMessages = props.companyNameForSupportMessages;
        this.country = props.country;
        this.currency = props.currency;
        this.effectiveFrom = props.effectiveFrom;
        this.email = props.email;
        this.employeeCaseUpdateTemplate = props.employeeCaseUpdateTemplate;
        this.externalId = props.externalId;
        this.fax = props.fax;
        this.internalId = props.internalId;
        this.isElimination = props.isElimination;
        this.isInactive = props.isInactive;
        this.legalName = props.legalName;
        this.mainSupportEmailAddress = props.mainSupportEmailAddress;
        this.name = props.name;
        this.nameNoHierarchy = props.nameNoHierarchy;
        this.nexus = props.nexus;
        this.phone = props.phone;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.state = props.state;
        this.taxEngine = props.taxEngine;
        this.taxIdNum = props.taxIdNum;
        this.taxRegistrationNumber = props.taxRegistrationNumber;
        this.tranPrefix = props.tranPrefix;
        this.url = props.url;
        this.validUntil = props.validUntil;
        this.zip = props.zip;
        this.customFieldList = props.customFieldList;
    }
}
exports.SubsidiarySearchRowBasic = SubsidiarySearchRowBasic;
class SalesRoleSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.description = props.description;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isInactive = props.isInactive;
        this.name = props.name;
    }
}
exports.SalesRoleSearchRowBasic = SalesRoleSearchRowBasic;
class TimeEntrySearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.approvalStatus = props.approvalStatus;
        this.billable = props.billable;
        this.billingClass = props.billingClass;
        this.billingStatus = props.billingStatus;
        this.clazz = props.clazz;
        this.customer = props.customer;
        this.date = props.date;
        this.dateCreated = props.dateCreated;
        this.department = props.department;
        this.duration = props.duration;
        this.employee = props.employee;
        this.exempt = props.exempt;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isCharged = props.isCharged;
        this.item = props.item;
        this.lastModified = props.lastModified;
        this.location = props.location;
        this.memo = props.memo;
        this.nextApprover = props.nextApprover;
        this.paidByPayroll = props.paidByPayroll;
        this.paidExternally = props.paidExternally;
        this.payItem = props.payItem;
        this.productive = props.productive;
        this.subsidiary = props.subsidiary;
        this.type = props.type;
        this.utilized = props.utilized;
        this.customFieldList = props.customFieldList;
    }
}
exports.TimeEntrySearchBasic = TimeEntrySearchBasic;
class BudgetSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.accountingBook = props.accountingBook;
        this.amount = props.amount;
        this.category = props.category;
        this.clazz = props.clazz;
        this.currency = props.currency;
        this.customer = props.customer;
        this.department = props.department;
        this.global = props.global;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.item = props.item;
        this.location = props.location;
        this.subsidiary = props.subsidiary;
        this.year = props.year;
        this.year2 = props.year2;
        this.customFieldList = props.customFieldList;
    }
}
exports.BudgetSearchBasic = BudgetSearchBasic;
class VendorSubsidiaryRelationshipSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.balance = props.balance;
        this.balancebase = props.balancebase;
        this.baseCurrency = props.baseCurrency;
        this.creditlimit = props.creditlimit;
        this.entity = props.entity;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.inTransitBalance = props.inTransitBalance;
        this.inTransitBalanceBase = props.inTransitBalanceBase;
        this.isprimarysub = props.isprimarysub;
        this.primaryCurrency = props.primaryCurrency;
        this.subsidiary = props.subsidiary;
        this.taxitem = props.taxitem;
        this.unbilledorders = props.unbilledorders;
        this.unbilledordersbase = props.unbilledordersbase;
        this.customFieldList = props.customFieldList;
    }
}
exports.VendorSubsidiaryRelationshipSearchRowBasic = VendorSubsidiaryRelationshipSearchRowBasic;
class InboundShipmentSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.actualDeliveryDate = props.actualDeliveryDate;
        this.actualShippingDate = props.actualShippingDate;
        this.billOfLading = props.billOfLading;
        this.createdDate = props.createdDate;
        this.currency = props.currency;
        this.description = props.description;
        this.expectedDeliveryDate = props.expectedDeliveryDate;
        this.expectedRate = props.expectedRate;
        this.expectedShippingDate = props.expectedShippingDate;
        this.externalDocumentNumber = props.externalDocumentNumber;
        this.externalId = props.externalId;
        this.incoterm = props.incoterm;
        this.internalId = props.internalId;
        this.item = props.item;
        this.itemEffectiveDate = props.itemEffectiveDate;
        this.itemExchangeRate = props.itemExchangeRate;
        this.landedCostAllocationMethod = props.landedCostAllocationMethod;
        this.landedCostAmount = props.landedCostAmount;
        this.landedCostCostCategory = props.landedCostCostCategory;
        this.landedCostCurrency = props.landedCostCurrency;
        this.landedCostEffectiveDate = props.landedCostEffectiveDate;
        this.landedCostExchangeRate = props.landedCostExchangeRate;
        this.memo = props.memo;
        this.poAmount = props.poAmount;
        this.poRate = props.poRate;
        this.purchaseOrder = props.purchaseOrder;
        this.quantityBilled = props.quantityBilled;
        this.quantityExpected = props.quantityExpected;
        this.quantityReceived = props.quantityReceived;
        this.quantityRemaining = props.quantityRemaining;
        this.receivingLocation = props.receivingLocation;
        this.shipmentBaseCurrency = props.shipmentBaseCurrency;
        this.shipmentNumber = props.shipmentNumber;
        this.status = props.status;
        this.totalUnitCost = props.totalUnitCost;
        this.unit = props.unit;
        this.unitLandedCost = props.unitLandedCost;
        this.vendor = props.vendor;
        this.vesselNumber = props.vesselNumber;
        this.customFieldList = props.customFieldList;
    }
}
exports.InboundShipmentSearchRowBasic = InboundShipmentSearchRowBasic;
class SolutionSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this._abstract = props._abstract;
        this.assigned = props.assigned;
        this.caseCount = props.caseCount;
        this.code = props.code;
        this.createdDate = props.createdDate;
        this.description = props.description;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.find = props.find;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.isOnline = props.isOnline;
        this.lastModifiedDate = props.lastModifiedDate;
        this.number = props.number;
        this.status = props.status;
        this.title = props.title;
        this.topic = props.topic;
        this.customFieldList = props.customFieldList;
    }
}
exports.SolutionSearchBasic = SolutionSearchBasic;
class PricingSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.assignedPriceLevel = props.assignedPriceLevel;
        this.currency = props.currency;
        this.customer = props.customer;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.item = props.item;
        this.maximumQuantity = props.maximumQuantity;
        this.minimumQuantity = props.minimumQuantity;
        this.priceLevel = props.priceLevel;
        this.rate = props.rate;
    }
}
exports.PricingSearchBasic = PricingSearchBasic;
class AccountingPeriodSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.allLocked = props.allLocked;
        this.allowNonGLChanges = props.allowNonGLChanges;
        this.apLocked = props.apLocked;
        this.arLocked = props.arLocked;
        this.closed = props.closed;
        this.closedOnDate = props.closedOnDate;
        this.endDate = props.endDate;
        this.internalId = props.internalId;
        this.isAdjust = props.isAdjust;
        this.isInactive = props.isInactive;
        this.isQuarter = props.isQuarter;
        this.isYear = props.isYear;
        this.parent = props.parent;
        this.payrollLocked = props.payrollLocked;
        this.periodName = props.periodName;
        this.startDate = props.startDate;
    }
}
exports.AccountingPeriodSearchRowBasic = AccountingPeriodSearchRowBasic;
class TaxTypeSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.country = props.country;
        this.description = props.description;
        this.doesNotAddToTotal = props.doesNotAddToTotal;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isInactive = props.isInactive;
        this.name = props.name;
        this.nexus = props.nexus;
        this.payablesAccount = props.payablesAccount;
        this.postToItemCost = props.postToItemCost;
        this.receivablesAccount = props.receivablesAccount;
        this.reverseCharge = props.reverseCharge;
        this.taxInNetAmount = props.taxInNetAmount;
    }
}
exports.TaxTypeSearchBasic = TaxTypeSearchBasic;
class TaskSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accessLevel = props.accessLevel;
        this.actualTime = props.actualTime;
        this.assigned = props.assigned;
        this.company = props.company;
        this.completedDate = props.completedDate;
        this.contact = props.contact;
        this.createdDate = props.createdDate;
        this.dueDate = props.dueDate;
        this.estimatedTime = props.estimatedTime;
        this.estimatedTimeOverride = props.estimatedTimeOverride;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isJobSummaryTask = props.isJobSummaryTask;
        this.isJobTask = props.isJobTask;
        this.lastModifiedDate = props.lastModifiedDate;
        this.markdone = props.markdone;
        this.message = props.message;
        this.milestone = props.milestone;
        this.order = props.order;
        this.owner = props.owner;
        this.percentComplete = props.percentComplete;
        this.percentTimeComplete = props.percentTimeComplete;
        this.priority = props.priority;
        this.startDate = props.startDate;
        this.startTime = props.startTime;
        this.status = props.status;
        this.timeRemaining = props.timeRemaining;
        this.title = props.title;
        this.transaction = props.transaction;
        this.customFieldList = props.customFieldList;
    }
}
exports.TaskSearchRowBasic = TaskSearchRowBasic;
class TaskSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.actualTime = props.actualTime;
        this.assigned = props.assigned;
        this.company = props.company;
        this.completedDate = props.completedDate;
        this.contact = props.contact;
        this.createdDate = props.createdDate;
        this.endDate = props.endDate;
        this.estimatedTime = props.estimatedTime;
        this.estimatedTimeOverride = props.estimatedTimeOverride;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isJobSummaryTask = props.isJobSummaryTask;
        this.isJobTask = props.isJobTask;
        this.isPrivate = props.isPrivate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.milestone = props.milestone;
        this.owner = props.owner;
        this.percentComplete = props.percentComplete;
        this.percentTimeComplete = props.percentTimeComplete;
        this.priority = props.priority;
        this.startDate = props.startDate;
        this.status = props.status;
        this.timeRemaining = props.timeRemaining;
        this.title = props.title;
        this.customFieldList = props.customFieldList;
    }
}
exports.TaskSearchBasic = TaskSearchBasic;
class ConsolidatedExchangeRateSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBook = props.accountingBook;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.fromSubsidiary = props.fromSubsidiary;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.isDerivedRate = props.isDerivedRate;
        this.period = props.period;
        this.periodStartDate = props.periodStartDate;
        this.toSubsidiary = props.toSubsidiary;
    }
}
exports.ConsolidatedExchangeRateSearchBasic = ConsolidatedExchangeRateSearchBasic;
class ItemBinNumberSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.binNumber = props.binNumber;
        this.location = props.location;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityOnHand = props.quantityOnHand;
    }
}
exports.ItemBinNumberSearchRowBasic = ItemBinNumberSearchRowBasic;
class ManufacturingRoutingSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.autoCalculateLag = props.autoCalculateLag;
        this.billOfMaterials = props.billOfMaterials;
        this.externalId = props.externalId;
        this.internalId = props.internalId;
        this.isDefault = props.isDefault;
        this.isInactive = props.isInactive;
        this.item = props.item;
        this.lagAmount = props.lagAmount;
        this.lagType = props.lagType;
        this.lagUnits = props.lagUnits;
        this.location = props.location;
        this.manufacturingCostTemplate = props.manufacturingCostTemplate;
        this.manufacturingWorkCenter = props.manufacturingWorkCenter;
        this.memo = props.memo;
        this.name = props.name;
        this.operationName = props.operationName;
        this.operationYield = props.operationYield;
        this.runRate = props.runRate;
        this.sequence = props.sequence;
        this.setupTime = props.setupTime;
        this.subsidiary = props.subsidiary;
        this.customFieldList = props.customFieldList;
    }
}
exports.ManufacturingRoutingSearchRowBasic = ManufacturingRoutingSearchRowBasic;
class ResourceAllocationSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.allocationType = props.allocationType;
        this.allocationUnit = props.allocationUnit;
        this.approvalStatus = props.approvalStatus;
        this.customer = props.customer;
        this.endDate = props.endDate;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.nextApprover = props.nextApprover;
        this.notes = props.notes;
        this.numberHours = props.numberHours;
        this.percentOfTime = props.percentOfTime;
        this.project = props.project;
        this.requestedBy = props.requestedBy;
        this.resource = props.resource;
        this.startDate = props.startDate;
        this.customFieldList = props.customFieldList;
    }
}
exports.ResourceAllocationSearchBasic = ResourceAllocationSearchBasic;
class ItemDemandPlanSearchBasic extends PlatformCore.SearchRecordBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.alternateSourceItem = props.alternateSourceItem;
        this.analysisDuration = props.analysisDuration;
        this.demandDate = props.demandDate;
        this.externalId = props.externalId;
        this.externalIdString = props.externalIdString;
        this.internalId = props.internalId;
        this.internalIdNumber = props.internalIdNumber;
        this.item = props.item;
        this.lastModifiedDate = props.lastModifiedDate;
        this.location = props.location;
        this.memo = props.memo;
        this.projectionDuration = props.projectionDuration;
        this.projectionInterval = props.projectionInterval;
        this.projectionMethod = props.projectionMethod;
        this.projectionStartDate = props.projectionStartDate;
        this.quantity = props.quantity;
        this.subsidiary = props.subsidiary;
        this.units = props.units;
        this.customFieldList = props.customFieldList;
    }
}
exports.ItemDemandPlanSearchBasic = ItemDemandPlanSearchBasic;
class TaxDetailSearchRowBasic extends PlatformCore.SearchRowBasic {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.details = props.details;
        this.lineNumber = props.lineNumber;
        this.taxAmount = props.taxAmount;
        this.taxBasis = props.taxBasis;
        this.taxCode = props.taxCode;
        this.taxRate = props.taxRate;
        this.taxType = props.taxType;
        this.tranId = props.tranId;
    }
}
exports.TaxDetailSearchRowBasic = TaxDetailSearchRowBasic;