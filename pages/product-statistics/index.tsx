/* eslint-disable no-unused-expressions */
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
import SubTitleBox from '@ComponentFarm/template/common/SubTitleBox';
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
      value: 'weekly',
      label: '주별',
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

  const calCulateXformat = (formValue: string, type?: string) => {
    if (selectedOption?.value === 'hourly') {
      return type === 'chart' ? `${formValue}시` : `${formValue}:00`;
    }
    if (selectedOption?.value === 'daily') {
      return type === 'chart' ? `11.${formValue}` : `2023-11-${formValue}`;
    }
    if (selectedOption?.value === 'monthly') {
      return `${formValue}월`;
    }
    return formValue;
  };

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
      <AreaBox
        title="전체 제품판매 현황"
        addFunc={
          <div
            css={css`
              width: 11.8rem;
              margin-left: auto;
            `}
          >
            <Select
              options={options}
              selectedOption={selectedOption}
              setSelectedOption={option => updateParams({ type: option.value })}
              isSearchable={false}
            />
          </div>
        }
      >
        {data && (
          <BarCharts
            height="55.7rem"
            chartData={data?.list}
            barSize={6}
            tickCount={11}
            xTickFormatter={formatValue =>
              `${calCulateXformat(formatValue, 'chart')}`
            }
            fill="var(--color-orange90)"
          />
        )}
      </AreaBox>
      <AreaBox title="판매 제품 수" className="noPadding">
        <ProductSalesTable chartData={data?.list} format={calCulateXformat} />
      </AreaBox>
    </>
  );
};

export default AisttState;