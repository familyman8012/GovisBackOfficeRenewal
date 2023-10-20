import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchCountryList } from '@ApiFarm/ material';
import ExportButton from '@ComponentFarm/modules/ExportButton/ExportButton';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { materialListTabData } from '@ComponentFarm/template/product/material/const';
import ListFilter from '@ComponentFarm/template/product/material/country/ListFilter';
import ListTable from '@ComponentFarm/template/product/material/country/ListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const CountryListPage = () => {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(3);
  const [params, updateParams] = useQueryParams({
    current_num: 1,
    per_num: 10,
  });

  const { isLoading, data } = useQuery(['countryList', router.asPath], () =>
    fetchCountryList(params)
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
        title="원재료 관리"
        BtnBox={
          <>
            <ExportButton
              params={params}
              endPoint="/origin/list"
              title="원산지 목록"
            />
          </>
        }
      />
      <Tabs
        id="tab_country_partner"
        tabs={materialListTabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => hanldeTabMove(index)}
      />
      <ListFilter params={params} updateParams={updateParams} />
      <ListTable
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

export default CountryListPage;
