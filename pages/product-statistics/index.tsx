import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { css } from '@emotion/react';
import { fetchProductAllStatis } from '@ApiFarm/product-statistics';
import { IOption, Select } from '@ComponentFarm/atom/Select/Select';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import { BarCharts } from '@ComponentFarm/chart/BarCharts';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { AreaBox } from '@ComponentFarm/template/common/AreaBox';
import FilterTableForm from '@ComponentFarm/template/common/FilterTable/FilterTableForm';
import SubTitleBox, {
  SubTitleBoxWrap,
} from '@ComponentFarm/template/common/SubTitleBox';
import { ProductSalesTable } from '@ComponentFarm/template/product-statistics/all-statistics/ProductSalesTable';
import { productStatisticsTabData } from '@ComponentFarm/template/product-statistics/const';
import useQueryParams from '@HookFarm/useQueryParams';

const AisttState = () => {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const options: IOption[] = [
    {
      value: 'hourly',
      label: '시간별',
    },
    {
      value: 'daily',
      label: '일별',
    },
    {
      value: 'monthly',
      label: '월별',
    },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [params, updateParams, resetParams] = useQueryParams({
    type: 'hourly',
  });

  useEffect(() => {
    setSelectedOption(options.find(o => o.value === params.type) ?? options[0]);
  }, [params.type]);

  const hanldeTabMove = (index: number) => {
    setActiveTabIndex(index);
    router.push(productStatisticsTabData[index].url);
  };

  const { data } = useQuery(['productList', params], () =>
    fetchProductAllStatis(params)
  );

  const calCulateXformat =
    selectedOption?.value === 'hourly'
      ? '시'
      : selectedOption?.value === 'daily'
      ? '일'
      : '월';

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
        title="제조 품질 통계"
        desc="분류, 기간 유형별 통계를 확인할 수 있습니다."
      />
      <FilterTableForm
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <SubTitleBoxWrap hideUnderline>
        <h2>조회 결과</h2>
        <div>dasfasd</div>
        <div
          css={css`
            margin-left: auto;
            > div {
              width: 10rem;
            }
          `}
        >
          <Select
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={option => updateParams({ type: option.value })}
            isSearchable={false}
          />
        </div>
      </SubTitleBoxWrap>
      <AreaBox
        title="전체 제품판매 현황"
        txt1={`${data?.total.total_base_sales_count.toLocaleString()}개`}
        txt2={[
          '전년도 (2022년) 대비',
          `+ ${data?.total.total_increase_decrease_rate}% 상승`,
        ]}
      >
        {data && (
          <BarCharts
            height="55.7rem"
            chartData={data?.list}
            barSize={6}
            tickCount={11}
            xTickFormatter={formatValue => `${formatValue}${calCulateXformat}`}
            domain={[
              0,
              (dataMax: number) => Math.ceil((dataMax * 1.2) / 10) * 10,
            ]}
            fill="var(--color-orange90)"
          />
        )}
      </AreaBox>
      <AreaBox title="판매 제품 수">
        <ProductSalesTable chartData={data?.list} format={calCulateXformat} />
      </AreaBox>
      {/* <StoreSearchPopup /> */}
    </>
  );
};

export default AisttState;
