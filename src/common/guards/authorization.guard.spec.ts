import { Test, TestingModule } from '@nestjs/testing';
import { AuthorizationGuard } from '../../common/guards/authorization.guard';
import InternalApiService from '../../common/services/internal-api/internal-api.service';
import { HttpStatus } from '@nestjs/common';

import * as authorizationGuardTestObjects from '../../common/test/common/guards/authorization.guard';
import * as internalApiUseCaseTestObjects from '../../common/test/internalApi/internalApi-usecase';
import * as internalApiServiceTestObjects from '../../common/test/internalApi/internalApi-service';
import { AppException } from '../exception/app.exception';
import { ResponseMessages } from '../types/reponses';

describe('AuthorizationGuard', () => {
  //Initialize Objects and Mocks
  let authorizationGuard: AuthorizationGuard;
  let mockInternalApiService = { getMerchantDetails: () => {} };
  
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
        AuthorizationGuard,
        //InternalApiService,
        {
          provide: InternalApiService, //Injected
          useValue: mockInternalApiService, //Mock
        },
    ],
    }).compile();

    //Initialize Object to Test
    authorizationGuard = module.get<AuthorizationGuard>(AuthorizationGuard);

    //Map response to Mock Objects
    jest.spyOn(mockInternalApiService, 'getMerchantDetails').mockImplementation(() => internalApiServiceTestObjects.GetMerchantDetails_SuccessfulResult);
  });

  afterEach(() => {
    process.env = originalEnv;
  });
  
  describe('Initialization', () => {
    test('Success', () => {
        //Assert Test Scenarios
        expect(authorizationGuard).toBeDefined();
    });
  });

  describe('canActivate', () => {
    test('Successful', async () => {
        let authorizationGuardResult: any = {};
        authorizationGuardResult = await authorizationGuard.canActivate(authorizationGuardTestObjects.exceutionContext_SuccessfulRequest);
        //console.log('AuthorizationGuard Success', authorizationGuardResult)

        //Assert Test Scenarios
        expect(authorizationGuardResult).not.toBeUndefined();
        expect(authorizationGuardResult).toBe(true);
    });

    test('Successful - Health Endpoint', async () => {
        let authorizationGuardResult: any = {};
        authorizationGuardResult = await authorizationGuard.canActivate(authorizationGuardTestObjects.exceutionContext_SuccessfulRequest_HealthEndpoint);
        //console.log('AuthorizationGuard Success Health Endpoint', authorizationGuardResult)

        //Assert Test Scenarios
        expect(authorizationGuardResult).not.toBeUndefined();
        expect(authorizationGuardResult).toBe(true);
        //expect(authorizationGuardResult).toBeCalledWith({statusCode: HttpStatus.I_AM_A_TEAPOT, message: appExceptionFilterTestObjects.AppExceptionFilter_AppExceptionResultMessage});
    });

    test('Successful - Crypto Endpoint', async () => {
      let authorizationGuardResult: any = {};
      authorizationGuardResult = await authorizationGuard.canActivate(authorizationGuardTestObjects.exceutionContext_SuccessfulRequest_CryptoEndpoint);
      //console.log('AuthorizationGuard Success Crypto Endpoint', authorizationGuardResult)

      //Assert Test Scenarios
      expect(authorizationGuardResult).not.toBeUndefined();
      expect(authorizationGuardResult).toBe(true);
      //expect(authorizationGuardResult).toBeCalledWith({statusCode: HttpStatus.I_AM_A_TEAPOT, message: appExceptionFilterTestObjects.AppExceptionFilter_AppExceptionResultMessage});
  });

    test('Failed - Missing MerchantCode', async () => {
      let authorizationGuardResult: any = {};
      authorizationGuardResult = authorizationGuard.canActivate(authorizationGuardTestObjects.exceutionContext_InvalidRequest_NoMerchantCode);
      //console.log('AuthorizationGuard Missing MerchantCode', authorizationGuardResult);

      //Assert Test Scenarios
      await expect(authorizationGuardResult).rejects.toThrow(AppException);
      await expect(authorizationGuardResult).rejects.toThrow(ResponseMessages.UNAUTHORIZED);
    });

    test('Failed - Invalid MerchantCode', async () => {
      //Override MerchantDetails return
      jest.spyOn(mockInternalApiService, 'getMerchantDetails').mockImplementation(() => { throw internalApiServiceTestObjects.GetMerchantDetails_FailedResult });

      let authorizationGuardResult: any = {};
      authorizationGuardResult = authorizationGuard.canActivate(authorizationGuardTestObjects.exceutionContext_InvalidMerchantCodeRequest);
      //console.log('AuthorizationGuard Invalid MerchantCode', authorizationGuardResult);

      //Assert Test Scenarios
      await expect(authorizationGuardResult).rejects.toThrow(AppException);
      await expect(authorizationGuardResult).rejects.toThrow(ResponseMessages.UNAUTHORIZED);
    });

    test('Failed - Invalid IP', async () => {
      let authorizationGuardResult: any = {};
      authorizationGuardResult = authorizationGuard.canActivate(authorizationGuardTestObjects.exceutionContext_InvalidIPRequest);
      //console.log('AuthorizationGuard Invalid IP', authorizationGuardResult);

      //Assert Test Scenarios
      await expect(authorizationGuardResult).rejects.toThrow(AppException);
      await expect(authorizationGuardResult).rejects.toThrow(ResponseMessages.UNAUTHORIZED);
    });
  });
});


