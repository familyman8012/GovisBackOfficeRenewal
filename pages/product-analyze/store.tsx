import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import {
  fetchStoreRankingAnalyze,
  fetchStoreAnalyze,
} from '@ApiFarm/product-analyze';
import { IProductAnalyzeReq } from '@InterfaceFarm/product-analyze';
import ExportButton from '@ComponentFarm/modules/ExportButton/ExportButton';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { AreaBox } from '@ComponentFarm/template/common/AreaBox';
import FilterTableForm from '@ComponentFarm/template/common/FilterTable/FilterTableForm';
import SubTitleBox from '@ComponentFarm/template/common/SubTitleBox';
import { productAnalyzeTabData } from '@ComponentFarm/template/product-analyze/const';
import SalesProductTable from '@ComponentFarm/template/product-analyze/store/SalesProductTable';
import StoreSalesTable from '@ComponentFarm/template/product-analyze/store/StoreSalesTable';
import useTabWithDateQuery from '@ComponentFarm/template/product-analyze/useTabWithDateQuery';
import useQueryParams from '@HookFarm/useQueryParams';

const SelectStoreType = styled.div`
  margin: 0 2.4rem 0 auto;

  button {
    min-width: auto;
    width: 6.9rem;
  }
`;

const StoreAnalyze = () => {
  const [params, updateParams, resetParams] = useQueryParams({});
  const [selectStoreType, setSelectStoreType] = useState('direct');
  const { activeTabIndex, handleTabWithDateQuery } = useTabWithDateQuery({
    tabIdx: 5,
    params,
    productAnalyzeTabData,
  });

  const { data: rankingData } = useQuery(['StoreRankingAnalyze', params], () =>
    fetchStoreRankingAnalyze(params as IProductAnalyzeReq)
  );

  const { data } = useQuery(['StoreAnalyze', params], () =>
    fetchStoreAnalyze(params as IProductAnalyzeReq)
  );

  return (
    <>
      <TitleArea title="제품 분석 및 통계" />
      <Tabs
        id="store-analyze"
        tabs={productAnalyzeTabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => handleTabWithDateQuery(index)}
      />
      <SubTitleBox
        title="매장별 현황"
        desc="분류, 기간 유형별 통계를 확인할 수 있습니다."
        hideUnderline
      />
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
        title="매장별 제품판매 현황"
        className="noPadding"
        addFunc={
          <SelectStoreType>
            {['direct', 'franchisee'].map(el => (
              <Button
                key={el}
                variant={selectStoreType === el ? 'primary' : 'transparent'}
                onClick={() => setSelectStoreType(el)}
              >
                {el === 'direct' ? '직영점' : '가맹점'}
              </Button>
            ))}
          </SelectStoreType>
        }
      >
        {rankingData ? (
          <StoreSalesTable
            rankingData={
              selectStoreType === 'direct'
                ? rankingData?.direct_store_list
                : rankingData?.franchisee_store_list
            }
          />
        ) : (
          <Skeleton height={217} baseColor="#fcfcfc" />
        )}
      </AreaBox>
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
        {data ? (
          <SalesProductTable data={data} />
        ) : (
          <Skeleton height={517} baseColor="#fcfcfc" />
        )}
      </AreaBox>
    </>
  );
};

export default StoreAnalyze;
