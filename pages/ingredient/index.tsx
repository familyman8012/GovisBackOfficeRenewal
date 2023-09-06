import { useState } from 'react';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Export, Plus } from '@ComponentFarm/atom/icons';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import IngredientListHandler from '@ComponentFarm/template/product/ingredient/IngredientListHandler';
import IngredientListTable from '@ComponentFarm/template/product/ingredient/IngredientListTable';
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
      label: '1025',
    },
    {
      title: '제조사 목록',
      label: '13',
    },
    {
      title: '물류사 목록',
      label: '5',
    },
    {
      title: '원산지 목록',
      label: '20',
    },
    {
      title: '통계',
    },
    { title: '부서정보' },
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
        title="원재료 관리"
        BtnBox={
          <>
            <Button variant="gostSecondary" LeadingIcon={<Export />}>
              내보내기
            </Button>
            <Button LeadingIcon={<Plus />}>원재료 등록</Button>
          </>
        }
      />
      <Tabs
        id="ingredient"
        tabs={tabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => setActiveTabIndex(index)}
      />
      <IngredientListHandler
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <IngredientListTable toggleSort={toggleSort} />
      <Pagination
        pageInfo={[Number(params.page), Number(params.size)]}
        totalCount={100}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Manage;
