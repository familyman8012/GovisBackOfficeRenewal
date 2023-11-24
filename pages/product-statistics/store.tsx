/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import {
  fetchStoreRankingStatics,
  fetchStoreStatics,
} from '@ApiFarm/product-statistics';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { AreaBox } from '@ComponentFarm/template/common/AreaBox';
import FilterTableForm from '@ComponentFarm/template/common/FilterTable/FilterTableForm';
import SubTitleBox from '@ComponentFarm/template/common/SubTitleBox';
import { productStatisticsTabData } from '@ComponentFarm/template/product-statistics/const';
import SalesProductTable from '@ComponentFarm/template/product-statistics/store/SalesProductTable';
import StoreSalesTable from '@ComponentFarm/template/product-statistics/store/StoreSalesTable';
import useQueryParams from '@HookFarm/useQueryParams';
import { options } from '../../component/template/product-statistics/all-statistics/const';

const SelectStoreType = styled.div`
  margin: 0 2.4rem 0 auto;

  button {
    min-width: auto;
    width: 6.9rem;
  }
`;

const Category = () => {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [params, updateParams, resetParams] = useQueryParams({});
  const [selectStoreType, setSelectStoreType] = useState('direct');

  const hanldeTabMove = (index: number) => {
    setActiveTabIndex(index);
    router.push(productStatisticsTabData[index].url);
  };

  const { data: rankingData } = useQuery(
    ['storeRankingStaticsList', params],
    () => fetchStoreRankingStatics(params)
  );

  const { data } = useQuery(['storeStaticsList', params], () =>
    fetchStoreStatics(params)
  );

  console.log('data', data);

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
        title="카테고리별 현황"
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
        {rankingData && (
          <StoreSalesTable
            rankingData={
              selectStoreType === 'direct'
                ? rankingData?.direct_store_list
                : rankingData?.franchisee_store_list
            }
          />
        )}
      </AreaBox>
      <AreaBox title="판매 제품 수" className="noPadding">
        {data && <SalesProductTable data={data} />}
      </AreaBox>
    </>
  );
};

export default Category;
