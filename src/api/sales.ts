import {
  IDaySaleReq,
  IDaySaleRes,
  ISalesSummaryReq,
  ISalesSummaryRes,
  IStoreSaleReq,
  IStoreSaleRes,
} from '@InterfaceFarm/sales';
import { BoV2Request } from '.';

export const fetchSalesSummary = async (params?: ISalesSummaryReq) => {
  console.log('fetchSalesSummary params', params);
  const response = await BoV2Request.get<IResponse<ISalesSummaryRes>>(
    '/analytics/amount/sales/summary',
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchStoreSale = async (params?: IStoreSaleReq) => {
  const response = await BoV2Request.get<IResponse<IStoreSaleRes>>(
    '/analytics/amount/sales/by_store',
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchDaySale = async (params?: IDaySaleReq) => {
  const response = await BoV2Request.get<IResponse<IDaySaleRes>>(
    '/analytics/amount/sales/by_store/daily',
    {
      params,
    }
  );

  return response.data.data;
};
