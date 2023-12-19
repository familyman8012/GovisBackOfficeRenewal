import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchProductList } from '@ApiFarm/product';
import ExportButton from '@ComponentFarm/modules/ExportButton/ExportButton';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Plus } from '@ComponentFarm/atom/icons';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { tabData } from '@ComponentFarm/template/product/manage/const';
import ManageListHandler from '@ComponentFarm/template/product/manage/ManageListHandler';
import ManageListTable from '@ComponentFarm/template/product/manage/ManageListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const Manage = () => {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [params, updateParams, resetParams] = useQueryParams({
    current_num: 1,
    per_num: 10,
  });

  const { isLoading, data } = useQuery(['productList', router.asPath], () =>
    fetchProductList(params)
  );

  const handlePageChange = (pageNumber: number) => {
    updateParams({ current_num: pageNumber });
  };

  const handleAddClick = () => {
    router.push({
      pathname: '/product/add',
      query: router.query,
    });
  };

  return (
    <>
      <TitleArea
        title="제품 관리"
        BtnBox={
          <>
            <ExportButton
              params={params}
              endPoint="/product/info/list"
              title="제품 목록"
            />
            <Button LeadingIcon={<Plus />} onClick={handleAddClick}>
              제품 등록
            </Button>
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
      <ManageListTable
        isLoading={isLoading}
        data={data}
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
