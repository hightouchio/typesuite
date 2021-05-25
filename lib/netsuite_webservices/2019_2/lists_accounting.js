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
exports.BillingRatesMatrix = exports.PricingGroupSearch = exports.UnitsTypeSearchRow = exports.Subsidiary = exports.BillingScheduleSearchRow = exports.BudgetCategory = exports.CustomerCategory = exports.AssemblyItemHierarchyVersionsList = exports.ExpenseCategorySearchRow = exports.CustomerMessage = exports.ClassTranslation = exports.ItemGroupHierarchyVersions = exports.OtherChargePurchaseItem = exports.LocationBusinessHoursList = exports.PaymentMethodSearchRow = exports.InventoryItemBinNumberList = exports.WinLossReasonSearchAdvanced = exports.RevRecScheduleSearch = exports.PartnerCategory = exports.TaxGroup = exports.SubtotalItem = exports.GiftCertificateSearchAdvanced = exports.BillingScheduleRecurrenceList = exports.OtherNameCategorySearchAdvanced = exports.PaymentMethodVisuals = exports.CustomerCategorySearchRow = exports.RevRecSchedule = exports.TaxTypeSearchAdvanced = exports.AssemblyItemBillOfMaterialsList = exports.TermSearch = exports.ExpenseCategoryRatesList = exports.Nexus = exports.Location = exports.AccountingPeriodFiscalCalendarsList = exports.RevRecTemplateSearchAdvanced = exports.BomSearch = exports.LocationSearchAdvanced = exports.SerializedAssemblyItemBillOfMaterialsList = exports.OtherChargePurchaseItemHierarchyVersions = exports.ItemRevision = exports.UnitsType = exports.PricingMatrix = exports.LotNumberedInventoryItem = exports.AccountLocalizations = exports.FairValuePriceSearch = exports.MatrixOptionList = exports.SalesRoleSearch = exports.OtherNameCategory = exports.InventoryNumberLocations = exports.PaymentCard = void 0;
exports.VendorCategorySearch = exports.TaxGroupTaxItem = exports.PartnerCategorySearchAdvanced = exports.LeadSource = exports.Account = exports.AccountLocalizationsList = exports.MerchandiseHierarchyNodeSearch = exports.BomRevision = exports.OtherChargeResaleItemHierarchyVersions = exports.NonInventoryPurchaseItemHierarchyVersionsList = exports.OtherChargeResaleItemHierarchyVersionsList = exports.SubsidiaryAccountingBookDetailList = exports.NonInventoryPurchaseItem = exports.RevRecScheduleSearchAdvanced = exports.SerializedInventoryItemNumbers = exports.MerchandiseHierarchyNodeHierarchyVersions = exports.InventoryItemHierarchyVersionsList = exports.WinLossReasonSearchRow = exports.ConsolidatedExchangeRateSearchAdvanced = exports.LotNumberedAssemblyItem = exports.ServiceItemTaskTemplatesList = exports.ServiceItemTaskTemplates = exports.ClassificationSearchAdvanced = exports.InventoryItemLocationsList = exports.ItemSearchAdvanced = exports.InventoryNumberSearchAdvanced = exports.CurrencyRate = exports.CostCategory = exports.TaxAcct = exports.InventoryNumber = exports.GlobalAccountMappingSearchRow = exports.CurrencyRateSearch = exports.Bin = exports.CurrencyRateSearchAdvanced = exports.ExpenseCategorySearch = exports.LotNumberedInventoryItemNumbers = exports.CostCategorySearch = exports.DepartmentSearchRow = exports.NonInventoryPurchaseItemHierarchyVersions = exports.CostCategorySearchAdvanced = exports.NexusSearchAdvanced = exports.ItemSearch = exports.ItemGroupHierarchyVersionsList = exports.PriceLevelSearch = exports.ItemMember = exports.SalesRoleSearchAdvanced = exports.ItemAccountMappingSearchAdvanced = exports.PriceLevelSearchAdvanced = exports.SerializedInventoryItemNumbersList = exports.BomRevisionComponent = void 0;
exports.SerializedInventoryItemLocationsList = exports.GiftCertificate = exports.SubsidiaryTaxRegistration = exports.DescriptionItem = exports.FairValuePriceSearchRow = exports.AssemblyItemBillOfMaterials = exports.UnitsTypeUom = exports.BomSearchRow = exports.ContactRoleSearchAdvanced = exports.Classification = exports.ServicePurchaseItemHierarchyVersions = exports.RevRecScheduleSearchRow = exports.NoteTypeSearchAdvanced = exports.GlobalAccountMappingSearch = exports.GiftCertificateItem = exports.AssemblyItemHierarchyVersions = exports.LocationSearch = exports.RevRecScheduleRecurrence = exports.SerializedInventoryItemLocations = exports.Currency = exports.ClassificationSearch = exports.ItemVendorList = exports.BillingScheduleRecurrence = exports.OtherNameCategorySearchRow = exports.PaymentMethodSearch = exports.NonInventorySaleItemHierarchyVersions = exports.SubsidiarySearchRow = exports.MarkupItem = exports.LotNumberedInventoryItemHierarchyVersions = exports.RevRecTemplateSearch = exports.PresentationItemList = exports.ItemGroup = exports.NoteTypeSearchRow = exports.Price = exports.GiftCertificateSearchRow = exports.ServiceSaleItemHierarchyVersionsList = exports.ServiceResaleItemHierarchyVersionsList = exports.TranslationList = exports.AssemblyItem = exports.WinLossReason = exports.LotNumberedInventoryItemLocations = exports.KitItemHierarchyVersions = exports.TaxGroupSearchRow = exports.RevRecTemplateRecurrenceList = exports.PartnerCategorySearch = exports.OtherNameCategorySearch = exports.SalesTaxItem = exports.State = exports.AccountingPeriodSearchRow = exports.TermPercentagesList = void 0;
exports.LotNumberedInventoryItemNumbersList = exports.BillingScheduleMilestone = exports.GiftCertificateSearch = exports.PriceList = exports.SerializedAssemblyItem = exports.GiftCertificateItemAuthCodes = exports.PaymentCardToken = exports.CustomerMessageSearchAdvanced = exports.NonInventorySaleItemHierarchyVersionsList = exports.VendorCategorySearchAdvanced = exports.UnitsTypeSearchAdvanced = exports.ItemAccountMappingSearch = exports.CostCategorySearchRow = exports.InventoryItemLocations = exports.UnitsTypeSearch = exports.SalesTaxItemSearchRow = exports.ItemRevisionSearchRow = exports.ServiceSaleItemHierarchyVersions = exports.ConsolidatedExchangeRateSearchRow = exports.PaymentMethod = exports.Pricing = exports.MerchandiseHierarchyNode = exports.BomRevisionComponentList = exports.LotNumberedInventoryItemHierarchyVersionsList = exports.NonInventoryResaleItem = exports.TaxGroupSearch = exports.MerchandiseHierarchyNodeSearchRow = exports.ItemOptionsList = exports.VendorCategory = exports.ClassTranslationList = exports.LocationRegions = exports.PaymentMethodVisualsList = exports.BomSearchAdvanced = exports.SubsidiaryNexusList = exports.ProductFeedList = exports.CustomerMessageSearchRow = exports.AccountSearchAdvanced = exports.BinSearchAdvanced = exports.TaxTypeSearch = exports.OtherChargeSaleItem = exports.DiscountItem = exports.InventoryNumberSearch = exports.TermPercentages = exports.Rate = exports.SubsidiarySearchAdvanced = exports.DepartmentSearch = exports.KitItem = exports.RevRecTemplateRecurrence = exports.PaymentItem = exports.SalesRole = void 0;
exports.ContactCategorySearchRow = exports.ServiceSaleItem = exports.PartnerCategorySearchRow = exports.WinLossReasonSearch = exports.AccountSearchRow = exports.ItemAccountMapping = exports.SerializedAssemblyItemHierarchyVersions = exports.NonInventorySaleItem = exports.TermSearchAdvanced = exports.ContactCategorySearch = exports.SiteCategory = exports.GiftCertificateItemAuthCodesList = exports.ExpenseCategoryRates = exports.ExpenseCategory = exports.BillingScheduleSearchAdvanced = exports.AccountingPeriodFiscalCalendars = exports.TermSearchRow = exports.ContactCategory = exports.PaymentMethodSearchAdvanced = exports.ItemMemberList = exports.ContactRoleSearch = exports.KitItemHierarchyVersionsList = exports.SerializedInventoryItemHierarchyVersionsList = exports.ConsolidatedExchangeRateSearch = exports.NexusSearch = exports.TaxTypeSearchRow = exports.BomRevisionSearch = exports.MerchandiseHierarchyNodeSearchAdvanced = exports.BinSearchRow = exports.SubsidiaryAccountingBookDetail = exports.TaxTypeNexusesTaxList = exports.TaxGroupSearchAdvanced = exports.MerchandiseHierarchyNodeHierarchyVersionsList = exports.RateList = exports.PricingGroupSearchAdvanced = exports.ServiceResaleItemHierarchyVersions = exports.ContactRoleSearchRow = exports.BillingScheduleMilestoneList = exports.SerializedInventoryItem = exports.Department = exports.PricingGroup = exports.TaxTypeNexusesTax = exports.ItemAccountingBookDetailList = exports.SerializedInventoryItemHierarchyVersions = exports.TaxGroupTaxItemList = exports.AccountingPeriodSearch = exports.LotNumberedAssemblyItemBillOfMaterials = exports.CustomerMessageSearch = exports.NonInventoryResaleItemHierarchyVersions = exports.BomRevisionSearchRow = void 0;
exports.ContactRole = exports.DepartmentSearchAdvanced = exports.LocationSearchRow = exports.OtherChargeResaleItem = exports.BillingScheduleSearch = exports.CustomerCategorySearchAdvanced = exports.ConsolidatedExchangeRate = exports.PricingGroupSearchRow = exports.CustomerCategorySearch = exports.ExpenseCategorySearchAdvanced = exports.TaxType = exports.ServiceResaleItem = exports.VendorCategorySearchRow = exports.SalesTaxItemSearch = exports.InventoryItem = exports.LocationRegionsList = exports.InventoryNumberSearchRow = exports.CurrencyRateSearchRow = exports.LotNumberedAssemblyItemBillOfMaterialsList = exports.ItemRevisionSearchAdvanced = exports.PriceLevelSearchRow = exports.NoteTypeSearch = exports.RevRecScheduleRecurrenceList = exports.NoteType = exports.UnitsTypeUomList = exports.GlobalAccountMappingSearchAdvanced = exports.TaxTypeNexusAccounts = exports.LotNumberedInventoryItemLocationsList = exports.Term = exports.SalesRoleSearchRow = exports.ContactCategorySearchAdvanced = exports.GeneralToken = exports.FairValuePriceSearchAdvanced = exports.OtherChargeSaleItemHierarchyVersions = exports.BillingSchedule = exports.RevRecTemplate = exports.OtherChargePurchaseItemHierarchyVersionsList = exports.RevRecTemplateSearchRow = exports.InventoryNumberLocationsList = exports.DownloadItem = exports.InventoryItemBinNumber = exports.ClassificationSearchRow = exports.ServicePurchaseItem = exports.InventoryItemHierarchyVersions = exports.FairValuePrice = exports.ServicePurchaseItemHierarchyVersionsList = exports.ItemRevisionSearch = exports.SerializedAssemblyItemHierarchyVersionsList = exports.Translation = exports.LocationBusinessHours = void 0;
exports.SubsidiarySearch = exports.SubsidiaryNexus = exports.SubsidiaryTaxRegistrationList = exports.NonInventoryResaleItemHierarchyVersionsList = exports.ItemAccountingBookDetail = exports.LotNumberedAssemblyItemHierarchyVersions = exports.AccountSearch = exports.GlobalAccountMapping = exports.BillingRates = exports.NexusSearchRow = exports.GeneralTokenSupportedOperationsListList = exports.AccountingPeriodSearchAdvanced = exports.ItemSearchRow = exports.OtherChargeSaleItemHierarchyVersionsList = exports.BinSearch = exports.LotNumberedAssemblyItemHierarchyVersionsList = exports.SiteCategoryList = exports.PriceLevel = exports.ItemAccountMappingSearchRow = exports.TaxTypeNexusAccountsList = exports.BomRevisionSearchAdvanced = exports.SalesTaxItemSearchAdvanced = exports.Bom = exports.AccountingPeriod = exports.ItemVendor = exports.SerializedAssemblyItemBillOfMaterials = void 0;
const PlatformCore = __importStar(require("./platform_core"));
const soap_types_1 = require("../../soap-types");
const MAPPINGS_NAME = "com_netsuite_webservices_lists_accounting_2019_2";
class PaymentCard extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.lastFourDigits = props.lastFourDigits;
        this.issuerIdNumber = props.issuerIdNumber;
        this.entity = props.entity;
        this.mask = props.mask;
        this.paymentMethod = props.paymentMethod;
        this.memo = props.memo;
        this.state = props.state;
        this.isInactive = props.isInactive;
        this.preserveOnFile = props.preserveOnFile;
        this.isDefault = props.isDefault;
        this.cardNumber = props.cardNumber;
        this.expirationDate = props.expirationDate;
        this.cardBrand = props.cardBrand;
        this.cardType = props.cardType;
        this.nameOnCard = props.nameOnCard;
        this.street = props.street;
        this.zipCode = props.zipCode;
        this.validFromDate = props.validFromDate;
        this.issueNumber = props.issueNumber;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.PaymentCard = PaymentCard;
class InventoryNumberLocations extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.location = props.location;
        this.quantityOnHand = props.quantityOnHand;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityOnOrder = props.quantityOnOrder;
        this.quantityInTransit = props.quantityInTransit;
    }
}
exports.InventoryNumberLocations = InventoryNumberLocations;
class OtherNameCategory extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.OtherNameCategory = OtherNameCategory;
class SalesRoleSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.SalesRoleSearch = SalesRoleSearch;
class MatrixOptionList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.matrixOption = props.matrixOption;
    }
}
exports.MatrixOptionList = MatrixOptionList;
class FairValuePriceSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.itemJoin = props.itemJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.FairValuePriceSearch = FairValuePriceSearch;
class AccountLocalizations extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingContext = props.accountingContext;
        this.acctNumber = props.acctNumber;
        this.acctName = props.acctName;
        this.legalName = props.legalName;
        this.locale = props.locale;
    }
}
exports.AccountLocalizations = AccountLocalizations;
class LotNumberedInventoryItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.matrixType = props.matrixType;
        this.includeChildren = props.includeChildren;
        this.vendorName = props.vendorName;
        this.parent = props.parent;
        this.isOnline = props.isOnline;
        this.isHazmatItem = props.isHazmatItem;
        this.hazmatId = props.hazmatId;
        this.hazmatShippingName = props.hazmatShippingName;
        this.hazmatHazardClass = props.hazmatHazardClass;
        this.hazmatPackingGroup = props.hazmatPackingGroup;
        this.hazmatItemUnits = props.hazmatItemUnits;
        this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
        this.isGcoCompliant = props.isGcoCompliant;
        this.offerSupport = props.offerSupport;
        this.isInactive = props.isInactive;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.costingMethod = props.costingMethod;
        this.subsidiaryList = props.subsidiaryList;
        this.purchaseDescription = props.purchaseDescription;
        this.copyDescription = props.copyDescription;
        this.currency = props.currency;
        this.cogsAccount = props.cogsAccount;
        this.intercoCogsAccount = props.intercoCogsAccount;
        this.vendor = props.vendor;
        this.salesDescription = props.salesDescription;
        this.incomeAccount = props.incomeAccount;
        this.intercoIncomeAccount = props.intercoIncomeAccount;
        this.issueProduct = props.issueProduct;
        this.taxSchedule = props.taxSchedule;
        this.dropshipExpenseAccount = props.dropshipExpenseAccount;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.directRevenuePosting = props.directRevenuePosting;
        this.isTaxable = props.isTaxable;
        this.assetAccount = props.assetAccount;
        this.matchBillToReceipt = props.matchBillToReceipt;
        this.billQtyVarianceAcct = props.billQtyVarianceAcct;
        this.billPriceVarianceAcct = props.billPriceVarianceAcct;
        this.billExchRateVarianceAcct = props.billExchRateVarianceAcct;
        this.gainLossAccount = props.gainLossAccount;
        this.shippingCost = props.shippingCost;
        this.handlingCost = props.handlingCost;
        this.weight = props.weight;
        this.costingMethodDisplay = props.costingMethodDisplay;
        this.shippingCostUnits = props.shippingCostUnits;
        this.handlingCostUnits = props.handlingCostUnits;
        this.unitsType = props.unitsType;
        this.stockUnit = props.stockUnit;
        this.purchaseUnit = props.purchaseUnit;
        this.saleUnit = props.saleUnit;
        this.minimumQuantityUnits = props.minimumQuantityUnits;
        this.safetyStockLevelUnits = props.safetyStockLevelUnits;
        this.billingSchedule = props.billingSchedule;
        this.trackLandedCost = props.trackLandedCost;
        this.matrixItemNameTemplate = props.matrixItemNameTemplate;
        this.isDropShipItem = props.isDropShipItem;
        this.isSpecialOrderItem = props.isSpecialOrderItem;
        this.stockDescription = props.stockDescription;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.producer = props.producer;
        this.manufacturer = props.manufacturer;
        this.revRecSchedule = props.revRecSchedule;
        this.mpn = props.mpn;
        this.multManufactureAddr = props.multManufactureAddr;
        this.manufacturerAddr1 = props.manufacturerAddr1;
        this.manufacturerCity = props.manufacturerCity;
        this.manufacturerState = props.manufacturerState;
        this.manufacturerZip = props.manufacturerZip;
        this.countryOfManufacture = props.countryOfManufacture;
        this.defaultItemShipMethod = props.defaultItemShipMethod;
        this.itemCarrier = props.itemCarrier;
        this.roundUpAsComponent = props.roundUpAsComponent;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.itemShipMethodList = props.itemShipMethodList;
        this.manufacturerTaxId = props.manufacturerTaxId;
        this.scheduleBNumber = props.scheduleBNumber;
        this.scheduleBQuantity = props.scheduleBQuantity;
        this.scheduleBCode = props.scheduleBCode;
        this.manufacturerTariff = props.manufacturerTariff;
        this.preferenceCriterion = props.preferenceCriterion;
        this.minimumQuantity = props.minimumQuantity;
        this.enforceMinQtyInternally = props.enforceMinQtyInternally;
        this.maximumQuantity = props.maximumQuantity;
        this.shipPackage = props.shipPackage;
        this.shipIndividually = props.shipIndividually;
        this.softDescriptor = props.softDescriptor;
        this.costCategory = props.costCategory;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.purchasePriceVarianceAcct = props.purchasePriceVarianceAcct;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.useMarginalRates = props.useMarginalRates;
        this.costEstimateType = props.costEstimateType;
        this.costEstimate = props.costEstimate;
        this.transferPrice = props.transferPrice;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.pricingGroup = props.pricingGroup;
        this.preferredLocation = props.preferredLocation;
        this.isStorePickupAllowed = props.isStorePickupAllowed;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoeDelivered = props.vsoeDelivered;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.cost = props.cost;
        this.costUnits = props.costUnits;
        this.reorderMultiple = props.reorderMultiple;
        this.quantityReorderUnits = props.quantityReorderUnits;
        this.totalValue = props.totalValue;
        this.useBins = props.useBins;
        this.averageCost = props.averageCost;
        this.leadTime = props.leadTime;
        this.autoLeadTime = props.autoLeadTime;
        this.lastPurchasePrice = props.lastPurchasePrice;
        this.autoReorderPoint = props.autoReorderPoint;
        this.autoPreferredStockLevel = props.autoPreferredStockLevel;
        this.preferredStockLevelDays = props.preferredStockLevelDays;
        this.safetyStockLevel = props.safetyStockLevel;
        this.safetyStockLevelDays = props.safetyStockLevelDays;
        this.backwardConsumptionDays = props.backwardConsumptionDays;
        this.seasonalDemand = props.seasonalDemand;
        this.demandModifier = props.demandModifier;
        this.storeDisplayName = props.storeDisplayName;
        this.storeDisplayThumbnail = props.storeDisplayThumbnail;
        this.weightUnit = props.weightUnit;
        this.weightUnits = props.weightUnits;
        this.storeDisplayImage = props.storeDisplayImage;
        this.storeDescription = props.storeDescription;
        this.storeDetailedDescription = props.storeDetailedDescription;
        this.storeItemTemplate = props.storeItemTemplate;
        this.pageTitle = props.pageTitle;
        this.metaTagHtml = props.metaTagHtml;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.sitemapPriority = props.sitemapPriority;
        this.searchKeywords = props.searchKeywords;
        this.isDonationItem = props.isDonationItem;
        this.showDefaultDonationAmount = props.showDefaultDonationAmount;
        this.maxDonationAmount = props.maxDonationAmount;
        this.shoppingDotComCategory = props.shoppingDotComCategory;
        this.shopzillaCategoryId = props.shopzillaCategoryId;
        this.nexTagCategory = props.nexTagCategory;
        this.quantityOnHand = props.quantityOnHand;
        this.quantityOnHandUnits = props.quantityOnHandUnits;
        this.expirationDate = props.expirationDate;
        this.lastInvtCountDate = props.lastInvtCountDate;
        this.nextInvtCountDate = props.nextInvtCountDate;
        this.invtCountInterval = props.invtCountInterval;
        this.invtClassification = props.invtClassification;
        this.onHandValueMli = props.onHandValueMli;
        this.serialNumbers = props.serialNumbers;
        this.reorderPoint = props.reorderPoint;
        this.preferredStockLevel = props.preferredStockLevel;
        this.reorderPointUnits = props.reorderPointUnits;
        this.defaultReturnCost = props.defaultReturnCost;
        this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
        this.alternateDemandSourceItem = props.alternateDemandSourceItem;
        this.fixedLotSize = props.fixedLotSize;
        this.periodicLotSizeType = props.periodicLotSizeType;
        this.supplyType = props.supplyType;
        this.demandTimeFence = props.demandTimeFence;
        this.supplyTimeFence = props.supplyTimeFence;
        this.rescheduleInDays = props.rescheduleInDays;
        this.rescheduleOutDays = props.rescheduleOutDays;
        this.periodicLotSizeDays = props.periodicLotSizeDays;
        this.supplyLotSizingMethod = props.supplyLotSizingMethod;
        this.forwardConsumptionDays = props.forwardConsumptionDays;
        this.demandSource = props.demandSource;
        this.quantityOnOrder = props.quantityOnOrder;
        this.preferredStockLevelUnits = props.preferredStockLevelUnits;
        this.quantityCommitted = props.quantityCommitted;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityBackOrdered = props.quantityBackOrdered;
        this.purchaseTaxCode = props.purchaseTaxCode;
        this.rate = props.rate;
        this.salesTaxCode = props.salesTaxCode;
        this.dontShowPrice = props.dontShowPrice;
        this.noPriceMessage = props.noPriceMessage;
        this.outOfStockMessage = props.outOfStockMessage;
        this.onSpecial = props.onSpecial;
        this.outOfStockBehavior = props.outOfStockBehavior;
        this.specialsDescription = props.specialsDescription;
        this.relatedItemsDescription = props.relatedItemsDescription;
        this.featuredDescription = props.featuredDescription;
        this.productFeedList = props.productFeedList;
        this.urlComponent = props.urlComponent;
        this.itemOptionsList = props.itemOptionsList;
        this.matrixOptionList = props.matrixOptionList;
        this.itemVendorList = props.itemVendorList;
        this.pricingMatrix = props.pricingMatrix;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.itemNumberOptionsList = props.itemNumberOptionsList;
        this.numbersList = props.numbersList;
        this.binNumberList = props.binNumberList;
        this.siteCategoryList = props.siteCategoryList;
        this.locationsList = props.locationsList;
        this.translationsList = props.translationsList;
        this.presentationItemList = props.presentationItemList;
        this.futureHorizon = props.futureHorizon;
        this.consumptionUnit = props.consumptionUnit;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.LotNumberedInventoryItem = LotNumberedInventoryItem;
class PricingMatrix extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.pricing = props.pricing;
        this.replaceAll = props.replaceAll;
    }
}
exports.PricingMatrix = PricingMatrix;
class UnitsType extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.isInactive = props.isInactive;
        this.uomList = props.uomList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.UnitsType = UnitsType;
class ItemRevision extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.item = props.item;
        this.name = props.name;
        this.effectiveDate = props.effectiveDate;
        this.obsoleteDate = props.obsoleteDate;
        this.memo = props.memo;
        this.inactive = props.inactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.ItemRevision = ItemRevision;
class OtherChargePurchaseItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.OtherChargePurchaseItemHierarchyVersions = OtherChargePurchaseItemHierarchyVersions;
class SerializedAssemblyItemBillOfMaterialsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.serializedAssemblyItemBillOfMaterials =
            props.serializedAssemblyItemBillOfMaterials;
        this.replaceAll = props.replaceAll;
    }
}
exports.SerializedAssemblyItemBillOfMaterialsList = SerializedAssemblyItemBillOfMaterialsList;
class LocationSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.LocationSearchAdvanced = LocationSearchAdvanced;
class BomSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.assemblyItemJoin = props.assemblyItemJoin;
        this.revisionJoin = props.revisionJoin;
        this.transactionJoin = props.transactionJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.BomSearch = BomSearch;
class RevRecTemplateSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.RevRecTemplateSearchAdvanced = RevRecTemplateSearchAdvanced;
class AccountingPeriodFiscalCalendarsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingPeriodFiscalCalendars =
            props.accountingPeriodFiscalCalendars;
        this.replaceAll = props.replaceAll;
    }
}
exports.AccountingPeriodFiscalCalendarsList = AccountingPeriodFiscalCalendarsList;
class Location extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.parent = props.parent;
        this.includeChildren = props.includeChildren;
        this.subsidiaryList = props.subsidiaryList;
        this.isInactive = props.isInactive;
        this.tranPrefix = props.tranPrefix;
        this.mainAddress = props.mainAddress;
        this.returnAddress = props.returnAddress;
        this.locationType = props.locationType;
        this.timeZone = props.timeZone;
        this.latitude = props.latitude;
        this.longitude = props.longitude;
        this.logo = props.logo;
        this.useBins = props.useBins;
        this.makeInventoryAvailable = props.makeInventoryAvailable;
        this.makeInventoryAvailableStore = props.makeInventoryAvailableStore;
        this.geolocationMethod = props.geolocationMethod;
        this.autoAssignmentRegionSetting = props.autoAssignmentRegionSetting;
        this.nextPickupCutOffTime = props.nextPickupCutOffTime;
        this.bufferStock = props.bufferStock;
        this.allowStorePickup = props.allowStorePickup;
        this.storePickupBufferStock = props.storePickupBufferStock;
        this.dailyShippingCapacity = props.dailyShippingCapacity;
        this.totalShippingCapacity = props.totalShippingCapacity;
        this.includeLocationRegionsList = props.includeLocationRegionsList;
        this.excludeLocationRegionsList = props.excludeLocationRegionsList;
        this.businessHoursList = props.businessHoursList;
        this.classTranslationList = props.classTranslationList;
        this.includeInControlTower = props.includeInControlTower;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.Location = Location;
class Nexus extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.country = props.country;
        this.state = props.state;
        this.taxAgency = props.taxAgency;
        this.taxAgencyPst = props.taxAgencyPst;
        this.taxCode = props.taxCode;
        this.description = props.description;
        this.parentNexus = props.parentNexus;
        this.isInactive = props.isInactive;
        this.taxDateFromFulfillment = props.taxDateFromFulfillment;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.Nexus = Nexus;
class ExpenseCategoryRatesList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.expenseCategoryRates = props.expenseCategoryRates;
        this.replaceAll = props.replaceAll;
    }
}
exports.ExpenseCategoryRatesList = ExpenseCategoryRatesList;
class TermSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.TermSearch = TermSearch;
class AssemblyItemBillOfMaterialsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.assemblyItemBillOfMaterials = props.assemblyItemBillOfMaterials;
        this.replaceAll = props.replaceAll;
    }
}
exports.AssemblyItemBillOfMaterialsList = AssemblyItemBillOfMaterialsList;
class TaxTypeSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.TaxTypeSearchAdvanced = TaxTypeSearchAdvanced;
class RevRecSchedule extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.amortizationType = props.amortizationType;
        this.recurrenceType = props.recurrenceType;
        this.recogIntervalSrc = props.recogIntervalSrc;
        this.amortizationPeriod = props.amortizationPeriod;
        this.periodOffset = props.periodOffset;
        this.revRecOffset = props.revRecOffset;
        this.initialAmount = props.initialAmount;
        this.isInactive = props.isInactive;
        this.recurrenceList = props.recurrenceList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.RevRecSchedule = RevRecSchedule;
class CustomerCategorySearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.CustomerCategorySearchRow = CustomerCategorySearchRow;
class PaymentMethodVisuals extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.flags = props.flags;
        this.location = props.location;
    }
}
exports.PaymentMethodVisuals = PaymentMethodVisuals;
class OtherNameCategorySearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.OtherNameCategorySearchAdvanced = OtherNameCategorySearchAdvanced;
class BillingScheduleRecurrenceList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.billingScheduleRecurrence = props.billingScheduleRecurrence;
        this.replaceAll = props.replaceAll;
    }
}
exports.BillingScheduleRecurrenceList = BillingScheduleRecurrenceList;
class GiftCertificateSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.GiftCertificateSearchAdvanced = GiftCertificateSearchAdvanced;
class SubtotalItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.displayName = props.displayName;
        this.issueProduct = props.issueProduct;
        this.description = props.description;
        this.includeChildren = props.includeChildren;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.isInactive = props.isInactive;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.subsidiaryList = props.subsidiaryList;
        this.translationsList = props.translationsList;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.SubtotalItem = SubtotalItem;
class TaxGroup extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.itemId = props.itemId;
        this.description = props.description;
        this.state = props.state;
        this.subsidiaryList = props.subsidiaryList;
        this.taxitem1 = props.taxitem1;
        this.unitprice1 = props.unitprice1;
        this.taxitem2 = props.taxitem2;
        this.unitprice2 = props.unitprice2;
        this.piggyback = props.piggyback;
        this.isInactive = props.isInactive;
        this.rate = props.rate;
        this.taxType = props.taxType;
        this.includeChildren = props.includeChildren;
        this.county = props.county;
        this.city = props.city;
        this.zip = props.zip;
        this.nexusCountry = props.nexusCountry;
        this.isDefault = props.isDefault;
        this.taxItemList = props.taxItemList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.TaxGroup = TaxGroup;
class PartnerCategory extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.parent = props.parent;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.PartnerCategory = PartnerCategory;
class RevRecScheduleSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.appliedToTransactionJoin = props.appliedToTransactionJoin;
        this.customerJoin = props.customerJoin;
        this.itemJoin = props.itemJoin;
        this.transactionJoin = props.transactionJoin;
        this.userJoin = props.userJoin;
    }
}
exports.RevRecScheduleSearch = RevRecScheduleSearch;
class WinLossReasonSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.WinLossReasonSearchAdvanced = WinLossReasonSearchAdvanced;
class InventoryItemBinNumberList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.binNumber = props.binNumber;
        this.replaceAll = props.replaceAll;
    }
}
exports.InventoryItemBinNumberList = InventoryItemBinNumberList;
class PaymentMethodSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.PaymentMethodSearchRow = PaymentMethodSearchRow;
class LocationBusinessHoursList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.locationBusinessHours = props.locationBusinessHours;
        this.replaceAll = props.replaceAll;
    }
}
exports.LocationBusinessHoursList = LocationBusinessHoursList;
class OtherChargePurchaseItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.purchaseDescription = props.purchaseDescription;
        this.manufacturingChargeItem = props.manufacturingChargeItem;
        this.cost = props.cost;
        this.costUnits = props.costUnits;
        this.expenseAccount = props.expenseAccount;
        this.isTaxable = props.isTaxable;
        this.matrixType = props.matrixType;
        this.unitsType = props.unitsType;
        this.purchaseUnit = props.purchaseUnit;
        this.includeChildren = props.includeChildren;
        this.issueProduct = props.issueProduct;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.vendorName = props.vendorName;
        this.parent = props.parent;
        this.isInactive = props.isInactive;
        this.matrixItemNameTemplate = props.matrixItemNameTemplate;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.subsidiaryList = props.subsidiaryList;
        this.location = props.location;
        this.taxSchedule = props.taxSchedule;
        this.deferralAccount = props.deferralAccount;
        this.amortizationTemplate = props.amortizationTemplate;
        this.residual = props.residual;
        this.amortizationPeriod = props.amortizationPeriod;
        this.isFulfillable = props.isFulfillable;
        this.generateAccruals = props.generateAccruals;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.costCategory = props.costCategory;
        this.overheadType = props.overheadType;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.currency = props.currency;
        this.itemOptionsList = props.itemOptionsList;
        this.matrixOptionList = props.matrixOptionList;
        this.itemVendorList = props.itemVendorList;
        this.purchaseTaxCode = props.purchaseTaxCode;
        this.salesTaxCode = props.salesTaxCode;
        this.translationsList = props.translationsList;
        this.vendor = props.vendor;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.consumptionUnit = props.consumptionUnit;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.OtherChargePurchaseItem = OtherChargePurchaseItem;
class ItemGroupHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.ItemGroupHierarchyVersions = ItemGroupHierarchyVersions;
class ClassTranslation extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.locale = props.locale;
        this.language = props.language;
        this.name = props.name;
    }
}
exports.ClassTranslation = ClassTranslation;
class CustomerMessage extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.description = props.description;
        this.preferred = props.preferred;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.CustomerMessage = CustomerMessage;
class ExpenseCategorySearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.ExpenseCategorySearchRow = ExpenseCategorySearchRow;
class AssemblyItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.assemblyItemHierarchyVersions = props.assemblyItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.AssemblyItemHierarchyVersionsList = AssemblyItemHierarchyVersionsList;
class CustomerCategory extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.CustomerCategory = CustomerCategory;
class BudgetCategory extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.budgetType = props.budgetType;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
    }
}
exports.BudgetCategory = BudgetCategory;
class BillingScheduleSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
    }
}
exports.BillingScheduleSearchRow = BillingScheduleSearchRow;
class Subsidiary extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.parent = props.parent;
        this.isInactive = props.isInactive;
        this.showSubsidiaryName = props.showSubsidiaryName;
        this.url = props.url;
        this.logo = props.logo;
        this.tranPrefix = props.tranPrefix;
        this.pageLogo = props.pageLogo;
        this.state = props.state;
        this.country = props.country;
        this.mainAddress = props.mainAddress;
        this.shippingAddress = props.shippingAddress;
        this.returnAddress = props.returnAddress;
        this.legalName = props.legalName;
        this.isElimination = props.isElimination;
        this.fiscalCalendar = props.fiscalCalendar;
        this.taxFiscalCalendar = props.taxFiscalCalendar;
        this.allowPayroll = props.allowPayroll;
        this.email = props.email;
        this.currency = props.currency;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.fax = props.fax;
        this.edition = props.edition;
        this.federalIdNumber = props.federalIdNumber;
        this.addrLanguage = props.addrLanguage;
        this.nonConsol = props.nonConsol;
        this.consol = props.consol;
        this.state1TaxNumber = props.state1TaxNumber;
        this.taxRegistrationList = props.taxRegistrationList;
        this.ssnOrTin = props.ssnOrTin;
        this.interCoAccount = props.interCoAccount;
        this.nexusList = props.nexusList;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.checkLayout = props.checkLayout;
        this.inboundEmail = props.inboundEmail;
        this.classTranslationList = props.classTranslationList;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.Subsidiary = Subsidiary;
class UnitsTypeSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.UnitsTypeSearchRow = UnitsTypeSearchRow;
class PricingGroupSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.PricingGroupSearch = PricingGroupSearch;
class BillingRatesMatrix extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.billingRates = props.billingRates;
        this.replaceAll = props.replaceAll;
    }
}
exports.BillingRatesMatrix = BillingRatesMatrix;
class BomRevisionComponent extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.item = props.item;
        this.description = props.description;
        this.componentYield = props.componentYield;
        this.bomQuantity = props.bomQuantity;
        this.itemSource = props.itemSource;
        this.quantity = props.quantity;
        this.units = props.units;
        this.internalId = props.internalId;
        this.customFieldList = props.customFieldList;
    }
}
exports.BomRevisionComponent = BomRevisionComponent;
class SerializedInventoryItemNumbersList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.numbers = props.numbers;
        this.replaceAll = props.replaceAll;
    }
}
exports.SerializedInventoryItemNumbersList = SerializedInventoryItemNumbersList;
class PriceLevelSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.PriceLevelSearchAdvanced = PriceLevelSearchAdvanced;
class ItemAccountMappingSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.ItemAccountMappingSearchAdvanced = ItemAccountMappingSearchAdvanced;
class SalesRoleSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.SalesRoleSearchAdvanced = SalesRoleSearchAdvanced;
class ItemMember extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.memberDescr = props.memberDescr;
        this.componentYield = props.componentYield;
        this.bomQuantity = props.bomQuantity;
        this.itemSource = props.itemSource;
        this.quantity = props.quantity;
        this.memberUnit = props.memberUnit;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoeDelivered = props.vsoeDelivered;
        this.taxSchedule = props.taxSchedule;
        this.taxcode = props.taxcode;
        this.item = props.item;
        this.taxrate = props.taxrate;
        this.effectiveDate = props.effectiveDate;
        this.obsoleteDate = props.obsoleteDate;
        this.effectiveRevision = props.effectiveRevision;
        this.obsoleteRevision = props.obsoleteRevision;
        this.lineNumber = props.lineNumber;
        this.memberKey = props.memberKey;
    }
}
exports.ItemMember = ItemMember;
class PriceLevelSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.PriceLevelSearch = PriceLevelSearch;
class ItemGroupHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.itemGroupHierarchyVersions = props.itemGroupHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.ItemGroupHierarchyVersionsList = ItemGroupHierarchyVersionsList;
class ItemSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.accountingBookRevRecScheduleJoin =
            props.accountingBookRevRecScheduleJoin;
        this.assemblyItemBillOfMaterialsJoin =
            props.assemblyItemBillOfMaterialsJoin;
        this.binNumberJoin = props.binNumberJoin;
        this.binOnHandJoin = props.binOnHandJoin;
        this.correlatedItemJoin = props.correlatedItemJoin;
        this.effectiveRevisionJoin = props.effectiveRevisionJoin;
        this.fileJoin = props.fileJoin;
        this.inventoryDetailJoin = props.inventoryDetailJoin;
        this.inventoryLocationJoin = props.inventoryLocationJoin;
        this.inventoryNumberJoin = props.inventoryNumberJoin;
        this.inventoryNumberBinOnHandJoin = props.inventoryNumberBinOnHandJoin;
        this.memberItemJoin = props.memberItemJoin;
        this.obsoleteRevisionJoin = props.obsoleteRevisionJoin;
        this.parentJoin = props.parentJoin;
        this.preferredLocationJoin = props.preferredLocationJoin;
        this.preferredVendorJoin = props.preferredVendorJoin;
        this.pricingJoin = props.pricingJoin;
        this.shopperJoin = props.shopperJoin;
        this.transactionJoin = props.transactionJoin;
        this.userJoin = props.userJoin;
        this.userNotesJoin = props.userNotesJoin;
        this.vendorJoin = props.vendorJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.ItemSearch = ItemSearch;
class NexusSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.NexusSearchAdvanced = NexusSearchAdvanced;
class CostCategorySearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.CostCategorySearchAdvanced = CostCategorySearchAdvanced;
class NonInventoryPurchaseItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.NonInventoryPurchaseItemHierarchyVersions = NonInventoryPurchaseItemHierarchyVersions;
class DepartmentSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.DepartmentSearchRow = DepartmentSearchRow;
class CostCategorySearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.accountJoin = props.accountJoin;
        this.transactionJoin = props.transactionJoin;
    }
}
exports.CostCategorySearch = CostCategorySearch;
class LotNumberedInventoryItemNumbers extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.serialNumber = props.serialNumber;
        this.quantityOnHand = props.quantityOnHand;
        this.expirationDate = props.expirationDate;
    }
}
exports.LotNumberedInventoryItemNumbers = LotNumberedInventoryItemNumbers;
class ExpenseCategorySearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.ExpenseCategorySearch = ExpenseCategorySearch;
class CurrencyRateSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.CurrencyRateSearchAdvanced = CurrencyRateSearchAdvanced;
class Bin extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.binNumber = props.binNumber;
        this.location = props.location;
        this.memo = props.memo;
        this.isInactive = props.isInactive;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.Bin = Bin;
class CurrencyRateSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.CurrencyRateSearch = CurrencyRateSearch;
class GlobalAccountMappingSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.classJoin = props.classJoin;
        this.departmentJoin = props.departmentJoin;
        this.destinationAccountJoin = props.destinationAccountJoin;
        this.locationJoin = props.locationJoin;
        this.sourceAccountJoin = props.sourceAccountJoin;
        this.subsidiaryJoin = props.subsidiaryJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.GlobalAccountMappingSearchRow = GlobalAccountMappingSearchRow;
class InventoryNumber extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.inventoryNumber = props.inventoryNumber;
        this.item = props.item;
        this.status = props.status;
        this.units = props.units;
        this.expirationDate = props.expirationDate;
        this.memo = props.memo;
        this.locationsList = props.locationsList;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.InventoryNumber = InventoryNumber;
class TaxAcct extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.description = props.description;
        this.nexus = props.nexus;
        this.country = props.country;
        this.taxAcctType = props.taxAcctType;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.TaxAcct = TaxAcct;
class CostCategory extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.account = props.account;
        this.itemCostType = props.itemCostType;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.CostCategory = CostCategory;
class CurrencyRate extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.baseCurrency = props.baseCurrency;
        this.transactionCurrency = props.transactionCurrency;
        this.exchangeRate = props.exchangeRate;
        this.effectiveDate = props.effectiveDate;
        this.internalId = props.internalId;
    }
}
exports.CurrencyRate = CurrencyRate;
class InventoryNumberSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.InventoryNumberSearchAdvanced = InventoryNumberSearchAdvanced;
class ItemSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.ItemSearchAdvanced = ItemSearchAdvanced;
class InventoryItemLocationsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.locations = props.locations;
        this.replaceAll = props.replaceAll;
    }
}
exports.InventoryItemLocationsList = InventoryItemLocationsList;
class ClassificationSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.ClassificationSearchAdvanced = ClassificationSearchAdvanced;
class ServiceItemTaskTemplates extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.taskName = props.taskName;
        this.taskStartOffset = props.taskStartOffset;
        this.taskDuration = props.taskDuration;
    }
}
exports.ServiceItemTaskTemplates = ServiceItemTaskTemplates;
class ServiceItemTaskTemplatesList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.taskTemplates = props.taskTemplates;
        this.replaceAll = props.replaceAll;
    }
}
exports.ServiceItemTaskTemplatesList = ServiceItemTaskTemplatesList;
class LotNumberedAssemblyItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.vendorName = props.vendorName;
        this.parent = props.parent;
        this.printItems = props.printItems;
        this.isOnline = props.isOnline;
        this.isGcoCompliant = props.isGcoCompliant;
        this.offerSupport = props.offerSupport;
        this.useComponentYield = props.useComponentYield;
        this.isInactive = props.isInactive;
        this.availableToPartners = props.availableToPartners;
        this.subsidiaryList = props.subsidiaryList;
        this.department = props.department;
        this.includeChildren = props.includeChildren;
        this.clazz = props.clazz;
        this.location = props.location;
        this.costCategory = props.costCategory;
        this.description = props.description;
        this.cogsAccount = props.cogsAccount;
        this.vendor = props.vendor;
        this.incomeAccount = props.incomeAccount;
        this.intercoIncomeAccount = props.intercoIncomeAccount;
        this.assetAccount = props.assetAccount;
        this.matchBillToReceipt = props.matchBillToReceipt;
        this.billQtyVarianceAcct = props.billQtyVarianceAcct;
        this.billPriceVarianceAcct = props.billPriceVarianceAcct;
        this.billExchRateVarianceAcct = props.billExchRateVarianceAcct;
        this.gainLossAccount = props.gainLossAccount;
        this.salesTaxCode = props.salesTaxCode;
        this.purchaseTaxCode = props.purchaseTaxCode;
        this.prodQtyVarianceAcct = props.prodQtyVarianceAcct;
        this.prodPriceVarianceAcct = props.prodPriceVarianceAcct;
        this.purchasePriceVarianceAcct = props.purchasePriceVarianceAcct;
        this.wipVarianceAcct = props.wipVarianceAcct;
        this.taxSchedule = props.taxSchedule;
        this.scrapAcct = props.scrapAcct;
        this.shippingCost = props.shippingCost;
        this.wipAcct = props.wipAcct;
        this.handlingCost = props.handlingCost;
        this.weight = props.weight;
        this.weightUnit = props.weightUnit;
        this.costingMethod = props.costingMethod;
        this.isTaxable = props.isTaxable;
        this.costingMethodDisplay = props.costingMethodDisplay;
        this.rate = props.rate;
        this.unitsType = props.unitsType;
        this.stockUnit = props.stockUnit;
        this.purchaseUnit = props.purchaseUnit;
        this.saleUnit = props.saleUnit;
        this.trackLandedCost = props.trackLandedCost;
        this.matrixItemNameTemplate = props.matrixItemNameTemplate;
        this.billingSchedule = props.billingSchedule;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.revRecSchedule = props.revRecSchedule;
        this.stockDescription = props.stockDescription;
        this.producer = props.producer;
        this.manufacturer = props.manufacturer;
        this.mpn = props.mpn;
        this.multManufactureAddr = props.multManufactureAddr;
        this.manufactureraddr1 = props.manufactureraddr1;
        this.manufacturerCity = props.manufacturerCity;
        this.manufacturerState = props.manufacturerState;
        this.manufacturerZip = props.manufacturerZip;
        this.countryOfManufacture = props.countryOfManufacture;
        this.effectiveBomControl = props.effectiveBomControl;
        this.manufacturerTaxId = props.manufacturerTaxId;
        this.defaultRevision = props.defaultRevision;
        this.defaultItemShipMethod = props.defaultItemShipMethod;
        this.itemCarrier = props.itemCarrier;
        this.roundUpAsComponent = props.roundUpAsComponent;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.isDropShipItem = props.isDropShipItem;
        this.isPhantom = props.isPhantom;
        this.itemShipMethodList = props.itemShipMethodList;
        this.scheduleBNumber = props.scheduleBNumber;
        this.scheduleBQuantity = props.scheduleBQuantity;
        this.scheduleBCode = props.scheduleBCode;
        this.manufacturerTariff = props.manufacturerTariff;
        this.preferenceCriterion = props.preferenceCriterion;
        this.issueProduct = props.issueProduct;
        this.minimumQuantity = props.minimumQuantity;
        this.enforceMinQtyInternally = props.enforceMinQtyInternally;
        this.maximumQuantity = props.maximumQuantity;
        this.softDescriptor = props.softDescriptor;
        this.isSpecialWorkOrderItem = props.isSpecialWorkOrderItem;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.buildEntireAssembly = props.buildEntireAssembly;
        this.quantityOnHand = props.quantityOnHand;
        this.useMarginalRates = props.useMarginalRates;
        this.reorderMultiple = props.reorderMultiple;
        this.cost = props.cost;
        this.costEstimateType = props.costEstimateType;
        this.isHazmatItem = props.isHazmatItem;
        this.hazmatId = props.hazmatId;
        this.hazmatShippingName = props.hazmatShippingName;
        this.hazmatHazardClass = props.hazmatHazardClass;
        this.hazmatPackingGroup = props.hazmatPackingGroup;
        this.hazmatItemUnits = props.hazmatItemUnits;
        this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
        this.costEstimate = props.costEstimate;
        this.transferPrice = props.transferPrice;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.pricingGroup = props.pricingGroup;
        this.intercoCogsAccount = props.intercoCogsAccount;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoeDelivered = props.vsoeDelivered;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.unbuildVarianceAccount = props.unbuildVarianceAccount;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.directRevenuePosting = props.directRevenuePosting;
        this.dropshipExpenseAccount = props.dropshipExpenseAccount;
        this.preferredLocation = props.preferredLocation;
        this.isStorePickupAllowed = props.isStorePickupAllowed;
        this.totalValue = props.totalValue;
        this.useBins = props.useBins;
        this.averageCost = props.averageCost;
        this.lastPurchasePrice = props.lastPurchasePrice;
        this.purchaseDescription = props.purchaseDescription;
        this.leadTime = props.leadTime;
        this.autoLeadTime = props.autoLeadTime;
        this.buildTime = props.buildTime;
        this.safetyStockLevel = props.safetyStockLevel;
        this.safetyStockLevelDays = props.safetyStockLevelDays;
        this.seasonalDemand = props.seasonalDemand;
        this.serialNumbers = props.serialNumbers;
        this.reorderPoint = props.reorderPoint;
        this.preferredStockLevel = props.preferredStockLevel;
        this.expirationDate = props.expirationDate;
        this.lastInvtCountDate = props.lastInvtCountDate;
        this.nextInvtCountDate = props.nextInvtCountDate;
        this.invtCountInterval = props.invtCountInterval;
        this.invtClassification = props.invtClassification;
        this.demandModifier = props.demandModifier;
        this.autoReorderPoint = props.autoReorderPoint;
        this.autoPreferredStockLevel = props.autoPreferredStockLevel;
        this.preferredStockLevelDays = props.preferredStockLevelDays;
        this.shipIndividually = props.shipIndividually;
        this.shipPackage = props.shipPackage;
        this.defaultReturnCost = props.defaultReturnCost;
        this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
        this.alternateDemandSourceItem = props.alternateDemandSourceItem;
        this.fixedLotSize = props.fixedLotSize;
        this.supplyType = props.supplyType;
        this.demandTimeFence = props.demandTimeFence;
        this.supplyTimeFence = props.supplyTimeFence;
        this.rescheduleInDays = props.rescheduleInDays;
        this.rescheduleOutDays = props.rescheduleOutDays;
        this.supplyLotSizingMethod = props.supplyLotSizingMethod;
        this.demandSource = props.demandSource;
        this.quantityCommitted = props.quantityCommitted;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityBackOrdered = props.quantityBackOrdered;
        this.quantityOnOrder = props.quantityOnOrder;
        this.storeDisplayName = props.storeDisplayName;
        this.storeDisplayThumbnail = props.storeDisplayThumbnail;
        this.storeDisplayImage = props.storeDisplayImage;
        this.storeDescription = props.storeDescription;
        this.storeDetailedDescription = props.storeDetailedDescription;
        this.storeItemTemplate = props.storeItemTemplate;
        this.pageTitle = props.pageTitle;
        this.metaTagHtml = props.metaTagHtml;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.sitemapPriority = props.sitemapPriority;
        this.urlComponent = props.urlComponent;
        this.searchKeywords = props.searchKeywords;
        this.isDonationItem = props.isDonationItem;
        this.showDefaultDonationAmount = props.showDefaultDonationAmount;
        this.maxDonationAmount = props.maxDonationAmount;
        this.dontShowPrice = props.dontShowPrice;
        this.noPriceMessage = props.noPriceMessage;
        this.outOfStockMessage = props.outOfStockMessage;
        this.shoppingDotComCategory = props.shoppingDotComCategory;
        this.outOfStockBehavior = props.outOfStockBehavior;
        this.shopzillaCategoryId = props.shopzillaCategoryId;
        this.nexTagCategory = props.nexTagCategory;
        this.productFeedList = props.productFeedList;
        this.relatedItemsDescription = props.relatedItemsDescription;
        this.onSpecial = props.onSpecial;
        this.specialsDescription = props.specialsDescription;
        this.featuredDescription = props.featuredDescription;
        this.itemOptionsList = props.itemOptionsList;
        this.itemNumberOptionsList = props.itemNumberOptionsList;
        this.itemVendorList = props.itemVendorList;
        this.pricingMatrix = props.pricingMatrix;
        this.billOfMaterialsList = props.billOfMaterialsList;
        this.memberList = props.memberList;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.locationsList = props.locationsList;
        this.siteCategoryList = props.siteCategoryList;
        this.binNumberList = props.binNumberList;
        this.numbersList = props.numbersList;
        this.translationsList = props.translationsList;
        this.presentationItemList = props.presentationItemList;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.futureHorizon = props.futureHorizon;
        this.consumptionUnit = props.consumptionUnit;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.LotNumberedAssemblyItem = LotNumberedAssemblyItem;
class ConsolidatedExchangeRateSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.ConsolidatedExchangeRateSearchAdvanced = ConsolidatedExchangeRateSearchAdvanced;
class WinLossReasonSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.WinLossReasonSearchRow = WinLossReasonSearchRow;
class InventoryItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.inventoryItemHierarchyVersions = props.inventoryItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.InventoryItemHierarchyVersionsList = InventoryItemHierarchyVersionsList;
class MerchandiseHierarchyNodeHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyLevel = props.hierarchyLevel;
        this.parentNode = props.parentNode;
    }
}
exports.MerchandiseHierarchyNodeHierarchyVersions = MerchandiseHierarchyNodeHierarchyVersions;
class SerializedInventoryItemNumbers extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.serialNumber = props.serialNumber;
    }
}
exports.SerializedInventoryItemNumbers = SerializedInventoryItemNumbers;
class RevRecScheduleSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.RevRecScheduleSearchAdvanced = RevRecScheduleSearchAdvanced;
class NonInventoryPurchaseItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.purchaseDescription = props.purchaseDescription;
        this.cost = props.cost;
        this.costUnits = props.costUnits;
        this.expenseAccount = props.expenseAccount;
        this.issueProduct = props.issueProduct;
        this.isTaxable = props.isTaxable;
        this.matrixType = props.matrixType;
        this.unitsType = props.unitsType;
        this.purchaseUnit = props.purchaseUnit;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.includeChildren = props.includeChildren;
        this.vendorName = props.vendorName;
        this.parent = props.parent;
        this.isInactive = props.isInactive;
        this.matrixItemNameTemplate = props.matrixItemNameTemplate;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.subsidiaryList = props.subsidiaryList;
        this.taxSchedule = props.taxSchedule;
        this.deferralAccount = props.deferralAccount;
        this.amortizationTemplate = props.amortizationTemplate;
        this.residual = props.residual;
        this.amortizationPeriod = props.amortizationPeriod;
        this.isFulfillable = props.isFulfillable;
        this.generateAccruals = props.generateAccruals;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.costCategory = props.costCategory;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.currency = props.currency;
        this.itemOptionsList = props.itemOptionsList;
        this.matrixOptionList = props.matrixOptionList;
        this.itemVendorList = props.itemVendorList;
        this.purchaseTaxCode = props.purchaseTaxCode;
        this.salesTaxCode = props.salesTaxCode;
        this.translationsList = props.translationsList;
        this.vendor = props.vendor;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.consumptionUnit = props.consumptionUnit;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.NonInventoryPurchaseItem = NonInventoryPurchaseItem;
class SubsidiaryAccountingBookDetailList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.subsidiaryAccountingBookDetail = props.subsidiaryAccountingBookDetail;
        this.replaceAll = props.replaceAll;
    }
}
exports.SubsidiaryAccountingBookDetailList = SubsidiaryAccountingBookDetailList;
class OtherChargeResaleItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.otherChargeResaleItemHierarchyVersions =
            props.otherChargeResaleItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.OtherChargeResaleItemHierarchyVersionsList = OtherChargeResaleItemHierarchyVersionsList;
class NonInventoryPurchaseItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.nonInventoryPurchaseItemHierarchyVersions =
            props.nonInventoryPurchaseItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.NonInventoryPurchaseItemHierarchyVersionsList = NonInventoryPurchaseItemHierarchyVersionsList;
class OtherChargeResaleItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.OtherChargeResaleItemHierarchyVersions = OtherChargeResaleItemHierarchyVersions;
class BomRevision extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customForm = props.customForm;
        this.name = props.name;
        this.createdDate = props.createdDate;
        this.billOfMaterials = props.billOfMaterials;
        this.memo = props.memo;
        this.isInactive = props.isInactive;
        this.effectiveStartDate = props.effectiveStartDate;
        this.effectiveEndDate = props.effectiveEndDate;
        this.componentList = props.componentList;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.BomRevision = BomRevision;
class MerchandiseHierarchyNodeSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.parentNodeJoin = props.parentNodeJoin;
    }
}
exports.MerchandiseHierarchyNodeSearch = MerchandiseHierarchyNodeSearch;
class AccountLocalizationsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountLocalizations = props.accountLocalizations;
        this.replaceAll = props.replaceAll;
    }
}
exports.AccountLocalizationsList = AccountLocalizationsList;
class Account extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.acctType = props.acctType;
        this.unitsType = props.unitsType;
        this.unit = props.unit;
        this.acctNumber = props.acctNumber;
        this.acctName = props.acctName;
        this.legalName = props.legalName;
        this.includeChildren = props.includeChildren;
        this.currency = props.currency;
        this.exchangeRate = props.exchangeRate;
        this.generalRate = props.generalRate;
        this.parent = props.parent;
        this.cashFlowRate = props.cashFlowRate;
        this.billableExpensesAcct = props.billableExpensesAcct;
        this.deferralAcct = props.deferralAcct;
        this.description = props.description;
        this.curDocNum = props.curDocNum;
        this.isInactive = props.isInactive;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.restrictToAccountingBookList = props.restrictToAccountingBookList;
        this.inventory = props.inventory;
        this.eliminate = props.eliminate;
        this.subsidiaryList = props.subsidiaryList;
        this.category1099Misc = props.category1099Misc;
        this.localizationsList = props.localizationsList;
        this.openingBalance = props.openingBalance;
        this.tranDate = props.tranDate;
        this.revalue = props.revalue;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.Account = Account;
class LeadSource extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.description = props.description;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.LeadSource = LeadSource;
class PartnerCategorySearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.PartnerCategorySearchAdvanced = PartnerCategorySearchAdvanced;
class TaxGroupTaxItem extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.taxName = props.taxName;
        this.rate = props.rate;
        this.basis = props.basis;
        this.taxType = props.taxType;
    }
}
exports.TaxGroupTaxItem = TaxGroupTaxItem;
class VendorCategorySearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.VendorCategorySearch = VendorCategorySearch;
class TermPercentagesList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.termPercentages = props.termPercentages;
        this.replaceAll = props.replaceAll;
    }
}
exports.TermPercentagesList = TermPercentagesList;
class AccountingPeriodSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.userNotesJoin = props.userNotesJoin;
    }
}
exports.AccountingPeriodSearchRow = AccountingPeriodSearchRow;
class State extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.country = props.country;
        this.fullName = props.fullName;
        this.shortname = props.shortname;
        this.internalId = props.internalId;
    }
}
exports.State = State;
class SalesTaxItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.itemId = props.itemId;
        this.displayName = props.displayName;
        this.description = props.description;
        this.rate = props.rate;
        this.taxType = props.taxType;
        this.taxAgency = props.taxAgency;
        this.purchaseAccount = props.purchaseAccount;
        this.saleAccount = props.saleAccount;
        this.isInactive = props.isInactive;
        this.effectiveFrom = props.effectiveFrom;
        this.validUntil = props.validUntil;
        this.subsidiaryList = props.subsidiaryList;
        this.includeChildren = props.includeChildren;
        this.eccode = props.eccode;
        this.reverseCharge = props.reverseCharge;
        this.parent = props.parent;
        this.service = props.service;
        this.exempt = props.exempt;
        this.isDefault = props.isDefault;
        this.excludeFromTaxReports = props.excludeFromTaxReports;
        this.available = props.available;
        this.export = props.export;
        this.taxAccount = props.taxAccount;
        this.county = props.county;
        this.city = props.city;
        this.state = props.state;
        this.zip = props.zip;
        this.nexusCountry = props.nexusCountry;
        this.name = props.name;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.SalesTaxItem = SalesTaxItem;
class OtherNameCategorySearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.OtherNameCategorySearch = OtherNameCategorySearch;
class PartnerCategorySearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.PartnerCategorySearch = PartnerCategorySearch;
class RevRecTemplateRecurrenceList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.revRecTemplateRecurrence = props.revRecTemplateRecurrence;
        this.replaceAll = props.replaceAll;
    }
}
exports.RevRecTemplateRecurrenceList = RevRecTemplateRecurrenceList;
class TaxGroupSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.TaxGroupSearchRow = TaxGroupSearchRow;
class KitItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.KitItemHierarchyVersions = KitItemHierarchyVersions;
class LotNumberedInventoryItemLocations extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.location = props.location;
        this.quantityOnHand = props.quantityOnHand;
        this.onHandValueMli = props.onHandValueMli;
        this.serialNumbers = props.serialNumbers;
        this.expirationDate = props.expirationDate;
        this.averageCostMli = props.averageCostMli;
        this.lastPurchasePriceMli = props.lastPurchasePriceMli;
        this.reorderPoint = props.reorderPoint;
        this.locationAllowStorePickup = props.locationAllowStorePickup;
        this.locationStorePickupBufferStock = props.locationStorePickupBufferStock;
        this.locationQtyAvailForStorePickup = props.locationQtyAvailForStorePickup;
        this.preferredStockLevel = props.preferredStockLevel;
        this.leadTime = props.leadTime;
        this.defaultReturnCost = props.defaultReturnCost;
        this.safetyStockLevel = props.safetyStockLevel;
        this.cost = props.cost;
        this.inventoryCostTemplate = props.inventoryCostTemplate;
        this.buildTime = props.buildTime;
        this.lastInvtCountDate = props.lastInvtCountDate;
        this.nextInvtCountDate = props.nextInvtCountDate;
        this.isWip = props.isWip;
        this.invtCountInterval = props.invtCountInterval;
        this.invtClassification = props.invtClassification;
        this.costingLotSize = props.costingLotSize;
        this.quantityOnOrder = props.quantityOnOrder;
        this.quantityCommitted = props.quantityCommitted;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityBackOrdered = props.quantityBackOrdered;
        this.locationId = props.locationId;
        this.locationlookup = props.locationlookup;
        this.locationDisplay = props.locationDisplay;
        this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
        this.alternateDemandSourceItem = props.alternateDemandSourceItem;
        this.fixedLotSize = props.fixedLotSize;
        this.periodicLotSizeType = props.periodicLotSizeType;
        this.periodicLotSizeDays = props.periodicLotSizeDays;
        this.supplyType = props.supplyType;
        this.supplyLotSizingMethod = props.supplyLotSizingMethod;
        this.demandSource = props.demandSource;
        this.backwardConsumptionDays = props.backwardConsumptionDays;
        this.forwardConsumptionDays = props.forwardConsumptionDays;
        this.demandTimeFence = props.demandTimeFence;
        this.supplyTimeFence = props.supplyTimeFence;
        this.rescheduleInDays = props.rescheduleInDays;
        this.rescheduleOutDays = props.rescheduleOutDays;
    }
}
exports.LotNumberedInventoryItemLocations = LotNumberedInventoryItemLocations;
class WinLossReason extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.WinLossReason = WinLossReason;
class AssemblyItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.vendorName = props.vendorName;
        this.parent = props.parent;
        this.printItems = props.printItems;
        this.vendor = props.vendor;
        this.isOnline = props.isOnline;
        this.isGcoCompliant = props.isGcoCompliant;
        this.offerSupport = props.offerSupport;
        this.isInactive = props.isInactive;
        this.availableToPartners = props.availableToPartners;
        this.subsidiaryList = props.subsidiaryList;
        this.department = props.department;
        this.includeChildren = props.includeChildren;
        this.clazz = props.clazz;
        this.location = props.location;
        this.description = props.description;
        this.cogsAccount = props.cogsAccount;
        this.incomeAccount = props.incomeAccount;
        this.intercoIncomeAccount = props.intercoIncomeAccount;
        this.assetAccount = props.assetAccount;
        this.matchBillToReceipt = props.matchBillToReceipt;
        this.billQtyVarianceAcct = props.billQtyVarianceAcct;
        this.billPriceVarianceAcct = props.billPriceVarianceAcct;
        this.billExchRateVarianceAcct = props.billExchRateVarianceAcct;
        this.gainLossAccount = props.gainLossAccount;
        this.salesTaxCode = props.salesTaxCode;
        this.useComponentYield = props.useComponentYield;
        this.wipVarianceAcct = props.wipVarianceAcct;
        this.purchaseTaxCode = props.purchaseTaxCode;
        this.scrapAcct = props.scrapAcct;
        this.taxSchedule = props.taxSchedule;
        this.wipAcct = props.wipAcct;
        this.shippingCost = props.shippingCost;
        this.handlingCost = props.handlingCost;
        this.weight = props.weight;
        this.weightUnit = props.weightUnit;
        this.isTaxable = props.isTaxable;
        this.costingMethod = props.costingMethod;
        this.rate = props.rate;
        this.costingMethodDisplay = props.costingMethodDisplay;
        this.unitsType = props.unitsType;
        this.stockUnit = props.stockUnit;
        this.purchaseUnit = props.purchaseUnit;
        this.saleUnit = props.saleUnit;
        this.trackLandedCost = props.trackLandedCost;
        this.matrixItemNameTemplate = props.matrixItemNameTemplate;
        this.billingSchedule = props.billingSchedule;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.revRecSchedule = props.revRecSchedule;
        this.stockDescription = props.stockDescription;
        this.producer = props.producer;
        this.manufacturer = props.manufacturer;
        this.mpn = props.mpn;
        this.multManufactureAddr = props.multManufactureAddr;
        this.manufactureraddr1 = props.manufactureraddr1;
        this.manufacturerCity = props.manufacturerCity;
        this.manufacturerState = props.manufacturerState;
        this.manufacturerZip = props.manufacturerZip;
        this.countryOfManufacture = props.countryOfManufacture;
        this.effectiveBomControl = props.effectiveBomControl;
        this.defaultRevision = props.defaultRevision;
        this.roundUpAsComponent = props.roundUpAsComponent;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.isDropShipItem = props.isDropShipItem;
        this.isPhantom = props.isPhantom;
        this.defaultItemShipMethod = props.defaultItemShipMethod;
        this.itemCarrier = props.itemCarrier;
        this.itemShipMethodList = props.itemShipMethodList;
        this.manufacturerTaxId = props.manufacturerTaxId;
        this.scheduleBNumber = props.scheduleBNumber;
        this.scheduleBQuantity = props.scheduleBQuantity;
        this.scheduleBCode = props.scheduleBCode;
        this.manufacturerTariff = props.manufacturerTariff;
        this.preferenceCriterion = props.preferenceCriterion;
        this.issueProduct = props.issueProduct;
        this.minimumQuantity = props.minimumQuantity;
        this.lastInvtCountDate = props.lastInvtCountDate;
        this.nextInvtCountDate = props.nextInvtCountDate;
        this.invtCountInterval = props.invtCountInterval;
        this.invtClassification = props.invtClassification;
        this.enforceMinQtyInternally = props.enforceMinQtyInternally;
        this.maximumQuantity = props.maximumQuantity;
        this.softDescriptor = props.softDescriptor;
        this.isSpecialWorkOrderItem = props.isSpecialWorkOrderItem;
        this.costCategory = props.costCategory;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.prodQtyVarianceAcct = props.prodQtyVarianceAcct;
        this.prodPriceVarianceAcct = props.prodPriceVarianceAcct;
        this.purchasePriceVarianceAcct = props.purchasePriceVarianceAcct;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.buildEntireAssembly = props.buildEntireAssembly;
        this.quantityOnHand = props.quantityOnHand;
        this.useMarginalRates = props.useMarginalRates;
        this.costEstimateType = props.costEstimateType;
        this.isHazmatItem = props.isHazmatItem;
        this.hazmatId = props.hazmatId;
        this.hazmatShippingName = props.hazmatShippingName;
        this.hazmatHazardClass = props.hazmatHazardClass;
        this.hazmatPackingGroup = props.hazmatPackingGroup;
        this.hazmatItemUnits = props.hazmatItemUnits;
        this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
        this.costEstimate = props.costEstimate;
        this.transferPrice = props.transferPrice;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.pricingGroup = props.pricingGroup;
        this.intercoCogsAccount = props.intercoCogsAccount;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoeDelivered = props.vsoeDelivered;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.unbuildVarianceAccount = props.unbuildVarianceAccount;
        this.deferRevRec = props.deferRevRec;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.directRevenuePosting = props.directRevenuePosting;
        this.dropshipExpenseAccount = props.dropshipExpenseAccount;
        this.preferredLocation = props.preferredLocation;
        this.isStorePickupAllowed = props.isStorePickupAllowed;
        this.totalValue = props.totalValue;
        this.useBins = props.useBins;
        this.averageCost = props.averageCost;
        this.leadTime = props.leadTime;
        this.autoLeadTime = props.autoLeadTime;
        this.buildTime = props.buildTime;
        this.lastPurchasePrice = props.lastPurchasePrice;
        this.purchaseDescription = props.purchaseDescription;
        this.safetyStockLevel = props.safetyStockLevel;
        this.safetyStockLevelDays = props.safetyStockLevelDays;
        this.seasonalDemand = props.seasonalDemand;
        this.reorderMultiple = props.reorderMultiple;
        this.cost = props.cost;
        this.reorderPoint = props.reorderPoint;
        this.demandModifier = props.demandModifier;
        this.distributionNetwork = props.distributionNetwork;
        this.distributionCategory = props.distributionCategory;
        this.preferredStockLevel = props.preferredStockLevel;
        this.autoReorderPoint = props.autoReorderPoint;
        this.autoPreferredStockLevel = props.autoPreferredStockLevel;
        this.preferredStockLevelDays = props.preferredStockLevelDays;
        this.quantityCommitted = props.quantityCommitted;
        this.shipIndividually = props.shipIndividually;
        this.quantityAvailable = props.quantityAvailable;
        this.shipPackage = props.shipPackage;
        this.quantityBackOrdered = props.quantityBackOrdered;
        this.storeDisplayName = props.storeDisplayName;
        this.defaultReturnCost = props.defaultReturnCost;
        this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
        this.alternateDemandSourceItem = props.alternateDemandSourceItem;
        this.fixedLotSize = props.fixedLotSize;
        this.supplyType = props.supplyType;
        this.demandTimeFence = props.demandTimeFence;
        this.supplyTimeFence = props.supplyTimeFence;
        this.rescheduleInDays = props.rescheduleInDays;
        this.rescheduleOutDays = props.rescheduleOutDays;
        this.supplyLotSizingMethod = props.supplyLotSizingMethod;
        this.demandSource = props.demandSource;
        this.quantityOnOrder = props.quantityOnOrder;
        this.storeDisplayThumbnail = props.storeDisplayThumbnail;
        this.storeDisplayImage = props.storeDisplayImage;
        this.storeDescription = props.storeDescription;
        this.storeDetailedDescription = props.storeDetailedDescription;
        this.storeItemTemplate = props.storeItemTemplate;
        this.pageTitle = props.pageTitle;
        this.urlComponent = props.urlComponent;
        this.metaTagHtml = props.metaTagHtml;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.sitemapPriority = props.sitemapPriority;
        this.searchKeywords = props.searchKeywords;
        this.isDonationItem = props.isDonationItem;
        this.showDefaultDonationAmount = props.showDefaultDonationAmount;
        this.maxDonationAmount = props.maxDonationAmount;
        this.dontShowPrice = props.dontShowPrice;
        this.noPriceMessage = props.noPriceMessage;
        this.outOfStockMessage = props.outOfStockMessage;
        this.shoppingDotComCategory = props.shoppingDotComCategory;
        this.outOfStockBehavior = props.outOfStockBehavior;
        this.shopzillaCategoryId = props.shopzillaCategoryId;
        this.nexTagCategory = props.nexTagCategory;
        this.productFeedList = props.productFeedList;
        this.relatedItemsDescription = props.relatedItemsDescription;
        this.onSpecial = props.onSpecial;
        this.specialsDescription = props.specialsDescription;
        this.featuredDescription = props.featuredDescription;
        this.itemOptionsList = props.itemOptionsList;
        this.itemNumberOptionsList = props.itemNumberOptionsList;
        this.itemVendorList = props.itemVendorList;
        this.pricingMatrix = props.pricingMatrix;
        this.memberList = props.memberList;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.billOfMaterialsList = props.billOfMaterialsList;
        this.locationsList = props.locationsList;
        this.siteCategoryList = props.siteCategoryList;
        this.binNumberList = props.binNumberList;
        this.translationsList = props.translationsList;
        this.presentationItemList = props.presentationItemList;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.futureHorizon = props.futureHorizon;
        this.consumptionUnit = props.consumptionUnit;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.AssemblyItem = AssemblyItem;
class TranslationList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.translation = props.translation;
        this.replaceAll = props.replaceAll;
    }
}
exports.TranslationList = TranslationList;
class ServiceResaleItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.serviceResaleItemHierarchyVersions =
            props.serviceResaleItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.ServiceResaleItemHierarchyVersionsList = ServiceResaleItemHierarchyVersionsList;
class ServiceSaleItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.serviceSaleItemHierarchyVersions =
            props.serviceSaleItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.ServiceSaleItemHierarchyVersionsList = ServiceSaleItemHierarchyVersionsList;
class GiftCertificateSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.GiftCertificateSearchRow = GiftCertificateSearchRow;
class Price extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.value = props.value;
        this.quantity = props.quantity;
    }
}
exports.Price = Price;
class NoteTypeSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.NoteTypeSearchRow = NoteTypeSearchRow;
class ItemGroup extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.customForm = props.customForm;
        this.includeStartEndLines = props.includeStartEndLines;
        this.isVsoeBundle = props.isVsoeBundle;
        this.defaultItemShipMethod = props.defaultItemShipMethod;
        this.availableToPartners = props.availableToPartners;
        this.isInactive = props.isInactive;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.vendorName = props.vendorName;
        this.issueProduct = props.issueProduct;
        this.parent = props.parent;
        this.description = props.description;
        this.subsidiaryList = props.subsidiaryList;
        this.includeChildren = props.includeChildren;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.itemCarrier = props.itemCarrier;
        this.itemShipMethodList = props.itemShipMethodList;
        this.printItems = props.printItems;
        this.memberList = props.memberList;
        this.translationsList = props.translationsList;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.ItemGroup = ItemGroup;
class PresentationItemList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.presentationItem = props.presentationItem;
        this.replaceAll = props.replaceAll;
    }
}
exports.PresentationItemList = PresentationItemList;
class RevRecTemplateSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.RevRecTemplateSearch = RevRecTemplateSearch;
class LotNumberedInventoryItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.LotNumberedInventoryItemHierarchyVersions = LotNumberedInventoryItemHierarchyVersions;
class MarkupItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.description = props.description;
        this.nonPosting = props.nonPosting;
        this.account = props.account;
        this.includeChildren = props.includeChildren;
        this.rate = props.rate;
        this.isPreTax = props.isPreTax;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.issueProduct = props.issueProduct;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.vendorName = props.vendorName;
        this.parent = props.parent;
        this.isInactive = props.isInactive;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.subsidiaryList = props.subsidiaryList;
        this.taxSchedule = props.taxSchedule;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.expenseAccount = props.expenseAccount;
        this.incomeAccount = props.incomeAccount;
        this.revRecSchedule = props.revRecSchedule;
        this.salesTaxCode = props.salesTaxCode;
        this.translationsList = props.translationsList;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.MarkupItem = MarkupItem;
class SubsidiarySearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.addressJoin = props.addressJoin;
        this.defaultAdvanceToApplyAccountJoin =
            props.defaultAdvanceToApplyAccountJoin;
        this.returnAddressJoin = props.returnAddressJoin;
        this.shippingAddressJoin = props.shippingAddressJoin;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.SubsidiarySearchRow = SubsidiarySearchRow;
class NonInventorySaleItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.NonInventorySaleItemHierarchyVersions = NonInventorySaleItemHierarchyVersions;
class PaymentMethodSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.PaymentMethodSearch = PaymentMethodSearch;
class OtherNameCategorySearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.OtherNameCategorySearchRow = OtherNameCategorySearchRow;
class BillingScheduleRecurrence extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.recurrenceId = props.recurrenceId;
        this.count = props.count;
        this.units = props.units;
        this.relativeToPrevious = props.relativeToPrevious;
        this.recurrenceDate = props.recurrenceDate;
        this.amount = props.amount;
        this.paymentTerms = props.paymentTerms;
    }
}
exports.BillingScheduleRecurrence = BillingScheduleRecurrence;
class ItemVendorList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.itemVendor = props.itemVendor;
        this.replaceAll = props.replaceAll;
    }
}
exports.ItemVendorList = ItemVendorList;
class ClassificationSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.ClassificationSearch = ClassificationSearch;
class Currency extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.symbol = props.symbol;
        this.isBaseCurrency = props.isBaseCurrency;
        this.isInactive = props.isInactive;
        this.overrideCurrencyFormat = props.overrideCurrencyFormat;
        this.displaySymbol = props.displaySymbol;
        this.symbolPlacement = props.symbolPlacement;
        this.locale = props.locale;
        this.formatSample = props.formatSample;
        this.exchangeRate = props.exchangeRate;
        this.fxRateUpdateTimezone = props.fxRateUpdateTimezone;
        this.inclInFxRateUpdates = props.inclInFxRateUpdates;
        this.currencyPrecision = props.currencyPrecision;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.Currency = Currency;
class SerializedInventoryItemLocations extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.location = props.location;
        this.quantityOnHand = props.quantityOnHand;
        this.onHandValueMli = props.onHandValueMli;
        this.serialNumbers = props.serialNumbers;
        this.averageCostMli = props.averageCostMli;
        this.lastPurchasePriceMli = props.lastPurchasePriceMli;
        this.reorderPoint = props.reorderPoint;
        this.locationAllowStorePickup = props.locationAllowStorePickup;
        this.locationStorePickupBufferStock = props.locationStorePickupBufferStock;
        this.locationQtyAvailForStorePickup = props.locationQtyAvailForStorePickup;
        this.preferredStockLevel = props.preferredStockLevel;
        this.leadTime = props.leadTime;
        this.defaultReturnCost = props.defaultReturnCost;
        this.isWip = props.isWip;
        this.safetyStockLevel = props.safetyStockLevel;
        this.cost = props.cost;
        this.inventoryCostTemplate = props.inventoryCostTemplate;
        this.buildTime = props.buildTime;
        this.lastInvtCountDate = props.lastInvtCountDate;
        this.nextInvtCountDate = props.nextInvtCountDate;
        this.invtCountInterval = props.invtCountInterval;
        this.invtClassification = props.invtClassification;
        this.costingLotSize = props.costingLotSize;
        this.quantityOnOrder = props.quantityOnOrder;
        this.quantityCommitted = props.quantityCommitted;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityBackOrdered = props.quantityBackOrdered;
        this.locationId = props.locationId;
        this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
        this.alternateDemandSourceItem = props.alternateDemandSourceItem;
        this.fixedLotSize = props.fixedLotSize;
        this.periodicLotSizeType = props.periodicLotSizeType;
        this.periodicLotSizeDays = props.periodicLotSizeDays;
        this.supplyType = props.supplyType;
        this.supplyLotSizingMethod = props.supplyLotSizingMethod;
        this.demandSource = props.demandSource;
        this.backwardConsumptionDays = props.backwardConsumptionDays;
        this.forwardConsumptionDays = props.forwardConsumptionDays;
        this.demandTimeFence = props.demandTimeFence;
        this.supplyTimeFence = props.supplyTimeFence;
        this.rescheduleInDays = props.rescheduleInDays;
        this.rescheduleOutDays = props.rescheduleOutDays;
    }
}
exports.SerializedInventoryItemLocations = SerializedInventoryItemLocations;
class RevRecScheduleRecurrence extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.incomeaccount = props.incomeaccount;
        this.periodOffset = props.periodOffset;
        this.recamount = props.recamount;
    }
}
exports.RevRecScheduleRecurrence = RevRecScheduleRecurrence;
class LocationSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.addressJoin = props.addressJoin;
        this.returnAddressJoin = props.returnAddressJoin;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.LocationSearch = LocationSearch;
class AssemblyItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.AssemblyItemHierarchyVersions = AssemblyItemHierarchyVersions;
class GiftCertificateItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.includeChildren = props.includeChildren;
        this.parent = props.parent;
        this.isOnline = props.isOnline;
        this.isGcoCompliant = props.isGcoCompliant;
        this.offerSupport = props.offerSupport;
        this.isInactive = props.isInactive;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.subsidiaryList = props.subsidiaryList;
        this.salesDescription = props.salesDescription;
        this.incomeAccount = props.incomeAccount;
        this.liabilityAccount = props.liabilityAccount;
        this.daysBeforeExpiration = props.daysBeforeExpiration;
        this.isTaxable = props.isTaxable;
        this.rate = props.rate;
        this.urlComponent = props.urlComponent;
        this.salesTaxCode = props.salesTaxCode;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.taxSchedule = props.taxSchedule;
        this.costEstimate = props.costEstimate;
        this.costEstimateType = props.costEstimateType;
        this.billingSchedule = props.billingSchedule;
        this.issueProduct = props.issueProduct;
        this.isFulfillable = props.isFulfillable;
        this.storeDisplayName = props.storeDisplayName;
        this.storeDisplayThumbnail = props.storeDisplayThumbnail;
        this.storeDisplayImage = props.storeDisplayImage;
        this.storeDescription = props.storeDescription;
        this.storeDetailedDescription = props.storeDetailedDescription;
        this.storeItemTemplate = props.storeItemTemplate;
        this.pageTitle = props.pageTitle;
        this.metaTagHtml = props.metaTagHtml;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.sitemapPriority = props.sitemapPriority;
        this.searchKeywords = props.searchKeywords;
        this.isDonationItem = props.isDonationItem;
        this.showDefaultDonationAmount = props.showDefaultDonationAmount;
        this.maxDonationAmount = props.maxDonationAmount;
        this.dontShowPrice = props.dontShowPrice;
        this.noPriceMessage = props.noPriceMessage;
        this.outOfStockMessage = props.outOfStockMessage;
        this.onSpecial = props.onSpecial;
        this.outOfStockBehavior = props.outOfStockBehavior;
        this.specialsDescription = props.specialsDescription;
        this.featuredDescription = props.featuredDescription;
        this.relatedItemsDescription = props.relatedItemsDescription;
        this.pricingMatrix = props.pricingMatrix;
        this.authCodesList = props.authCodesList;
        this.siteCategoryList = props.siteCategoryList;
        this.translationsList = props.translationsList;
        this.itemOptionsList = props.itemOptionsList;
        this.presentationItemList = props.presentationItemList;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.GiftCertificateItem = GiftCertificateItem;
class GlobalAccountMappingSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.classJoin = props.classJoin;
        this.departmentJoin = props.departmentJoin;
        this.destinationAccountJoin = props.destinationAccountJoin;
        this.locationJoin = props.locationJoin;
        this.sourceAccountJoin = props.sourceAccountJoin;
        this.subsidiaryJoin = props.subsidiaryJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.GlobalAccountMappingSearch = GlobalAccountMappingSearch;
class NoteTypeSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.NoteTypeSearchAdvanced = NoteTypeSearchAdvanced;
class RevRecScheduleSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.appliedToTransactionJoin = props.appliedToTransactionJoin;
        this.customerJoin = props.customerJoin;
        this.itemJoin = props.itemJoin;
        this.transactionJoin = props.transactionJoin;
        this.userJoin = props.userJoin;
    }
}
exports.RevRecScheduleSearchRow = RevRecScheduleSearchRow;
class ServicePurchaseItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.ServicePurchaseItemHierarchyVersions = ServicePurchaseItemHierarchyVersions;
class Classification extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.includeChildren = props.includeChildren;
        this.parent = props.parent;
        this.isInactive = props.isInactive;
        this.classTranslationList = props.classTranslationList;
        this.subsidiaryList = props.subsidiaryList;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.Classification = Classification;
class ContactRoleSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.ContactRoleSearchAdvanced = ContactRoleSearchAdvanced;
class BomSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.assemblyItemJoin = props.assemblyItemJoin;
        this.revisionJoin = props.revisionJoin;
        this.transactionJoin = props.transactionJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.BomSearchRow = BomSearchRow;
class UnitsTypeUom extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.internalId = props.internalId;
        this.unitName = props.unitName;
        this.pluralName = props.pluralName;
        this.abbreviation = props.abbreviation;
        this.pluralAbbreviation = props.pluralAbbreviation;
        this.conversionRate = props.conversionRate;
        this.baseUnit = props.baseUnit;
    }
}
exports.UnitsTypeUom = UnitsTypeUom;
class AssemblyItemBillOfMaterials extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.billOfMaterials = props.billOfMaterials;
        this.currentRevision = props.currentRevision;
        this.masterDefault = props.masterDefault;
        this.defaultForLocationList = props.defaultForLocationList;
        this.inactive = props.inactive;
        this.memo = props.memo;
    }
}
exports.AssemblyItemBillOfMaterials = AssemblyItemBillOfMaterials;
class FairValuePriceSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.itemJoin = props.itemJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.FairValuePriceSearchRow = FairValuePriceSearchRow;
class DescriptionItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.description = props.description;
        this.includeChildren = props.includeChildren;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.issueProduct = props.issueProduct;
        this.isInactive = props.isInactive;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.subsidiaryList = props.subsidiaryList;
        this.translationsList = props.translationsList;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.DescriptionItem = DescriptionItem;
class SubsidiaryTaxRegistration extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.id = props.id;
        this.nexusCountry = props.nexusCountry;
        this.nexus = props.nexus;
        this.taxAgency = props.taxAgency;
        this.taxRegistrationNumber = props.taxRegistrationNumber;
        this.taxEngine = props.taxEngine;
        this.effectiveFrom = props.effectiveFrom;
        this.validUntil = props.validUntil;
    }
}
exports.SubsidiaryTaxRegistration = SubsidiaryTaxRegistration;
class GiftCertificate extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.giftCertCode = props.giftCertCode;
        this.sender = props.sender;
        this.name = props.name;
        this.email = props.email;
        this.message = props.message;
        this.expirationDate = props.expirationDate;
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.originalAmount = props.originalAmount;
        this.amountRemaining = props.amountRemaining;
        this.internalId = props.internalId;
    }
}
exports.GiftCertificate = GiftCertificate;
class SerializedInventoryItemLocationsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.locations = props.locations;
        this.replaceAll = props.replaceAll;
    }
}
exports.SerializedInventoryItemLocationsList = SerializedInventoryItemLocationsList;
class SalesRole extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.description = props.description;
        this.isSalesRep = props.isSalesRep;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.SalesRole = SalesRole;
class PaymentItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.description = props.description;
        this.paymentMethod = props.paymentMethod;
        this.undepFunds = props.undepFunds;
        this.includeChildren = props.includeChildren;
        this.issueProduct = props.issueProduct;
        this.account = props.account;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.displayName = props.displayName;
        this.isInactive = props.isInactive;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.subsidiaryList = props.subsidiaryList;
        this.translationsList = props.translationsList;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.PaymentItem = PaymentItem;
class RevRecTemplateRecurrence extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.incomeaccount = props.incomeaccount;
        this.periodOffset = props.periodOffset;
        this.recamount = props.recamount;
    }
}
exports.RevRecTemplateRecurrence = RevRecTemplateRecurrence;
class KitItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.parent = props.parent;
        this.printItems = props.printItems;
        this.isOnline = props.isOnline;
        this.isGcoCompliant = props.isGcoCompliant;
        this.offerSupport = props.offerSupport;
        this.isInactive = props.isInactive;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.subsidiaryList = props.subsidiaryList;
        this.clazz = props.clazz;
        this.includeChildren = props.includeChildren;
        this.location = props.location;
        this.description = props.description;
        this.incomeAccount = props.incomeAccount;
        this.taxSchedule = props.taxSchedule;
        this.shippingCost = props.shippingCost;
        this.handlingCost = props.handlingCost;
        this.isTaxable = props.isTaxable;
        this.deferRevRec = props.deferRevRec;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.directRevenuePosting = props.directRevenuePosting;
        this.contingentRevenueHandling = props.contingentRevenueHandling;
        this.revReclassFXAccount = props.revReclassFXAccount;
        this.salesTaxCode = props.salesTaxCode;
        this.weight = props.weight;
        this.weightUnit = props.weightUnit;
        this.rate = props.rate;
        this.billingSchedule = props.billingSchedule;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.revRecSchedule = props.revRecSchedule;
        this.stockDescription = props.stockDescription;
        this.producer = props.producer;
        this.manufacturer = props.manufacturer;
        this.mpn = props.mpn;
        this.multManufactureAddr = props.multManufactureAddr;
        this.manufactureraddr1 = props.manufactureraddr1;
        this.manufacturerCity = props.manufacturerCity;
        this.manufacturerState = props.manufacturerState;
        this.manufacturerZip = props.manufacturerZip;
        this.countryOfManufacture = props.countryOfManufacture;
        this.defaultItemShipMethod = props.defaultItemShipMethod;
        this.itemCarrier = props.itemCarrier;
        this.itemShipMethodList = props.itemShipMethodList;
        this.manufacturerTaxId = props.manufacturerTaxId;
        this.scheduleBNumber = props.scheduleBNumber;
        this.scheduleBQuantity = props.scheduleBQuantity;
        this.scheduleBCode = props.scheduleBCode;
        this.manufacturerTariff = props.manufacturerTariff;
        this.preferenceCriterion = props.preferenceCriterion;
        this.issueProduct = props.issueProduct;
        this.minimumQuantity = props.minimumQuantity;
        this.enforceMinQtyInternally = props.enforceMinQtyInternally;
        this.maximumQuantity = props.maximumQuantity;
        this.softDescriptor = props.softDescriptor;
        this.isFulfillable = props.isFulfillable;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.useMarginalRates = props.useMarginalRates;
        this.costEstimateType = props.costEstimateType;
        this.isHazmatItem = props.isHazmatItem;
        this.hazmatId = props.hazmatId;
        this.hazmatShippingName = props.hazmatShippingName;
        this.hazmatHazardClass = props.hazmatHazardClass;
        this.hazmatPackingGroup = props.hazmatPackingGroup;
        this.hazmatItemUnits = props.hazmatItemUnits;
        this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
        this.costEstimate = props.costEstimate;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.pricingGroup = props.pricingGroup;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoeDelivered = props.vsoeDelivered;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.shipIndividually = props.shipIndividually;
        this.shipPackage = props.shipPackage;
        this.storeDisplayName = props.storeDisplayName;
        this.storeDisplayThumbnail = props.storeDisplayThumbnail;
        this.outOfStockMessage = props.outOfStockMessage;
        this.storeDisplayImage = props.storeDisplayImage;
        this.storeDescription = props.storeDescription;
        this.storeDetailedDescription = props.storeDetailedDescription;
        this.storeItemTemplate = props.storeItemTemplate;
        this.pageTitle = props.pageTitle;
        this.urlComponent = props.urlComponent;
        this.metaTagHtml = props.metaTagHtml;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.sitemapPriority = props.sitemapPriority;
        this.searchKeywords = props.searchKeywords;
        this.itemOptionsList = props.itemOptionsList;
        this.isDonationItem = props.isDonationItem;
        this.showDefaultDonationAmount = props.showDefaultDonationAmount;
        this.maxDonationAmount = props.maxDonationAmount;
        this.dontShowPrice = props.dontShowPrice;
        this.noPriceMessage = props.noPriceMessage;
        this.shoppingDotComCategory = props.shoppingDotComCategory;
        this.shopzillaCategoryId = props.shopzillaCategoryId;
        this.outOfStockBehavior = props.outOfStockBehavior;
        this.nexTagCategory = props.nexTagCategory;
        this.productFeedList = props.productFeedList;
        this.relatedItemsDescription = props.relatedItemsDescription;
        this.onSpecial = props.onSpecial;
        this.specialsDescription = props.specialsDescription;
        this.featuredDescription = props.featuredDescription;
        this.pricingMatrix = props.pricingMatrix;
        this.siteCategoryList = props.siteCategoryList;
        this.memberList = props.memberList;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.translationsList = props.translationsList;
        this.presentationItemList = props.presentationItemList;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.KitItem = KitItem;
class DepartmentSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.DepartmentSearch = DepartmentSearch;
class SubsidiarySearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.SubsidiarySearchAdvanced = SubsidiarySearchAdvanced;
class Rate extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.value = props.value;
        this.priceLevel = props.priceLevel;
    }
}
exports.Rate = Rate;
class TermPercentages extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.percentage = props.percentage;
    }
}
exports.TermPercentages = TermPercentages;
class InventoryNumberSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.itemJoin = props.itemJoin;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.InventoryNumberSearch = InventoryNumberSearch;
class DiscountItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.description = props.description;
        this.nonPosting = props.nonPosting;
        this.account = props.account;
        this.includeChildren = props.includeChildren;
        this.rate = props.rate;
        this.isPreTax = props.isPreTax;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.issueProduct = props.issueProduct;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.vendorName = props.vendorName;
        this.parent = props.parent;
        this.isInactive = props.isInactive;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.subsidiaryList = props.subsidiaryList;
        this.taxSchedule = props.taxSchedule;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.expenseAccount = props.expenseAccount;
        this.incomeAccount = props.incomeAccount;
        this.revRecSchedule = props.revRecSchedule;
        this.salesTaxCode = props.salesTaxCode;
        this.translationsList = props.translationsList;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.DiscountItem = DiscountItem;
class OtherChargeSaleItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.salesDescription = props.salesDescription;
        this.includeChildren = props.includeChildren;
        this.incomeAccount = props.incomeAccount;
        this.isTaxable = props.isTaxable;
        this.matrixType = props.matrixType;
        this.taxSchedule = props.taxSchedule;
        this.costEstimateType = props.costEstimateType;
        this.costEstimate = props.costEstimate;
        this.unitsType = props.unitsType;
        this.saleUnit = props.saleUnit;
        this.issueProduct = props.issueProduct;
        this.costEstimateUnits = props.costEstimateUnits;
        this.billingSchedule = props.billingSchedule;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.revRecSchedule = props.revRecSchedule;
        this.minimumQuantity = props.minimumQuantity;
        this.minimumQuantityUnits = props.minimumQuantityUnits;
        this.enforceMinQtyInternally = props.enforceMinQtyInternally;
        this.maximumQuantity = props.maximumQuantity;
        this.softDescriptor = props.softDescriptor;
        this.isFulfillable = props.isFulfillable;
        this.costCategory = props.costCategory;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.useMarginalRates = props.useMarginalRates;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.pricingGroup = props.pricingGroup;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.parent = props.parent;
        this.isOnline = props.isOnline;
        this.isGcoCompliant = props.isGcoCompliant;
        this.offerSupport = props.offerSupport;
        this.isInactive = props.isInactive;
        this.matrixItemNameTemplate = props.matrixItemNameTemplate;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoeDelivered = props.vsoeDelivered;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.deferRevRec = props.deferRevRec;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.directRevenuePosting = props.directRevenuePosting;
        this.contingentRevenueHandling = props.contingentRevenueHandling;
        this.revReclassFXAccount = props.revReclassFXAccount;
        this.subsidiaryList = props.subsidiaryList;
        this.itemOptionsList = props.itemOptionsList;
        this.matrixOptionList = props.matrixOptionList;
        this.pricingMatrix = props.pricingMatrix;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.purchaseTaxCode = props.purchaseTaxCode;
        this.rate = props.rate;
        this.salesTaxCode = props.salesTaxCode;
        this.translationsList = props.translationsList;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.consumptionUnit = props.consumptionUnit;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.OtherChargeSaleItem = OtherChargeSaleItem;
class TaxTypeSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.TaxTypeSearch = TaxTypeSearch;
class BinSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.BinSearchAdvanced = BinSearchAdvanced;
class AccountSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.AccountSearchAdvanced = AccountSearchAdvanced;
class CustomerMessageSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.CustomerMessageSearchRow = CustomerMessageSearchRow;
class ProductFeedList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.productFeed = props.productFeed;
    }
}
exports.ProductFeedList = ProductFeedList;
class SubsidiaryNexusList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.nexus = props.nexus;
        this.replaceAll = props.replaceAll;
    }
}
exports.SubsidiaryNexusList = SubsidiaryNexusList;
class BomSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.BomSearchAdvanced = BomSearchAdvanced;
class PaymentMethodVisualsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.paymentMethodVisuals = props.paymentMethodVisuals;
        this.replaceAll = props.replaceAll;
    }
}
exports.PaymentMethodVisualsList = PaymentMethodVisualsList;
class LocationRegions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.region = props.region;
    }
}
exports.LocationRegions = LocationRegions;
class ClassTranslationList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.classTranslation = props.classTranslation;
        this.replaceAll = props.replaceAll;
    }
}
exports.ClassTranslationList = ClassTranslationList;
class VendorCategory extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.isTaxAgency = props.isTaxAgency;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.VendorCategory = VendorCategory;
class ItemOptionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.itemOptions = props.itemOptions;
    }
}
exports.ItemOptionsList = ItemOptionsList;
class MerchandiseHierarchyNodeSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.parentNodeJoin = props.parentNodeJoin;
    }
}
exports.MerchandiseHierarchyNodeSearchRow = MerchandiseHierarchyNodeSearchRow;
class TaxGroupSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.TaxGroupSearch = TaxGroupSearch;
class NonInventoryResaleItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.purchaseDescription = props.purchaseDescription;
        this.copyDescription = props.copyDescription;
        this.cost = props.cost;
        this.costUnits = props.costUnits;
        this.expenseAccount = props.expenseAccount;
        this.intercoExpenseAccount = props.intercoExpenseAccount;
        this.salesDescription = props.salesDescription;
        this.includeChildren = props.includeChildren;
        this.incomeAccount = props.incomeAccount;
        this.intercoIncomeAccount = props.intercoIncomeAccount;
        this.isTaxable = props.isTaxable;
        this.matrixType = props.matrixType;
        this.taxSchedule = props.taxSchedule;
        this.dropshipExpenseAccount = props.dropshipExpenseAccount;
        this.deferRevRec = props.deferRevRec;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.directRevenuePosting = props.directRevenuePosting;
        this.isDropShipItem = props.isDropShipItem;
        this.isSpecialOrderItem = props.isSpecialOrderItem;
        this.shippingCost = props.shippingCost;
        this.shippingCostUnits = props.shippingCostUnits;
        this.handlingCost = props.handlingCost;
        this.handlingCostUnits = props.handlingCostUnits;
        this.costEstimateType = props.costEstimateType;
        this.costEstimate = props.costEstimate;
        this.weight = props.weight;
        this.weightUnit = props.weightUnit;
        this.weightUnits = props.weightUnits;
        this.costEstimateUnits = props.costEstimateUnits;
        this.unitsType = props.unitsType;
        this.purchaseUnit = props.purchaseUnit;
        this.saleUnit = props.saleUnit;
        this.issueProduct = props.issueProduct;
        this.billingSchedule = props.billingSchedule;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.revRecSchedule = props.revRecSchedule;
        this.deferralAccount = props.deferralAccount;
        this.amortizationTemplate = props.amortizationTemplate;
        this.residual = props.residual;
        this.amortizationPeriod = props.amortizationPeriod;
        this.stockDescription = props.stockDescription;
        this.producer = props.producer;
        this.manufacturer = props.manufacturer;
        this.mpn = props.mpn;
        this.multManufactureAddr = props.multManufactureAddr;
        this.manufacturerAddr1 = props.manufacturerAddr1;
        this.manufacturerCity = props.manufacturerCity;
        this.manufacturerState = props.manufacturerState;
        this.manufacturerZip = props.manufacturerZip;
        this.countryOfManufacture = props.countryOfManufacture;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.manufacturerTaxId = props.manufacturerTaxId;
        this.scheduleBNumber = props.scheduleBNumber;
        this.scheduleBQuantity = props.scheduleBQuantity;
        this.scheduleBCode = props.scheduleBCode;
        this.manufacturerTariff = props.manufacturerTariff;
        this.preferenceCriterion = props.preferenceCriterion;
        this.minimumQuantity = props.minimumQuantity;
        this.enforceMinQtyInternally = props.enforceMinQtyInternally;
        this.maximumQuantity = props.maximumQuantity;
        this.softDescriptor = props.softDescriptor;
        this.shipPackage = props.shipPackage;
        this.shipIndividually = props.shipIndividually;
        this.isFulfillable = props.isFulfillable;
        this.generateAccruals = props.generateAccruals;
        this.costCategory = props.costCategory;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.useMarginalRates = props.useMarginalRates;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.pricingGroup = props.pricingGroup;
        this.minimumQuantityUnits = props.minimumQuantityUnits;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoeDelivered = props.vsoeDelivered;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.storeDisplayName = props.storeDisplayName;
        this.storeDisplayThumbnail = props.storeDisplayThumbnail;
        this.storeDisplayImage = props.storeDisplayImage;
        this.storeDescription = props.storeDescription;
        this.storeDetailedDescription = props.storeDetailedDescription;
        this.storeItemTemplate = props.storeItemTemplate;
        this.pageTitle = props.pageTitle;
        this.metaTagHtml = props.metaTagHtml;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.sitemapPriority = props.sitemapPriority;
        this.searchKeywords = props.searchKeywords;
        this.isDonationItem = props.isDonationItem;
        this.showDefaultDonationAmount = props.showDefaultDonationAmount;
        this.maxDonationAmount = props.maxDonationAmount;
        this.dontShowPrice = props.dontShowPrice;
        this.noPriceMessage = props.noPriceMessage;
        this.outOfStockMessage = props.outOfStockMessage;
        this.onSpecial = props.onSpecial;
        this.outOfStockBehavior = props.outOfStockBehavior;
        this.relatedItemsDescription = props.relatedItemsDescription;
        this.specialsDescription = props.specialsDescription;
        this.featuredDescription = props.featuredDescription;
        this.shoppingDotComCategory = props.shoppingDotComCategory;
        this.shopzillaCategoryId = props.shopzillaCategoryId;
        this.nexTagCategory = props.nexTagCategory;
        this.productFeedList = props.productFeedList;
        this.urlComponent = props.urlComponent;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.vendorName = props.vendorName;
        this.parent = props.parent;
        this.isOnline = props.isOnline;
        this.isHazmatItem = props.isHazmatItem;
        this.hazmatId = props.hazmatId;
        this.hazmatShippingName = props.hazmatShippingName;
        this.hazmatHazardClass = props.hazmatHazardClass;
        this.hazmatPackingGroup = props.hazmatPackingGroup;
        this.hazmatItemUnits = props.hazmatItemUnits;
        this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
        this.isGcoCompliant = props.isGcoCompliant;
        this.offerSupport = props.offerSupport;
        this.isInactive = props.isInactive;
        this.matrixItemNameTemplate = props.matrixItemNameTemplate;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.defaultItemShipMethod = props.defaultItemShipMethod;
        this.itemCarrier = props.itemCarrier;
        this.itemShipMethodList = props.itemShipMethodList;
        this.subsidiaryList = props.subsidiaryList;
        this.currency = props.currency;
        this.itemOptionsList = props.itemOptionsList;
        this.matrixOptionList = props.matrixOptionList;
        this.itemVendorList = props.itemVendorList;
        this.pricingMatrix = props.pricingMatrix;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.purchaseTaxCode = props.purchaseTaxCode;
        this.rate = props.rate;
        this.salesTaxCode = props.salesTaxCode;
        this.siteCategoryList = props.siteCategoryList;
        this.translationsList = props.translationsList;
        this.vendor = props.vendor;
        this.presentationItemList = props.presentationItemList;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.consumptionUnit = props.consumptionUnit;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.NonInventoryResaleItem = NonInventoryResaleItem;
class LotNumberedInventoryItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.lotNumberedInventoryItemHierarchyVersions =
            props.lotNumberedInventoryItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.LotNumberedInventoryItemHierarchyVersionsList = LotNumberedInventoryItemHierarchyVersionsList;
class BomRevisionComponentList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.bomRevisionComponent = props.bomRevisionComponent;
        this.replaceAll = props.replaceAll;
    }
}
exports.BomRevisionComponentList = BomRevisionComponentList;
class MerchandiseHierarchyNode extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.description = props.description;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.MerchandiseHierarchyNode = MerchandiseHierarchyNode;
class Pricing extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.currency = props.currency;
        this.priceLevel = props.priceLevel;
        this.discount = props.discount;
        this.priceList = props.priceList;
    }
}
exports.Pricing = Pricing;
class PaymentMethod extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.creditCard = props.creditCard;
        this.undepFunds = props.undepFunds;
        this.account = props.account;
        this.isInactive = props.isInactive;
        this.isOnline = props.isOnline;
        this.visualsList = props.visualsList;
        this.isDebitCard = props.isDebitCard;
        this.merchantAccountsList = props.merchantAccountsList;
        this.payPalEmailAddress = props.payPalEmailAddress;
        this.expressCheckoutArrangement = props.expressCheckoutArrangement;
        this.useExpressCheckout = props.useExpressCheckout;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.PaymentMethod = PaymentMethod;
class ConsolidatedExchangeRateSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.fromSubsidiaryJoin = props.fromSubsidiaryJoin;
        this.periodJoin = props.periodJoin;
        this.toSubsidiaryJoin = props.toSubsidiaryJoin;
        this.userJoin = props.userJoin;
    }
}
exports.ConsolidatedExchangeRateSearchRow = ConsolidatedExchangeRateSearchRow;
class ServiceSaleItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.ServiceSaleItemHierarchyVersions = ServiceSaleItemHierarchyVersions;
class ItemRevisionSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.itemJoin = props.itemJoin;
        this.userJoin = props.userJoin;
    }
}
exports.ItemRevisionSearchRow = ItemRevisionSearchRow;
class SalesTaxItemSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.taxTypeJoin = props.taxTypeJoin;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.SalesTaxItemSearchRow = SalesTaxItemSearchRow;
class UnitsTypeSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.UnitsTypeSearch = UnitsTypeSearch;
class InventoryItemLocations extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.location = props.location;
        this.quantityOnHand = props.quantityOnHand;
        this.onHandValueMli = props.onHandValueMli;
        this.averageCostMli = props.averageCostMli;
        this.lastPurchasePriceMli = props.lastPurchasePriceMli;
        this.reorderPoint = props.reorderPoint;
        this.locationAllowStorePickup = props.locationAllowStorePickup;
        this.locationStorePickupBufferStock = props.locationStorePickupBufferStock;
        this.locationQtyAvailForStorePickup = props.locationQtyAvailForStorePickup;
        this.preferredStockLevel = props.preferredStockLevel;
        this.leadTime = props.leadTime;
        this.defaultReturnCost = props.defaultReturnCost;
        this.safetyStockLevel = props.safetyStockLevel;
        this.cost = props.cost;
        this.inventoryCostTemplate = props.inventoryCostTemplate;
        this.buildTime = props.buildTime;
        this.lastInvtCountDate = props.lastInvtCountDate;
        this.nextInvtCountDate = props.nextInvtCountDate;
        this.isWip = props.isWip;
        this.invtCountInterval = props.invtCountInterval;
        this.invtClassification = props.invtClassification;
        this.costingLotSize = props.costingLotSize;
        this.quantityOnOrder = props.quantityOnOrder;
        this.quantityCommitted = props.quantityCommitted;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityBackOrdered = props.quantityBackOrdered;
        this.locationId = props.locationId;
        this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
        this.alternateDemandSourceItem = props.alternateDemandSourceItem;
        this.fixedLotSize = props.fixedLotSize;
        this.periodicLotSizeType = props.periodicLotSizeType;
        this.periodicLotSizeDays = props.periodicLotSizeDays;
        this.supplyType = props.supplyType;
        this.supplyLotSizingMethod = props.supplyLotSizingMethod;
        this.demandSource = props.demandSource;
        this.backwardConsumptionDays = props.backwardConsumptionDays;
        this.forwardConsumptionDays = props.forwardConsumptionDays;
        this.demandTimeFence = props.demandTimeFence;
        this.supplyTimeFence = props.supplyTimeFence;
        this.rescheduleInDays = props.rescheduleInDays;
        this.rescheduleOutDays = props.rescheduleOutDays;
    }
}
exports.InventoryItemLocations = InventoryItemLocations;
class CostCategorySearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.accountJoin = props.accountJoin;
        this.transactionJoin = props.transactionJoin;
    }
}
exports.CostCategorySearchRow = CostCategorySearchRow;
class ItemAccountMappingSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.classJoin = props.classJoin;
        this.departmentJoin = props.departmentJoin;
        this.destinationAccountJoin = props.destinationAccountJoin;
        this.locationJoin = props.locationJoin;
        this.sourceAccountJoin = props.sourceAccountJoin;
        this.subsidiaryJoin = props.subsidiaryJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.ItemAccountMappingSearch = ItemAccountMappingSearch;
class UnitsTypeSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.UnitsTypeSearchAdvanced = UnitsTypeSearchAdvanced;
class VendorCategorySearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.VendorCategorySearchAdvanced = VendorCategorySearchAdvanced;
class NonInventorySaleItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.nonInventorySaleItemHierarchyVersions =
            props.nonInventorySaleItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.NonInventorySaleItemHierarchyVersionsList = NonInventorySaleItemHierarchyVersionsList;
class CustomerMessageSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.CustomerMessageSearchAdvanced = CustomerMessageSearchAdvanced;
class PaymentCardToken extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.entity = props.entity;
        this.mask = props.mask;
        this.paymentMethod = props.paymentMethod;
        this.memo = props.memo;
        this.state = props.state;
        this.isInactive = props.isInactive;
        this.preserveOnFile = props.preserveOnFile;
        this.isDefault = props.isDefault;
        this.token = props.token;
        this.tokenExpirationDate = props.tokenExpirationDate;
        this.tokenFamily = props.tokenFamily;
        this.tokenNamespace = props.tokenNamespace;
        this.cardIssuerIdNumber = props.cardIssuerIdNumber;
        this.cardBrand = props.cardBrand;
        this.cardType = props.cardType;
        this.cardNameOnCard = props.cardNameOnCard;
        this.cardLastFourDigits = props.cardLastFourDigits;
        this.cardExpirationDate = props.cardExpirationDate;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.PaymentCardToken = PaymentCardToken;
class GiftCertificateItemAuthCodes extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.authCode = props.authCode;
        this.used = props.used;
    }
}
exports.GiftCertificateItemAuthCodes = GiftCertificateItemAuthCodes;
class SerializedAssemblyItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.vendorName = props.vendorName;
        this.parent = props.parent;
        this.printItems = props.printItems;
        this.isOnline = props.isOnline;
        this.lastInvtCountDate = props.lastInvtCountDate;
        this.nextInvtCountDate = props.nextInvtCountDate;
        this.invtCountInterval = props.invtCountInterval;
        this.invtClassification = props.invtClassification;
        this.isGcoCompliant = props.isGcoCompliant;
        this.offerSupport = props.offerSupport;
        this.useComponentYield = props.useComponentYield;
        this.isInactive = props.isInactive;
        this.subsidiaryList = props.subsidiaryList;
        this.availableToPartners = props.availableToPartners;
        this.includeChildren = props.includeChildren;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.description = props.description;
        this.cogsAccount = props.cogsAccount;
        this.vendor = props.vendor;
        this.incomeAccount = props.incomeAccount;
        this.intercoIncomeAccount = props.intercoIncomeAccount;
        this.assetAccount = props.assetAccount;
        this.matchBillToReceipt = props.matchBillToReceipt;
        this.billQtyVarianceAcct = props.billQtyVarianceAcct;
        this.billPriceVarianceAcct = props.billPriceVarianceAcct;
        this.billExchRateVarianceAcct = props.billExchRateVarianceAcct;
        this.gainLossAccount = props.gainLossAccount;
        this.salesTaxCode = props.salesTaxCode;
        this.costCategory = props.costCategory;
        this.purchaseTaxCode = props.purchaseTaxCode;
        this.prodQtyVarianceAcct = props.prodQtyVarianceAcct;
        this.prodPriceVarianceAcct = props.prodPriceVarianceAcct;
        this.purchasePriceVarianceAcct = props.purchasePriceVarianceAcct;
        this.wipVarianceAcct = props.wipVarianceAcct;
        this.taxSchedule = props.taxSchedule;
        this.scrapAcct = props.scrapAcct;
        this.shippingCost = props.shippingCost;
        this.wipAcct = props.wipAcct;
        this.shippingCostUnits = props.shippingCostUnits;
        this.handlingCost = props.handlingCost;
        this.weight = props.weight;
        this.handlingCostUnits = props.handlingCostUnits;
        this.weightUnit = props.weightUnit;
        this.weightUnits = props.weightUnits;
        this.costingMethod = props.costingMethod;
        this.isTaxable = props.isTaxable;
        this.costingMethodDisplay = props.costingMethodDisplay;
        this.rate = props.rate;
        this.unitsType = props.unitsType;
        this.stockUnit = props.stockUnit;
        this.purchaseUnit = props.purchaseUnit;
        this.saleUnit = props.saleUnit;
        this.trackLandedCost = props.trackLandedCost;
        this.matrixItemNameTemplate = props.matrixItemNameTemplate;
        this.billingSchedule = props.billingSchedule;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.revRecSchedule = props.revRecSchedule;
        this.stockDescription = props.stockDescription;
        this.producer = props.producer;
        this.manufacturer = props.manufacturer;
        this.mpn = props.mpn;
        this.multManufactureAddr = props.multManufactureAddr;
        this.manufactureraddr1 = props.manufactureraddr1;
        this.manufacturerCity = props.manufacturerCity;
        this.manufacturerState = props.manufacturerState;
        this.manufacturerZip = props.manufacturerZip;
        this.countryOfManufacture = props.countryOfManufacture;
        this.effectiveBomControl = props.effectiveBomControl;
        this.minimumQuantityUnits = props.minimumQuantityUnits;
        this.defaultRevision = props.defaultRevision;
        this.defaultItemShipMethod = props.defaultItemShipMethod;
        this.itemCarrier = props.itemCarrier;
        this.roundUpAsComponent = props.roundUpAsComponent;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.isDropShipItem = props.isDropShipItem;
        this.isPhantom = props.isPhantom;
        this.itemShipMethodList = props.itemShipMethodList;
        this.manufacturerTaxId = props.manufacturerTaxId;
        this.scheduleBNumber = props.scheduleBNumber;
        this.scheduleBQuantity = props.scheduleBQuantity;
        this.scheduleBCode = props.scheduleBCode;
        this.manufacturerTariff = props.manufacturerTariff;
        this.preferenceCriterion = props.preferenceCriterion;
        this.issueProduct = props.issueProduct;
        this.minimumQuantity = props.minimumQuantity;
        this.enforceMinQtyInternally = props.enforceMinQtyInternally;
        this.maximumQuantity = props.maximumQuantity;
        this.softDescriptor = props.softDescriptor;
        this.isSpecialWorkOrderItem = props.isSpecialWorkOrderItem;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.buildEntireAssembly = props.buildEntireAssembly;
        this.quantityOnHand = props.quantityOnHand;
        this.quantityOnHandUnits = props.quantityOnHandUnits;
        this.useMarginalRates = props.useMarginalRates;
        this.reorderMultiple = props.reorderMultiple;
        this.cost = props.cost;
        this.costEstimateType = props.costEstimateType;
        this.isHazmatItem = props.isHazmatItem;
        this.hazmatId = props.hazmatId;
        this.hazmatShippingName = props.hazmatShippingName;
        this.hazmatHazardClass = props.hazmatHazardClass;
        this.hazmatPackingGroup = props.hazmatPackingGroup;
        this.hazmatItemUnits = props.hazmatItemUnits;
        this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
        this.costEstimate = props.costEstimate;
        this.transferPrice = props.transferPrice;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.pricingGroup = props.pricingGroup;
        this.intercoCogsAccount = props.intercoCogsAccount;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoeDelivered = props.vsoeDelivered;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.unbuildVarianceAccount = props.unbuildVarianceAccount;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.directRevenuePosting = props.directRevenuePosting;
        this.dropshipExpenseAccount = props.dropshipExpenseAccount;
        this.preferredLocation = props.preferredLocation;
        this.isStorePickupAllowed = props.isStorePickupAllowed;
        this.totalValue = props.totalValue;
        this.useBins = props.useBins;
        this.averageCost = props.averageCost;
        this.lastPurchasePrice = props.lastPurchasePrice;
        this.purchaseDescription = props.purchaseDescription;
        this.leadTime = props.leadTime;
        this.autoLeadTime = props.autoLeadTime;
        this.buildTime = props.buildTime;
        this.safetyStockLevel = props.safetyStockLevel;
        this.safetyStockLevelUnits = props.safetyStockLevelUnits;
        this.safetyStockLevelDays = props.safetyStockLevelDays;
        this.seasonalDemand = props.seasonalDemand;
        this.serialNumbers = props.serialNumbers;
        this.reorderPoint = props.reorderPoint;
        this.reorderPointUnits = props.reorderPointUnits;
        this.preferredStockLevel = props.preferredStockLevel;
        this.preferredStockLevelUnits = props.preferredStockLevelUnits;
        this.demandModifier = props.demandModifier;
        this.autoReorderPoint = props.autoReorderPoint;
        this.autoPreferredStockLevel = props.autoPreferredStockLevel;
        this.preferredStockLevelDays = props.preferredStockLevelDays;
        this.defaultReturnCost = props.defaultReturnCost;
        this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
        this.alternateDemandSourceItem = props.alternateDemandSourceItem;
        this.fixedLotSize = props.fixedLotSize;
        this.supplyType = props.supplyType;
        this.demandTimeFence = props.demandTimeFence;
        this.supplyTimeFence = props.supplyTimeFence;
        this.rescheduleInDays = props.rescheduleInDays;
        this.rescheduleOutDays = props.rescheduleOutDays;
        this.supplyLotSizingMethod = props.supplyLotSizingMethod;
        this.demandSource = props.demandSource;
        this.shipIndividually = props.shipIndividually;
        this.quantityCommitted = props.quantityCommitted;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityBackOrdered = props.quantityBackOrdered;
        this.quantityOnOrder = props.quantityOnOrder;
        this.shipPackage = props.shipPackage;
        this.storeDisplayName = props.storeDisplayName;
        this.storeDisplayThumbnail = props.storeDisplayThumbnail;
        this.storeDisplayImage = props.storeDisplayImage;
        this.storeDescription = props.storeDescription;
        this.storeDetailedDescription = props.storeDetailedDescription;
        this.storeItemTemplate = props.storeItemTemplate;
        this.pageTitle = props.pageTitle;
        this.metaTagHtml = props.metaTagHtml;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.sitemapPriority = props.sitemapPriority;
        this.urlComponent = props.urlComponent;
        this.searchKeywords = props.searchKeywords;
        this.isDonationItem = props.isDonationItem;
        this.showDefaultDonationAmount = props.showDefaultDonationAmount;
        this.maxDonationAmount = props.maxDonationAmount;
        this.dontShowPrice = props.dontShowPrice;
        this.noPriceMessage = props.noPriceMessage;
        this.shoppingDotComCategory = props.shoppingDotComCategory;
        this.shopzillaCategoryId = props.shopzillaCategoryId;
        this.outOfStockMessage = props.outOfStockMessage;
        this.nexTagCategory = props.nexTagCategory;
        this.outOfStockBehavior = props.outOfStockBehavior;
        this.productFeedList = props.productFeedList;
        this.relatedItemsDescription = props.relatedItemsDescription;
        this.onSpecial = props.onSpecial;
        this.specialsDescription = props.specialsDescription;
        this.featuredDescription = props.featuredDescription;
        this.itemOptionsList = props.itemOptionsList;
        this.itemNumberOptionsList = props.itemNumberOptionsList;
        this.itemVendorList = props.itemVendorList;
        this.pricingMatrix = props.pricingMatrix;
        this.billOfMaterialsList = props.billOfMaterialsList;
        this.memberList = props.memberList;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.locationsList = props.locationsList;
        this.siteCategoryList = props.siteCategoryList;
        this.binNumberList = props.binNumberList;
        this.numbersList = props.numbersList;
        this.translationsList = props.translationsList;
        this.presentationItemList = props.presentationItemList;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.futureHorizon = props.futureHorizon;
        this.consumptionUnit = props.consumptionUnit;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.SerializedAssemblyItem = SerializedAssemblyItem;
class PriceList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.price = props.price;
    }
}
exports.PriceList = PriceList;
class GiftCertificateSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.GiftCertificateSearch = GiftCertificateSearch;
class BillingScheduleMilestone extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.milestoneId = props.milestoneId;
        this.milestoneAmount = props.milestoneAmount;
        this.milestoneTerms = props.milestoneTerms;
        this.projectTask = props.projectTask;
        this.milestoneDate = props.milestoneDate;
        this.milestoneCompleted = props.milestoneCompleted;
        this.milestoneActualCompletionDate = props.milestoneActualCompletionDate;
        this.comments = props.comments;
    }
}
exports.BillingScheduleMilestone = BillingScheduleMilestone;
class LotNumberedInventoryItemNumbersList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.numbers = props.numbers;
        this.replaceAll = props.replaceAll;
    }
}
exports.LotNumberedInventoryItemNumbersList = LotNumberedInventoryItemNumbersList;
class BomRevisionSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.billOfMaterialsJoin = props.billOfMaterialsJoin;
        this.componentJoin = props.componentJoin;
        this.transactionJoin = props.transactionJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.BomRevisionSearchRow = BomRevisionSearchRow;
class NonInventoryResaleItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.NonInventoryResaleItemHierarchyVersions = NonInventoryResaleItemHierarchyVersions;
class CustomerMessageSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.CustomerMessageSearch = CustomerMessageSearch;
class LotNumberedAssemblyItemBillOfMaterials extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.billOfMaterials = props.billOfMaterials;
        this.currentRevision = props.currentRevision;
        this.masterDefault = props.masterDefault;
        this.defaultForLocationList = props.defaultForLocationList;
        this.inactive = props.inactive;
        this.memo = props.memo;
    }
}
exports.LotNumberedAssemblyItemBillOfMaterials = LotNumberedAssemblyItemBillOfMaterials;
class AccountingPeriodSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.userNotesJoin = props.userNotesJoin;
    }
}
exports.AccountingPeriodSearch = AccountingPeriodSearch;
class TaxGroupTaxItemList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.taxItem = props.taxItem;
        this.replaceAll = props.replaceAll;
    }
}
exports.TaxGroupTaxItemList = TaxGroupTaxItemList;
class SerializedInventoryItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.SerializedInventoryItemHierarchyVersions = SerializedInventoryItemHierarchyVersions;
class ItemAccountingBookDetailList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.itemAccountingBookDetail = props.itemAccountingBookDetail;
        this.replaceAll = props.replaceAll;
    }
}
exports.ItemAccountingBookDetailList = ItemAccountingBookDetailList;
class TaxTypeNexusesTax extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.nexus = props.nexus;
        this.description = props.description;
        this.saleTaxAcct = props.saleTaxAcct;
        this.purchTaxAcct = props.purchTaxAcct;
    }
}
exports.TaxTypeNexusesTax = TaxTypeNexusesTax;
class PricingGroup extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.PricingGroup = PricingGroup;
class Department extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.includeChildren = props.includeChildren;
        this.parent = props.parent;
        this.isInactive = props.isInactive;
        this.classTranslationList = props.classTranslationList;
        this.subsidiaryList = props.subsidiaryList;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.Department = Department;
class SerializedInventoryItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.matrixType = props.matrixType;
        this.includeChildren = props.includeChildren;
        this.vendorName = props.vendorName;
        this.parent = props.parent;
        this.isOnline = props.isOnline;
        this.isHazmatItem = props.isHazmatItem;
        this.hazmatId = props.hazmatId;
        this.hazmatShippingName = props.hazmatShippingName;
        this.hazmatHazardClass = props.hazmatHazardClass;
        this.hazmatPackingGroup = props.hazmatPackingGroup;
        this.hazmatItemUnits = props.hazmatItemUnits;
        this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
        this.isGcoCompliant = props.isGcoCompliant;
        this.offerSupport = props.offerSupport;
        this.isInactive = props.isInactive;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.costingMethod = props.costingMethod;
        this.subsidiaryList = props.subsidiaryList;
        this.purchaseDescription = props.purchaseDescription;
        this.copyDescription = props.copyDescription;
        this.issueProduct = props.issueProduct;
        this.currency = props.currency;
        this.cogsAccount = props.cogsAccount;
        this.intercoCogsAccount = props.intercoCogsAccount;
        this.vendor = props.vendor;
        this.salesDescription = props.salesDescription;
        this.lastInvtCountDate = props.lastInvtCountDate;
        this.nextInvtCountDate = props.nextInvtCountDate;
        this.invtCountInterval = props.invtCountInterval;
        this.invtClassification = props.invtClassification;
        this.incomeAccount = props.incomeAccount;
        this.intercoIncomeAccount = props.intercoIncomeAccount;
        this.isTaxable = props.isTaxable;
        this.taxSchedule = props.taxSchedule;
        this.dropshipExpenseAccount = props.dropshipExpenseAccount;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.directRevenuePosting = props.directRevenuePosting;
        this.assetAccount = props.assetAccount;
        this.matchBillToReceipt = props.matchBillToReceipt;
        this.billQtyVarianceAcct = props.billQtyVarianceAcct;
        this.billPriceVarianceAcct = props.billPriceVarianceAcct;
        this.billExchRateVarianceAcct = props.billExchRateVarianceAcct;
        this.gainLossAccount = props.gainLossAccount;
        this.shippingCost = props.shippingCost;
        this.handlingCost = props.handlingCost;
        this.weight = props.weight;
        this.costingMethodDisplay = props.costingMethodDisplay;
        this.shippingCostUnits = props.shippingCostUnits;
        this.handlingCostUnits = props.handlingCostUnits;
        this.unitsType = props.unitsType;
        this.stockUnit = props.stockUnit;
        this.purchaseUnit = props.purchaseUnit;
        this.saleUnit = props.saleUnit;
        this.minimumQuantityUnits = props.minimumQuantityUnits;
        this.safetyStockLevelUnits = props.safetyStockLevelUnits;
        this.billingSchedule = props.billingSchedule;
        this.trackLandedCost = props.trackLandedCost;
        this.matrixItemNameTemplate = props.matrixItemNameTemplate;
        this.isDropShipItem = props.isDropShipItem;
        this.isSpecialOrderItem = props.isSpecialOrderItem;
        this.stockDescription = props.stockDescription;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.producer = props.producer;
        this.manufacturer = props.manufacturer;
        this.revRecSchedule = props.revRecSchedule;
        this.mpn = props.mpn;
        this.multManufactureAddr = props.multManufactureAddr;
        this.manufacturerAddr1 = props.manufacturerAddr1;
        this.manufacturerCity = props.manufacturerCity;
        this.manufacturerState = props.manufacturerState;
        this.manufacturerZip = props.manufacturerZip;
        this.countryOfManufacture = props.countryOfManufacture;
        this.defaultItemShipMethod = props.defaultItemShipMethod;
        this.itemCarrier = props.itemCarrier;
        this.roundUpAsComponent = props.roundUpAsComponent;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.itemShipMethodList = props.itemShipMethodList;
        this.manufacturerTaxId = props.manufacturerTaxId;
        this.scheduleBNumber = props.scheduleBNumber;
        this.scheduleBQuantity = props.scheduleBQuantity;
        this.scheduleBCode = props.scheduleBCode;
        this.manufacturerTariff = props.manufacturerTariff;
        this.preferenceCriterion = props.preferenceCriterion;
        this.minimumQuantity = props.minimumQuantity;
        this.enforceMinQtyInternally = props.enforceMinQtyInternally;
        this.maximumQuantity = props.maximumQuantity;
        this.shipPackage = props.shipPackage;
        this.shipIndividually = props.shipIndividually;
        this.softDescriptor = props.softDescriptor;
        this.costCategory = props.costCategory;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.useMarginalRates = props.useMarginalRates;
        this.costEstimateType = props.costEstimateType;
        this.costEstimate = props.costEstimate;
        this.transferPrice = props.transferPrice;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.pricingGroup = props.pricingGroup;
        this.preferredLocation = props.preferredLocation;
        this.isStorePickupAllowed = props.isStorePickupAllowed;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoeDelivered = props.vsoeDelivered;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.cost = props.cost;
        this.costUnits = props.costUnits;
        this.quantityReorderUnits = props.quantityReorderUnits;
        this.reorderMultiple = props.reorderMultiple;
        this.totalValue = props.totalValue;
        this.useBins = props.useBins;
        this.leadTime = props.leadTime;
        this.autoLeadTime = props.autoLeadTime;
        this.autoReorderPoint = props.autoReorderPoint;
        this.autoPreferredStockLevel = props.autoPreferredStockLevel;
        this.preferredStockLevelDays = props.preferredStockLevelDays;
        this.averageCost = props.averageCost;
        this.safetyStockLevel = props.safetyStockLevel;
        this.lastPurchasePrice = props.lastPurchasePrice;
        this.safetyStockLevelDays = props.safetyStockLevelDays;
        this.backwardConsumptionDays = props.backwardConsumptionDays;
        this.seasonalDemand = props.seasonalDemand;
        this.demandModifier = props.demandModifier;
        this.storeDisplayName = props.storeDisplayName;
        this.storeDisplayThumbnail = props.storeDisplayThumbnail;
        this.weightUnit = props.weightUnit;
        this.weightUnits = props.weightUnits;
        this.storeDisplayImage = props.storeDisplayImage;
        this.storeDescription = props.storeDescription;
        this.storeDetailedDescription = props.storeDetailedDescription;
        this.storeItemTemplate = props.storeItemTemplate;
        this.pageTitle = props.pageTitle;
        this.metaTagHtml = props.metaTagHtml;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.sitemapPriority = props.sitemapPriority;
        this.searchKeywords = props.searchKeywords;
        this.isDonationItem = props.isDonationItem;
        this.showDefaultDonationAmount = props.showDefaultDonationAmount;
        this.maxDonationAmount = props.maxDonationAmount;
        this.shoppingDotComCategory = props.shoppingDotComCategory;
        this.shopzillaCategoryId = props.shopzillaCategoryId;
        this.nexTagCategory = props.nexTagCategory;
        this.quantityOnHand = props.quantityOnHand;
        this.quantityOnHandUnits = props.quantityOnHandUnits;
        this.onHandValueMli = props.onHandValueMli;
        this.serialNumbers = props.serialNumbers;
        this.reorderPoint = props.reorderPoint;
        this.preferredStockLevel = props.preferredStockLevel;
        this.reorderPointUnits = props.reorderPointUnits;
        this.defaultReturnCost = props.defaultReturnCost;
        this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
        this.alternateDemandSourceItem = props.alternateDemandSourceItem;
        this.fixedLotSize = props.fixedLotSize;
        this.periodicLotSizeType = props.periodicLotSizeType;
        this.supplyType = props.supplyType;
        this.demandTimeFence = props.demandTimeFence;
        this.supplyTimeFence = props.supplyTimeFence;
        this.rescheduleInDays = props.rescheduleInDays;
        this.rescheduleOutDays = props.rescheduleOutDays;
        this.periodicLotSizeDays = props.periodicLotSizeDays;
        this.supplyLotSizingMethod = props.supplyLotSizingMethod;
        this.forwardConsumptionDays = props.forwardConsumptionDays;
        this.demandSource = props.demandSource;
        this.quantityOnOrder = props.quantityOnOrder;
        this.preferredStockLevelUnits = props.preferredStockLevelUnits;
        this.quantityCommitted = props.quantityCommitted;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityBackOrdered = props.quantityBackOrdered;
        this.purchaseTaxCode = props.purchaseTaxCode;
        this.purchasePriceVarianceAcct = props.purchasePriceVarianceAcct;
        this.rate = props.rate;
        this.salesTaxCode = props.salesTaxCode;
        this.onSpecial = props.onSpecial;
        this.dontShowPrice = props.dontShowPrice;
        this.noPriceMessage = props.noPriceMessage;
        this.outOfStockMessage = props.outOfStockMessage;
        this.specialsDescription = props.specialsDescription;
        this.outOfStockBehavior = props.outOfStockBehavior;
        this.relatedItemsDescription = props.relatedItemsDescription;
        this.featuredDescription = props.featuredDescription;
        this.productFeedList = props.productFeedList;
        this.urlComponent = props.urlComponent;
        this.itemOptionsList = props.itemOptionsList;
        this.matrixOptionList = props.matrixOptionList;
        this.itemVendorList = props.itemVendorList;
        this.pricingMatrix = props.pricingMatrix;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.itemNumberOptionsList = props.itemNumberOptionsList;
        this.numbersList = props.numbersList;
        this.binNumberList = props.binNumberList;
        this.siteCategoryList = props.siteCategoryList;
        this.locationsList = props.locationsList;
        this.translationsList = props.translationsList;
        this.presentationItemList = props.presentationItemList;
        this.futureHorizon = props.futureHorizon;
        this.consumptionUnit = props.consumptionUnit;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.SerializedInventoryItem = SerializedInventoryItem;
class BillingScheduleMilestoneList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.billingScheduleMilestone = props.billingScheduleMilestone;
        this.replaceAll = props.replaceAll;
    }
}
exports.BillingScheduleMilestoneList = BillingScheduleMilestoneList;
class ContactRoleSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.ContactRoleSearchRow = ContactRoleSearchRow;
class ServiceResaleItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.ServiceResaleItemHierarchyVersions = ServiceResaleItemHierarchyVersions;
class PricingGroupSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.PricingGroupSearchAdvanced = PricingGroupSearchAdvanced;
class RateList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.rate = props.rate;
    }
}
exports.RateList = RateList;
class MerchandiseHierarchyNodeHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.merchandiseHierarchyNodeHierarchyVersions =
            props.merchandiseHierarchyNodeHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.MerchandiseHierarchyNodeHierarchyVersionsList = MerchandiseHierarchyNodeHierarchyVersionsList;
class TaxGroupSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.TaxGroupSearchAdvanced = TaxGroupSearchAdvanced;
class TaxTypeNexusesTaxList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.nexusesTax = props.nexusesTax;
        this.replaceAll = props.replaceAll;
    }
}
exports.TaxTypeNexusesTaxList = TaxTypeNexusesTaxList;
class SubsidiaryAccountingBookDetail extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBook = props.accountingBook;
        this.currency = props.currency;
        this.bookStatus = props.bookStatus;
    }
}
exports.SubsidiaryAccountingBookDetail = SubsidiaryAccountingBookDetail;
class BinSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.BinSearchRow = BinSearchRow;
class MerchandiseHierarchyNodeSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.MerchandiseHierarchyNodeSearchAdvanced = MerchandiseHierarchyNodeSearchAdvanced;
class BomRevisionSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.billOfMaterialsJoin = props.billOfMaterialsJoin;
        this.componentJoin = props.componentJoin;
        this.transactionJoin = props.transactionJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.BomRevisionSearch = BomRevisionSearch;
class TaxTypeSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.TaxTypeSearchRow = TaxTypeSearchRow;
class NexusSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.NexusSearch = NexusSearch;
class ConsolidatedExchangeRateSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.fromSubsidiaryJoin = props.fromSubsidiaryJoin;
        this.periodJoin = props.periodJoin;
        this.toSubsidiaryJoin = props.toSubsidiaryJoin;
        this.userJoin = props.userJoin;
    }
}
exports.ConsolidatedExchangeRateSearch = ConsolidatedExchangeRateSearch;
class SerializedInventoryItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.serializedInventoryItemHierarchyVersions =
            props.serializedInventoryItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.SerializedInventoryItemHierarchyVersionsList = SerializedInventoryItemHierarchyVersionsList;
class KitItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.kitItemHierarchyVersions = props.kitItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.KitItemHierarchyVersionsList = KitItemHierarchyVersionsList;
class ContactRoleSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.ContactRoleSearch = ContactRoleSearch;
class ItemMemberList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.itemMember = props.itemMember;
        this.replaceAll = props.replaceAll;
    }
}
exports.ItemMemberList = ItemMemberList;
class PaymentMethodSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.PaymentMethodSearchAdvanced = PaymentMethodSearchAdvanced;
class ContactCategory extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this._private = props._private;
        this.sync = props.sync;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.ContactCategory = ContactCategory;
class TermSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.TermSearchRow = TermSearchRow;
class AccountingPeriodFiscalCalendars extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.fiscalCalendar = props.fiscalCalendar;
        this.parent = props.parent;
    }
}
exports.AccountingPeriodFiscalCalendars = AccountingPeriodFiscalCalendars;
class BillingScheduleSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.BillingScheduleSearchAdvanced = BillingScheduleSearchAdvanced;
class ExpenseCategory extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customForm = props.customForm;
        this.name = props.name;
        this.description = props.description;
        this.expenseAcct = props.expenseAcct;
        this.isInactive = props.isInactive;
        this.rateRequired = props.rateRequired;
        this.subsidiaryList = props.subsidiaryList;
        this.defaultRate = props.defaultRate;
        this.ratesList = props.ratesList;
        this.translationsList = props.translationsList;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.ExpenseCategory = ExpenseCategory;
class ExpenseCategoryRates extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.subsidiary = props.subsidiary;
        this.currency = props.currency;
        this.defaultRate = props.defaultRate;
    }
}
exports.ExpenseCategoryRates = ExpenseCategoryRates;
class GiftCertificateItemAuthCodesList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.authCodes = props.authCodes;
        this.replaceAll = props.replaceAll;
    }
}
exports.GiftCertificateItemAuthCodesList = GiftCertificateItemAuthCodesList;
class SiteCategory extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.website = props.website;
        this.category = props.category;
        this.isDefault = props.isDefault;
        this.categoryDescription = props.categoryDescription;
    }
}
exports.SiteCategory = SiteCategory;
class ContactCategorySearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.ContactCategorySearch = ContactCategorySearch;
class TermSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.TermSearchAdvanced = TermSearchAdvanced;
class NonInventorySaleItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.salesDescription = props.salesDescription;
        this.includeChildren = props.includeChildren;
        this.incomeAccount = props.incomeAccount;
        this.isTaxable = props.isTaxable;
        this.matrixType = props.matrixType;
        this.taxSchedule = props.taxSchedule;
        this.shippingCost = props.shippingCost;
        this.shippingCostUnits = props.shippingCostUnits;
        this.handlingCost = props.handlingCost;
        this.handlingCostUnits = props.handlingCostUnits;
        this.costEstimateType = props.costEstimateType;
        this.costEstimate = props.costEstimate;
        this.weight = props.weight;
        this.weightUnit = props.weightUnit;
        this.weightUnits = props.weightUnits;
        this.costEstimateUnits = props.costEstimateUnits;
        this.unitsType = props.unitsType;
        this.saleUnit = props.saleUnit;
        this.issueProduct = props.issueProduct;
        this.billingSchedule = props.billingSchedule;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.revRecSchedule = props.revRecSchedule;
        this.stockDescription = props.stockDescription;
        this.isHazmatItem = props.isHazmatItem;
        this.hazmatId = props.hazmatId;
        this.hazmatShippingName = props.hazmatShippingName;
        this.hazmatHazardClass = props.hazmatHazardClass;
        this.hazmatPackingGroup = props.hazmatPackingGroup;
        this.hazmatItemUnits = props.hazmatItemUnits;
        this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
        this.producer = props.producer;
        this.manufacturer = props.manufacturer;
        this.mpn = props.mpn;
        this.multManufactureAddr = props.multManufactureAddr;
        this.manufacturerAddr1 = props.manufacturerAddr1;
        this.manufacturerCity = props.manufacturerCity;
        this.manufacturerState = props.manufacturerState;
        this.manufacturerZip = props.manufacturerZip;
        this.countryOfManufacture = props.countryOfManufacture;
        this.manufacturerTaxId = props.manufacturerTaxId;
        this.scheduleBNumber = props.scheduleBNumber;
        this.scheduleBQuantity = props.scheduleBQuantity;
        this.scheduleBCode = props.scheduleBCode;
        this.manufacturerTariff = props.manufacturerTariff;
        this.preferenceCriterion = props.preferenceCriterion;
        this.minimumQuantity = props.minimumQuantity;
        this.enforceMinQtyInternally = props.enforceMinQtyInternally;
        this.maximumQuantity = props.maximumQuantity;
        this.softDescriptor = props.softDescriptor;
        this.shipPackage = props.shipPackage;
        this.shipIndividually = props.shipIndividually;
        this.isFulfillable = props.isFulfillable;
        this.costCategory = props.costCategory;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.useMarginalRates = props.useMarginalRates;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.pricingGroup = props.pricingGroup;
        this.minimumQuantityUnits = props.minimumQuantityUnits;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoeDelivered = props.vsoeDelivered;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.deferRevRec = props.deferRevRec;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.directRevenuePosting = props.directRevenuePosting;
        this.contingentRevenueHandling = props.contingentRevenueHandling;
        this.revReclassFXAccount = props.revReclassFXAccount;
        this.storeDisplayName = props.storeDisplayName;
        this.storeDisplayThumbnail = props.storeDisplayThumbnail;
        this.storeDisplayImage = props.storeDisplayImage;
        this.storeDescription = props.storeDescription;
        this.storeDetailedDescription = props.storeDetailedDescription;
        this.storeItemTemplate = props.storeItemTemplate;
        this.pageTitle = props.pageTitle;
        this.metaTagHtml = props.metaTagHtml;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.sitemapPriority = props.sitemapPriority;
        this.searchKeywords = props.searchKeywords;
        this.isDonationItem = props.isDonationItem;
        this.showDefaultDonationAmount = props.showDefaultDonationAmount;
        this.maxDonationAmount = props.maxDonationAmount;
        this.dontShowPrice = props.dontShowPrice;
        this.noPriceMessage = props.noPriceMessage;
        this.outOfStockMessage = props.outOfStockMessage;
        this.onSpecial = props.onSpecial;
        this.outOfStockBehavior = props.outOfStockBehavior;
        this.relatedItemsDescription = props.relatedItemsDescription;
        this.specialsDescription = props.specialsDescription;
        this.featuredDescription = props.featuredDescription;
        this.shoppingDotComCategory = props.shoppingDotComCategory;
        this.shopzillaCategoryId = props.shopzillaCategoryId;
        this.nexTagCategory = props.nexTagCategory;
        this.productFeedList = props.productFeedList;
        this.urlComponent = props.urlComponent;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.parent = props.parent;
        this.isOnline = props.isOnline;
        this.isGcoCompliant = props.isGcoCompliant;
        this.offerSupport = props.offerSupport;
        this.isInactive = props.isInactive;
        this.matrixItemNameTemplate = props.matrixItemNameTemplate;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.defaultItemShipMethod = props.defaultItemShipMethod;
        this.itemCarrier = props.itemCarrier;
        this.itemShipMethodList = props.itemShipMethodList;
        this.subsidiaryList = props.subsidiaryList;
        this.itemOptionsList = props.itemOptionsList;
        this.matrixOptionList = props.matrixOptionList;
        this.pricingMatrix = props.pricingMatrix;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.purchaseTaxCode = props.purchaseTaxCode;
        this.rate = props.rate;
        this.salesTaxCode = props.salesTaxCode;
        this.siteCategoryList = props.siteCategoryList;
        this.translationsList = props.translationsList;
        this.presentationItemList = props.presentationItemList;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.consumptionUnit = props.consumptionUnit;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.NonInventorySaleItem = NonInventorySaleItem;
class SerializedAssemblyItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.SerializedAssemblyItemHierarchyVersions = SerializedAssemblyItemHierarchyVersions;
class ItemAccountMapping extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customForm = props.customForm;
        this.effectiveDate = props.effectiveDate;
        this.endDate = props.endDate;
        this.accountingBook = props.accountingBook;
        this.subsidiary = props.subsidiary;
        this.itemAccount = props.itemAccount;
        this.sourceAccount = props.sourceAccount;
        this.clazz = props.clazz;
        this.department = props.department;
        this.location = props.location;
        this.destinationAccount = props.destinationAccount;
        this.customDimension = props.customDimension;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.ItemAccountMapping = ItemAccountMapping;
class AccountSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.AccountSearchRow = AccountSearchRow;
class WinLossReasonSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.WinLossReasonSearch = WinLossReasonSearch;
class PartnerCategorySearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.PartnerCategorySearchRow = PartnerCategorySearchRow;
class ServiceSaleItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.salesDescription = props.salesDescription;
        this.includeChildren = props.includeChildren;
        this.incomeAccount = props.incomeAccount;
        this.isTaxable = props.isTaxable;
        this.matrixType = props.matrixType;
        this.taxSchedule = props.taxSchedule;
        this.costEstimateType = props.costEstimateType;
        this.costEstimate = props.costEstimate;
        this.unitsType = props.unitsType;
        this.saleUnit = props.saleUnit;
        this.issueProduct = props.issueProduct;
        this.costEstimateUnits = props.costEstimateUnits;
        this.billingSchedule = props.billingSchedule;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.revRecSchedule = props.revRecSchedule;
        this.minimumQuantity = props.minimumQuantity;
        this.enforceMinQtyInternally = props.enforceMinQtyInternally;
        this.maximumQuantity = props.maximumQuantity;
        this.softDescriptor = props.softDescriptor;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.useMarginalRates = props.useMarginalRates;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.isFulfillable = props.isFulfillable;
        this.costCategory = props.costCategory;
        this.pricingGroup = props.pricingGroup;
        this.minimumQuantityUnits = props.minimumQuantityUnits;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoeDelivered = props.vsoeDelivered;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.deferRevRec = props.deferRevRec;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.directRevenuePosting = props.directRevenuePosting;
        this.contingentRevenueHandling = props.contingentRevenueHandling;
        this.revReclassFXAccount = props.revReclassFXAccount;
        this.createJob = props.createJob;
        this.matrixItemNameTemplate = props.matrixItemNameTemplate;
        this.storeDisplayName = props.storeDisplayName;
        this.storeDisplayThumbnail = props.storeDisplayThumbnail;
        this.storeDisplayImage = props.storeDisplayImage;
        this.storeDescription = props.storeDescription;
        this.storeDetailedDescription = props.storeDetailedDescription;
        this.storeItemTemplate = props.storeItemTemplate;
        this.pageTitle = props.pageTitle;
        this.urlComponent = props.urlComponent;
        this.metaTagHtml = props.metaTagHtml;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.sitemapPriority = props.sitemapPriority;
        this.searchKeywords = props.searchKeywords;
        this.isDonationItem = props.isDonationItem;
        this.showDefaultDonationAmount = props.showDefaultDonationAmount;
        this.maxDonationAmount = props.maxDonationAmount;
        this.dontShowPrice = props.dontShowPrice;
        this.noPriceMessage = props.noPriceMessage;
        this.outOfStockMessage = props.outOfStockMessage;
        this.onSpecial = props.onSpecial;
        this.outOfStockBehavior = props.outOfStockBehavior;
        this.relatedItemsDescription = props.relatedItemsDescription;
        this.specialsDescription = props.specialsDescription;
        this.itemTaskTemplatesList = props.itemTaskTemplatesList;
        this.featuredDescription = props.featuredDescription;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.parent = props.parent;
        this.isOnline = props.isOnline;
        this.isGcoCompliant = props.isGcoCompliant;
        this.offerSupport = props.offerSupport;
        this.isInactive = props.isInactive;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.subsidiaryList = props.subsidiaryList;
        this.billingRatesMatrix = props.billingRatesMatrix;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.itemOptionsList = props.itemOptionsList;
        this.matrixOptionList = props.matrixOptionList;
        this.pricingMatrix = props.pricingMatrix;
        this.purchaseTaxCode = props.purchaseTaxCode;
        this.rate = props.rate;
        this.salesTaxCode = props.salesTaxCode;
        this.siteCategoryList = props.siteCategoryList;
        this.translationsList = props.translationsList;
        this.presentationItemList = props.presentationItemList;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.consumptionUnit = props.consumptionUnit;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.ServiceSaleItem = ServiceSaleItem;
class ContactCategorySearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.ContactCategorySearchRow = ContactCategorySearchRow;
class LocationBusinessHours extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.startTime = props.startTime;
        this.endTime = props.endTime;
        this.isSunday = props.isSunday;
        this.isMonday = props.isMonday;
        this.isTuesday = props.isTuesday;
        this.isWednesday = props.isWednesday;
        this.isThursday = props.isThursday;
        this.isFriday = props.isFriday;
        this.isSaturday = props.isSaturday;
        this.sameDayPickupCutOffTime = props.sameDayPickupCutOffTime;
    }
}
exports.LocationBusinessHours = LocationBusinessHours;
class Translation extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.locale = props.locale;
        this.language = props.language;
        this.displayName = props.displayName;
        this.description = props.description;
        this.salesDescription = props.salesDescription;
        this.storeDisplayName = props.storeDisplayName;
        this.storeDescription = props.storeDescription;
        this.storeDetailedDescription = props.storeDetailedDescription;
        this.featuredDescription = props.featuredDescription;
        this.specialsDescription = props.specialsDescription;
        this.pageTitle = props.pageTitle;
        this.noPriceMessage = props.noPriceMessage;
        this.outOfStockMessage = props.outOfStockMessage;
    }
}
exports.Translation = Translation;
class SerializedAssemblyItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.serializedAssemblyItemHierarchyVersions =
            props.serializedAssemblyItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.SerializedAssemblyItemHierarchyVersionsList = SerializedAssemblyItemHierarchyVersionsList;
class ItemRevisionSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.itemJoin = props.itemJoin;
        this.userJoin = props.userJoin;
    }
}
exports.ItemRevisionSearch = ItemRevisionSearch;
class ServicePurchaseItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.servicePurchaseItemHierarchyVersions =
            props.servicePurchaseItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.ServicePurchaseItemHierarchyVersionsList = ServicePurchaseItemHierarchyVersionsList;
class FairValuePrice extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customForm = props.customForm;
        this.item = props.item;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.fairValue = props.fairValue;
        this.fairValueFormula = props.fairValueFormula;
        this.currency = props.currency;
        this.unitsType = props.unitsType;
        this.units = props.units;
        this.fairValueRangePolicy = props.fairValueRangePolicy;
        this.lowValue = props.lowValue;
        this.lowValuePercent = props.lowValuePercent;
        this.highValue = props.highValue;
        this.highValuePercent = props.highValuePercent;
        this.isVsoePrice = props.isVsoePrice;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.customFieldList = props.customFieldList;
        this.dimensionList = props.dimensionList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.FairValuePrice = FairValuePrice;
class InventoryItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.InventoryItemHierarchyVersions = InventoryItemHierarchyVersions;
class ServicePurchaseItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.purchaseDescription = props.purchaseDescription;
        this.manufacturingChargeItem = props.manufacturingChargeItem;
        this.cost = props.cost;
        this.costUnits = props.costUnits;
        this.issueProduct = props.issueProduct;
        this.includeChildren = props.includeChildren;
        this.expenseAccount = props.expenseAccount;
        this.isTaxable = props.isTaxable;
        this.matrixType = props.matrixType;
        this.unitsType = props.unitsType;
        this.purchaseUnit = props.purchaseUnit;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.vendorName = props.vendorName;
        this.parent = props.parent;
        this.isInactive = props.isInactive;
        this.matrixItemNameTemplate = props.matrixItemNameTemplate;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.subsidiaryList = props.subsidiaryList;
        this.taxSchedule = props.taxSchedule;
        this.deferralAccount = props.deferralAccount;
        this.amortizationTemplate = props.amortizationTemplate;
        this.residual = props.residual;
        this.amortizationPeriod = props.amortizationPeriod;
        this.isFulfillable = props.isFulfillable;
        this.generateAccruals = props.generateAccruals;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.costCategory = props.costCategory;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.currency = props.currency;
        this.itemOptionsList = props.itemOptionsList;
        this.matrixOptionList = props.matrixOptionList;
        this.itemVendorList = props.itemVendorList;
        this.purchaseTaxCode = props.purchaseTaxCode;
        this.salesTaxCode = props.salesTaxCode;
        this.translationsList = props.translationsList;
        this.vendor = props.vendor;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.consumptionUnit = props.consumptionUnit;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.ServicePurchaseItem = ServicePurchaseItem;
class ClassificationSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.ClassificationSearchRow = ClassificationSearchRow;
class InventoryItemBinNumber extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.binNumber = props.binNumber;
        this.onHand = props.onHand;
        this.onHandAvail = props.onHandAvail;
        this.location = props.location;
        this.preferredBin = props.preferredBin;
    }
}
exports.InventoryItemBinNumber = InventoryItemBinNumber;
class DownloadItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.customForm = props.customForm;
        this.salesDescription = props.salesDescription;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.onSpecial = props.onSpecial;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.parent = props.parent;
        this.isOnline = props.isOnline;
        this.isGcoCompliant = props.isGcoCompliant;
        this.offerSupport = props.offerSupport;
        this.isInactive = props.isInactive;
        this.availableToPartners = props.availableToPartners;
        this.subsidiaryList = props.subsidiaryList;
        this.department = props.department;
        this.includeChildren = props.includeChildren;
        this.clazz = props.clazz;
        this.location = props.location;
        this.incomeAccount = props.incomeAccount;
        this.numOfAllowedDownloads = props.numOfAllowedDownloads;
        this.daysBeforeExpiration = props.daysBeforeExpiration;
        this.immediateDownload = props.immediateDownload;
        this.isTaxable = props.isTaxable;
        this.issueProduct = props.issueProduct;
        this.taxSchedule = props.taxSchedule;
        this.costEstimateType = props.costEstimateType;
        this.costEstimate = props.costEstimate;
        this.billingSchedule = props.billingSchedule;
        this.isFulfillable = props.isFulfillable;
        this.useMarginalRates = props.useMarginalRates;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.pricingGroup = props.pricingGroup;
        this.revRecSchedule = props.revRecSchedule;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoeDelivered = props.vsoeDelivered;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.deferRevRec = props.deferRevRec;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.directRevenuePosting = props.directRevenuePosting;
        this.storeDisplayName = props.storeDisplayName;
        this.storeDisplayThumbnail = props.storeDisplayThumbnail;
        this.storeDisplayImage = props.storeDisplayImage;
        this.featuredDescription = props.featuredDescription;
        this.storeDescription = props.storeDescription;
        this.storeDetailedDescription = props.storeDetailedDescription;
        this.storeItemTemplate = props.storeItemTemplate;
        this.pageTitle = props.pageTitle;
        this.metaTagHtml = props.metaTagHtml;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.sitemapPriority = props.sitemapPriority;
        this.searchKeywords = props.searchKeywords;
        this.isDonationItem = props.isDonationItem;
        this.showDefaultDonationAmount = props.showDefaultDonationAmount;
        this.maxDonationAmount = props.maxDonationAmount;
        this.dontShowPrice = props.dontShowPrice;
        this.noPriceMessage = props.noPriceMessage;
        this.outOfStockMessage = props.outOfStockMessage;
        this.outOfStockBehavior = props.outOfStockBehavior;
        this.relatedItemsDescription = props.relatedItemsDescription;
        this.specialsDescription = props.specialsDescription;
        this.pricingMatrix = props.pricingMatrix;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.siteCategoryList = props.siteCategoryList;
        this.presentationItemList = props.presentationItemList;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.DownloadItem = DownloadItem;
class InventoryNumberLocationsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.locations = props.locations;
        this.replaceAll = props.replaceAll;
    }
}
exports.InventoryNumberLocationsList = InventoryNumberLocationsList;
class RevRecTemplateSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.RevRecTemplateSearchRow = RevRecTemplateSearchRow;
class OtherChargePurchaseItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.otherChargePurchaseItemHierarchyVersions =
            props.otherChargePurchaseItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.OtherChargePurchaseItemHierarchyVersionsList = OtherChargePurchaseItemHierarchyVersionsList;
class RevRecTemplate extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.amortizationType = props.amortizationType;
        this.recurrenceType = props.recurrenceType;
        this.recogIntervalSrc = props.recogIntervalSrc;
        this.amortizationPeriod = props.amortizationPeriod;
        this.periodOffset = props.periodOffset;
        this.revRecOffset = props.revRecOffset;
        this.initialAmount = props.initialAmount;
        this.isInactive = props.isInactive;
        this.recurrenceList = props.recurrenceList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.RevRecTemplate = RevRecTemplate;
class BillingSchedule extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.scheduleType = props.scheduleType;
        this.name = props.name;
        this.recurrencePattern = props.recurrencePattern;
        this.project = props.project;
        this.initialAmount = props.initialAmount;
        this.initialTerms = props.initialTerms;
        this.frequency = props.frequency;
        this.recurrenceDowMaskList = props.recurrenceDowMaskList;
        this.yearMode = props.yearMode;
        this.yearDowim = props.yearDowim;
        this.yearDow = props.yearDow;
        this.yearDowimMonth = props.yearDowimMonth;
        this.yearMonth = props.yearMonth;
        this.yearDom = props.yearDom;
        this.monthMode = props.monthMode;
        this.monthDowim = props.monthDowim;
        this.monthDow = props.monthDow;
        this.monthDom = props.monthDom;
        this.dayPeriod = props.dayPeriod;
        this.repeatEvery = props.repeatEvery;
        this.billForActuals = props.billForActuals;
        this.numberRemaining = props.numberRemaining;
        this.inArrears = props.inArrears;
        this.recurrenceTerms = props.recurrenceTerms;
        this.isPublic = props.isPublic;
        this.applyToSubtotal = props.applyToSubtotal;
        this.transaction = props.transaction;
        this.isInactive = props.isInactive;
        this.seriesStartDate = props.seriesStartDate;
        this.recurrenceList = props.recurrenceList;
        this.milestoneList = props.milestoneList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.BillingSchedule = BillingSchedule;
class OtherChargeSaleItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.OtherChargeSaleItemHierarchyVersions = OtherChargeSaleItemHierarchyVersions;
class FairValuePriceSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.FairValuePriceSearchAdvanced = FairValuePriceSearchAdvanced;
class GeneralToken extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.entity = props.entity;
        this.mask = props.mask;
        this.supportedOperationsList = props.supportedOperationsList;
        this.paymentMethod = props.paymentMethod;
        this.memo = props.memo;
        this.state = props.state;
        this.isInactive = props.isInactive;
        this.preserveOnFile = props.preserveOnFile;
        this.isDefault = props.isDefault;
        this.token = props.token;
        this.tokenExpirationDate = props.tokenExpirationDate;
        this.tokenFamily = props.tokenFamily;
        this.tokenNamespace = props.tokenNamespace;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.GeneralToken = GeneralToken;
class ContactCategorySearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.ContactCategorySearchAdvanced = ContactCategorySearchAdvanced;
class SalesRoleSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.SalesRoleSearchRow = SalesRoleSearchRow;
class Term extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.dateDriven = props.dateDriven;
        this.daysUntilNetDue = props.daysUntilNetDue;
        this.discountPercent = props.discountPercent;
        this.daysUntilExpiry = props.daysUntilExpiry;
        this.dayOfMonthNetDue = props.dayOfMonthNetDue;
        this.dueNextMonthIfWithinDays = props.dueNextMonthIfWithinDays;
        this.discountPercentDateDriven = props.discountPercentDateDriven;
        this.dayDiscountExpires = props.dayDiscountExpires;
        this.preferred = props.preferred;
        this.isInactive = props.isInactive;
        this.installment = props.installment;
        this.recurrenceFrequency = props.recurrenceFrequency;
        this.recurrenceCount = props.recurrenceCount;
        this.repeatEvery = props.repeatEvery;
        this.splitEvenly = props.splitEvenly;
        this.percentagesList = props.percentagesList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.Term = Term;
class LotNumberedInventoryItemLocationsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.locations = props.locations;
        this.replaceAll = props.replaceAll;
    }
}
exports.LotNumberedInventoryItemLocationsList = LotNumberedInventoryItemLocationsList;
class TaxTypeNexusAccounts extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.nexus = props.nexus;
        this.payablesAccount = props.payablesAccount;
        this.receivablesAccount = props.receivablesAccount;
    }
}
exports.TaxTypeNexusAccounts = TaxTypeNexusAccounts;
class GlobalAccountMappingSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.GlobalAccountMappingSearchAdvanced = GlobalAccountMappingSearchAdvanced;
class UnitsTypeUomList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.uom = props.uom;
        this.replaceAll = props.replaceAll;
    }
}
exports.UnitsTypeUomList = UnitsTypeUomList;
class NoteType extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.description = props.description;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.NoteType = NoteType;
class RevRecScheduleRecurrenceList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.revRecScheduleRecurrence = props.revRecScheduleRecurrence;
        this.replaceAll = props.replaceAll;
    }
}
exports.RevRecScheduleRecurrenceList = RevRecScheduleRecurrenceList;
class NoteTypeSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.NoteTypeSearch = NoteTypeSearch;
class PriceLevelSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.PriceLevelSearchRow = PriceLevelSearchRow;
class ItemRevisionSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.ItemRevisionSearchAdvanced = ItemRevisionSearchAdvanced;
class LotNumberedAssemblyItemBillOfMaterialsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.lotNumberedAssemblyItemBillOfMaterials =
            props.lotNumberedAssemblyItemBillOfMaterials;
        this.replaceAll = props.replaceAll;
    }
}
exports.LotNumberedAssemblyItemBillOfMaterialsList = LotNumberedAssemblyItemBillOfMaterialsList;
class CurrencyRateSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.CurrencyRateSearchRow = CurrencyRateSearchRow;
class InventoryNumberSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.itemJoin = props.itemJoin;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.InventoryNumberSearchRow = InventoryNumberSearchRow;
class LocationRegionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.locationRegions = props.locationRegions;
        this.replaceAll = props.replaceAll;
    }
}
exports.LocationRegionsList = LocationRegionsList;
class InventoryItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.purchaseDescription = props.purchaseDescription;
        this.copyDescription = props.copyDescription;
        this.expenseAccount = props.expenseAccount;
        this.dateConvertedToInv = props.dateConvertedToInv;
        this.originalItemType = props.originalItemType;
        this.originalItemSubtype = props.originalItemSubtype;
        this.cogsAccount = props.cogsAccount;
        this.intercoCogsAccount = props.intercoCogsAccount;
        this.salesDescription = props.salesDescription;
        this.fraudRisk = props.fraudRisk;
        this.includeChildren = props.includeChildren;
        this.incomeAccount = props.incomeAccount;
        this.intercoIncomeAccount = props.intercoIncomeAccount;
        this.taxSchedule = props.taxSchedule;
        this.dropshipExpenseAccount = props.dropshipExpenseAccount;
        this.deferRevRec = props.deferRevRec;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.directRevenuePosting = props.directRevenuePosting;
        this.contingentRevenueHandling = props.contingentRevenueHandling;
        this.revReclassFXAccount = props.revReclassFXAccount;
        this.isTaxable = props.isTaxable;
        this.matrixType = props.matrixType;
        this.assetAccount = props.assetAccount;
        this.matchBillToReceipt = props.matchBillToReceipt;
        this.billQtyVarianceAcct = props.billQtyVarianceAcct;
        this.billPriceVarianceAcct = props.billPriceVarianceAcct;
        this.billExchRateVarianceAcct = props.billExchRateVarianceAcct;
        this.gainLossAccount = props.gainLossAccount;
        this.shippingCost = props.shippingCost;
        this.shippingCostUnits = props.shippingCostUnits;
        this.handlingCost = props.handlingCost;
        this.handlingCostUnits = props.handlingCostUnits;
        this.weight = props.weight;
        this.weightUnit = props.weightUnit;
        this.weightUnits = props.weightUnits;
        this.costingMethodDisplay = props.costingMethodDisplay;
        this.unitsType = props.unitsType;
        this.stockUnit = props.stockUnit;
        this.purchaseUnit = props.purchaseUnit;
        this.saleUnit = props.saleUnit;
        this.issueProduct = props.issueProduct;
        this.billingSchedule = props.billingSchedule;
        this.trackLandedCost = props.trackLandedCost;
        this.matrixItemNameTemplate = props.matrixItemNameTemplate;
        this.isDropShipItem = props.isDropShipItem;
        this.isSpecialOrderItem = props.isSpecialOrderItem;
        this.stockDescription = props.stockDescription;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.intercoDefRevAccount = props.intercoDefRevAccount;
        this.producer = props.producer;
        this.manufacturer = props.manufacturer;
        this.revRecSchedule = props.revRecSchedule;
        this.mpn = props.mpn;
        this.multManufactureAddr = props.multManufactureAddr;
        this.manufacturerAddr1 = props.manufacturerAddr1;
        this.manufacturerCity = props.manufacturerCity;
        this.manufacturerState = props.manufacturerState;
        this.manufacturerZip = props.manufacturerZip;
        this.countryOfManufacture = props.countryOfManufacture;
        this.roundUpAsComponent = props.roundUpAsComponent;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.defaultItemShipMethod = props.defaultItemShipMethod;
        this.itemCarrier = props.itemCarrier;
        this.itemShipMethodList = props.itemShipMethodList;
        this.manufacturerTaxId = props.manufacturerTaxId;
        this.scheduleBNumber = props.scheduleBNumber;
        this.scheduleBQuantity = props.scheduleBQuantity;
        this.scheduleBCode = props.scheduleBCode;
        this.manufacturerTariff = props.manufacturerTariff;
        this.preferenceCriterion = props.preferenceCriterion;
        this.minimumQuantity = props.minimumQuantity;
        this.enforceMinQtyInternally = props.enforceMinQtyInternally;
        this.maximumQuantity = props.maximumQuantity;
        this.minimumQuantityUnits = props.minimumQuantityUnits;
        this.softDescriptor = props.softDescriptor;
        this.shipPackage = props.shipPackage;
        this.shipIndividually = props.shipIndividually;
        this.costCategory = props.costCategory;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.purchasePriceVarianceAcct = props.purchasePriceVarianceAcct;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.reorderPointUnits = props.reorderPointUnits;
        this.useMarginalRates = props.useMarginalRates;
        this.preferredStockLevelUnits = props.preferredStockLevelUnits;
        this.costEstimateType = props.costEstimateType;
        this.costEstimate = props.costEstimate;
        this.transferPrice = props.transferPrice;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.pricingGroup = props.pricingGroup;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.costEstimateUnits = props.costEstimateUnits;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoeDelivered = props.vsoeDelivered;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.preferredLocation = props.preferredLocation;
        this.isStorePickupAllowed = props.isStorePickupAllowed;
        this.reorderMultiple = props.reorderMultiple;
        this.cost = props.cost;
        this.lastInvtCountDate = props.lastInvtCountDate;
        this.nextInvtCountDate = props.nextInvtCountDate;
        this.invtCountInterval = props.invtCountInterval;
        this.invtClassification = props.invtClassification;
        this.costUnits = props.costUnits;
        this.totalValue = props.totalValue;
        this.averageCost = props.averageCost;
        this.useBins = props.useBins;
        this.quantityReorderUnits = props.quantityReorderUnits;
        this.leadTime = props.leadTime;
        this.autoLeadTime = props.autoLeadTime;
        this.lastPurchasePrice = props.lastPurchasePrice;
        this.autoPreferredStockLevel = props.autoPreferredStockLevel;
        this.preferredStockLevelDays = props.preferredStockLevelDays;
        this.safetyStockLevel = props.safetyStockLevel;
        this.safetyStockLevelDays = props.safetyStockLevelDays;
        this.backwardConsumptionDays = props.backwardConsumptionDays;
        this.seasonalDemand = props.seasonalDemand;
        this.safetyStockLevelUnits = props.safetyStockLevelUnits;
        this.demandModifier = props.demandModifier;
        this.distributionNetwork = props.distributionNetwork;
        this.distributionCategory = props.distributionCategory;
        this.autoReorderPoint = props.autoReorderPoint;
        this.storeDisplayName = props.storeDisplayName;
        this.storeDisplayThumbnail = props.storeDisplayThumbnail;
        this.storeDisplayImage = props.storeDisplayImage;
        this.storeDescription = props.storeDescription;
        this.storeDetailedDescription = props.storeDetailedDescription;
        this.storeItemTemplate = props.storeItemTemplate;
        this.pageTitle = props.pageTitle;
        this.metaTagHtml = props.metaTagHtml;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.sitemapPriority = props.sitemapPriority;
        this.searchKeywords = props.searchKeywords;
        this.isDonationItem = props.isDonationItem;
        this.showDefaultDonationAmount = props.showDefaultDonationAmount;
        this.maxDonationAmount = props.maxDonationAmount;
        this.dontShowPrice = props.dontShowPrice;
        this.noPriceMessage = props.noPriceMessage;
        this.outOfStockMessage = props.outOfStockMessage;
        this.onSpecial = props.onSpecial;
        this.outOfStockBehavior = props.outOfStockBehavior;
        this.relatedItemsDescription = props.relatedItemsDescription;
        this.specialsDescription = props.specialsDescription;
        this.featuredDescription = props.featuredDescription;
        this.shoppingDotComCategory = props.shoppingDotComCategory;
        this.shopzillaCategoryId = props.shopzillaCategoryId;
        this.nexTagCategory = props.nexTagCategory;
        this.urlComponent = props.urlComponent;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.vendorName = props.vendorName;
        this.parent = props.parent;
        this.isOnline = props.isOnline;
        this.isHazmatItem = props.isHazmatItem;
        this.hazmatId = props.hazmatId;
        this.hazmatShippingName = props.hazmatShippingName;
        this.hazmatHazardClass = props.hazmatHazardClass;
        this.hazmatPackingGroup = props.hazmatPackingGroup;
        this.hazmatItemUnits = props.hazmatItemUnits;
        this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
        this.isGcoCompliant = props.isGcoCompliant;
        this.offerSupport = props.offerSupport;
        this.isInactive = props.isInactive;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.costingMethod = props.costingMethod;
        this.currency = props.currency;
        this.preferredStockLevel = props.preferredStockLevel;
        this.pricingMatrix = props.pricingMatrix;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.purchaseTaxCode = props.purchaseTaxCode;
        this.defaultReturnCost = props.defaultReturnCost;
        this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
        this.alternateDemandSourceItem = props.alternateDemandSourceItem;
        this.fixedLotSize = props.fixedLotSize;
        this.periodicLotSizeType = props.periodicLotSizeType;
        this.supplyType = props.supplyType;
        this.demandTimeFence = props.demandTimeFence;
        this.supplyTimeFence = props.supplyTimeFence;
        this.rescheduleInDays = props.rescheduleInDays;
        this.rescheduleOutDays = props.rescheduleOutDays;
        this.periodicLotSizeDays = props.periodicLotSizeDays;
        this.supplyLotSizingMethod = props.supplyLotSizingMethod;
        this.forwardConsumptionDays = props.forwardConsumptionDays;
        this.demandSource = props.demandSource;
        this.quantityBackOrdered = props.quantityBackOrdered;
        this.quantityCommitted = props.quantityCommitted;
        this.quantityAvailable = props.quantityAvailable;
        this.quantityOnHand = props.quantityOnHand;
        this.onHandValueMli = props.onHandValueMli;
        this.quantityOnOrder = props.quantityOnOrder;
        this.rate = props.rate;
        this.reorderPoint = props.reorderPoint;
        this.quantityCommittedUnits = props.quantityCommittedUnits;
        this.salesTaxCode = props.salesTaxCode;
        this.quantityAvailableUnits = props.quantityAvailableUnits;
        this.quantityOnHandUnits = props.quantityOnHandUnits;
        this.vendor = props.vendor;
        this.quantityOnOrderUnits = props.quantityOnOrderUnits;
        this.productFeedList = props.productFeedList;
        this.subsidiaryList = props.subsidiaryList;
        this.itemOptionsList = props.itemOptionsList;
        this.itemVendorList = props.itemVendorList;
        this.siteCategoryList = props.siteCategoryList;
        this.translationsList = props.translationsList;
        this.binNumberList = props.binNumberList;
        this.locationsList = props.locationsList;
        this.matrixOptionList = props.matrixOptionList;
        this.presentationItemList = props.presentationItemList;
        this.futureHorizon = props.futureHorizon;
        this.consumptionUnit = props.consumptionUnit;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.InventoryItem = InventoryItem;
class SalesTaxItemSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.taxTypeJoin = props.taxTypeJoin;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.SalesTaxItemSearch = SalesTaxItemSearch;
class VendorCategorySearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.VendorCategorySearchRow = VendorCategorySearchRow;
class ServiceResaleItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.purchaseDescription = props.purchaseDescription;
        this.manufacturingChargeItem = props.manufacturingChargeItem;
        this.cost = props.cost;
        this.costUnits = props.costUnits;
        this.expenseAccount = props.expenseAccount;
        this.intercoExpenseAccount = props.intercoExpenseAccount;
        this.salesDescription = props.salesDescription;
        this.includeChildren = props.includeChildren;
        this.incomeAccount = props.incomeAccount;
        this.intercoIncomeAccount = props.intercoIncomeAccount;
        this.taxSchedule = props.taxSchedule;
        this.matrixType = props.matrixType;
        this.isTaxable = props.isTaxable;
        this.costEstimateType = props.costEstimateType;
        this.costEstimate = props.costEstimate;
        this.unitsType = props.unitsType;
        this.purchaseUnit = props.purchaseUnit;
        this.saleUnit = props.saleUnit;
        this.costEstimateUnits = props.costEstimateUnits;
        this.issueProduct = props.issueProduct;
        this.billingSchedule = props.billingSchedule;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.intercoDefRevAccount = props.intercoDefRevAccount;
        this.revRecSchedule = props.revRecSchedule;
        this.deferralAccount = props.deferralAccount;
        this.amortizationTemplate = props.amortizationTemplate;
        this.residual = props.residual;
        this.deferRevRec = props.deferRevRec;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.directRevenuePosting = props.directRevenuePosting;
        this.contingentRevenueHandling = props.contingentRevenueHandling;
        this.revReclassFXAccount = props.revReclassFXAccount;
        this.amortizationPeriod = props.amortizationPeriod;
        this.minimumQuantity = props.minimumQuantity;
        this.enforceMinQtyInternally = props.enforceMinQtyInternally;
        this.maximumQuantity = props.maximumQuantity;
        this.softDescriptor = props.softDescriptor;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.useMarginalRates = props.useMarginalRates;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.isFulfillable = props.isFulfillable;
        this.generateAccruals = props.generateAccruals;
        this.costCategory = props.costCategory;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.pricingGroup = props.pricingGroup;
        this.minimumQuantityUnits = props.minimumQuantityUnits;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoeDelivered = props.vsoeDelivered;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.createJob = props.createJob;
        this.matrixItemNameTemplate = props.matrixItemNameTemplate;
        this.storeDisplayName = props.storeDisplayName;
        this.storeDisplayThumbnail = props.storeDisplayThumbnail;
        this.storeDisplayImage = props.storeDisplayImage;
        this.storeDescription = props.storeDescription;
        this.storeDetailedDescription = props.storeDetailedDescription;
        this.storeItemTemplate = props.storeItemTemplate;
        this.pageTitle = props.pageTitle;
        this.urlComponent = props.urlComponent;
        this.metaTagHtml = props.metaTagHtml;
        this.excludeFromSitemap = props.excludeFromSitemap;
        this.sitemapPriority = props.sitemapPriority;
        this.searchKeywords = props.searchKeywords;
        this.isDonationItem = props.isDonationItem;
        this.showDefaultDonationAmount = props.showDefaultDonationAmount;
        this.maxDonationAmount = props.maxDonationAmount;
        this.dontShowPrice = props.dontShowPrice;
        this.noPriceMessage = props.noPriceMessage;
        this.outOfStockMessage = props.outOfStockMessage;
        this.onSpecial = props.onSpecial;
        this.outOfStockBehavior = props.outOfStockBehavior;
        this.relatedItemsDescription = props.relatedItemsDescription;
        this.specialsDescription = props.specialsDescription;
        this.itemTaskTemplatesList = props.itemTaskTemplatesList;
        this.featuredDescription = props.featuredDescription;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.vendorName = props.vendorName;
        this.parent = props.parent;
        this.isOnline = props.isOnline;
        this.isGcoCompliant = props.isGcoCompliant;
        this.offerSupport = props.offerSupport;
        this.isInactive = props.isInactive;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.subsidiaryList = props.subsidiaryList;
        this.currency = props.currency;
        this.billingRatesMatrix = props.billingRatesMatrix;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.itemOptionsList = props.itemOptionsList;
        this.matrixOptionList = props.matrixOptionList;
        this.itemVendorList = props.itemVendorList;
        this.pricingMatrix = props.pricingMatrix;
        this.purchaseTaxCode = props.purchaseTaxCode;
        this.rate = props.rate;
        this.salesTaxCode = props.salesTaxCode;
        this.siteCategoryList = props.siteCategoryList;
        this.translationsList = props.translationsList;
        this.vendor = props.vendor;
        this.presentationItemList = props.presentationItemList;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.consumptionUnit = props.consumptionUnit;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.ServiceResaleItem = ServiceResaleItem;
class TaxType extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.description = props.description;
        this.doesNotAddToTotal = props.doesNotAddToTotal;
        this.postToItemCost = props.postToItemCost;
        this.taxInNetAmount = props.taxInNetAmount;
        this.reverseCharge = props.reverseCharge;
        this.isInactive = props.isInactive;
        this.nexusAccountsList = props.nexusAccountsList;
        this.nexusesTaxList = props.nexusesTaxList;
        this.country = props.country;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.TaxType = TaxType;
class ExpenseCategorySearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.ExpenseCategorySearchAdvanced = ExpenseCategorySearchAdvanced;
class CustomerCategorySearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.CustomerCategorySearch = CustomerCategorySearch;
class PricingGroupSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.PricingGroupSearchRow = PricingGroupSearchRow;
class ConsolidatedExchangeRate extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.postingPeriod = props.postingPeriod;
        this.fromSubsidiary = props.fromSubsidiary;
        this.fromCurrency = props.fromCurrency;
        this.toSubsidiary = props.toSubsidiary;
        this.toCurrency = props.toCurrency;
        this.averageRate = props.averageRate;
        this.currentRate = props.currentRate;
        this.historicalRate = props.historicalRate;
        this.accountingBook = props.accountingBook;
        this.isPeriodClosed = props.isPeriodClosed;
        this.isDerived = props.isDerived;
        this.isEliminationSubsidiary = props.isEliminationSubsidiary;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.ConsolidatedExchangeRate = ConsolidatedExchangeRate;
class CustomerCategorySearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.CustomerCategorySearchAdvanced = CustomerCategorySearchAdvanced;
class BillingScheduleSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
    }
}
exports.BillingScheduleSearch = BillingScheduleSearch;
class OtherChargeResaleItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.createdDate = props.createdDate;
        this.lastModifiedDate = props.lastModifiedDate;
        this.purchaseDescription = props.purchaseDescription;
        this.manufacturingChargeItem = props.manufacturingChargeItem;
        this.cost = props.cost;
        this.costUnits = props.costUnits;
        this.expenseAccount = props.expenseAccount;
        this.intercoExpenseAccount = props.intercoExpenseAccount;
        this.salesDescription = props.salesDescription;
        this.includeChildren = props.includeChildren;
        this.incomeAccount = props.incomeAccount;
        this.intercoIncomeAccount = props.intercoIncomeAccount;
        this.isTaxable = props.isTaxable;
        this.matrixType = props.matrixType;
        this.taxSchedule = props.taxSchedule;
        this.costEstimateType = props.costEstimateType;
        this.costEstimate = props.costEstimate;
        this.unitsType = props.unitsType;
        this.purchaseUnit = props.purchaseUnit;
        this.saleUnit = props.saleUnit;
        this.costEstimateUnits = props.costEstimateUnits;
        this.issueProduct = props.issueProduct;
        this.billingSchedule = props.billingSchedule;
        this.deferredRevenueAccount = props.deferredRevenueAccount;
        this.intercoDefRevAccount = props.intercoDefRevAccount;
        this.revRecSchedule = props.revRecSchedule;
        this.deferralAccount = props.deferralAccount;
        this.amortizationTemplate = props.amortizationTemplate;
        this.residual = props.residual;
        this.deferRevRec = props.deferRevRec;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revenueAllocationGroup = props.revenueAllocationGroup;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.directRevenuePosting = props.directRevenuePosting;
        this.contingentRevenueHandling = props.contingentRevenueHandling;
        this.revReclassFXAccount = props.revReclassFXAccount;
        this.amortizationPeriod = props.amortizationPeriod;
        this.minimumQuantity = props.minimumQuantity;
        this.minimumQuantityUnits = props.minimumQuantityUnits;
        this.enforceMinQtyInternally = props.enforceMinQtyInternally;
        this.maximumQuantity = props.maximumQuantity;
        this.softDescriptor = props.softDescriptor;
        this.isFulfillable = props.isFulfillable;
        this.generateAccruals = props.generateAccruals;
        this.costCategory = props.costCategory;
        this.purchaseOrderQuantity = props.purchaseOrderQuantity;
        this.purchaseOrderAmount = props.purchaseOrderAmount;
        this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
        this.receiptQuantity = props.receiptQuantity;
        this.receiptAmount = props.receiptAmount;
        this.receiptQuantityDiff = props.receiptQuantityDiff;
        this.pricesIncludeTax = props.pricesIncludeTax;
        this.quantityPricingSchedule = props.quantityPricingSchedule;
        this.useMarginalRates = props.useMarginalRates;
        this.overallQuantityPricingType = props.overallQuantityPricingType;
        this.pricingGroup = props.pricingGroup;
        this.customForm = props.customForm;
        this.itemId = props.itemId;
        this.upcCode = props.upcCode;
        this.displayName = props.displayName;
        this.vendorName = props.vendorName;
        this.parent = props.parent;
        this.isOnline = props.isOnline;
        this.isGcoCompliant = props.isGcoCompliant;
        this.offerSupport = props.offerSupport;
        this.isInactive = props.isInactive;
        this.matrixItemNameTemplate = props.matrixItemNameTemplate;
        this.availableToPartners = props.availableToPartners;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.subsidiaryList = props.subsidiaryList;
        this.vsoePrice = props.vsoePrice;
        this.vsoeSopGroup = props.vsoeSopGroup;
        this.vsoeDeferral = props.vsoeDeferral;
        this.vsoePermitDiscount = props.vsoePermitDiscount;
        this.vsoeDelivered = props.vsoeDelivered;
        this.itemRevenueCategory = props.itemRevenueCategory;
        this.currency = props.currency;
        this.itemOptionsList = props.itemOptionsList;
        this.matrixOptionList = props.matrixOptionList;
        this.itemVendorList = props.itemVendorList;
        this.pricingMatrix = props.pricingMatrix;
        this.accountingBookDetailList = props.accountingBookDetailList;
        this.purchaseTaxCode = props.purchaseTaxCode;
        this.rate = props.rate;
        this.salesTaxCode = props.salesTaxCode;
        this.translationsList = props.translationsList;
        this.vendor = props.vendor;
        this.hierarchyVersionsList = props.hierarchyVersionsList;
        this.consumptionUnit = props.consumptionUnit;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.OtherChargeResaleItem = OtherChargeResaleItem;
class LocationSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.addressJoin = props.addressJoin;
        this.returnAddressJoin = props.returnAddressJoin;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.LocationSearchRow = LocationSearchRow;
class DepartmentSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.DepartmentSearchAdvanced = DepartmentSearchAdvanced;
class ContactRole extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.description = props.description;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.ContactRole = ContactRole;
class SerializedAssemblyItemBillOfMaterials extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.billOfMaterials = props.billOfMaterials;
        this.currentRevision = props.currentRevision;
        this.masterDefault = props.masterDefault;
        this.defaultForLocationList = props.defaultForLocationList;
        this.inactive = props.inactive;
        this.memo = props.memo;
    }
}
exports.SerializedAssemblyItemBillOfMaterials = SerializedAssemblyItemBillOfMaterials;
class ItemVendor extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.vendor = props.vendor;
        this.vendorCode = props.vendorCode;
        this.vendorCurrencyName = props.vendorCurrencyName;
        this.vendorCurrency = props.vendorCurrency;
        this.purchasePrice = props.purchasePrice;
        this.preferredVendor = props.preferredVendor;
        this.schedule = props.schedule;
        this.subsidiary = props.subsidiary;
    }
}
exports.ItemVendor = ItemVendor;
class AccountingPeriod extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.periodName = props.periodName;
        this.parent = props.parent;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.fiscalCalendar = props.fiscalCalendar;
        this.closedOnDate = props.closedOnDate;
        this.isAdjust = props.isAdjust;
        this.fiscalCalendarsList = props.fiscalCalendarsList;
        this.isQuarter = props.isQuarter;
        this.isYear = props.isYear;
        this.closed = props.closed;
        this.apLocked = props.apLocked;
        this.arLocked = props.arLocked;
        this.payrollLocked = props.payrollLocked;
        this.allLocked = props.allLocked;
        this.allowNonGLChanges = props.allowNonGLChanges;
        this.internalId = props.internalId;
    }
}
exports.AccountingPeriod = AccountingPeriod;
class Bom extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customForm = props.customForm;
        this.name = props.name;
        this.usedOnAssembly = props.usedOnAssembly;
        this.createdDate = props.createdDate;
        this.isInactive = props.isInactive;
        this.useComponentYield = props.useComponentYield;
        this.memo = props.memo;
        this.legacyBomForAssembly = props.legacyBomForAssembly;
        this.availableForAllAssemblies = props.availableForAllAssemblies;
        this.restrictToAssembliesList = props.restrictToAssembliesList;
        this.availableForAllLocations = props.availableForAllLocations;
        this.restrictToLocationsList = props.restrictToLocationsList;
        this.subsidiaryList = props.subsidiaryList;
        this.includeChildren = props.includeChildren;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.Bom = Bom;
class SalesTaxItemSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.SalesTaxItemSearchAdvanced = SalesTaxItemSearchAdvanced;
class BomRevisionSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.BomRevisionSearchAdvanced = BomRevisionSearchAdvanced;
class TaxTypeNexusAccountsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.taxTypeNexusAccounts = props.taxTypeNexusAccounts;
        this.replaceAll = props.replaceAll;
    }
}
exports.TaxTypeNexusAccountsList = TaxTypeNexusAccountsList;
class ItemAccountMappingSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.classJoin = props.classJoin;
        this.departmentJoin = props.departmentJoin;
        this.destinationAccountJoin = props.destinationAccountJoin;
        this.locationJoin = props.locationJoin;
        this.sourceAccountJoin = props.sourceAccountJoin;
        this.subsidiaryJoin = props.subsidiaryJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.ItemAccountMappingSearchRow = ItemAccountMappingSearchRow;
class PriceLevel extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.discountpct = props.discountpct;
        this.updateExistingPrices = props.updateExistingPrices;
        this.isOnline = props.isOnline;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.PriceLevel = PriceLevel;
class SiteCategoryList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.siteCategory = props.siteCategory;
        this.replaceAll = props.replaceAll;
    }
}
exports.SiteCategoryList = SiteCategoryList;
class LotNumberedAssemblyItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.lotNumberedAssemblyItemHierarchyVersions =
            props.lotNumberedAssemblyItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.LotNumberedAssemblyItemHierarchyVersionsList = LotNumberedAssemblyItemHierarchyVersionsList;
class BinSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.BinSearch = BinSearch;
class OtherChargeSaleItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.otherChargeSaleItemHierarchyVersions =
            props.otherChargeSaleItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.OtherChargeSaleItemHierarchyVersionsList = OtherChargeSaleItemHierarchyVersionsList;
class ItemSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.accountingBookRevRecScheduleJoin =
            props.accountingBookRevRecScheduleJoin;
        this.assemblyItemBillOfMaterialsJoin =
            props.assemblyItemBillOfMaterialsJoin;
        this.binNumberJoin = props.binNumberJoin;
        this.binOnHandJoin = props.binOnHandJoin;
        this.correlatedItemJoin = props.correlatedItemJoin;
        this.effectiveRevisionJoin = props.effectiveRevisionJoin;
        this.fileJoin = props.fileJoin;
        this.inventoryDetailJoin = props.inventoryDetailJoin;
        this.inventoryLocationJoin = props.inventoryLocationJoin;
        this.inventoryNumberJoin = props.inventoryNumberJoin;
        this.inventoryNumberBinOnHandJoin = props.inventoryNumberBinOnHandJoin;
        this.memberItemJoin = props.memberItemJoin;
        this.obsoleteRevisionJoin = props.obsoleteRevisionJoin;
        this.parentJoin = props.parentJoin;
        this.preferredLocationJoin = props.preferredLocationJoin;
        this.preferredVendorJoin = props.preferredVendorJoin;
        this.pricingJoin = props.pricingJoin;
        this.shopperJoin = props.shopperJoin;
        this.transactionJoin = props.transactionJoin;
        this.userJoin = props.userJoin;
        this.userNotesJoin = props.userNotesJoin;
        this.vendorJoin = props.vendorJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.ItemSearchRow = ItemSearchRow;
class AccountingPeriodSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.AccountingPeriodSearchAdvanced = AccountingPeriodSearchAdvanced;
class GeneralTokenSupportedOperationsListList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.generalTokenSupportedOperationsList =
            props.generalTokenSupportedOperationsList;
    }
}
exports.GeneralTokenSupportedOperationsListList = GeneralTokenSupportedOperationsListList;
class NexusSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.NexusSearchRow = NexusSearchRow;
class BillingRates extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.currency = props.currency;
        this.billingClass = props.billingClass;
        this.rateList = props.rateList;
    }
}
exports.BillingRates = BillingRates;
class GlobalAccountMapping extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customForm = props.customForm;
        this.effectiveDate = props.effectiveDate;
        this.endDate = props.endDate;
        this.accountingBook = props.accountingBook;
        this.subsidiary = props.subsidiary;
        this.sourceAccount = props.sourceAccount;
        this.clazz = props.clazz;
        this.department = props.department;
        this.location = props.location;
        this.destinationAccount = props.destinationAccount;
        this.customDimension = props.customDimension;
        this.customFieldList = props.customFieldList;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.GlobalAccountMapping = GlobalAccountMapping;
class AccountSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.AccountSearch = AccountSearch;
class LotNumberedAssemblyItemHierarchyVersions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.isIncluded = props.isIncluded;
        this.hierarchyVersion = props.hierarchyVersion;
        this.startDate = props.startDate;
        this.endDate = props.endDate;
        this.hierarchyNode = props.hierarchyNode;
    }
}
exports.LotNumberedAssemblyItemHierarchyVersions = LotNumberedAssemblyItemHierarchyVersions;
class ItemAccountingBookDetail extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.accountingBook = props.accountingBook;
        this.createRevenuePlansOn = props.createRevenuePlansOn;
        this.revenueRecognitionRule = props.revenueRecognitionRule;
        this.revRecForecastRule = props.revRecForecastRule;
        this.revRecSchedule = props.revRecSchedule;
        this.sameAsPrimaryRevRec = props.sameAsPrimaryRevRec;
        this.amortizationTemplate = props.amortizationTemplate;
        this.sameAsPrimaryAmortization = props.sameAsPrimaryAmortization;
    }
}
exports.ItemAccountingBookDetail = ItemAccountingBookDetail;
class NonInventoryResaleItemHierarchyVersionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.nonInventoryResaleItemHierarchyVersions =
            props.nonInventoryResaleItemHierarchyVersions;
        this.replaceAll = props.replaceAll;
    }
}
exports.NonInventoryResaleItemHierarchyVersionsList = NonInventoryResaleItemHierarchyVersionsList;
class SubsidiaryTaxRegistrationList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.subsidiaryTaxRegistration = props.subsidiaryTaxRegistration;
        this.replaceAll = props.replaceAll;
    }
}
exports.SubsidiaryTaxRegistrationList = SubsidiaryTaxRegistrationList;
class SubsidiaryNexus extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.nexusId = props.nexusId;
        this.country = props.country;
    }
}
exports.SubsidiaryNexus = SubsidiaryNexus;
class SubsidiarySearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.addressJoin = props.addressJoin;
        this.defaultAdvanceToApplyAccountJoin =
            props.defaultAdvanceToApplyAccountJoin;
        this.returnAddressJoin = props.returnAddressJoin;
        this.shippingAddressJoin = props.shippingAddressJoin;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.SubsidiarySearch = SubsidiarySearch;