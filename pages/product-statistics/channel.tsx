/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchChannelStatics } from '@ApiFarm/product-statistics';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import { BarCharts } from '@ComponentFarm/chart/BarCharts';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { AreaBox } from '@ComponentFarm/template/common/AreaBox';
import FilterTableForm from '@ComponentFarm/template/common/FilterTable/FilterTableForm';
import SubTitleBox from '@ComponentFarm/template/common/SubTitleBox';
import { productStatisticsTabData } from '@ComponentFarm/template/product-statistics/const';
import SalesProductTable from '@ComponentFarm/template/product-statistics/order/SalesProductTable';
import useQueryParams from '@HookFarm/useQueryParams';
import { options } from '../../component/template/product-statistics/all-statistics/const';

const Category = () => {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [params, updateParams, resetParams] = useQueryParams({});

  const hanldeTabMove = (index: number) => {
    setActiveTabIndex(index);
    router.push(productStatisticsTabData[index].url);
  };

  const { data } = useQuery(['channelStaticsList', params], () =>
    fetchChannelStatics(params)
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
        id="all-statistics"
        tabs={productStatisticsTabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => hanldeTabMove(index)}
      />
      <SubTitleBox
        title="카테고리별 현황"
        desc="분류, 기간 유형별 통계를 확인할 수 있습니다."
        hideUnderline
      />
      <FilterTableForm
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
      <AreaBox title="카테고리별 제품판매 현황">
        {data && (
          <BarCharts
            type="diff"
            height="55.7rem"
            chartData={data.list}
            barSize={6}
            tickCount={11}
            isLegend
            diffSet={[
              { name: '기준일', dataKey: 'base_sales_count', fill: '#5A6ACF' },
              {
                name: '비교일',
                dataKey: 'comparison_sales_count',
                fill: '#E6E8EC',
              },
            ]}
          />
        )}
      </AreaBox>
      <AreaBox title="증감율">
        {data && (
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
        )}
      </AreaBox>
      <AreaBox title="판매 제품 수" className="noPadding">
        {data && <SalesProductTable data={data} />}
      </AreaBox>
    </>
  );
};

export default Category;
