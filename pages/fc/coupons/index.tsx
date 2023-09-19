import Link from 'next/link';
import { useQuery } from 'react-query';
import { fetchCouponFindAll } from '@ApiFarm/coupon';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import ListHandler from '@ComponentFarm/template/fc/coupons/ListHandler';
import ListTable from '@ComponentFarm/template/fc/coupons/ListTable';
import useQueryParams from '@HookFarm/useQueryParams';
import { queryString } from '@UtilFarm/queryString';

const CouponsList = () => {
  const [params, updateParams, resetParams] = useQueryParams({
    page: 1,
    size: 10,
    search_type: 0,
  });

  const { data } = useQuery(['couponList', params], () =>
    fetchCouponFindAll(params)
  );

  const handlePageChange = (pageNumber: number) => {
    updateParams({ page: pageNumber });
  };

  return (
    <>
      <ListHandler
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <div>
        <Link href={`/fc/coupons/add?${queryString(params)}`}>등록</Link>
      </div>
      <ListTable data={data} />
      <Pagination
        pageInfo={[Number(params.page), Number(params.size)]}
        totalCount={Number(data?.count)}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default CouponsList;
