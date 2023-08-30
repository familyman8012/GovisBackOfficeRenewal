// List Table Component for Menu List
// create have 20 row data html table

import { IoCopy } from 'react-icons/io5';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Table, TableWrap } from '@ComponentFarm/common';

// menu data format
interface IMenuRowData {
  menu_info_idx: number;
  menu_code: string;
  evi_menu_group: number;
  evv_menu_group: string;
  menu_category_idx: number;
  menu_category_name: string;
  menu_name: string;
  evi_menu_status: number;
  evv_menu_status: string;
  created_date: string;
  updated_date: string;
}

interface IMenuListTableProps {
  //   menuList: IMenuRowData[];
  onClick: (menu_info_idx: number) => void;
  toggleSort?: (sort: string) => void;
}

// create mockdata 20row
const mockData: IMenuRowData[] = Array.from({ length: 20 }, (_, i) => ({
  menu_info_idx: i,
  menu_code: `MC0010`,
  evi_menu_group: i,
  evv_menu_group: ['직영', '가맹', 'XGOPIZZA'][i % 3],
  menu_category_idx: i,
  menu_category_name: [
    '직영 피자',
    '직영 음료',
    '직영 사이드',
    '가맹 피자',
    '가맹 사이드',
    'CGV 피자',
  ][i % 6],
  menu_name: [
    '직영 피자',
    '직영 음료',
    '직영 사이드',
    '가맹 피자',
    '가맹 사이드',
    'CGV 피자',
  ][i % 6],
  evi_menu_status: i,
  evv_menu_status: `${i % 2 === 0 ? '사용' : '미사용'}`,
  created_date: '2021-01-01',
  updated_date: '2021-01-01',
}));

const MenuListTable = ({ onClick, toggleSort }: IMenuListTableProps) => {
  return (
    <TableWrap>
      <Table className="basic">
        <colgroup>
          <col width={120} />
          <col width={180} />
          <col />
          <col width={180} />
          <col width={180} />
          <col width={140} />
          <col width={140} />
          <col width={150} />
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
          {mockData.map((menuRowData, index) => (
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
