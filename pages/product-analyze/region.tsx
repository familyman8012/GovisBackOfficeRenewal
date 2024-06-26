import { useQuery } from 'react-query';
import { fetchRegionAnalyze } from '@ApiFarm/product-analyze';
import { IProductAnalyzeReq } from '@InterfaceFarm/product-analyze';
import ExportButton from '@ComponentFarm/modules/ExportButton/ExportButton';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { AreaBox } from '@ComponentFarm/template/common/AreaBox';
import FilterTableForm from '@ComponentFarm/template/common/FilterTable/FilterTableForm';
import SubTitleBox from '@ComponentFarm/template/common/SubTitleBox';
import {
  initialDay,
  productAnalyzeTabData,
} from '@ComponentFarm/template/product-analyze/const';
import SalesProductTable from '@ComponentFarm/template/product-analyze/region/SalesProductTable';
import useTabWithDateQuery from '@ComponentFarm/template/product-analyze/useTabWithDateQuery';
import useQueryParams from '@HookFarm/useQueryParams';

const RegionAnalyze = () => {
  const [params, updateParams, resetParams] = useQueryParams<any>(initialDay);
  const { activeTabIndex, handleTabWithDateQuery } = useTabWithDateQuery({
    tabIdx: 6,
    params,
    productAnalyzeTabData,
  });

  const { isLoading, data } = useQuery(['RegionAnalyze', params], () =>
    fetchRegionAnalyze(params as IProductAnalyzeReq)
  );

  return (
    <>
      <TitleArea title="제품 분석 및 통계" />
      <Tabs
        id="region-analyze"
        tabs={productAnalyzeTabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => handleTabWithDateQuery(index)}
      />
      <SubTitleBox title="지역별 현황" hideUnderline />
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
        <SalesProductTable data={data} isLoading={isLoading} />
      </AreaBox>
    </>
  );
};

export default RegionAnalyze;
