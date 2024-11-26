export const QueryDeposit_SuccessfulRequest : any = {
    "merchantCode": "359837950",
    "merchantReferenceId": "test_Ref_0002",
    "signature": "696bc20d81e741860b17b2ab94109a4b02515a2510f930920bca956b23ee91f4"
};

export const QueryDeposit_InvalidSignatureRequest : any = {
    "merchantCode": "359837950",
    "merchantReferenceId": "test_Ref_0002",
    "signature": "696bc20d81e741860b17b2ab94109a4b02515a2510f930920bca956b23ee91f4_Error"
};

export const QueryDeposit_InvalidParameterRequest : any = {
    "merchantCode": "359837950",
    //"merchantReferenceId": "test_Ref_0002",
    "signature": "696bc20d81e741860b17b2ab94109a4b02515a2510f930920bca956b23ee91f4"
};

export const QueryDeposit_ProcessErrorRequest : any = {
    "merchantCode": "359837950",
    "merchantReferenceId": "test_Ref_0002",
    "signature": "696bc20d81e741860b17b2ab94109a4b02515a2510f930920bca956b23ee91f4"
};

export const QueryDeposit_SuccessfulResult : any = {
  "merchantCode": "359837950",
  "merchantReferenceId": "test_Ref_0002",
  "transactionId": "121716283412919855",
  "statusCode": "00",
  "message": "Deposit transaction failed",
  "requestAmount": 100,
  "requestCurrencyCode": "INR",
  "signature": "b2e3e1ff209f0fb16419c78f5e7843e8f9065e6063151a45e2fe890b3ee45dc9"
};

export const QueryVersionDeposit_SuccessfulResult : any = {
  "versionCode": "v1.6",
  "merchantCode": "359837950",
  "merchantReferenceId": "test_Ref_0002",
  "transactionId": "121712592569275975",
  "paymentType": "SELECTION",
  "statusCode": "00",
  "message": "Pending",
  "requestAmount": 100,
  "requestCurrencyCode": "INR",
  "utrNumber": null,
  "signature": "73f4c6511148b62ba3af6e892e769454d414aa65808bbdd5381431a1be8d69bd"
};

// ============================================================================================================================== //

export const QueryWithdrawal_SuccessfulRequest : any = {
  "merchantCode": "359837950",
  "merchantReferenceId": "TEST_WD_240417_001",
  "signature": "6a0882962639156687f7d6e6e0749a01b943b4ec67335609d93c491fbe4c154f"
};

export const QueryWithdrawal_InvalidSignatureRequest : any = {
  "merchantCode": "359837950",
  "merchantReferenceId": "TEST_WD_240417_001",
  "signature": "6a0882962639156687f7d6e6e0749a01b943b4ec67335609d93c491fbe4c154f_Error"
};

export const QueryWithdrawal_InvalidParameterRequest : any = {
  "merchantCode": "359837950",
  //"merchantReferenceId": "TEST_WD_240417_001",
  "signature": "6a0882962639156687f7d6e6e0749a01b943b4ec67335609d93c491fbe4c154f"
};

export const QueryWithdrawal_ProcessErrorRequest : any = {
  "merchantCode": "359837950",
  "merchantReferenceId": "TEST_WD_240417_001",
  "signature": "6a0882962639156687f7d6e6e0749a01b943b4ec67335609d93c491fbe4c154f"
};

export const QueryWithdrawal_SuccessfulResult : any = {
  "versionCode": "v1.6",
  "merchantCode": "359837950",
  "merchantReferenceId": "TEST_WD_240417_001",
  "transactionId": "211713347845788003",
  "paymentType": "BANK",
  "statusCode": "00",
  "message": "Pending",
  "requestAmount": 100,
  "requestCurrencyCode": "INR",
  "signature": "662ebdde72668a14a5884f44b685d3fb21c2e42d52fcab8936655d6c508e949a"
};

export const QueryVersionWithdrawal_SuccessfulResult : any = {
  "versionCode": "v1.6",
  "merchantCode": "359837950",
  "merchantReferenceId": "TEST_WD_240417_001",
  "transactionId": "211713347845788003",
  "paymentType": "BANK",
  "statusCode": "00",
  "message": "Pending",
  "requestAmount": 100,
  "requestCurrencyCode": "INR",
  "utrNumber": null,
  "signature": "a07099408fdee46c97875d4481c24f961482ecdda0c9ef792dd3c687769a2f2d"
};