import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchEnvironment } from '@ApiFarm/environment';
import { fetchProductList } from '@ApiFarm/product';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Export, Plus } from '@ComponentFarm/atom/icons';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import ManageListHandler from '@ComponentFarm/template/product/manage/ManageListHandler';
import ManageListTable from '@ComponentFarm/template/product/manage/ManageListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const Manage = ({ environment }: { environment: IEnvironmentRes }) => {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [params, updateParams, resetParams, toggleSort] = useQueryParams({
    current_num: 1,
    per_num: 10,
  });

  const { data } = useQuery(['productList', params], () =>
    fetchProductList(params)
  );

  const tabData = [
    {
      title: '제품 목록',
      // label: '164',
    },
    {
      title: '통계',
    },
    {
      title: '부서정보',
    },
  ];

  const handlePageChange = (pageNumber: number) => {
    updateParams({ current_num: pageNumber });
  };

  const handleAddClick = () => {
    // 현재 쿼리 파라미터를 /add 경로에 추가
    router.push({
      pathname: '/product/add',
      query: router.query,
    });
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
        environment={environment}
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <ManageListTable data={data} toggleSort={toggleSort} />
      <Pagination
        pageInfo={[Number(params.current_num), Number(params.per_num)]}
        totalCount={data?.total_count}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Manage;

export const getStaticProps = async () => {
  const environment = await fetchEnvironment({
    name: 'product_category,sale_type,product_status,recipe_status',
  });

  return {
    props: {
      environment,
    },
    revalidate: 60,
  };
};
