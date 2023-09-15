import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchMaterialList } from '@ApiFarm/ material';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Export, Plus } from '@ComponentFarm/atom/icons';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import MaterialListTable from '@ComponentFarm/template/product/material/MaterialListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const Manage = () => {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [params, updateParams, resetParams, toggleSort] = useQueryParams({
    current_num: 1,
    per_num: 10,
  });

  const { data } = useQuery(['materialList', router.asPath], () =>
    fetchMaterialList(params)
  );

  console.log('data', data);

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

  const handleAddClick = () => {
    // 현재 쿼리 파라미터를 /add 경로에 추가
    router.push({
      pathname: '/material/add',
      query: router.query,
    });
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
            <Button LeadingIcon={<Plus />} onClick={handleAddClick}>
              원재료 등록
            </Button>
          </>
        }
      />
      <Tabs
        id="material"
        tabs={tabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => setActiveTabIndex(index)}
      />
      {/* <MaterialListHandler
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      /> */}
      <MaterialListTable data={data} toggleSort={toggleSort} />
      <Pagination
        pageInfo={[Number(params.current_num), Number(params.per_num)]}
        totalCount={Number(data?.total_count)}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Manage;
