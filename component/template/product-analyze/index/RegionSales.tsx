import React from 'react';
import { useQuery } from 'react-query';
import { fetchRegionAnalyze } from '@ApiFarm/product-analyze-dashboard';
import { AreaBox } from '@ComponentFarm/template/common/AreaBox';
import { QueryParams } from '@HookFarm/useQueryParams';
import SalesProductTable from '../region/SalesProductTable';

const RegionSales = ({ params }: { params: QueryParams }) => {
  const { data } = useQuery(['regionDashboard', params], () =>
    fetchRegionAnalyze(params)
  );

  return (
    <AreaBox title="판매 제품 수" className="noPadding">
      {data && <SalesProductTable data={data} />}
    </AreaBox>
  );
};

export default RegionSales;
