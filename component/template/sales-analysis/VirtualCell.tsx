import { IDaySaleRes } from '@InterfaceFarm/sales';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { StatusStr, StoreStr } from '@ComponentFarm/modal/SearchPopup/const';
import { VitualTableCell } from './style';

export interface SalesVirtualCellProps {
  columnIndex: number;
  key: string;
  rowIndex: number;
  style: object;
  salesData?: IDaySaleRes;
}

// 패턴에 따라 스타일을 결정하는 함수
const getPatternBasedStyle = (rowIndex: number, columnIndex: number) => {
  // 패턴 로직 (이전 예시 참조)
  const isStyledIndex = (index: number) => {
    let sum = 0;
    let add = 1;
    // eslint-disable-next-line no-plusplus
    for (let i = 1; ; i++) {
      sum += add;
      if (index === sum) return true;
      if (i % 3 === 0) add = 2; // 3번째 인덱스마다 3을 더함
      else add = 2; // 나머지 경우에는 2를 더함

      if (sum > index) return false;
    }
  };

  // 첫 번째 행에서 특정 패턴을 만족하는 경우 다른 배경색 적용
  if (rowIndex === 0 && isStyledIndex(columnIndex)) {
    return { backgroundColor: 'var(--color-blue_gray30)' };
  }

  return isStyledIndex(columnIndex)
    ? { backgroundColor: 'var(--color-blue_gray10)' }
    : {};
};

const SalesVirtualCell = ({
  columnIndex,
  key,
  rowIndex,
  style,
  salesData,
}: SalesVirtualCellProps) => {
  let content;

  const patternBasedStyle = getPatternBasedStyle(rowIndex, columnIndex);
  // 스타일 객체 병합
  const cellStyle = { ...style, ...patternBasedStyle };

  if (salesData) {
    if (rowIndex === 0) {
      if (columnIndex === 0) {
        content = '매장명';
      } else if (columnIndex === 1) {
        content = '총합';
      } else {
        const dayIndex = columnIndex - 2;
        content = salesData.list[0].daily_sales_list[dayIndex]?.sales_day || '';
      }
    } else {
      const store = salesData.list[rowIndex - 1];
      if (columnIndex === 0) {
        // 매장명 열에서 매장명, 상태, 타입을 표시
        content = (
          <div className="wrap_storename">
            <div className="store_name">{store.store_name}</div>
            <div className="info">
              <Badge color="gray" size="sm">
                {StoreStr[store.store_type]}
              </Badge>
              <Badge
                color={
                  store.store_status === 'OPEN'
                    ? 'blue'
                    : store.store_status === 'CLOSED'
                    ? 'red'
                    : 'yellow'
                }
                size="sm"
              >
                {StatusStr[store.store_status]}
              </Badge>
            </div>
          </div>
        );
      } else if (columnIndex === 1) {
        content = store.total_sales_amount.toLocaleString();
      } else {
        const dayIndex = columnIndex - 2;
        const salesAmount = store.daily_sales_list[dayIndex]?.sales_amount || 0;
        content = salesAmount.toLocaleString();
      }
    }
  }

  return (
    <VitualTableCell key={key} style={cellStyle}>
      {content}
    </VitualTableCell>
  );
};

export default SalesVirtualCell;
