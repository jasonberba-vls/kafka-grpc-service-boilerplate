import { Request } from 'express';

export const GetBalance_SuccessfulRequest = {
    body: {
        "merchantCode": "359837950",
        "currencyCode": "INR",
        "signature": "1aa706f15c3c0b6728a02b8398e8ca2aa4e8240111b27ec569e69c36013c2b8e",
    },
} as Request;
GetBalance_SuccessfulRequest.headers = {};
GetBalance_SuccessfulRequest.headers["cf-connecting-ip"] = "1.1.1.1";
