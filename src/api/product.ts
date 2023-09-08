import { IProductListItem } from '@InterfaceFarm/product';
import { BoV2Request } from './index';

export const fetchProducts = async (params: Record<string, any>) => {
  return BoV2Request.get<
    IResponse<{
      total_count: number;
      list: IProductListItem[];
    }>
  >('/product/info/list', { params }).then(res => res.data.data);
};
