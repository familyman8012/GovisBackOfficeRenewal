import React from 'react';
import axios from 'axios';
import { MultiGrid, AutoSizer } from 'react-virtualized';
import { useInfiniteQuery } from 'react-query';
import { css } from '@emotion/react';

const STYLE = {
  border: '1px solid #ddd',
};
const STYLE_BOTTOM_LEFT_GRID = {
  borderRight: '2px solid #aaa',
  backgroundColor: '#f7f7f7',
};
const STYLE_TOP_LEFT_GRID = {
  borderBottom: '2px solid #aaa',
  borderRight: '2px solid #aaa',
  fontWeight: 'bold',
};
const STYLE_TOP_RIGHT_GRID = {
  borderBottom: '2px solid #aaa',
  fontWeight: 'bold',
};

const fetchSalesData = async ({ pageParam = 1 }) => {
  const response = await axios.get(`/api/dates?page=${pageParam}`);
  return response.data;
};

const InfinityVirtualizedTable = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery('salesData', fetchSalesData, {
      getNextPageParam: lastPage => lastPage.nextPage ?? false,
    });

  const updatedStores = React.useMemo(() => {
    const storesMap = new Map();

    data?.pages.forEach(page => {
      page.list.forEach(
        (store: { store_idx: number; daily_sales_list: any[] }) => {
          if (!storesMap.has(store.store_idx)) {
            storesMap.set(store.store_idx, { ...store, daily_sales_list: [] });
          }
          const updatedStore = storesMap.get(store.store_idx);
          updatedStore.daily_sales_list = [
            ...updatedStore.daily_sales_list,
            ...store.daily_sales_list,
          ];
          storesMap.set(store.store_idx, updatedStore);
        }
      );
    });

    return Array.from(storesMap.values());
  }, [data?.pages]);

  // 날짜 데이터 업데이트 로직을 통합한 후, uniqueDates 계산
  const allDates = updatedStores.flatMap(store =>
    store.daily_sales_list.map((sale: any) => sale.sales_day)
  );
  const uniqueDates = [...new Set(allDates)];

  const cellRenderer = ({
    columnIndex,
    key,
    rowIndex,
    style,
  }: {
    columnIndex: number;
    key: string;
    rowIndex: number;
    style: object;
  }) => {
    let content;

    if (rowIndex === 0) {
      // 헤더 로우
      if (columnIndex < 2) {
        content = columnIndex === 0 ? '매장명' : '총합';
      } else {
        content = uniqueDates[columnIndex - 2] || '';
      }
    } else {
      // 데이터 로우
      const store = updatedStores[rowIndex - 1];
      if (columnIndex === 0) {
        content = store.store_name;
      } else if (columnIndex === 1) {
        content = store.total_sales_amount.toLocaleString();
      } else {
        const date = uniqueDates[columnIndex - 2];
        const sale = store.daily_sales_list.find(
          (s: any) => s.sales_day === date
        );
        content = sale ? sale.sales_amount.toLocaleString() : '0';
      }
    }

    return (
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #eee;
          border-right: 1px solid #eee;
        `}
        key={key}
        style={style}
      >
        {content}
      </div>
    );
  };

  const onScroll = ({
    scrollLeft,
    clientWidth,
    scrollWidth,
  }: {
    scrollLeft: number;
    clientWidth: number;
    scrollWidth: number;
  }) => {
    if (
      scrollWidth - scrollLeft <= clientWidth + 100 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  };

  return (
    <div
      css={css`
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        padding: 0 1rem 1rem 1rem;
        overflow: auto;
        background: white;
      `}
    >
      <AutoSizer disableHeight>
        {({ width }) => (
          <MultiGrid
            columnCount={2 + uniqueDates.length} // 고정된 컬럼 + 날짜 데이터 컬럼
            rowCount={updatedStores.length + 1} // 매장 수 + 헤더
            fixedColumnCount={2}
            fixedRowCount={1}
            scrollToColumn={0}
            scrollToRow={0}
            cellRenderer={cellRenderer}
            height={600}
            rowHeight={40}
            columnWidth={75}
            enableFixedColumnScroll
            enableFixedRowScroll
            width={width}
            style={STYLE}
            styleBottomLeftGrid={STYLE_BOTTOM_LEFT_GRID}
            styleTopLeftGrid={STYLE_TOP_LEFT_GRID}
            styleTopRightGrid={STYLE_TOP_RIGHT_GRID}
            hideTopRightGridScrollbar
            hideBottomLeftGridScrollbar
            onScroll={onScroll}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default InfinityVirtualizedTable;
