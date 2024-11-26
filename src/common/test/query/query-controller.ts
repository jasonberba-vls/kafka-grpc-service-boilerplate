import { Request } from 'express';

export const QueryDeposit_SuccessfulRequest = {
    body: {
        "merchantCode": "359837950",
        "merchantReferenceId": "test_Ref_0002",
        "signature": "696bc20d81e741860b17b2ab94109a4b02515a2510f930920bca956b23ee91f4"
    },
} as Request;
QueryDeposit_SuccessfulRequest.headers = {};
QueryDeposit_SuccessfulRequest.headers["cf-connecting-ip"] = "1.1.1.1";


export const QueryWithdrawal_SuccessfulRequest = {
    body: {
        "merchantCode": "359837950",
        "merchantReferenceId": "TEST_WD_240417_001",
        "signature": "6a0882962639156687f7d6e6e0749a01b943b4ec67335609d93c491fbe4c154f"
    },
} as Request;
QueryWithdrawal_SuccessfulRequest.headers = {};
QueryWithdrawal_SuccessfulRequest.headers["cf-connecting-ip"] = "1.1.1.1";


export const QueryVersionDeposit_SuccessfulRequest = {
    body: {
        "merchantCode": "359837950",
        "merchantReferenceId": "test_Ref_0002",
        "signature": "696bc20d81e741860b17b2ab94109a4b02515a2510f930920bca956b23ee91f4"
    },
} as Request;
QueryVersionDeposit_SuccessfulRequest.headers = {};
QueryVersionDeposit_SuccessfulRequest.headers["cf-connecting-ip"] = "1.1.1.1";
QueryVersionDeposit_SuccessfulRequest.params = {};
QueryVersionDeposit_SuccessfulRequest.params["version"] = "v1.7";;


export const QueryVersionWithdrawal_SuccessfulRequest = {
    body: {
        "merchantCode": "359837950",
        "merchantReferenceId": "TEST_WD_240417_001",
        "signature": "6a0882962639156687f7d6e6e0749a01b943b4ec67335609d93c491fbe4c154f"
    },
} as Request;
QueryVersionWithdrawal_SuccessfulRequest.headers = {};
QueryVersionWithdrawal_SuccessfulRequest.headers["cf-connecting-ip"] = "1.1.1.1";
QueryVersionWithdrawal_SuccessfulRequest.params = {};
QueryVersionWithdrawal_SuccessfulRequest.params["version"] = "v1.7";;
