import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchMaterialList } from '@ApiFarm/ material';
import { fetchEnvironment } from '@ApiFarm/environment';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Export, Plus } from '@ComponentFarm/atom/icons';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import MaterialListHandler from '@ComponentFarm/template/product/material/MaterialListHandler';
import MaterialListTable from '@ComponentFarm/template/product/material/MaterialListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const Manage = ({ environment }: { environment: IEnvironmentRes }) => {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [params, updateParams, resetParams] = useQueryParams({
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
    },
    {
      title: '제조사 목록',
    },
    {
      title: '물류사 목록',
    },
    {
      title: '원산지 목록',
    },
    {
      title: '통계',
    },
    { title: '부서정보' },
  ];

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

  console.log('environment', environment);

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
      <MaterialListHandler
        environment={environment}
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <MaterialListTable data={data} />
      <Pagination
        pageInfo={[Number(params.current_num), Number(params.per_num)]}
        totalCount={Number(data?.total_count)}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Manage;

export const getStaticProps = async () => {
  const environment = await fetchEnvironment({
    name: 'material_storage_type,material_status',
  });

  return {
    props: {
      environment,
    },
    revalidate: 60,
  };
};