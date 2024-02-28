import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import { MultiGrid, AutoSizer } from 'react-virtualized';
import { css } from '@emotion/react';

interface DailySales {
  sales_day: string;
  sales_amount: number;
}

interface Store {
  store_idx: number;
  store_name: string;
  store_status: 'OPEN' | 'CLOSED' | 'PLANNED';
  store_type: 'DIRECT' | 'FRANCHISEE' | 'XGO' | 'TEST';
  total_sales_amount: number;
  daily_sales_list: DailySales[];
}

interface SalesData {
  info: {
    store_idx: string;
    order_dt_start: string;
    order_dt_finish: string;
    store_status: null;
    sales_type: null;
  };
  list: Store[];
}

function generateTestData(
  storeCount: number = 200,
  salesDaysCount: number = 365
): SalesData {
  const startDate = dayjs('2024-01-01');
  const stores: Store[] = [];

  // eslint-disable-next-line no-plusplus
  for (let storeIdx = 1; storeIdx <= storeCount; storeIdx++) {
    const dailySalesList: DailySales[] = [];
    let totalSalesAmount = 0;

    // eslint-disable-next-line no-plusplus
    for (let day = 0; day < salesDaysCount; day++) {
      const salesDay = startDate.add(day, 'day').format('MM-DD');
      const salesAmount = Math.floor(Math.random() * 10000) * 100;
      dailySalesList.push({ sales_day: salesDay, sales_amount: salesAmount });
      totalSalesAmount += salesAmount;
    }

    stores.push({
      store_idx: storeIdx,
      store_name: `매장${storeIdx}`,
      store_status: ['OPEN', 'CLOSED', 'PLANNED'][
        Math.floor(Math.random() * 3)
      ] as 'OPEN' | 'CLOSED' | 'PLANNED',
      store_type: ['DIRECT', 'FRANCHISEE', 'XGO', 'TEST'][
        Math.floor(Math.random() * 4)
      ] as 'DIRECT' | 'FRANCHISEE' | 'XGO' | 'TEST',
      total_sales_amount: totalSalesAmount,
      daily_sales_list: dailySalesList,
    });
  }

  return {
    info: {
      store_idx: stores.map(store => store.store_idx.toString()).join(','),
      order_dt_start: startDate.format('YYYY-MM-DD'),
      order_dt_finish: startDate
        .add(salesDaysCount - 1, 'day')
        .format('YYYY-MM-DD'),
      store_status: null,
      sales_type: null,
    },
    list: stores,
  };
}

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

// 컨텍스트 사용을 위해 필요한 경우 useContext 훅을 사용
// const listContext = useContext(ListContext);

const OneDataTable = () => {
  const salesData = useMemo(() => generateTestData(), []);

  const cellRenderer = ({ columnIndex, key, rowIndex, style }: any) => {
    let content;

    // 첫 번째 행(헤더)
    if (rowIndex === 0) {
      if (columnIndex === 0) {
        content = '매장명';
      } else if (columnIndex === 1) {
        content = '총합';
      } else {
        // sales_day를 헤더로 표시
        const dayIndex = columnIndex - 2; // sales_day 시작 인덱스 조정
        content = salesData.list[0].daily_sales_list[dayIndex]?.sales_day || '';
      }
    } else {
      const store = salesData.list[rowIndex - 1];
      if (columnIndex === 0) {
        content = store.store_name;
      } else if (columnIndex === 1) {
        content = store.total_sales_amount.toLocaleString();
      } else {
        // 각 매장의 해당 날짜의 sales_amount 표시
        const dayIndex = columnIndex - 2;
        const salesAmount = store.daily_sales_list[dayIndex]?.sales_amount || 0;
        content = salesAmount.toLocaleString();
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
            fixedColumnCount={2}
            fixedRowCount={1}
            scrollToColumn={0}
            scrollToRow={0}
            cellRenderer={cellRenderer}
            columnWidth={75}
            columnCount={salesData.list[0].daily_sales_list.length + 2}
            enableFixedColumnScroll
            enableFixedRowScroll
            height={600}
            rowHeight={40}
            rowCount={salesData.list.length + 1}
            style={STYLE}
            styleBottomLeftGrid={STYLE_BOTTOM_LEFT_GRID}
            styleTopLeftGrid={STYLE_TOP_LEFT_GRID}
            styleTopRightGrid={STYLE_TOP_RIGHT_GRID}
            width={width}
            hideTopRightGridScrollbar
            hideBottomLeftGridScrollbar
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default OneDataTable;
