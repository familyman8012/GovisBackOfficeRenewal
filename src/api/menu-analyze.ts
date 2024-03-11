import {
  IChannelRankingRes,
  IChannelRes,
  IMenuAnalyzeReq,
} from '@InterfaceFarm/menu-analyze';
import { BoV2Request } from '.';

export const fetchMenuStoreRankingAnalyze = async (
  params?: IMenuAnalyzeReq
) => {
  const response = await BoV2Request.get<IResponse<IChannelRankingRes>>(
    `/analytics/menu/sales/by_store_type_ranking`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchMenuStoreAnalyze = async (params?: IMenuAnalyzeReq) => {
  const response = await BoV2Request.get<IResponse<IChannelRes>>(
    `/analytics/menu/sales/by_store`,
    {
      params,
    }
  );

  return response.data.data;
};
