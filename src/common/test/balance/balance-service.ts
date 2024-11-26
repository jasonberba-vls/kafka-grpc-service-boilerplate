import { HttpStatus } from "@nestjs/common";
import { AppException } from "../../../common/exception/app.exception";
import { AxiosError, AxiosResponse } from "axios";

export const GetBalance_SuccessfulResult : any = {
    status: 200,
    statusText: 'OK',
    data: {
      merchantCurrencyWalletId: 1,
      merchantCurrencyId: 1,
      currencyCode: 'INR',
      active: 1,
      balance: 69.69,
      dateLastUpdated: '2024-05-24T11:57:00.772Z'
    }
  };

export const GetBalance_SuccessfulResult_EmptyData : any = {
    status: 200,
    statusText: 'OK',
    data: undefined
  };

export const GetBalance_FailedResult : any = new AppException('Error Request failed with status code 404', 
                                                                'Error Request failed with status code 404', 
                                                                HttpStatus.NOT_FOUND, 
                                                                true);

const getBalanceErrorMessage: AxiosResponse = {
    data: 'Error Processing Request',
    status: 400,
    statusText: 'Bad Request',
    headers: undefined,
    config: undefined
  };
export const GetBalance_AxiosResponse_ExceptionResult : any = new AxiosError('Request failed with status code 400', 
                                                                'ERR_BAD_REQUEST',
                                                                undefined,
                                                                undefined,
                                                                getBalanceErrorMessage
                                                                );

