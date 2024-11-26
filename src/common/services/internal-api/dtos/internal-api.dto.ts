export interface IDepositPaymentSettings {
    status?: string,
    message?: string,
    gatewayId?: string,
    gatewayMerchantId?: string,
    jsonSettings?: string,
    merchantSettings?: string
}

export interface IRequestField {
    transactionId: string,
    typeId: string
}

export interface IJsonFormData {
    controls?: IJsonFormControls[],
    Sign?: IJsonSign
}

export interface IJsonFormControls {
    name: string
    value: string
    multiplierAmount?: number
}

export interface IJsonSign {
    Hashing: string
    Composition: string
    SeparatorStart: string
    SeparatorEnd: string
}

export interface IGatewayMerchant {
    gatewayMerchantId?: number;
    gatewayId?: number;
    merchantSetting?: any;
    merchantSecretSetting?: any;
  }

  export interface IMerchantDetails {
    merchantId?: string,
    secretKey?: string,
    ips?: IPsDetails[],
  }

  export interface IPsDetails {
    ipAddress?: string
  }

  export interface IInternalFields {
    transactionId: string;
    statusId?: number;
    transactionAmount?: string;
    transactionCurrencyCode?: string;
    vendorReferenceId?: string;
    hasNoTransactionAmount?: boolean;
    vendorResponse?: string;
    requestAmount?: number;
    merchantId?: number;
    gatewayMerchantId?: string;
    qrImage?: string;
    deepLink?: string;
    vendorExtraData?: string;
    utrNumber?: string;
    vendorResponseData?: TransactionVendorResponse;
    tagId?: number;
  }

  export interface IWithdrawalOnlineFields {
    transactionId: string;
    statusId?: number;
    transactionAmount?: string;
    transactionCurrencyCode?: string;
    vendorReferenceId?: string;
    hasNoTransactionAmount?: boolean;
    requestAmount?: number;
    merchantId?: number;
    gatewayMerchantId?: string;
    vendorResponse?: string;
    cryptoData?: any;
    extraData?: string;
  }

  export interface BankAccount {
    bankAccountId: number;
    bankId: number;
    accountNumber: string;
    accountName: string;
    upiId: string;
    mobileNumber: string;
    active: boolean;
  }

  export interface BankAccountTransactionNote {
    bankAccountId: number;
    transactionNote: string;
    dateCreated: Date;
    upiId: string;
    accountName: string;
    utrRequired: number;
    upiMc: string;
  }

  export interface TransactionStatusDetailsDto {
    successUrl: string;
    failUrl: string;
    statusId: number;
    status: string;
  }

export interface TransactionVendorResponse {
  dateCreated: Date;
  type: number;
  name: string;
  contentHeader: string;
  contentBody: string;
}