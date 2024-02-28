import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { salesAnalysisTabData } from '@ComponentFarm/template/sales-analysis/const';
import FilterTableForm from '@ComponentFarm/template/sales-analysis/FilterSalesAnalysis';
import SalesDayVirtualTable from '@ComponentFarm/template/sales-analysis/SalesDayVirtualTable';
import SalesSummaryTable from '@ComponentFarm/template/sales-analysis/SalesSummaryTable';
import useQueryParams from '@HookFarm/useQueryParams';

const Index = () => {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [params, updateParams] = useQueryParams({
    order_dt_start: dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
    order_dt_finish: dayjs().subtract(1, 'days').format('YYYY-MM-DD'),
  });

  const hanldeTabMove = (index: number) => {
    setActiveTabIndex(index);
    router.push(salesAnalysisTabData[index].url);
  };

  return (
    <>
      <TitleArea title="매출 분석" />
      <Tabs
        id="salesAnalysis2"
        tabs={salesAnalysisTabData}
        activeTabIndex={activeTabIndex}
        onTabChange={(index: number) => hanldeTabMove(index)}
      />
      <FilterTableForm salesType params={params} updateParams={updateParams} />
      <SalesSummaryTable params={params} />
      <SalesDayVirtualTable params={params} />
    </>
  );
};

export default Index;
