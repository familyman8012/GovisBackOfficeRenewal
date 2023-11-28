import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchAllProductAnalyze } from '@ApiFarm/product-analyze-dashboard';
import { IProductAnalyzeReq } from '@InterfaceFarm/product-analyze';
import { IOption } from '@ComponentFarm/atom/Select/Select';
import { BarCharts } from '@ComponentFarm/chart/BarCharts';
import { AreaBox } from '@ComponentFarm/template/common/AreaBox';
import SubTitleBox from '@ComponentFarm/template/common/SubTitleBox';
import { QueryParams } from '@HookFarm/useQueryParams';

const AllSales = ({ params }: { params: QueryParams }) => {
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
  useEffect(() => {
    setSelectedOption(options.find(o => o.value === params.type) ?? options[0]);
  }, [params.type]);

  const { data: allData } = useQuery(
    ['AllProductAnalyze-Dashboard', params],
    () => fetchAllProductAnalyze(params as IProductAnalyzeReq)
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
      <SubTitleBox
        title="조회 결과"
        hideUnderline
        descBottom={[
          {
            label: '기준일 제품 총 판매 수',
            value: `${allData?.total.total_base_sales_count.toLocaleString()}`,
          },
          {
            label: '비교일 제품 총 판매 수',
            value: `${allData?.total.total_comparison_sales_count.toLocaleString()}`,
          },
        ]}
      />
      <AreaBox title="전체 제품판매 현황">
        {allData && (
          <BarCharts
            height="55.7rem"
            chartData={allData?.list}
            barSize={6}
            tickCount={11}
            xTickFormatter={formatValue =>
              `${calCulateXformat(formatValue, 'chart')}`
            }
            fill="var(--color-orange90)"
          />
        )}
      </AreaBox>
    </>
  );
};

export default AllSales;
