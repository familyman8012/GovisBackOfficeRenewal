import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { fetchStoreRankingAnalyze } from '@ApiFarm/product-analyze-dashboard';
import { IProductAnalyzeReq } from '@InterfaceFarm/product-analyze';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { AreaBox } from '@ComponentFarm/template/common/AreaBox';
import { QueryParams } from '@HookFarm/useQueryParams';
import StoreSalesTable from '../store/StoreSalesTable';

const SelectStoreType = styled.div`
  margin: 0 2.4rem 0 auto;

  button {
    min-width: auto;
    width: 6.9rem;
  }
`;

const StoreSales = ({ params }: { params: QueryParams }) => {
  const [selectStoreType, setSelectStoreType] = useState('direct');
  const { data: rankingData } = useQuery(
    ['StoreRankingAnalyze-Dashboard', params],
    () => fetchStoreRankingAnalyze(params as IProductAnalyzeReq)
  );
  return (
    <AreaBox
      title="매장별 제품판매 현황"
      className="noPadding"
      css={css`
        height: 61.8rem;
      `}
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
  );
};

export default StoreSales;
