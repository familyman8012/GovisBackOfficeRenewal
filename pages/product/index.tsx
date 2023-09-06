import { useState } from 'react';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Export, Plus } from '@ComponentFarm/atom/icons';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import ManageListHandler from '@ComponentFarm/template/product/manage/ManageListHandler';
import ManageListTable from '@ComponentFarm/template/product/manage/ManageListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const Manage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [params, updateParams, resetParams, toggleSort] = useQueryParams({
    page: 1,
    size: 10,
    search_type: 0,
  });

  const tabData = [
    {
      title: '제품 목록',
      label: '164',
    },
    {
      title: '통계',
    },
    {
      title: '부서정보',
    },
  ];

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
      <Tabs
        id="product"
        tabs={tabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => setActiveTabIndex(index)}
      />
      <ManageListHandler
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <ManageListTable toggleSort={toggleSort} />
      <Pagination
        pageInfo={[Number(params.page), Number(params.size)]}
        totalCount={100}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Manage;
