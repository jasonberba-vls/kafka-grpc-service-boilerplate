import { HttpStatus } from "@nestjs/common";
import { AppException } from "../../../exception/app.exception";
import { AxiosError, AxiosResponse } from "axios";
import { config } from "process";

export const saveToInternalApi_SuccessfulResult : any = {
    status: 200,
    statusText: 'OK',
    data: {'transactionId':'211718195731363261'},
  };


export const saveToInternalApi_FailedResult : any = new AppException('Error Request failed with status code 404', 
                                                                'Error Request failed with status code 404', 
                                                                HttpStatus.NOT_FOUND, 
                                                                true);

const merchantReferenceIdAlreadyExistsErrorMessage: AxiosResponse = {
    data: 'Merchant Reference Id already exists',
    status: 400,
    statusText: 'Bad Request',
    headers: undefined,
    config: undefined
  };
export const saveToInternalApi_MerchantReferenceIdAlreadyExistsResult : any = new AxiosError('Request failed with status code 400', 
                                                                'ERR_BAD_REQUEST',
                                                                undefined,
                                                                undefined,
                                                                merchantReferenceIdAlreadyExistsErrorMessage
                                                                );

const invalidCountryErrorMessage: AxiosResponse = {
    data: 'Unable to find country',
    status: 400,
    statusText: 'Bad Request',
    headers: undefined,
    config: undefined
  };
export const saveToInternalApi_InvalidCountryResult : any = new AxiosError('Request failed with status code 400', 
                                                                'ERR_BAD_REQUEST',
                                                                undefined,
                                                                undefined,
                                                                invalidCountryErrorMessage
                                                                );