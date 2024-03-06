import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { ISalesParam } from '@InterfaceFarm/sales';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { salesAnalyzeTabData } from '@ComponentFarm/template/sales-analyze/const';
import FilterTableForm from '@ComponentFarm/template/sales-analyze/FilterSalesAnalyze';
import SalesDayVirtualTable2 from '@ComponentFarm/template/sales-analyze/SalesDayVirtualTable2';
import SalesSummaryTable from '@ComponentFarm/template/sales-analyze/SalesSummaryTable';
import useQueryParams from '@HookFarm/useQueryParams';

const Index = () => {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [params, updateParams] = useQueryParams<ISalesParam>({
    order_dt_start: dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
    order_dt_finish: dayjs().subtract(1, 'days').format('YYYY-MM-DD'),
  });

  const hanldeTabMove = (index: number) => {
    setActiveTabIndex(index);
    router.push(salesAnalyzeTabData[index].url);
  };

  return (
    <>
      <TitleArea title="매장별 매출" />
      <Tabs
        id="salesAnalyze2"
        tabs={salesAnalyzeTabData}
        activeTabIndex={activeTabIndex}
        onTabChange={(index: number) => hanldeTabMove(index)}
      />
      <FilterTableForm salesType params={params} updateParams={updateParams} />
      <SalesSummaryTable params={params} />
      {/* <SalesDayVirtualTable params={params} /> */}
      <SalesDayVirtualTable2 params={params} />
    </>
  );
};

export default Index;
