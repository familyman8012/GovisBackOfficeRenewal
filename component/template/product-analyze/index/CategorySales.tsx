import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { css } from '@emotion/react';
import { fetchCategoryAnalyze } from '@ApiFarm/product-analyze-dashboard';
import { IProductAnalyzeReq } from '@InterfaceFarm/product-analyze';
import { BarCharts } from '@ComponentFarm/chart/BarCharts';
import { AreaBox } from '@ComponentFarm/template/common/AreaBox';
import { QueryParams } from '@HookFarm/useQueryParams';
import { dateParams } from './moreLinkDateParams';

const CategorySales = ({ params }: { params: QueryParams }) => {
  const { data } = useQuery(['CategoryAnalyze-Dashboard', params], () =>
    fetchCategoryAnalyze(params as IProductAnalyzeReq)
  );

  const categoryData = useMemo(
    () =>
      data?.list.map(el => {
        return {
          ...el,
          product_name_ko: el.product_name_ko.replace('피자', ''),
        };
      }),
    [data?.list]
  );

  const fontSizeCal =
    categoryData && categoryData?.length > 10 ? '12px' : '14px';

  return (
    <AreaBox
      title="카테고리별 제품판매 현황"
      moreLink={`/product-analyze/category?${dateParams(params)}`}
      css={css`
        margin: 3.2rem 0;
        .recharts-surface {
          tspan {
            font-size: ${fontSizeCal};
            @media (max-width: 1600px) {
              font-size: 9px;
            }
          }
        }
      `}
    >
      <BarCharts
        type="diff"
        height="55.7rem"
        xKey="product_name_ko"
        chartData={categoryData}
        barSize={6}
        tickCount={11}
        angle={Number(categoryData?.length) > 12 ? -30 : 0}
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
    </AreaBox>
  );
};

export default CategorySales;
