import { BoRequest } from '.';

interface Params {
  page?: number;
  size?: number;
  search_type?: number;
  search_status?: string;
  search_coupon_type?: string;
}

export const fetchCouponFindAll = async (params: Params) => {
  const response = await BoRequest.get('/coupon', {
    params,
  });

  return response.data.data;
};
