export const DepositRequest_v1_3_SuccessfulRequest : any = {
    "transactionId": "test_Tran_0001",
    "merchantId": "1",
    "merchantCode": "359837950",
    "merchantReferenceId": "test_Ref_0045",
    "requestAmount": "100",
    "requestCurrencyCode": "INR",
    "requestCountryCode": "IN",
    "callbackUrl": "www.testcallback.com",
    "signature": "c5404b7e443966bead95497278bbe3a61490d4444996180d77460952f4f2e088",
    "extraData": ""
  };

  export const DepositRequest_v1_3_InvalidParamaterRequest : any = {
    "transactionId": "test_Tran_0001",
    "merchantId": "1",
    "merchantCode": "359837950",
    "merchantReferenceId": "test_Ref_0045",
    //"requestAmount": "100",
    "requestCurrencyCode": "INR",
    "requestCountryCode": "IN",
    "callbackUrl": "www.testcallback.com",
    "signature": "c5404b7e443966bead95497278bbe3a61490d4444996180d77460952f4f2e088",
    "extraData": ""
  };

  export const DepositRequest_v1_3_InvalidSignatureRequest : any = {
    "transactionId": "test_Tran_0001",
    "merchantId": "1",
    "merchantCode": "359837950",
    "merchantReferenceId": "test_Ref_0045",
    "requestAmount": "100",
    "requestCurrencyCode": "INR",
    "requestCountryCode": "IN",
    "callbackUrl": "www.testcallback.com",
    "signature": "c5404b7e443966bead95497278bbe3a61490d4444996180d77460952f4f2e088_Error",
    "extraData": ""
  };

  export const DepositRequest_v1_3_ProcessErrorRequest : any = {
    "transactionId": "test_Tran_0001",
    "merchantId": "1",
    "merchantCode": "359837950",
    "merchantReferenceId": "test_Ref_0045",
    "requestAmount": "100",
    "requestCurrencyCode": "INR",
    "requestCountryCode": "IN",
    "callbackUrl": "www.testcallback.com",
    "signature": "c5404b7e443966bead95497278bbe3a61490d4444996180d77460952f4f2e088",
    "extraData": ""
  };

  export const DepositRequest_v1_3_MerchantReferenceIdAlreadyExistsRequest : any = {
    "transactionId": "test_Tran_0001",
    "merchantId": "1",
    "merchantCode": "359837950",
    "merchantReferenceId": "test_Ref_0045",
    "requestAmount": "100",
    "requestCurrencyCode": "INR",
    "requestCountryCode": "IN",
    "callbackUrl": "www.testcallback.com",
    "signature": "c5404b7e443966bead95497278bbe3a61490d4444996180d77460952f4f2e088",
    "extraData": ""
  };

  export const DepositRequest_v1_3_InvalidCountryCodeRequest : any = {
    "transactionId": "test_Tran_0001",
    "merchantId": "1",
    "merchantCode": "359837950",
    "merchantReferenceId": "test_Ref_0045",
    "requestAmount": "100",
    "requestCurrencyCode": "INR",
    "requestCountryCode": "AA",
    "callbackUrl": "www.testcallback.com",
    "signature": "282912a8fae9c8f24f514ffe27262120a520072dbd60a170d39c2ef6db0fe428",
    "extraData": ""
  };

  export const DepositRequest_SuccessfulResult : any = {
    "statusCode": "00",
    "message": "Deposit request accepted",
    "transactionId": "121718106471978896",
    "redirectUrl": "www.test.redirect"
  };