export class TransctionLog {
    merchantCode: string;
    merchantReferenceId: string;
    transactionId: string;
    step: string;
    group: DepositTransactionStepGroup | WithdrawalTransactionStepGroup | QueryStepGroup | WithdrawalProcessStepGroup | CommonStepGroup | BalanceStepGroup | CryptoCurrencyGroup;
    message: any;
  
    constructor(
      merchantCode: string,
      merchantReferenceId: string,
      transactionId: string,
      step: string,
      group: DepositTransactionStepGroup | WithdrawalTransactionStepGroup | QueryStepGroup | WithdrawalProcessStepGroup | CommonStepGroup | BalanceStepGroup | CryptoCurrencyGroup,
      message: any
    ) {
      this.merchantCode = merchantCode;
      this.merchantReferenceId = merchantReferenceId;
      this.transactionId = transactionId;
      this.step = step;
      this.group = group;
      this.message = message;
    }
  }
  
  //Query Module
  export enum QueryStepGroup {
    MerchantDepositQueryRequest = 'Merchant Deposit Query Request',
    MerchantWithdrawalQueryRequest = 'Merchant Withdrawal Query Request',
    MerchantDepositQueryVersionRequest = 'Merchant Deposit Query Version Request',
    MerchantWithdrawalQueryVersionRequest = 'Merchant Withdrawal Query Version Request'
  }
  export enum MerchantDepositQuerySteps {
    RawRequest = 'Raw Deposit Query',
    SignatureValidation = 'Deposit Query Request Signature Validation',
    GetDepositTransactionDetailsV2ApiCall = 'GetDepositTransactionDetailsV2 Api Call',
  }
  export enum MerchantWithdrawalQuerySteps {
    RawRequest = 'Raw Withdrawal Query',
    SignatureValidation = 'Withdrawal Query Request Signature Validation',
    GetWithdrawalTransactionDetailsV2ApiCall = 'GetWithdrawalTransactionDetailsV2 Api Call',
  }
  

  //Deposit Module
  export enum DepositTransactionStepGroup {
    MerchantRequest = 'Merchant Deposit Request',
    VendorRequest = 'Vendor Deposit Request',
  }
  export enum MerchantDepositRequestSteps {
    RawRequest = 'Raw Deposit Request',
    GetMerchantSettings = 'Get Merchant Settings',
    ParameterValidation = 'Parameter Validation',
    SignatureGeneration = 'Deposit Request Signature Generation',
    SignatureValidation = 'Deposit Request Signature Validation',
    CreateTransaction = 'Create Deposit',
    CreateDepositTransactionApiCall = 'Create Deposit Api Call',
  }


  //Withdrawal Module
  export enum WithdrawalTransactionStepGroup {
    MerchantRequest = 'Merchant Withdrawal Request',
    VendorRequest = 'Vendor Withdrawal Request',
    CryptoVendorRequest = 'Vendor Crypto Withdrawal Request',
  }
  export enum MerchantWithdrawalRequestSteps {
    RawRequest = 'Raw Withdrawal Request',
    CryptoRawRequest = 'Raw Crypto Withdrawal Request',
    GetMerchantSettings = 'Get Merchant Settings',
    ParameterValidation = 'Parameter Validation',
    SignatureGeneration = 'Request Signature Generation',
    SignatureValidation = 'Request Signature Validation',
    CreateTransaction = 'Create Withdrawal',
    CreateWithdrawalTransactionApiCall = 'Create Withdrawal Api Call',
    CreateWithdrawalCryptoTransactionApiCall = 'Create Withdrawal Crypto Api Call',
    CreateWithdrawalCryptoDirectTransactionApiCall = 'Create Withdrawal Crypto Direct Api Call',
  }
  export enum WithdrawalProcessStepGroup {
    WithdrawalProcess = 'Withdrawal Process'
  }
  export enum WithdrawalProcessSteps {
    UpdateInitialTransaction = 'Update Withdrawal Online Transaction',
    UpdateToFail = 'Update Transaction to Fail.',
    WithdrawalProcessStep = 'Withdrawal Process Step',
    UpdateVendorReference = 'Update Vendor Reference',
    StatusChecker = 'Status Checker',
    ProcessStepWithdrawal = 'Process Step Withdrawal',
    GetWithdrawalOnlineTransactionDetails = 'Get Withdrawal Online Transaction Details',
    GetJsonSettings = 'Get Json Settings',
    GetGatewayMerchantSettings = 'Get Gateway Merchant Settings',
    UpdateWithdrawalOnlineTransaction = 'Update WithdrawalOnlineTransaction'
  }


  //Balance Module
  export enum BalanceStepGroup {
    BalanceRequest = 'Balance Request',
  }
  export enum BalanceRequestSteps {
    RawBalanceRequest = 'Raw Balance Request',
    RawBalanceRequestApiCall = 'Raw Balance Request Api Call',
  }


  export enum CommonStepGroup {
    AuthorizationCheck = 'Authorization Check',
    GetMerchantDetails = 'Get Merchant Details',
  }
  export enum CommonSteps {
    SignatureValidation = 'Request Signature Validation',
    GetMerchantDetailsApiCall = 'GetMerchantDetails Api Call',
    IpChecker = 'IP Checker',
  }


  export enum LogMessages {
    IpNotWhiteListed = 'IP not whitelisted.',
    SignatureValidationFailed = 'Signature Validation Failed',
    ApiCallError = 'Error Calling Api',
    ParameterValidationOK = 'Parameter Validation OK',
    SignatureValidationOK = 'Signature Validation OK',
    ParameterValidationFailed = 'Parameter Validation Failed',
    //Process Withdrawal
    Success = 'Success',
    Failed = 'Failed',
    SuccessfullyProcessed = 'Successfully Processed.',
    InvalidTransactionId = 'Invalid TransactionId.',
    InvalidStatus = 'Invalid Status',
    InvalidJSONSettings = 'Invalid JSON Settings.',
    InvalidGatewayMerchantSettings = 'Invalid Gateway Merchant Settings.',
    ErrorOnUpdatingTransaction = 'Error on updating transaction',
  }

  //CryptoModule
  export enum CryptoCurrencyGroup {
    GetSupportedCryptoCurrency = 'Get Supported Crypto Currency'
  }
  
  export enum CryptoCurrencySteps {
    RawRequest = 'Raw Get Supported CryptoCurrency',
    IpChecker = 'IP Checker',
  }
  