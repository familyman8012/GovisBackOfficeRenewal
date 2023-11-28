import { IUnLinkMenuListItem } from '@InterfaceFarm/menu';
import { Button } from '@ComponentFarm/atom/Button/Button';
import SkeletonTh from '@ComponentFarm/atom/Skeleton/SkeletonTh';
import { Table, TableWrap } from '@ComponentFarm/common';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

interface IMenuListTableProps {
  loading?: boolean;
  list: IUnLinkMenuListItem[];
  onRequestLink: (item: IUnLinkMenuListItem) => void;
}

const MenuLinkListTable = ({
  list,
  loading,
  onRequestLink,
}: IMenuListTableProps) => {
  return (
    <TableWrap>
      <Table className="basic">
        <colgroup>
          <col width={getTableWidthPercentage(120)} />
          <col width={getTableWidthPercentage(400)} />
          <col width={getTableWidthPercentage(180)} />
          <col width={getTableWidthPercentage(180)} />
          <col width={getTableWidthPercentage(145)} />
        </colgroup>
        <thead>
          <tr>
            <th>NO.</th>
            <th>미확인 메뉴명</th>
            <th>주문 채널 수</th>
            <th>주문 매장 수</th>
            <th>메뉴 연결</th>
          </tr>
        </thead>
        <tbody>
          {loading && <SkeletonTh colLength={5} rowLength={20} />}
          {!loading && list.length === 0 ? (
            <tr className="empty">
              <td colSpan={5}>데이터가 없습니다.</td>
            </tr>
          ) : (
            list.map(item => (
              <tr key={item.sequence_number}>
                <td className="code">{item.sequence_number}</td>
                <td>{item.unidentified_menu_name}</td>
                <td>
                  <button type="button" className="link_popup">
                    {item.order_channel_count}개
                  </button>
                </td>
                <td>
                  <button type="button" className="link_popup">
                    {item.order_store_count}개
                  </button>
                </td>
                <td>
                  <Button type="button" onClick={() => onRequestLink(item)}>
                    메뉴 연결
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

export default MenuLinkListTable;
