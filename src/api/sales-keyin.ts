import {
  ISalesKeyInFetchParams,
  ISalesKeyInFetchResponse,
  ISalesKeyInViewResponse,
  ISaleskeyInRegisterParams,
} from '@InterfaceFarm/store-sales-keyin';
import { BoV2Request } from '.';
// import { downloadAxiosResponse } from 'LibFarm/download';

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

// export const fetchDownloadSales = async (params: ISalesKeyInDownloadParams) =>
//   BoRequest.get(`/sales/keyin/list/export`, {
//     params,
//     responseType: 'blob',
//   })
//     .then(
//       downloadAxiosResponse(
//         `XGOPIZZA 매출 관리_${dayjs().format('YYYY-MM-DD HH:mm:ss')}.xlsx`
//       )
//     )
//     .catch(() => new Error('다운로드에 실패하였습니다.'));

export const fetchRegisterSales = async (params: ISaleskeyInRegisterParams) =>
  BoV2Request.post('/sales/keyin', params).then(({ data: { data } }) => data);
