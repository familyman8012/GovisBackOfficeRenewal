import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Export, Plus } from '@ComponentFarm/atom/icons';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import ListHandler from '@ComponentFarm/template/product/manage/ListHandler';
import ListTable from '@ComponentFarm/template/product/manage/ListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const Manage = () => {
  const [params, updateParams, resetParams, toggleSort] = useQueryParams({
    page: 1,
    size: 10,
    search_type: 0,
  });

  // const { data } = useQuery(['couponList', params], () =>
  //   fetchCouponFindAll(params)
  // );

  const handlePageChange = (pageNumber: number) => {
    updateParams({ page: pageNumber });
  };

  return (
    <>
      <TitleArea
        title="제품관리"
        BtnBox={
          <>
            <Button variant="gostSecondary" LeadingIcon={<Export />}>
              내보내기
            </Button>
            <Button LeadingIcon={<Plus />}>제품 등록</Button>
          </>
        }
      />
      <ListHandler
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <ListTable toggleSort={toggleSort} />
      <Pagination
        pageInfo={[Number(params.page), Number(params.size)]}
        totalCount={100}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Manage;
