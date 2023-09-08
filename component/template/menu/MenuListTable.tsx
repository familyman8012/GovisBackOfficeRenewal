// List Table Component for Menu List
// create have 20 row data html table

import { IoCopy } from 'react-icons/io5';
import { IMenuListItem } from '@InterfaceFarm/menu';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import { Table, TableWrap } from '@ComponentFarm/common';

// menu data format

interface IMenuListTableProps {
  list: IMenuListItem[];
  onClick: (menu_info_idx: number) => void;
  toggleSort?: (sort: string) => void;
}

const BASE_WIDTH = 1536;

const getWidthPercentage = (width: number) => {
  return `${Math.round((width / BASE_WIDTH) * 100)}%`;
};
const MenuListTable = ({ list, onClick, toggleSort }: IMenuListTableProps) => {
  return (
    <TableWrap>
      <Table className="basic">
        <colgroup>
          <col width={getWidthPercentage(120)} />
          <col width={getWidthPercentage(180)} />
          <col width={getWidthPercentage(300)} />
          <col width={getWidthPercentage(180)} />
          <col width={getWidthPercentage(180)} />
          <col width={getWidthPercentage(140)} />
          <col width={getWidthPercentage(140)} />
          <col width={getWidthPercentage(150)} />
        </colgroup>
        <thead>
          <tr>
            <th>메뉴 코드</th>
            <th>분류 그룹</th>
            <th>메뉴명</th>
            <th>사용 매장 수 </th>
            <th>메뉴 분류 상태</th>
            <th>등록일</th>
            <th>수정일</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {list.length === 0 && (
            <tr className="empty">
              <td colSpan={8}>
                <Empty>데이터가 없습니다.</Empty>
              </td>
            </tr>
          )}
          {list.map((menuRowData, index) => (
            <tr
              key={menuRowData.menu_code}
              onClick={() => onClick(menuRowData.menu_info_idx)}
            >
              <td className="code">{menuRowData.menu_code}</td>
              <td>{menuRowData.evv_menu_group}</td>
              <td>{menuRowData.menu_name}</td>
              <td>{index + 1}</td>
              <td>
                <Badge
                  dot
                  fill="transparent"
                  color={
                    menuRowData.evv_menu_status === '미사용' ? 'red' : undefined
                  }
                >
                  {menuRowData.evv_menu_status}
                </Badge>
              </td>
              <td>{menuRowData.created_date}</td>
              <td>{menuRowData.created_date}</td>
              <td>
                <Button
                  size="md"
                  variant="transparent"
                  LeadingIcon={<IoCopy />}
                >
                  복사하기
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrap>
  );
};

export default MenuListTable;
