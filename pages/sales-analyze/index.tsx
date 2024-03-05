import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import ExportButton from '@ComponentFarm/modules/ExportButton/ExportButton';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { salesAnalyzeTabData } from '@ComponentFarm/template/sales-analyze/const';
import FilterTableForm from '@ComponentFarm/template/sales-analyze/FilterSalesAnalyze';
import SalesSummaryTable from '@ComponentFarm/template/sales-analyze/SalesSummaryTable';
import SalesTotal from '@ComponentFarm/template/sales-analyze/SalesTotalTable';
import useQueryParams from '@HookFarm/useQueryParams';

const Index = () => {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [params, updateParams] = useQueryParams({
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
        id="salesAnalyze"
        tabs={salesAnalyzeTabData}
        activeTabIndex={activeTabIndex}
        onTabChange={(index: number) => hanldeTabMove(index)}
      />
      <FilterTableForm params={params} updateParams={updateParams} />
      <SalesSummaryTable params={params} />
      <div
        css={css`
          button {
            display: flex;
            margin: 3.2rem 0 1.6rem auto;
          }
        `}
      >
        <ExportButton
          params={params}
          endPoint="/analytics/amount/sales/by_store"
          title="매출 분석"
          buttonTxt="매출 분석 다운로드"
        />
      </div>
      <SalesTotal params={params} />
    </>
  );
};

export default Index;
