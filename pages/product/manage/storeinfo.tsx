import { useState } from 'react';
import styled from '@emotion/styled';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import StoreListHandler from '@ComponentFarm/template/product/manage/StoreListHandler';
import StoreListTable from '@ComponentFarm/template/product/manage/StoreListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const StoreInfo = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [params, updateParams, resetParams, toggleSort] = useQueryParams({
    page: 1,
    size: 10,
    search_type: 0,
  });

  const tabData = [
    {
      title: '제품상세',
    },
    {
      title: '채널별 이미지 정보',
    },
    {
      title: '레시피 정보',
      label: 'N',
    },
    {
      title: '원재료 정보',
      label: '8',
    },
    {
      title: '매장정보',
      label: '97',
    },
    {
      title: '변경내역',
      label: '6',
    },
  ];

  // const { data } = useQuery(['couponList', params], () =>
  //   fetchCouponFindAll(params)
  // );

  const handlePageChange = (pageNumber: number) => {
    updateParams({ page: pageNumber });
  };

  const SubTitle = styled.h2`
    margin: 3.2rem 0 0;
    color: var(--color-neutral10);
    font-size: var(--font-size6);
    font-weight: bold;
    line-height: 28px;
  `;

  return (
    <>
      <TitleArea
        title="제품 상세 정보"
        BtnBox={
          <>
            <Button variant="gostSecondary">이전</Button>
          </>
        }
      />
      <Tabs
        tabs={tabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => setActiveTabIndex(index)}
      />
      <SubTitle>오리지널 페페로니 피자 판매 매장 목록</SubTitle>
      <StoreListHandler
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <StoreListTable toggleSort={toggleSort} />
      <Pagination
        pageInfo={[Number(params.page), Number(params.size)]}
        totalCount={100}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default StoreInfo;
