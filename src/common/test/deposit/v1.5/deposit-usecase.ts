export const DepositRequest_v1_5_SuccessfulRequest : any = {
  "merchantId": "1",
  "merchantCode": "359837950",
  "merchantReferenceId": "test_Ref_0052",
  "requestAmount": "100",
  "requestCurrencyCode": "INR",
  "requestCountryCode": "IN",
  "paymentType": "SELECTION",
  "callbackUrl": "www.testcallback.com",
  "extraData": "",
   "signature": "7e336cdd937e201f6cffebc14b6da91f83414b8bf8721149d8a02752111dfa6b"
};

  export const DepositRequest_v1_5_InvalidParamaterRequest : any = {
    "merchantId": "1",
    "merchantCode": "359837950",
    "merchantReferenceId": "test_Ref_0052",
    "requestAmount": "100",
    "requestCurrencyCode": "INR",
    "requestCountryCode": "IN",
    //"paymentType": "SELECTION",
    "callbackUrl": "www.testcallback.com",
    "extraData": "",
     "signature": "7e336cdd937e201f6cffebc14b6da91f83414b8bf8721149d8a02752111dfa6b"
};

  export const DepositRequest_v1_5_InvalidSignatureRequest : any = {
    "merchantId": "1",
    "merchantCode": "359837950",
    "merchantReferenceId": "test_Ref_0052",
    "requestAmount": "100",
    "requestCurrencyCode": "INR",
    "requestCountryCode": "IN",
    "paymentType": "SELECTION",
    "callbackUrl": "www.testcallback.com",
    "extraData": "",
     "signature": "7e336cdd937e201f6cffebc14b6da91f83414b8bf8721149d8a02752111dfa6b_Error"
  };

  export const DepositRequest_v1_5_ProcessErrorRequest : any = {
    "merchantId": "1",
    "merchantCode": "359837950",
    "merchantReferenceId": "test_Ref_0052",
    "requestAmount": "100",
    "requestCurrencyCode": "INR",
    "requestCountryCode": "IN",
    "paymentType": "SELECTION",
    "callbackUrl": "www.testcallback.com",
    "extraData": "",
     "signature": "7e336cdd937e201f6cffebc14b6da91f83414b8bf8721149d8a02752111dfa6b"
  };

  export const DepositRequest_v1_5_MerchantReferenceIdAlreadyExistsRequest : any = {
    "merchantId": "1",
    "merchantCode": "359837950",
    "merchantReferenceId": "test_Ref_0052",
    "requestAmount": "100",
    "requestCurrencyCode": "INR",
    "requestCountryCode": "IN",
    "paymentType": "SELECTION",
    "callbackUrl": "www.testcallback.com",
    "extraData": "",
     "signature": "7e336cdd937e201f6cffebc14b6da91f83414b8bf8721149d8a02752111dfa6b"
  };

  export const DepositRequest_v1_5_InvalidCountryCodeRequest : any = {
    "merchantId": "1",
    "merchantCode": "359837950",
    "merchantReferenceId": "test_Ref_0052",
    "requestAmount": "100",
    "requestCurrencyCode": "INR",
    "requestCountryCode": "AA",
    "paymentType": "SELECTION",
    "callbackUrl": "www.testcallback.com",
    "extraData": "",
    "signature": "cb6acc3bef84f39852b9f065a28b12fee620204c808785cd21d607bb6fd74dd8"
  };