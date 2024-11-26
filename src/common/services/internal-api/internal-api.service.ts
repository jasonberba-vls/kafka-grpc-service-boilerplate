import 'dotenv/config';
import { InternalApiWrapper } from '../../../common/wrapper/internalApiWrapper';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class InternalApiService {
  private INTERNAL_API_URL: string;
  constructor(configService: ConfigService, private internalApi: InternalApiWrapper) {
    this.INTERNAL_API_URL = configService.get('INTERNAL_API_URL');
  }

  async getMerchantDetails(
        merchantCode: string | undefined
      ): Promise<any> {
        const API_URL = `${this.INTERNAL_API_URL}/api/settings/merchant/${merchantCode}`;
        let returnData: any;

        //await internalApi
        await this.internalApi
          .get(API_URL)
          .then(function (response) {
            returnData = response;
          })
          .catch(function (error) {
            throw error;
          });
        return returnData;
  }

  //Settings
  async getGatewayMerchantSecretSettings(
    gatewayMerchantId: string
  ): Promise<any> {
    const settingsApi = `${this.INTERNAL_API_URL}/api/settings/gateway-merchant/${gatewayMerchantId}`;
    let returnData: any;

    //await internalApi
    await this.internalApi
      .get(settingsApi)
      .then(function (response) {
        returnData = response;
      })
      .catch(function (error) {
        throw error;
      });

    return returnData;
  }

  async getJsonSettings(
    gatewayId: string | undefined,
    typeId: number | undefined
  ): Promise<any> {
    const transactionApi = `${this.INTERNAL_API_URL}/api/settings/gateway-dynamic-setting?gatewayId=${gatewayId}&typeId=${typeId}`;
    let returnData: any;

    //await internalApi
    await this.internalApi
      .get(transactionApi)
      .then(function (response) {
        returnData = response;
      })
      .catch(function (error) {
        throw error;
      });

    return returnData;
  }

  async getWithdrawalOnlineTransactionDetails(
    transactionId: string | undefined
  ): Promise<any> {
    const transactionApi = `${this.INTERNAL_API_URL}/api/merchant-withdrawal-online-transaction/${transactionId}`;
    let returnData: any;
    
    //await internalApi
    await this.internalApi
      .get(transactionApi)
      .then(function (response) {
        returnData = response;
      })
      .catch(function (error) {
        throw error;
      });

    return returnData;
  }

  async updateWithdrawalOnlineTransaction(
    internalFields: any | undefined
  ): Promise<any> {
    const API_URL = `${this.INTERNAL_API_URL}/api/merchant-withdrawal-online-transaction/${internalFields.transactionId}`;
    let returnData: any;

    //await internalApi
    await this.internalApi
      .put(API_URL, internalFields)
      .then(function (response) {
        returnData = response;
      })
      .catch(function (error) {
        throw error;
      });

    return returnData;
  }
}