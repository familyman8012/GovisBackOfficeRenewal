import { IHistoryResItem } from '@InterfaceFarm/history';
import { BoV2Request } from './index';

export const fetchDataHistoryList = (
  endpoint: string,
  params: { per_num: number; current_num: number }
) => {
  return BoV2Request.get<
    IResponse<{ total_count: number; list: IHistoryResItem[] }>
  >(endpoint, { params }).then(res => res.data.data);
};
