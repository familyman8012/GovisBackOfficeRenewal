import { useEffect, useRef } from 'react';
import { IHistoryResItem } from '@InterfaceFarm/history';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import { Table } from '@ComponentFarm/common';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';
import { columnConfig } from './const';
import { InfiniteTableWrap } from './style';

interface InfiniteTableProps {
  list: IHistoryResItem[];
  loading?: boolean;
  onBottomScroll?: () => void;
}

const HistoryTableRow = ({ item }: { item: IHistoryResItem }) => {
  if (item.log_type === 1) {
    return (
      <tr key={item.history_id}>
        <td>{item.created_date}</td>
        <td>{item.user_name}</td>
        <td>
          <Badge color="gray">최초 등록</Badge>
        </td>
        <td>
          <Badge color="green" dot fill="transparent">
            등록
          </Badge>
        </td>
        <td>-</td>
      </tr>
    );
  }

  return (
    <tr key={item.history_id}>
      <td>{item.created_date}</td>
      <td>{item.user_name}</td>
      <td>
        <Badge color="gray">
          {columnConfig?.[item.log_column as keyof typeof columnConfig] ??
            item.log_column}
        </Badge>
      </td>
      <td>
        <Badge color="blue" dot fill="transparent">
          변경
        </Badge>
      </td>
      <td>{`${item.log_value_org} > ${item.log_value_ch}`}</td>
    </tr>
  );
};
const InfiniteHistoryTable = ({
  list,
  loading,
  onBottomScroll,
}: InfiniteTableProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // bind scroll event to scrollRef element
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return () => {};
    const onScroll = () => {
      if (
        scrollEl.scrollTop + scrollEl.clientHeight >=
        scrollEl.scrollHeight - 100
      ) {
        onBottomScroll?.();
      }
    };
    scrollEl.addEventListener('scroll', onScroll);
    return () => scrollEl.removeEventListener('scroll', onScroll);
  }, [scrollRef, onBottomScroll]);

  return (
    <InfiniteTableWrap ref={scrollRef}>
      <Table className="basic">
        <colgroup>
          <col width={getTableWidthPercentage(320)} />
          <col width={getTableWidthPercentage(150)} />
          <col width={getTableWidthPercentage(250)} />
          <col width={getTableWidthPercentage(200)} />
          <col width={getTableWidthPercentage(616)} />
        </colgroup>
        <thead>
          <tr>
            <th>변경일자</th>
            <th>처리자</th>
            <th>변경항목</th>
            <th>변경구분</th>
            <th>변경 내용</th>
          </tr>
        </thead>
        <tbody>
          {list.length === 0 && (
            <tr className="empty">
              <td colSpan={5}>
                <Empty>데이터가 없습니다.</Empty>
              </td>
            </tr>
          )}
          {list.map(item => (
            <HistoryTableRow key={item.history_id} item={item} />
          ))}
        </tbody>
      </Table>
    </InfiniteTableWrap>
  );
};

export default InfiniteHistoryTable;
