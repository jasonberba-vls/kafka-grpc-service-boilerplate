import { HttpStatus } from "@nestjs/common";
import { AppException } from "../../exception/app.exception";

export const QueryDeposit_SuccessfulResult_FailedStatus : any = {
    status: 200,
    statusText: 'OK',
    data: {
      message: 'Successfully fetched data',
      queryData: {
        merchantCode: '359837950',
        merchantReferenceId: 'test_Ref_0002',
        message: 'Deposit transaction failed',
        paymentType: 'SELECTION',
        requestAmount: 100,
        requestCurrencyCode: 'INR',
        signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
        statusCode: '10',
        transactionId: '121716283412919855',
        utrNumber: null,
        versionCode: 'v1.3',
      },
      queryStatusCode: '00'
    }
  };

export const QueryDeposit_SuccessfulResult_SuccessfulStatus : any = {
    status: 200,
    statusText: 'OK',
    data: {
      message: 'Successfully fetched data',
      queryData: {
        merchantCode: '359837950',
        merchantReferenceId: 'test_Ref_0002',
        message: 'Deposit transaction successful',
        paymentType: 'SELECTION',
        requestAmount: 100,
        requestCurrencyCode: 'INR',
        signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
        statusCode: '00',
        transactionId: '121716283412919855',
        utrNumber: null,
        versionCode: 'v1.3',
      },
      queryStatusCode: '00'
    }
  };

export const QueryDeposit_SuccessfulResult_PendingProcessingStatus : any = {
    status: 200,
    statusText: 'OK',
    data: {
      message: 'Successfully fetched data',
      queryData: {
        merchantCode: '359837950',
        merchantReferenceId: 'test_Ref_0002',
        message: 'Pending',
        paymentType: 'SELECTION',
        requestAmount: 100,
        requestCurrencyCode: 'INR',
        signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
        statusCode: '20',
        transactionId: '121716283412919855',
        utrNumber: null,
        versionCode: 'v1.3',
      },
      queryStatusCode: '00'
    }
  };

export const QueryDeposit_FailedResult : any = new AppException('Error Request failed with status code 404', 
                                                                'Error Request failed with status code 404', 
                                                                HttpStatus.NOT_FOUND, 
                                                                true);

export const QueryDeposit_SuccessfulResult_EmptyData : any = {
    status: 200,
    statusText: 'OK',
  };

export const QueryDeposit_SuccessfulResult_v1_7 : any = {
    status: 200,
    statusText: 'OK',
    data: {
      message: 'Successfully fetched data',
      queryData: {
        merchantCode: '359837950',
        merchantReferenceId: 'test_Ref_0002',
        message: 'Deposit transaction failed',
        paymentType: 'SELECTION',
        requestAmount: 100,
        requestCurrencyCode: 'INR',
        signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
        statusCode: '10',
        transactionId: '121716283412919855',
        utrNumber: null,
        versionCode: 'v1.3',
      },
      queryStatusCode: '00'
    }
  };

export const QueryDeposit_SuccessfulResult_v1_6 : any = {
    status: 200,
    statusText: 'OK',
    data: {
      message: 'Successfully fetched data',
      queryData: {
        merchantCode: '359837950',
        merchantReferenceId: 'test_Ref_0002',
        message: 'Deposit transaction failed',
        paymentType: 'SELECTION',
        requestAmount: 100,
        requestCurrencyCode: 'INR',
        signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
        statusCode: '10',
        transactionId: '121716283412919855',
        versionCode: 'v1.3',
      },
      queryStatusCode: '00'
    }
  };

export const QueryDeposit_SuccessfulResult_v1_5 : any = {
    status: 200,
    statusText: 'OK',
    data: {
      message: 'Successfully fetched data',
      queryData: {
        merchantCode: '359837950',
        merchantReferenceId: 'test_Ref_0002',
        message: 'Deposit transaction failed',
        paymentType: 'SELECTION',
        requestAmount: 100,
        requestCurrencyCode: 'INR',
        signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
        statusCode: '10',
        transactionId: '121716283412919855',
        versionCode: 'v1.3',
      },
      queryStatusCode: '00'
    }
  };

export const QueryDeposit_SuccessfulResult_v1_4 : any = {
    status: 200,
    statusText: 'OK',
    data: {
      message: 'Successfully fetched data',
      queryData: {
        merchantCode: '359837950',
        merchantReferenceId: 'test_Ref_0002',
        message: 'Deposit transaction failed',
        requestAmount: 100,
        requestCurrencyCode: 'INR',
        signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
        statusCode: '10',
        transactionId: '121716283412919855',
        versionCode: 'v1.3',
      },
      queryStatusCode: '00'
    }
  };

export const QueryDeposit_SuccessfulResult_v1_3 : any = {
    status: 200,
    statusText: 'OK',
    data: {
      message: 'Successfully fetched data',
      queryData: {
        merchantCode: '359837950',
        merchantReferenceId: 'test_Ref_0002',
        message: 'Deposit transaction failed',
        requestAmount: 100,
        requestCurrencyCode: 'INR',
        signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
        statusCode: '10',
        transactionId: '121716283412919855',
      },
      queryStatusCode: '00'
    }
  };

// ============================================================================================================================== //

export const QueryWithdrawal_SuccessfulResult_FailedStatus : any = {
  status: 200,
  statusText: 'OK',
  data: {
    message: 'Successfully fetched data',
    queryData: {
      merchantCode: '359837950',
      merchantReferenceId: 'TEST_WD_240417_001',
      message: 'Withdrawal transaction failed',
      paymentType: 'BANK',
      requestAmount: 100,
      requestCurrencyCode: 'INR',
      signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
      statusCode: '10',
      transactionId: '121716283412919855',
      utrNumber: null,
      versionCode: 'v1.3',
    },
    queryStatusCode: '00'
  }
};

export const QueryWithdrawal_SuccessfulResult_SuccessfulStatus : any = {
  status: 200,
  statusText: 'OK',
  data: {
    message: 'Successfully fetched data',
    queryData: {
      merchantCode: '359837950',
      merchantReferenceId: 'TEST_WD_240417_001',
      message: 'Withdrawal transaction successful',
      paymentType: 'BANK',
      requestAmount: 100,
      requestCurrencyCode: 'INR',
      signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
      statusCode: '00',
      transactionId: '121716283412919855',
      utrNumber: null,
      versionCode: 'v1.3',
    },
    queryStatusCode: '00'
  }
};

export const QueryWithdrawal_SuccessfulResult_PendingProcessingStatus : any = {
  status: 200,
  statusText: 'OK',
  data: {
    message: 'Successfully fetched data',
    queryData: {
      merchantCode: '359837950',
      merchantReferenceId: 'TEST_WD_240417_001',
      message: 'Pending',
      paymentType: 'BANK',
      requestAmount: 100,
      requestCurrencyCode: 'INR',
      signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
      statusCode: '20',
      transactionId: '211713347845788003',
      utrNumber: null,
      versionCode: 'v1.3',
    },
    queryStatusCode: '00'
  }
};

export const QueryWithdrawal_FailedResult : any = new AppException('Error Request failed with status code 404', 
                                                              'Error Request failed with status code 404', 
                                                              HttpStatus.NOT_FOUND, 
                                                              true);

export const QueryWithdrawal_SuccessfulResult_EmptyData : any = {
  status: 200,
  statusText: 'OK'
};

export const QueryWithdrawal_SuccessfulResult_v1_7 : any = {
  status: 200,
  statusText: 'OK',
  data: {
    message: 'Successfully fetched data',
    queryData: {
      merchantCode: '359837950',
      merchantReferenceId: 'TEST_WD_240417_001',
      message: 'Withdrawal transaction failed',
      paymentType: 'BANK',
      requestAmount: 100,
      requestCurrencyCode: 'INR',
      signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
      statusCode: '10',
      transactionId: '211713347845788003',
      utrNumber: null,
      versionCode: 'v1.3',
    },
    queryStatusCode: '00'
  }
};

export const QueryWithdrawal_SuccessfulResult_v1_6 : any = {
  status: 200,
  statusText: 'OK',
  data: {
    message: 'Successfully fetched data',
    queryData: {
      merchantCode: '359837950',
      merchantReferenceId: 'TEST_WD_240417_001',
      message: 'Withdrawal transaction failed',
      paymentType: 'BANK',
      requestAmount: 100,
      requestCurrencyCode: 'INR',
      signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
      statusCode: '10',
      transactionId: '211713347845788003',
      versionCode: 'v1.3',
    },
    queryStatusCode: '00'
  }
};

export const QueryWithdrawal_SuccessfulResult_v1_5 : any = {
  status: 200,
  statusText: 'OK',
  data: {
    message: 'Successfully fetched data',
    queryData: {
      merchantCode: '359837950',
      merchantReferenceId: 'TEST_WD_240417_001',
      message: 'Withdrawal transaction failed',
      paymentType: 'BANK',
      requestAmount: 100,
      requestCurrencyCode: 'INR',
      signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
      statusCode: '10',
      transactionId: '211713347845788003',
      versionCode: 'v1.3',
    },
    queryStatusCode: '00'
  }
};

export const QueryWithdrawal_SuccessfulResult_v1_4 : any = {
  status: 200,
  statusText: 'OK',
  data: {
    message: 'Successfully fetched data',
    queryData: {
      merchantCode: '359837950',
      merchantReferenceId: 'TEST_WD_240417_001',
      message: 'Withdrawal transaction failed',
      requestAmount: 100,
      requestCurrencyCode: 'INR',
      signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
      statusCode: '10',
      transactionId: '211713347845788003',
      versionCode: 'v1.3',
    },
    queryStatusCode: '00'
  }
};

export const QueryWithdrawal_SuccessfulResult_v1_3 : any = {
  status: 200,
  statusText: 'OK',
  data: {
    message: 'Successfully fetched data',
    queryData: {
      merchantCode: '359837950',
      merchantReferenceId: 'TEST_WD_240417_001',
      message: 'Withdrawal transaction failed',
      requestAmount: 100,
      requestCurrencyCode: 'INR',
      signature: '0442e0eb8419c677174b8d27cec6196392a3b200d20c1b8686db0fb2b1a1a1e0',
      statusCode: '10',
      transactionId: '211713347845788003',
    },
    queryStatusCode: '00'
  }
};