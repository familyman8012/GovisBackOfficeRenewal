import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchMaterialList } from '@ApiFarm/ material';
import { fetchEnvironment } from '@ApiFarm/environment';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import ExportButton from '@ComponentFarm/modules/ExportButton/ExportButton';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Plus } from '@ComponentFarm/atom/icons';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { materialListTabData } from '@ComponentFarm/template/product/material/const';
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

  const handlePageChange = (pageNumber: number) => {
    updateParams({ current_num: pageNumber });
  };

  const handleAddClick = () => {
    // 현재 쿼리 파라미터를 /add 경로에 추가
    router.push({
      pathname: '/material/add',
      query: router.query,
    });
  };

  const hanldeTabMove = (index: number) => {
    setActiveTabIndex(index);
    router.push(materialListTabData[index].url);
  };

  return (
    <>
      <TitleArea
        title="원재료 관리"
        BtnBox={
          <>
            <ExportButton
              params={params}
              endPoint="/material/info/list"
              title="원재료 목록"
            />
            <Button LeadingIcon={<Plus />} onClick={handleAddClick}>
              원재료 등록
            </Button>
          </>
        }
      />
      <Tabs
        id="material"
        tabs={materialListTabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => hanldeTabMove(index)}
      />
      <MaterialListHandler
        environment={environment}
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <MaterialListTable data={data} updateParams={updateParams} />
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
