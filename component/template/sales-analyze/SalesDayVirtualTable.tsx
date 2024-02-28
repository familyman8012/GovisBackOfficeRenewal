import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useQuery } from 'react-query';
import { css } from '@emotion/react';
import { fetchDaySale } from '@ApiFarm/sales';
import VirtualizedTable from '@ComponentFarm/modules/VirtualizedTable/VirtualizedTable';
import { VirtualTableWrap } from '@ComponentFarm/template/sales-analyze/style';
import SalesVirtualCell, {
  SalesVirtualCellProps,
} from '@ComponentFarm/template/sales-analyze/VirtualCell';

const SalesDayVirtualTable = ({ params }: { params: any }) => {
  const { isLoading, data: salesData } = useQuery(['DaySale', params], () =>
    fetchDaySale(params)
  );

  const cellRenderer = (props: SalesVirtualCellProps) => (
    <SalesVirtualCell {...props} salesData={salesData} />
  );

  if (isLoading) {
    return (
      <div>
        <Skeleton height="81rem" baseColor="#fcfcfc" />
      </div>
    );
  }

  return (
    <>
      {salesData && (
        <VirtualTableWrap
          //   css={css`
          //   height: ${`${Number(salesData?.list.length) * 77 + 64}px`};
          // `}
          className={`${
            salesData.list[0].daily_sales_list.length < 7 &&
            salesData?.list.length < 11
              ? 'scroll_empty'
              : ''
          }`}
          css={css`
            height: ${salesData?.list.length > 10
              ? '81rem'
              : `${Number(salesData?.list.length) * 77 + 64}px`};
          `}
        >
          <VirtualizedTable
            rowCount={salesData.list.length + 1}
            thHeight={49}
            cellRenderer={cellRenderer}
            viewRow={
              salesData.list.length > 10 ? 11 : salesData.list.length + 1
            }
            viewColumn={salesData.list[0].daily_sales_list.length + 2}
            fixedColumnCount={2}
          />
        </VirtualTableWrap>
      )}
    </>
  );
};

export default SalesDayVirtualTable;
