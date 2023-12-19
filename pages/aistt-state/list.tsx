import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchManufacturingList } from '@ApiFarm/aistt';
import { IManufacturingListReq } from '@InterfaceFarm/aistt';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { aisttList } from '@ComponentFarm/template/aistt/const';
import AisttListTable from '@ComponentFarm/template/aistt/state/list/AisttListTable';
import SubTitleBox from '@ComponentFarm/template/common/SubTitleBox';
import { materialListTabData } from '@ComponentFarm/template/product/material/const';
import useQueryParams from '@HookFarm/useQueryParams';

const Manage = () => {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [params, updateParams] = useQueryParams({
    current_num: 1,
    per_num: 10,
  });

  const { isLoading, data } = useQuery(['aisttState-ListSearch', params], () =>
    fetchManufacturingList(params as IManufacturingListReq)
  );

  const handlePageChange = (pageNumber: number) => {
    updateParams({ current_num: pageNumber });
  };

  const hanldeTabMove = (index: number) => {
    setActiveTabIndex(index);
    router.push(materialListTabData[index].url);
  };

  return (
    <>
      <TitleArea
        title="현황"
        BtnBox={
          <Button variant="gostSecondary" onClick={() => router.back()}>
            이전
          </Button>
        }
      />
      <Tabs
        id="material"
        tabs={aisttList}
        activeTabIndex={activeTabIndex}
        onTabChange={index => hanldeTabMove(index)}
      />
      <SubTitleBox title="전체 항목" hideUnderline />
      <AisttListTable
        isLoading={isLoading}
        data={data}
        params={params}
        updateParams={updateParams}
      />
      <Pagination
        pageInfo={[Number(params.current_num), Number(params.per_num)]}
        totalCount={Number(data?.total_count)}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Manage;
