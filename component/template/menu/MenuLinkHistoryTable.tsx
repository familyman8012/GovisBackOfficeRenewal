import { IMenuLinkHistoryItem } from '@InterfaceFarm/menu';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import SkeletonTh from '@ComponentFarm/atom/Skeleton/SkeletonTh';
import Tooltip from '@ComponentFarm/atom/Tooltip/Tooltip';
import { Table, TableWrap } from '@ComponentFarm/common';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

interface MenuLinkHistoryTableProps {
  loading?: boolean;
  list: IMenuLinkHistoryItem[];
  onRequestUnLink: (item: IMenuLinkHistoryItem) => void;
}

const MenuLinkHistoryTable = ({
  list,
  loading,
  onRequestUnLink,
}: MenuLinkHistoryTableProps) => {
  return (
    <TableWrap className="overflow-visible">
      <Table className="basic">
        <colgroup>
          <col width={getTableWidthPercentage(120)} />
          <col width={getTableWidthPercentage(250)} />
          <col width={getTableWidthPercentage(120)} />
          <col width={getTableWidthPercentage(120)} />
          <col width={getTableWidthPercentage(200)} />
          <col width={getTableWidthPercentage(120)} />
          <col width={getTableWidthPercentage(120)} />
          <col width={getTableWidthPercentage(160)} />
        </colgroup>
        <thead>
          <tr>
            <th>NO.</th>
            <th>미확인 메뉴명</th>
            <th>주문 채널 수</th>
            <th>주문 매장 수</th>
            <th>연결 메뉴명</th>
            <th>처리자</th>
            <th>연결일자</th>
            <th>연결 해제</th>
          </tr>
        </thead>
        <tbody>
          {loading && <SkeletonTh colLength={8} rowLength={20} />}
          {!loading && list.length === 0 ? (
            <tr className="empty">
              <td colSpan={8}>
                <Empty>데이터가 없습니다.</Empty>
              </td>
            </tr>
          ) : (
            list.map(item => (
              <tr key={item.sequence_number}>
                <td className="code">{item.sequence_number}</td>
                <td>{item.unidentified_menu_name}</td>
                <td>
                  <button type="button" className="link_popup">
                    {item.order_channel_count}개
                    {item.order_channel_count > 0 && (
                      <Tooltip
                        eventType="click"
                        content={item.order_channel_list.join(', ')}
                      />
                    )}
                  </button>
                </td>
                <td>
                  <button type="button" className="link_popup">
                    {item.order_store_count}개
                    {item.order_store_count > 0 && (
                      <Tooltip
                        eventType="click"
                        content={item.order_store_list.join(', ')}
                      />
                    )}
                  </button>
                </td>
                <td>{item.linked_menu_name}</td>
                <td>{item.processed_user_name}</td>
                <td>{item.processed_date}</td>
                <td>
                  <Button
                    variant="gostPrimary"
                    type="button"
                    onClick={() => onRequestUnLink(item)}
                  >
                    연결 해제
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </TableWrap>
  );
};

export default MenuLinkHistoryTable;
