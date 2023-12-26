import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchReportList } from '@ApiFarm/aistt';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { tab_reportIndex } from '@ComponentFarm/template/aistt/report/index/const';
import ReportListHandler from '@ComponentFarm/template/aistt/report/index/ReportListHandler';
import ReportListTable from '@ComponentFarm/template/aistt/report/index/ReportListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const Report = () => {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [params, updateParams, resetParams] = useQueryParams({
    current_num: 1,
    per_num: 10,
  });

  const { isLoading, data } = useQuery(['reportList', router.asPath], () =>
    fetchReportList(params)
  );

  const handlePageChange = (pageNumber: number) => {
    updateParams({ current_num: pageNumber });
  };

  return (
    <>
      <TitleArea title="AI-FQS 레포트 관리" />
      <Tabs
        id="tab_reportIndex"
        tabs={tab_reportIndex}
        activeTabIndex={activeTabIndex}
        onTabChange={index => setActiveTabIndex(index)}
      />
      <ReportListHandler
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <ReportListTable
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

export default Report;
