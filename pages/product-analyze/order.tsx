import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { css } from '@emotion/react';
import { fetchOrderAnalyze } from '@ApiFarm/product-analyze';
import { IProductAnalyzeReq } from '@InterfaceFarm/product-analyze';
import ExportButton from '@ComponentFarm/modules/ExportButton/ExportButton';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import { BarCharts } from '@ComponentFarm/chart/BarCharts';
import DonutChart from '@ComponentFarm/chart/DonutChart';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { AreaBox } from '@ComponentFarm/template/common/AreaBox';
import FilterTableForm from '@ComponentFarm/template/common/FilterTable/FilterTableForm';
import SubTitleBox from '@ComponentFarm/template/common/SubTitleBox';
import { productAnalyzeTabData } from '@ComponentFarm/template/product-analyze/const';
import { OrderDonutLegend } from '@ComponentFarm/template/product-analyze/order/OrderDonutLegend';
import SalesProductTable from '@ComponentFarm/template/product-analyze/order/SalesProductTable';
import useTabWithDateQuery from '@ComponentFarm/template/product-analyze/useTabWithDateQuery';
import useQueryParams from '@HookFarm/useQueryParams';

const OrderAnalyze = () => {
  const [params, updateParams, resetParams] = useQueryParams({});

  const { activeTabIndex, handleTabWithDateQuery } = useTabWithDateQuery({
    tabIdx: 3,
    params,
    productAnalyzeTabData,
  });

  const { data } = useQuery(['OrderAnalyze', params], () =>
    fetchOrderAnalyze(params as IProductAnalyzeReq)
  );

  const chartData = useMemo(
    () =>
      data?.list.map((el, i) =>
        i === 0
          ? { ...el, fill: '#5A6ACF' }
          : i === 1
          ? { ...el, fill: '#8593ED' }
          : { ...el, fill: '#C7CEFF' }
      ),
    [data?.list]
  );

  const increaseData = useMemo(
    () =>
      data?.list.map(el => {
        return {
          name: el.item_label,
          value: el.increase_decrease_rate,
          fill: el.increase_decrease_rate > 0 ? '#FF4600' : '#2264E5',
        };
      }),
    [data?.list]
  );

  return (
    <>
      <TitleArea title="제품 분석 및 통계" />
      <Tabs
        id="order-analyze"
        tabs={productAnalyzeTabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => handleTabWithDateQuery(index)}
      />
      <SubTitleBox
        title="주문방식별 현황"
        desc="분류, 기간 유형별 통계를 확인할 수 있습니다."
        hideUnderline
      />
      <FilterTableForm
        type="diff"
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <SubTitleBox
        title="조회 결과"
        hideUnderline
        descBottom={[
          {
            label: '기준일 제품 총 판매 수',
            value: `${data?.total.total_base_sales_count.toLocaleString()}`,
          },
          {
            label: '비교일 제품 총 판매 수',
            value: `${data?.total.total_comparison_sales_count.toLocaleString()}`,
          },
        ]}
      />
      <div
        css={css`
          display: flex;
          gap: 0 2rem;
          margin-bottom: 3.2rem;
        `}
      >
        <div
          css={css`
            width: 50%;
          `}
        >
          <AreaBox title="주문방식별 제품판매 현황">
            <DonutChart
              height="40rem"
              chartData={chartData}
              legend={<OrderDonutLegend />}
            />
          </AreaBox>
        </div>
        <div
          css={css`
            width: 50%;
          `}
        >
          <AreaBox title="증감율">
            <BarCharts
              height="40rem"
              barSize={60}
              domain={[
                (dataMin: number) =>
                  (dataMin - Math.abs(dataMin * 0.2)).toFixed(0),
                (dataMax: number) =>
                  (dataMax + Math.abs(dataMax * 0.2)).toFixed(0),
              ]}
              hasGrid
              xKey="name"
              chartData={increaseData}
              isTooltip={false}
              isLabelList
              LabelListFormatter={(value: number) =>
                `${value > 0 ? '+' : ''}${value.toFixed(2)}%`
              }
            />
          </AreaBox>
        </div>
      </div>
      <AreaBox
        title="판매 제품 수"
        className="noPadding"
        addFunc={
          <ExportButton
            params={params}
            endPoint="/analytics/product/sales/export/order_raw_data"
            title="판매 제품 수"
          />
        }
      >
        {data && <SalesProductTable data={data} />}
      </AreaBox>
    </>
  );
};

export default OrderAnalyze;
