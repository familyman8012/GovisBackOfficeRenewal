import React from 'react';
import { useQuery } from 'react-query';
import { fetchChannelAnalyze } from '@ApiFarm/product-analyze-dashboard';
import { IProductAnalyzeReq } from '@InterfaceFarm/product-analyze';
import { BarCharts } from '@ComponentFarm/chart/BarCharts';
import { AreaBox } from '@ComponentFarm/template/common/AreaBox';
import { QueryParams } from '@HookFarm/useQueryParams';
import { dateParams } from './moreLinkDateParams';

const ChannelSaels = ({ params }: { params: QueryParams }) => {
  const { data: channelData } = useQuery(
    ['ChannelAnalyze-Dashboard', params],
    () => fetchChannelAnalyze(params as IProductAnalyzeReq)
  );
  return (
    <AreaBox
      title="주문채널별 제품판매 현황"
      moreLink={`/product-analyze/channel?${dateParams(params)}`}
    >
      <BarCharts
        type="diff"
        height="40rem"
        chartData={channelData?.list}
        barSize={6}
        tickCount={7}
        isLegend
        diffSet={[
          {
            name: '기준일',
            dataKey: 'base_sales_count',
            fill: '#5A6ACF',
          },
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

export default ChannelSaels;
