import { internalApiModels } from "../../services/internal-api/dtos";

export const GetMerchantDetails_SuccessfulResult : any = {
    ips: [
      { ipAddress: '1.1.1.1' },
    ],
    merchantId: 1,
    secretKey: '00000000-1111-2222-3333-444444444444'
}

export const GetMerchantDetails_Crypto_SuccessfulResult : any = {
  ips: [
    { ipAddress: '1.1.1.1' },
  ],
  merchantId: 4,
  secretKey: '55555555-6666-7777-8888-999999999999'
}

let emptyReturn: Promise<any>;

//GetWithdrawalOnlineTransactionDetails
export const GetWithdrawalOnlineTransactionDetails_SuccessfulResult : any = {
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
    cryptoCurrencyCode: 'INR',
    walletAddress: 'testWalletaddress',
    destinationTag: null
  },
  walletAddress: 'testWalletaddress',
  destinationTag: null,
  cryptoCurrencyCode: 'INR',
  callbackUrl: 'www.testcallback.com',
}
export const GetWithdrawalOnlineTransactionDetails_InvalidStatusResult : any = {
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
    cryptoData: {
      cryptoCurrencyCode: 'INR',
      walletAddress: 'testWalletaddress',
      destinationTag: null
    },
    walletAddress: 'testWalletaddress',
    destinationTag: null,
    cryptoCurrencyCode: 'INR',
    callbackUrl: 'www.testcallback.com',
}

export const GetWithdrawalOnlineTransactionDetails_FailedResult : any = emptyReturn;

//GetJsonSettings
export const GetJsonSettings_SuccessfulResult : any = {
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
}
export const GetJsonSettings_SuccessfulResult2 : any = {
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
}
export const GetJsonSettings_FailedResult : any = emptyReturn;

//GetGatewayMerchantSettings
export const GetGatewayMerchantSettings_SuccessfulResult : any = {
  merchantSetting: {
    APIKey: 'FC6YCDG-WRAMFDY-NXZ44Z7-PHBH9FH',
    IPN: 'fnTJMyG6N6EDEz+NE/6LbR5RQk4X8xSL'
  },
  merchantSecretSetting: {
    APIKey: 'FC6YCDG-WRAMFDY-NXZ44Z7-PHBH9FH',
    IPN: 'rEQc+0J0Gyvao2mMXDYZJrs5kF4VD+m4',
    email: 'vincent.liao@xurpay.com',
    password: 'wer0WGV1mvn*vzf2zhe'
  },
  gatewayId: 34,
  gatewayMerchantId: 32
}
let getGatewayMerchantSettingsEmptyReturn: internalApiModels.IGatewayMerchant = {};
export const GetGatewayMerchantSettings_FailedResult : any = getGatewayMerchantSettingsEmptyReturn;

//UpdateWithdrawalOnlineTransaction
export const UpdateWithdrawalOnlineTransaction_SuccessfulResult : any = { 
  status: 'Success', 
  message: 'Successfully Updated.' 
}
export const UpdateWithdrawalOnlineTransaction_FailedResult : any = { 
    status: 'Failed', 
    message: 'Error' 
}

export const GetMerchantDetails_FailedResult : any = {
}