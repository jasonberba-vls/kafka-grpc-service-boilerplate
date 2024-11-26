import { Request } from 'express';

export const DepositProcess_SuccessfulRequest = {
    body: {
      "transactionId": "test_Tran_0001",
      "merchantId": "1",
      "merchantCode": "359837950",
      "merchantReferenceId": "test_Ref_0056",
      "requestAmount": "100",
      "requestCurrencyCode": "INR",
      "requestCountryCode": "IN",
      "callbackUrl": "www.testcallback.com",
      "signature": "2eb562f97ea831177b98fb0d710ef404379731b5745e9a694ba714d3ae19c465",
      "extraData": ""
  },
} as Request;
DepositProcess_SuccessfulRequest.headers = {};
DepositProcess_SuccessfulRequest.headers["cf-connecting-ip"] = "1.1.1.1";


export const DepositVersionProcess_SuccessfulRequest = {
  body: {
      "transactionId": "test_Tran_0001",
      "merchantId": "1",
      "merchantCode": "359837950",
      "merchantReferenceId": "test_Ref_0056",
      "requestAmount": "100",
      "requestCurrencyCode": "INR",
      "requestCountryCode": "IN",
      "callbackUrl": "www.testcallback.com",
      "signature": "2eb562f97ea831177b98fb0d710ef404379731b5745e9a694ba714d3ae19c465",
      "extraData": ""
  },
} as Request;
DepositVersionProcess_SuccessfulRequest.headers = {};
DepositVersionProcess_SuccessfulRequest.headers["cf-connecting-ip"] = "1.1.1.1";
DepositVersionProcess_SuccessfulRequest.params = {};
DepositVersionProcess_SuccessfulRequest.params["version"] = "v1.4";;


export const DepositVersionProcess_InvalidVersionRequest = {
  body: {
      "transactionId": "test_Tran_0001",
      "merchantId": "1",
      "merchantCode": "359837950",
      "merchantReferenceId": "test_Ref_0056",
      "requestAmount": "100",
      "requestCurrencyCode": "INR",
      "requestCountryCode": "IN",
      "callbackUrl": "www.testcallback.com",
      "signature": "2eb562f97ea831177b98fb0d710ef404379731b5745e9a694ba714d3ae19c465",
      "extraData": ""
  },
} as Request;
DepositVersionProcess_InvalidVersionRequest.headers = {};
DepositVersionProcess_InvalidVersionRequest.headers["cf-connecting-ip"] = "1.1.1.1";
DepositVersionProcess_InvalidVersionRequest.params = {};
DepositVersionProcess_InvalidVersionRequest.params["version"] = "v1.69";;
