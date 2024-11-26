import {
    CanActivate,
    ExecutionContext,
    HttpStatus,
    Injectable,
    Logger,
  } from '@nestjs/common';
  import { AppException } from '../../common/exception/app.exception';
  import { getClientIp } from '../functions/helperFunction'
  import { CommonStepGroup, CommonSteps, LogMessages, MerchantDepositQuerySteps, TransctionLog } from '../types/transaction-log'
  import { ResponseMessages } from '../types/reponses';
  import InternalApiService from '../../common/services/internal-api/internal-api.service';
  import { internalApiModels } from '../../common/services/internal-api/dtos';
  
  @Injectable()
  export class AuthorizationGuard implements CanActivate {
    constructor(private internalApiService: InternalApiService) {}
    async canActivate(context: ExecutionContext): Promise<boolean> {
      console.log('AuthorizationGuard');
      const request = context.switchToHttp().getRequest();
      const handler = context.getHandler();
      const ip = getClientIp(request);
      let merchantCode = '';

      //Handling for Health Check
      if (request.url == '/health'){
        return true;
      }
      //Handling for Crypto Module parameter
      else if (request.url.includes('/api/crypto')){
        merchantCode = request.params.id
      }
      else {
        merchantCode = request.body.merchantCode;
      }

      if (!merchantCode) {
        throw new AppException(
            ResponseMessages.UNAUTHORIZED,
            ResponseMessages.UNAUTHORIZED,
            HttpStatus.UNAUTHORIZED,
            true,
          );
      }

      let merchantDetails : internalApiModels.IMerchantDetails = {};
      try {
        let returnData = await this.internalApiService.getMerchantDetails(merchantCode);

        merchantDetails.ips = returnData.data.ips;
        merchantDetails.merchantId = returnData.data.merchantId;
        merchantDetails.secretKey = returnData.data.secretKey;
      } catch (error){
        //Log Step
        Logger.error(
        new TransctionLog(
            merchantCode,
            '',
            '',
            CommonSteps.GetMerchantDetailsApiCall,
            CommonStepGroup.GetMerchantDetails,
            {
            data: {
                result: LogMessages.ApiCallError,
                error: error.message,
                requestorIP: ip
            }
            }
          )
        );
      }

      if(!merchantDetails.merchantId){
        throw new AppException(
          ResponseMessages.UNAUTHORIZED,
          ResponseMessages.UNAUTHORIZED,
          HttpStatus.UNAUTHORIZED,
          true,
        );
      }
      
      if(merchantDetails.ips.find((x) => x.ipAddress == ip) == undefined){
        Logger.log(
          new TransctionLog(
            merchantCode,
            '',
            '',
            CommonSteps.IpChecker,
            CommonStepGroup.AuthorizationCheck,
            { data: { result: LogMessages.IpNotWhiteListed, requestorIP: ip, whitelistedIPs: merchantDetails.ips }}
          )
        );
        
        throw new AppException(
          ResponseMessages.UNAUTHORIZED,
          ResponseMessages.UNAUTHORIZED,
          HttpStatus.UNAUTHORIZED,
          true
        );
      }

      //Assign Merchant Info in Customer Request Objects
      request.merchantId = merchantDetails.merchantId;
      request.secretKey = merchantDetails.secretKey;
      request.controllerPath = Reflect.getMetadata('path', handler) || 'unknown path';

      return true;
    }
  }