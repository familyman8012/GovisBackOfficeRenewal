import React from 'react';
import { useQuery } from 'react-query';
import { fetchRegionAnalyze } from '@ApiFarm/product-analyze-dashboard';
import { AreaBox } from '@ComponentFarm/template/common/AreaBox';
import { QueryParams } from '@HookFarm/useQueryParams';
import RegionSalesTable from '../region/RegionSalesTable';

const RegionSales = ({ params }: { params: QueryParams }) => {
  const { data } = useQuery(
    ['regionDashboard', params],
    () => fetchRegionAnalyze(params),
    { enabled: !!params.evi_product_category }
  );

  return (
    <AreaBox title="지역별 제품 판매 현황" className="noPadding">
      {data && <RegionSalesTable data={data} />}
    </AreaBox>
  );
};

export default RegionSales;
