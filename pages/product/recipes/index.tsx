import { Pagination } from '@ComponentFarm/modules/Paginate/Pagination';
import ListTable from '@ComponentFarm/template/fc/coupons/ListTable';
import ListHandler from '@ComponentFarm/template/recipe/ListHandler';
import useQueryParams from '@HookFarm/useQueryParams';

const CouponsList = () => {
  const [params, updateParams, resetParams, toggleSort] = useQueryParams({
    page: 1,
    size: 10,
    search_type: 0,
  });

  //   const { data } = useQuery(['couponList', params], () =>
  //     fetchCouponFindAll(params)
  //   );

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
      <ListTable data={{ list: [] }} toggleSort={toggleSort} />
      <Pagination
        pageInfo={[Number(params.page), Number(params.size)]}
        totalCount={100}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default CouponsList;
