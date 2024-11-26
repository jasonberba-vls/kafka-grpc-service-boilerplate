import { HttpStatus } from "@nestjs/common";
import { AppException } from "../../../common/exception/app.exception";
import { AxiosError, AxiosResponse } from "axios";

export const GetMerchantDetails_SuccessfulResult_merchantId: any = 1;
export const GetMerchantDetails_SuccessfulResult_secretKey: any = '00000000-1111-2222-3333-444444444444';
export const GetMerchantDetails_SuccessfulResult_ips: any = [ { ipAddress: '1.1.1.1' }];
export const GetMerchantDetails_SuccessfulResult : any = {
    status: 200,
    statusText: 'OK',
    data: {
        merchantId: GetMerchantDetails_SuccessfulResult_merchantId,
        merchantCode: '359837950',
        merchantName: 'KISMA',
        secretKey: GetMerchantDetails_SuccessfulResult_secretKey,
        depositAlertNotification: 0,
        withdrawalAlertNotification: 0,
        adjustmentNotification: 0,
        settlementNotification: 0,
        balanceAlertNotification: 0,
        transactionSummaryNotification: 0,
        active: 1,
        countries: [ 'IN' ],
        currencies: [ 'INR' ],
        ips: GetMerchantDetails_SuccessfulResult_ips,
        notificationEmails: [ 'test@email.com' ]
      }
};

export const GetMerchantDetails_FailedResult : any = new AppException('Error Request failed with status code 404', 
                                                                'Error Request failed with status code 404', 
                                                                HttpStatus.NOT_FOUND, 
                                                                true);

export const GetMerchantDetails_Crypto_SuccessfulResult : any = {
    status: 200,
    statusText: 'OK',
    data: {
        merchantId: 4,
        merchantCode: '300000000',
        merchantName: 'NUGGET',
        secretKey: '55555555-6666-7777-8888-999999999999',
        depositAlertNotification: 0,
        withdrawalAlertNotification: 0,
        adjustmentNotification: 0,
        settlementNotification: 0,
        balanceAlertNotification: 0,
        transactionSummaryNotification: 0,
        active: 1,
        countries: [ 'IN' ],
        currencies: [ 'INR' ],
        ips: [ '1.1.1.1' ],
        notificationEmails: [ 'test@email.com' ]
      }
};

export const GetGatewayMerchantSettings_SuccessfulResult_merchantSetting: any = JSON.stringify({
                                                                                  APIKey: 'FC6YCDG-WRAMFDY-NXZ44Z7-PHBH9FH',
                                                                                  IPN: 'fnTJMyG6N6EDEz+NE/6LbR5RQk4X8xSL'
                                                                                });
export const GetGatewayMerchantSettings_SuccessfulResult_merchantSecretSetting: any = JSON.stringify({
                                                                                  APIKey: 'FC6YCDG-WRAMFDY-NXZ44Z7-PHBH9FH',
                                                                                  IPN: 'rEQc+0J0Gyvao2mMXDYZJrs5kF4VD+m4',
                                                                                  email: 'vincent.liao@xurpay.com',
                                                                                  password: 'wer0WGV1mvn*vzf2zhe'
                                                                                });
export const GetGatewayMerchantSettings_SuccessfulResult_gatewayId: any = 34;
export const GetGatewayMerchantSettings_SuccessfulResult_gatewayMerchantId: any = 32;
export const GetGatewayMerchantSettings_SuccessfulResult : any = {
  status: 200,
  statusText: 'OK',
  data: {
    merchantSetting: GetGatewayMerchantSettings_SuccessfulResult_merchantSetting,
    merchantSecretSetting: GetGatewayMerchantSettings_SuccessfulResult_merchantSecretSetting,
    gatewayId: GetGatewayMerchantSettings_SuccessfulResult_gatewayId,
    gatewayMerchantId: GetGatewayMerchantSettings_SuccessfulResult_gatewayMerchantId
  }
};

export const GetGatewayMerchantSettings_FailedResult : any = new AppException('Error Request failed with status code 404', 
                                                                'Error Request failed with status code 404', 
                                                                HttpStatus.NOT_FOUND, 
                                                                true);

export const GetJsonSettings_SuccessfulResult_dynamicSetting: any = JSON.stringify({
                                                                                                  "VendorName":"FakeVendor",
                                                                                                  "VendorReferenceField":"vendorReferenceId_key",
                                                                                                  "GetEstimatedPrice": {
                                                                                                      "httpUrl": "https://fakeurl.fake",
                                                                                                      "httpMethod":"GET",
                                                                                                      "estimatedPriceField": "estimated_amount",
                                                                                                      "header":[
                                                                                                          {
                                                                                                              "HeaderId":"x-api-key",
                                                                                                              "HeaderValue":"",
                                                                                                              "customField": "|merchantSecretSetting.APIKey|"
                                                                                                          }
                                                                                                      ],
                                                                                                      "query":[
                                                                                                          {
                                                                                                              "name":"amount",
                                                                                                              "value":"",
                                                                                                              "customField":"|transactionDetails.requestAmount|"
                                                                                                          },
                                                                                                          {
                                                                                                              "name":"currency_from",
                                                                                                              "value":"",
                                                                                                              "customField":"|transactionDetails.requestCurrencyCode|"
                                                                                                          },
                                                                                                          {
                                                                                                              "name":"currency_to",
                                                                                                              "value":"",
                                                                                                              "customField":"|transactionDetails.cryptoCurrencyCode|"
                                                                                                          }
                                                                                                      ]
                                                                                                  },
                                                                                                  "DataStorage":[
                                                                                                      {
                                                                                                          "name":"CallbackURL",
                                                                                                          "value":"",
                                                                                                          "functionName": "getCallbackURL",
                                                                                                          "parameters": [
                                                                                                              {
                                                                                                                  "name": "transactionId",
                                                                                                                  "value": "",
                                                                                                                  "customField": "transactionDetails.transactionId"
                                                                                                              }
                                                                                                          ]
                                                                                                      },
                                                                                                      {
                                                                                                          "name":"SuccessURL",
                                                                                                          "value":"",
                                                                                                          "functionName": "getSuccessURL"
                                                                                                      }
                                                                                                  ],
                                                                                                  "InputControls":[
                                                                                                      {
                                                                                                          "name":"walletAddress",
                                                                                                          "label":"Wallet Address",
                                                                                                          "value":"",
                                                                                                          "type":"text",
                                                                                                          "validators":{
                                                                                                              "required":true
                                                                                                          },
                                                                                                          "transactionDetails":"walletAddress"
                                                                                                      },
                                                                                                      {
                                                                                                          "name":"destinationTag",
                                                                                                          "label":"Destination Tag (Optional)",
                                                                                                          "value":"",
                                                                                                          "type":"text",
                                                                                                          "validators":{
                                                                                                          },
                                                                                                          "transactionDetails":"destinationTag"
                                                                                                      }
                                                                                                  ],
                                                                                                  "WithdrawalProcess":{
                                                                                                      "Steps":[
                                                                                                          {
                                                                                                              "stepName": "ProcessWithdrawal",
                                                                                                              "type": "httpCall",
                                                                                                              "httpUrl": "https://fakemerchant.fake",
                                                                                                              "httpMethod": "POST",
                                                                                                              "header":[
                                                                                                                  {
                                                                                                                      "HeaderId":"x-api-key",
                                                                                                                      "HeaderValue":"",
                                                                                                                      "customField": "|merchantSecretSetting.APIKey|"
                                                                                                                  }
                                                                                                              ],
                                                                                                              "body":[
                                                                                                                  {
                                                                                                                      "name":"withdrawals",
                                                                                                                      "value": "testValue"
                                                                                                                  }
                                                                                                              ]
                                                                                                          }
                                                                                                      ]
                                                                                                  }
                                                                                                });
export const GetJsonSettings_SuccessfulResult : any = {
                                                                    status: 200,
                                                                    statusText: 'OK',
                                                                    data: {
                                                                      dynamicSetting: GetJsonSettings_SuccessfulResult_dynamicSetting,
                                                                    }
                                                                  };
export const GetJsonSettings_FailedResult : any = new AppException('Error Request failed with status code 404', 
                                                'Error Request failed with status code 404', 
                                                HttpStatus.NOT_FOUND, 
                                                true);
export const GetJsonSettings_SuccessfulResult_dynamicSettingV2: any = JSON.stringify({
                                                                        "VendorName":"FakeVendor",
                                                                        "VendorReferenceField":"nowpayments",
                                                                        "GetEstimatedPrice": {
                                                                            "httpUrl": "https://fakeurl.fake",
                                                                            "httpMethod":"GET",
                                                                            "estimatedPriceField": "estimated_amount",
                                                                            "header":[
                                                                                {
                                                                                    "HeaderId":"x-api-key",
                                                                                    "HeaderValue":"",
                                                                                    "customField": "|merchantSecretSetting.APIKey|"
                                                                                }
                                                                            ],
                                                                            "query":[
                                                                                {
                                                                                    "name":"amount",
                                                                                    "value":"",
                                                                                    "customField":"|transactionDetails.requestAmount|"
                                                                                },
                                                                                {
                                                                                    "name":"currency_from",
                                                                                    "value":"",
                                                                                    "customField":"|transactionDetails.requestCurrencyCode|"
                                                                                },
                                                                                {
                                                                                    "name":"currency_to",
                                                                                    "value":"",
                                                                                    "customField":"|transactionDetails.cryptoCurrencyCode|"
                                                                                }
                                                                            ]
                                                                        },
                                                                        "DataStorage":[
                                                                            {
                                                                                "name":"CallbackURL",
                                                                                "value":"",
                                                                                "functionName": "getCallbackURL",
                                                                                "parameters": [
                                                                                    {
                                                                                        "name": "transactionId",
                                                                                        "value": "",
                                                                                        "customField": "transactionDetails.transactionId"
                                                                                    },
                                                                                    {
                                                                                    "name": "test",
                                                                                    "value": "",
                                                                                    "customField": "merchantSetting.APIKey"
                                                                                }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "name":"SuccessURL",
                                                                                "value":"",
                                                                                "functionName": "getSuccessURL"
                                                                            }
                                                                        ],
                                                                        "InputControls":[
                                                                            {
                                                                                "name":"walletAddress",
                                                                                "label":"Wallet Address",
                                                                                "value":"",
                                                                                "type":"text",
                                                                                "validators":{
                                                                                    "required":true
                                                                                },
                                                                                "transactionDetails":"walletAddress"
                                                                            },
                                                                            {
                                                                                "name":"destinationTag",
                                                                                "label":"Destination Tag (Optional)",
                                                                                "value":"",
                                                                                "type":"text",
                                                                                "validators":{
                                                                                },
                                                                                "transactionDetails":"destinationTag"
                                                                            }
                                                                        ],
                                                                        "WithdrawalProcess":{
                                                                            "Steps":[
                                                                                {
                                                                                "stepName": "ProcessWithdrawal2",
                                                                                "type": "bodyValue"
                                                                                },
                                                                                {
                                                                                    "stepName": "ProcessWithdrawal",
                                                                                    "type": "httpCall",
                                                                                    "httpUrl": "https://fakemerchant.fake",
                                                                                    "httpMethod": "POST",
                                                                                    "header":[
                                                                                        {
                                                                                            "HeaderId":"x-api-key",
                                                                                            "HeaderValue":"",
                                                                                            "customField": "|merchantSecretSetting.APIKey|"
                                                                                        },
                                                                                        {
                                                                                        "HeaderId":"test1",
                                                                                        "HeaderValue":"",
                                                                                        "customField": "|merchantSettings.APIKey|"
                                                                                        },
                                                                                        {
                                                                                        "HeaderId":"test2",
                                                                                        "HeaderValue":"",
                                                                                        "customField": "|transactionDetails.transactionId|"
                                                                                        },
                                                                                        {
                                                                                        "HeaderId":"test3",
                                                                                        "HeaderValue":"",
                                                                                        "customField": "|dataStorage.SuccessURL|"
                                                                                        },
                                                                                        {
                                                                                        "HeaderId":"test4",
                                                                                        "HeaderValue":"",
                                                                                        "stepValue": "|ProcessWithdrawal2.body|"
                                                                                        }
                                                                                    ],
                                                                                    "body":[
                                                                                        {
                                                                                            "name":"withdrawals",
                                                                                            "value": "testValue"
                                                                                        },
                                                                                        {
                                                                                        "type":"arrayJson",
                                                                                        "name":"test1",
                                                                                        "value": '{ "test" : "testValue" }'
                                                                                        },
                                                                                        {
                                                                                        "name":"test2",
                                                                                        "customField": "|transactionDetails.transactionId|"
                                                                                        },
                                                                                        {
                                                                                        "name":"test3",
                                                                                        "customField": "|merchantSettings.APIKey|"
                                                                                        },
                                                                                        {
                                                                                        "name":"test4",
                                                                                        "customField": "|merchantSecretSetting.APIKey|"
                                                                                        },
                                                                                        {
                                                                                        "name":"test5",
                                                                                        "customField": "|transactionDetails.destinationTag|"
                                                                                        },
                                                                                        {
                                                                                        "name":"test6",
                                                                                        "customField": "|dataStorage.SuccessURL|"
                                                                                        },
                                                                                        {
                                                                                        "name":"test7",
                                                                                        "stepValue": "|ProcessWithdrawal2.body|"
                                                                                        },
                                                                                    ]
                                                                                },
                                                                                
                                                                            ]
                                                                        }
                                                                    });
export const GetJsonSettings_SuccessfulResultV2 : any = {
                                                                    status: 200,
                                                                    statusText: 'OK',
                                                                    data: {
                                                                      dynamicSetting: GetJsonSettings_SuccessfulResult_dynamicSettingV2,
                                                                    }
                                                                  };


export const GetWithdrawalOnlineTransactionDetails_SuccessfulResult_cryptoCurrencyCode: any = 'INR';
export const GetWithdrawalOnlineTransactionDetails_SuccessfulResult_walletAddress: any = 'testWalletaddress';
export const GetWithdrawalOnlineTransactionDetails_SuccessfulResult_destinationTag: any = null;
export const GetWithdrawalOnlineTransactionDetails_SuccessfulResult : any = {
status: 200,
statusText: 'OK',
data: {
    transactionId: '221718287747834765',
    statusId: 1,
    status: 'Pending',
    gatewayId: 34,
    merchantId: 4,
    merchantCode: '300000000',
    merchantReferenceId: 'test_Ref_WD_0149',
    gatewayMerchantId: 32,
    requestAmount: 100,
    requestCurrencyCode: 'INR',
    requestCountryCode: 'IN',
    //extraData: '{"firstName":"TestFirst","lastName":"TestLast","email":"test@email.com","mobileNumber":"1234567890"}',
    cryptoData: {
      cryptoCurrencyCode: GetWithdrawalOnlineTransactionDetails_SuccessfulResult_cryptoCurrencyCode,
      walletAddress: GetWithdrawalOnlineTransactionDetails_SuccessfulResult_walletAddress,
      destinationTag: GetWithdrawalOnlineTransactionDetails_SuccessfulResult_destinationTag
    },
    walletAddress: 'testWalletaddress',
    destinationTag: null,
    cryptoCurrencyCode: 'INR',
    callbackUrl: 'www.testcallback.com',
}
};

export const GetWithdrawalOnlineTransactionDetails_SuccessfulResult_EmptyData : any = {
  status: 200,
  statusText: 'OK',
  data: {
      transactionId: '221718287747834765',
      statusId: 1,
      status: 'Pending',
      gatewayId: 34,
      merchantId: 4,
      merchantCode: '300000000',
      merchantReferenceId: 'test_Ref_WD_0149',
      gatewayMerchantId: 32,
      requestAmount: 100,
      requestCurrencyCode: 'INR',
      requestCountryCode: 'IN',
      extraData: '{"firstName":"TestFirst","lastName":"TestLast","email":"test@email.com","mobileNumber":"1234567890"}',
      walletAddress: 'testWalletaddress',
      destinationTag: null,
      cryptoCurrencyCode: 'INR',
      callbackUrl: 'www.testcallback.com',
  }
};

export const GetWithdrawalOnlineTransactionDetails_SuccessfulResult_InvalidStatusId : any = {
    status: 200,
    statusText: 'OK',
    data: {
        transactionId: '221718287747834765',
        statusId: 2,
        status: 'Pending',
        gatewayId: 34,
        merchantId: 4,
        merchantCode: '300000000',
        merchantReferenceId: 'test_Ref_WD_0149',
        gatewayMerchantId: 32,
        requestAmount: 100,
        requestCurrencyCode: 'INR',
        requestCountryCode: 'IN',
        extraData: '{"firstName":"TestFirst","lastName":"TestLast","email":"test@email.com","mobileNumber":"1234567890"}',
        walletAddress: 'testWalletaddress',
        destinationTag: null,
        cryptoCurrencyCode: 'INR',
        callbackUrl: 'www.testcallback.com',
    }
  };

export const GetWithdrawalOnlineTransactionDetails_FailedResult : any = new AppException('Error Request failed with status code 404', 
                                                'Error Request failed with status code 404', 
                                                HttpStatus.NOT_FOUND, 
                                                true);

export const UpdateWithdrawalOnlineTransaction_SuccessfulResult : any = {
    status: 200,
    statusText: 'OK'
};

// export const UpdateWithdrawalOnlineTransaction_FailedResult : any = new AppException('Error Request failed with status code 404', 
//                                                 'Error Request failed with status code 404', 
//                                                 HttpStatus.NOT_FOUND,
//                                                 true);
export const updateWithdrawalOnlineTransactionErrorMessage: AxiosResponse = {
    data: 'Error Processing Request',
    status: 400,
    statusText: 'Bad Request',
    headers: undefined,
    config: undefined
  };
export const UpdateWithdrawalOnlineTransaction_FailedResult : any = new AxiosError('Request failed with status code 400', 
                                                                'ERR_BAD_REQUEST',
                                                                undefined,
                                                                undefined,
                                                                updateWithdrawalOnlineTransactionErrorMessage
                                                                );