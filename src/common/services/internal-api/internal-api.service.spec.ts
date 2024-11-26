
import { Test, TestingModule } from '@nestjs/testing';
import InternalApiService from './internal-api.service';
import { ConfigService } from "@nestjs/config";
import { InternalApiWrapper } from "../../wrapper/internalApiWrapper";
import * as internalApiServiceTestObjects from '../../test/internalApi/internalApi-service';
import * as internalApiUseCaseTestObjects  from '../../test/internalApi/internalApi-usecase';

describe('InternalApiService2', () => {
  //Initialize Objects and Mocks
  let internalApiService: InternalApiService;
  let mockInternalApiWrapper: jest.Mocked<InternalApiWrapper>;
  
  //Initialize  Env Object
  const originalEnv = process.env;

  beforeEach(async () => {
    //Initialize Env Key Values
    jest.resetModules();
      process.env = {
        REQUEST_API_TOKEN: 'token_123',
        INTERNAL_API_URL: 'https://intertalapiurl.fake.url'
      };

    const module: TestingModule = await Test.createTestingModule({
    providers: [
        InternalApiService,
        InternalApiWrapper,
        ConfigService,
    ],
    }).compile();

    //Initialize Object to Test
    internalApiService = module.get<InternalApiService>(InternalApiService);

    //Map response to Mock Objects
    mockInternalApiWrapper = module.get(InternalApiWrapper);
    jest.spyOn(mockInternalApiWrapper, 'get').mockImplementation(() => Promise.resolve({}));
    jest.spyOn(mockInternalApiWrapper, 'post').mockImplementation(() => Promise.resolve({}));
    jest.spyOn(mockInternalApiWrapper, 'put').mockImplementation(() => Promise.resolve({}));
  });

  afterEach(() => {
    process.env = originalEnv;
  });
  
  describe('Initialization', () => {
    test('Success', () => {
        //Assert Test Scenarios
        expect(internalApiService).toBeDefined();
    });
  });

  describe('getMerchantDetails', () => {
    test('Successful', async () => {
        //Override Successful return
        jest.spyOn(mockInternalApiWrapper, 'get').mockImplementation(() => Promise.resolve(internalApiServiceTestObjects.GetMerchantDetails_SuccessfulResult) );

        let getMerchantDetailsResult: any = {};
        getMerchantDetailsResult = await internalApiService.getMerchantDetails(internalApiUseCaseTestObjects.GetMerchantDetails_SuccessfulResult);
        //console.log('getMerchantDetails Successful', getMerchantDetailsResult);

        //Assert Test Scenarios
        expect(getMerchantDetailsResult).not.toBeUndefined();
        expect(getMerchantDetailsResult).toBe(internalApiServiceTestObjects.GetMerchantDetails_SuccessfulResult);
    });

    test('Failed - Exception', async () => {
      //Override Successful return
      jest.spyOn(mockInternalApiWrapper, 'get').mockImplementation(() => {throw new Error('Error');});

      let getMerchantDetailsResult: any = {};
      getMerchantDetailsResult = internalApiService.getMerchantDetails(internalApiUseCaseTestObjects.GetMerchantDetails_SuccessfulResult);

      //Assert Test Scenarios
      await expect(getMerchantDetailsResult).rejects.toThrow('Error');

    });

    test('Failed - Exception 2', async () => {
      jest.spyOn(mockInternalApiWrapper, 'get').mockImplementation(() => Promise.reject(new Error('Error')));
      let errorResult: any;
      
      let getMerchantDetailsResult: any = {};
      getMerchantDetailsResult = internalApiService.getMerchantDetails(internalApiUseCaseTestObjects.GetMerchantDetails_SuccessfulResult);

      //Assert Test Scenarios
      await expect(getMerchantDetailsResult).rejects.toEqual(Error('Error'));
    });
  });

  describe('getGatewayMerchantSecretSettings', () => {
    test('Successful', async () => {
        //Override Successful return
        jest.spyOn(mockInternalApiWrapper, 'get').mockImplementation(() => Promise.resolve(internalApiServiceTestObjects.GetGatewayMerchantSettings_SuccessfulResult) );

        let getGatewayMerchantSecretSettingsResult: any = {};
        getGatewayMerchantSecretSettingsResult = await internalApiService.getGatewayMerchantSecretSettings(internalApiUseCaseTestObjects.GetGatewayMerchantSettings_SuccessfulResult);
        //console.log('getGatewayMerchantSecretSettings Successful', getGatewayMerchantSecretSettingsResult);

        //Assert Test Scenarios
        expect(getGatewayMerchantSecretSettingsResult).not.toBeUndefined();
        expect(getGatewayMerchantSecretSettingsResult).toBe(internalApiServiceTestObjects.GetGatewayMerchantSettings_SuccessfulResult);
    });

    test('Failed - Exception', async () => {
      //Override Successful return
      jest.spyOn(mockInternalApiWrapper, 'get').mockImplementation(() => {throw new Error('Error');});

      let getGatewayMerchantSecretSettingsResult: any = {};
      getGatewayMerchantSecretSettingsResult = internalApiService.getGatewayMerchantSecretSettings(internalApiUseCaseTestObjects.GetGatewayMerchantSettings_SuccessfulResult);

      //Assert Test Scenarios
      await expect(getGatewayMerchantSecretSettingsResult).rejects.toThrow('Error');

    });

    test('Failed - Exception 2', async () => {
      jest.spyOn(mockInternalApiWrapper, 'get').mockImplementation(() => Promise.reject(new Error('Error')));
      let errorResult: any;
      
      let getGatewayMerchantSecretSettingsResult: any = {};
      getGatewayMerchantSecretSettingsResult = internalApiService.getGatewayMerchantSecretSettings(internalApiUseCaseTestObjects.GetGatewayMerchantSettings_SuccessfulResult);

      //Assert Test Scenarios
      await expect(getGatewayMerchantSecretSettingsResult).rejects.toEqual(Error('Error'));
    });
  });

  describe('getJsonSettings', () => {
    test('Successful', async () => {
        //Override Successful return
        jest.spyOn(mockInternalApiWrapper, 'get').mockImplementation(() => Promise.resolve(internalApiServiceTestObjects.GetJsonSettings_SuccessfulResult) );

        let getJsonSettingsResult: any = {};
        getJsonSettingsResult = await internalApiService.getJsonSettings('1', 1);
        //console.log('getJsonSettings Successful', getJsonSettingsResult);

        //Assert Test Scenarios
        expect(getJsonSettingsResult).not.toBeUndefined();
        expect(getJsonSettingsResult).toBe(internalApiServiceTestObjects.GetJsonSettings_SuccessfulResult);
    });

    test('Failed - Exception', async () => {
      //Override Successful return
      jest.spyOn(mockInternalApiWrapper, 'get').mockImplementation(() => {throw new Error('Error');});

      let getJsonSettingsResult: any = {};
      getJsonSettingsResult = internalApiService.getJsonSettings('1', 1);

      //Assert Test Scenarios
      await expect(getJsonSettingsResult).rejects.toThrow('Error');

    });

    test('Failed - Exception 2', async () => {
      jest.spyOn(mockInternalApiWrapper, 'get').mockImplementation(() => Promise.reject(new Error('Error')));
      let errorResult: any;
      
      let getJsonSettingsResult: any = {};
      getJsonSettingsResult = internalApiService.getJsonSettings('1', 1);

      //Assert Test Scenarios
      await expect(getJsonSettingsResult).rejects.toEqual(Error('Error'));
    });
  });

  describe('getWithdrawalOnlineTransactionDetails', () => {
    test('Successful', async () => {
        //Override Successful return
        jest.spyOn(mockInternalApiWrapper, 'get').mockImplementation(() => Promise.resolve(internalApiServiceTestObjects.GetWithdrawalOnlineTransactionDetails_SuccessfulResult) );

        let getWithdrawalOnlineTransactionDetailsResult: any = {};
        getWithdrawalOnlineTransactionDetailsResult = await internalApiService.getWithdrawalOnlineTransactionDetails('1');
        //console.log('getWithdrawalOnlineTransactionDetails Successful', getWithdrawalOnlineTransactionDetailsResult);

        //Assert Test Scenarios
        expect(getWithdrawalOnlineTransactionDetailsResult).not.toBeUndefined();
        expect(getWithdrawalOnlineTransactionDetailsResult).toBe(internalApiServiceTestObjects.GetWithdrawalOnlineTransactionDetails_SuccessfulResult);
    });

    test('Failed - Exception', async () => {
      //Override Successful return
      jest.spyOn(mockInternalApiWrapper, 'get').mockImplementation(() => {throw new Error('Error');});

      let getWithdrawalOnlineTransactionDetailsResult: any = {};
      getWithdrawalOnlineTransactionDetailsResult = internalApiService.getWithdrawalOnlineTransactionDetails('1');

      //Assert Test Scenarios
      await expect(getWithdrawalOnlineTransactionDetailsResult).rejects.toThrow('Error');

    });

    test('Failed - Exception 2', async () => {
      jest.spyOn(mockInternalApiWrapper, 'get').mockImplementation(() => Promise.reject(new Error('Error')));
      let errorResult: any;
      
      let getWithdrawalOnlineTransactionDetailsResult: any = {};
      getWithdrawalOnlineTransactionDetailsResult = internalApiService.getWithdrawalOnlineTransactionDetails('1');

      //Assert Test Scenarios
      await expect(getWithdrawalOnlineTransactionDetailsResult).rejects.toEqual(Error('Error'));
    });
  });

  describe('updateWithdrawalOnlineTransaction', () => {
    test('Successful', async () => {
        //Override Successful return
        jest.spyOn(mockInternalApiWrapper, 'put').mockImplementation(() => Promise.resolve(internalApiServiceTestObjects.UpdateWithdrawalOnlineTransaction_SuccessfulResult) );

        let updateWithdrawalOnlineTransactionResult: any = {};
        updateWithdrawalOnlineTransactionResult = await internalApiService.updateWithdrawalOnlineTransaction('1');
        //console.log('updateWithdrawalOnlineTransaction Successful', updateWithdrawalOnlineTransactionResult);

        //Assert Test Scenarios
        expect(updateWithdrawalOnlineTransactionResult).not.toBeUndefined();
        expect(updateWithdrawalOnlineTransactionResult).toBe(internalApiServiceTestObjects.UpdateWithdrawalOnlineTransaction_SuccessfulResult);
    });

    test('Failed - Exception', async () => {
      //Override Successful return
      jest.spyOn(mockInternalApiWrapper, 'put').mockImplementation(() => {throw new Error('Error');});

      let updateWithdrawalOnlineTransactionResult: any = {};
      updateWithdrawalOnlineTransactionResult = internalApiService.updateWithdrawalOnlineTransaction('1');

      //Assert Test Scenarios
      await expect(updateWithdrawalOnlineTransactionResult).rejects.toThrow('Error');

    });

    test('Failed - Exception 2', async () => {
      jest.spyOn(mockInternalApiWrapper, 'put').mockImplementation(() => Promise.reject(new Error('Error')));
      let errorResult: any;
      
      let updateWithdrawalOnlineTransactionResult: any = {};
      updateWithdrawalOnlineTransactionResult = internalApiService.updateWithdrawalOnlineTransaction('1');

      //Assert Test Scenarios
      await expect(updateWithdrawalOnlineTransactionResult).rejects.toEqual(Error('Error'));
    });
  });
});