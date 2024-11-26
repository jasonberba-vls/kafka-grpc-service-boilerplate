import { Request } from 'express';
import { Req } from '@nestjs/common';

export const WithdrawalProcess_SuccessfulRequest = {
    body: {
      "accountAddress": "testAddress",
      "accountBranch": "testBranch",
      "accountName": "Test Name",
      "accountNumber": "12345678901234",
      "bankName": "HDFC",
      "ifsc": "HDFC0001234",
      "callbackUrl": "www.testcallback.com",
      "merchantId": "1",
      "merchantCode": "359837950",
      "merchantReferenceId": "test_Ref_WD_0144",
      "requestAmount": "100",
      "requestCurrencyCode": "INR",
      "requestCountryCode": "IN",
      "signature": "cbf1eb6ae74a11210abd33047f32c05f60fead157ec3122377c9472411202f2e"
    },
    headers: {
      "host": "test"
    },
} as Request;
WithdrawalProcess_SuccessfulRequest.headers = {};
WithdrawalProcess_SuccessfulRequest.headers["cf-connecting-ip"] = "1.1.1.1";


export const WithdrawalVersionProcess_SuccessfulRequest = {
  body: {
      "merchantCode": "359837950",
      "merchantReferenceId": "test_Ref_WD_0136",
      "requestAmount": "100",
      "requestCurrencyCode": "INR",
      "requestCountryCode": "IN",
      "callbackUrl": "www.testcallback.com",
      "userId": "testUserId",
      "userIpAddress": "1.1.1.1",
      "bankName": "HDFC",
      "accountNumber": "12345678901234",
      "accountName": "Test Name",
      "accountAddress": "testAddress",
      "accountBranch": "testBranch",
      "ifsc": "HDFC0001234",
      "signature": "fd632d03a64ae5cf0fa0980be8bbd9c7cdcfd4656a73ebf67df15871e45a230b"
  },
  headers: {
    "host": "test"
  },
} as Request;
WithdrawalVersionProcess_SuccessfulRequest.headers = {};
WithdrawalVersionProcess_SuccessfulRequest.headers["cf-connecting-ip"] = "1.1.1.1";
WithdrawalVersionProcess_SuccessfulRequest.params = {};
WithdrawalVersionProcess_SuccessfulRequest.params["version"] = "v1.7";


export const WithdrawalCryptoVersionProcess_SuccessfulRequest = {
  body: {
      "merchantCode": "300000000",
      "merchantReferenceId": "test_Ref_WD_0157",
      "requestAmount": "100",
      "requestCurrencyCode": "INR",
      "requestCountryCode": "IN",
      "callbackUrl": "www.testcallback.com",
      "cryptoCurrencyCode": "USDTTRC20",
      "walletAddress": "testWalletaddress",
      "userId": "testUserId",
      "signature": "c24c4d8b0a4e285a14080a4efeb3b2679bc0d0fd6d04f5d8d57f511060e35dc7"
  },
  headers: {
    "host": "test"
  },
} as Request;
WithdrawalCryptoVersionProcess_SuccessfulRequest.headers = {};
WithdrawalCryptoVersionProcess_SuccessfulRequest.headers["cf-connecting-ip"] = "1.1.1.1";
WithdrawalCryptoVersionProcess_SuccessfulRequest.params = {};
WithdrawalCryptoVersionProcess_SuccessfulRequest.params["version"] = "v1.7";


export const WithdrawalCryptoDirectVersionProcess_SuccessfulRequest = {
  body: {
      "merchantCode": "300000000",
      "merchantReferenceId": "test_Ref_WD_0158",
      "requestAmount": "100",
      "requestCurrencyCode": "INR",
      "requestCountryCode": "IN",
      "callbackUrl": "www.testcallback.com",
      "walletAddress": "testWalletaddress",
      "userId": "testUserId",
      "firstName": "TestFirst",
      "lastName": "TestLast",
      "email": "test@email.com",
      "mobileNumber": "1234567890",
      "signature": "df72c5890674b61514bc2c665e5ba113bab2989cebf22c43bcf056d3ba7f83de"
  },
  headers: {
    "host": "test"
  },
} as Request;
WithdrawalCryptoDirectVersionProcess_SuccessfulRequest.headers = {};
WithdrawalCryptoDirectVersionProcess_SuccessfulRequest.headers["cf-connecting-ip"] = "1.1.1.1";
WithdrawalCryptoDirectVersionProcess_SuccessfulRequest.params = {};
WithdrawalCryptoDirectVersionProcess_SuccessfulRequest.params["version"] = "v1.7";



export const WithdrawalVersionProcess_InvalidVersionRequest = {
  body: {
      "transactionId": "test_Tran_0001"
  },
  headers: {
    "host": "test"
  },
} as Request;
WithdrawalVersionProcess_InvalidVersionRequest.headers = {};
WithdrawalVersionProcess_InvalidVersionRequest.headers["cf-connecting-ip"] = "1.1.1.1";
WithdrawalVersionProcess_InvalidVersionRequest.params = {};
WithdrawalVersionProcess_InvalidVersionRequest.params["version"] = "v1.69";
