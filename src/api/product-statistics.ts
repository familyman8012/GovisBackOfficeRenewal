import { IProductStatisticsRes } from '@InterfaceFarm/product-statistics';
import { BoV2Request } from '.';

export const fetchProductAllStatis = async (params?: any) => {
  console.log('params?.type?.value', params?.type, params);
  const { type, ...rest } = params;
  const response = await BoV2Request.get<IResponse<IProductStatisticsRes>>(
    `/analytics/product/sales/overall/${type}`,
    {
      params: rest,
    }
  );

  return response.data.data;
};
