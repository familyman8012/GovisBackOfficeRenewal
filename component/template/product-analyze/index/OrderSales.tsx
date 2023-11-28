import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { fetchOrderAnalyze } from '@ApiFarm/product-analyze-dashboard';
import { IProductAnalyzeReq } from '@InterfaceFarm/product-analyze';
import DonutChart from '@ComponentFarm/chart/DonutChart';
import { AreaBox } from '@ComponentFarm/template/common/AreaBox';
import { QueryParams } from '@HookFarm/useQueryParams';
import { dateParams } from './moreLinkDateParams';
import { OrderDonutLegend } from '../order/OrderDonutLegend';

const OrderSales = ({ params }: { params: QueryParams }) => {
  const { data: orderData } = useQuery(['OrderAnalyze-Dashboard', params], () =>
    fetchOrderAnalyze(params as IProductAnalyzeReq)
  );

  const chartData = useMemo(
    () =>
      orderData?.list.map((el, i) =>
        i === 0
          ? { ...el, fill: '#5A6ACF' }
          : i === 1
          ? { ...el, fill: '#8593ED' }
          : { ...el, fill: '#C7CEFF' }
      ),
    [orderData?.list]
  );

  return (
    <AreaBox
      title="주문방식별 제품판매 현황"
      moreLink={`/product-analyze/order?${dateParams(params)}`}
    >
      <DonutChart
        height="40rem"
        chartData={chartData}
        legend={<OrderDonutLegend />}
      />
    </AreaBox>
  );
};

export default OrderSales;
