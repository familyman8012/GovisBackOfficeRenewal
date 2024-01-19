import {
  ISalesKeyInFetchParams,
  ISalesKeyInFetchResponse,
  ISalesKeyInViewResponse,
  ISaleskeyInRegisterParams,
} from '@InterfaceFarm/store-sales-keyin';
import { BoV2Request } from '.';

export const fetchStoreSalesList = async (
  params: Partial<ISalesKeyInFetchParams>
) =>
  BoV2Request.get<IResponse<ISalesKeyInFetchResponse>>('/sales/keyin/list', {
    params,
  }).then(({ data: { data } }) => data);

export const fetchStoreSalesView = async (sales_keyin_idx: number | string) =>
  BoV2Request.get<IResponse<ISalesKeyInViewResponse>>(
    `/sales/keyin/${sales_keyin_idx}`
  ).then(({ data: { data } }) => data);

export const fetchRegisterSales = async (params: ISaleskeyInRegisterParams) =>
  BoV2Request.post('/sales/keyin', params).then(({ data: { data } }) => data);
