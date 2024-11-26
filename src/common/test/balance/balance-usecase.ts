export const GetBalance_SuccessfulRequest : any = {
    "merchantCode": "359837950",
    "currencyCode": "INR",
    "signature": "1aa706f15c3c0b6728a02b8398e8ca2aa4e8240111b27ec569e69c36013c2b8e"
  };

export const GetBalance_InvalidSignatureRequest : any = {
    "merchantCode": "359837950",
    "currencyCode": "INR",
    "signature": "1aa706f15c3c0b6728a02b8398e8ca2aa4e8240111b27ec569e69c36013c2b8e_Error"
  };

  export const GetBalance_InvalidParameterRequest : any = {
    "merchantCode": "359837950",
    "signature": "1aa706f15c3c0b6728a02b8398e8ca2aa4e8240111b27ec569e69c36013c2b8e"
  };

export const GetBalance_ProcessErrorRequest : any = {
    "merchantCode": "359837950",
    "currencyCode": "INR",
    "signature": "1aa706f15c3c0b6728a02b8398e8ca2aa4e8240111b27ec569e69c36013c2b8e"
  };

export const GetBalance_SuccessfulResult : any = {
  "statusCode": "00",
  "message": "Request Successful",
  "currencyCode": "INR",
  "balance": 69.69
};