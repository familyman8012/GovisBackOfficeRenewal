import { IMenuListItem } from '@InterfaceFarm/menu';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import Copy from '@ComponentFarm/atom/icons/Copy';
import Sort from '@ComponentFarm/atom/Sort/Sort';
import { Table, TableWrap } from '@ComponentFarm/common';
import { QueryParams } from '@HookFarm/useQueryParams';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

interface IMenuListTableProps {
  list: IMenuListItem[];
  onClick: (item: IMenuListItem) => void;
  onClickCopy?: (item: IMenuListItem) => void;
  updateParams: (sort: QueryParams) => void;
}

const menuSortItems = [
  { id: 1, label: '메뉴 코드', sort: 'menu_category_code' },
  { id: 2, label: '분류 그룹', sort: '' },
  { id: 3, label: '메뉴명', sort: 'menu_name' },
  { id: 4, label: '메뉴 분류 상태', sort: '' },
  { id: 5, label: '등록일', sort: 'created_date' },
  { id: 6, label: '수정일', sort: 'updated_date' },
  { id: 7, label: '-', sort: '' },
];

const MenuListTable = ({
  list,
  onClick,
  onClickCopy,
  updateParams,
}: IMenuListTableProps) => {
  return (
    <TableWrap>
      <Table className="basic">
        <colgroup>
          <col width={getTableWidthPercentage(120)} />
          <col width={getTableWidthPercentage(180)} />
          <col width={getTableWidthPercentage(300)} />
          <col width={getTableWidthPercentage(180)} />
          <col width={getTableWidthPercentage(140)} />
          <col width={getTableWidthPercentage(140)} />
          <col width={getTableWidthPercentage(150)} />
        </colgroup>
        <thead>
          <tr>
            {menuSortItems.map((item, i) => (
              <th key={item.id}>
                <span className="th_title">
                  {item.label}
                  {item.sort && (
                    <Sort field={item.sort} updateParams={updateParams} />
                  )}
                </span>
              </th>
            ))}
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
              onClick={() => onClick?.(menuRowData)}
            >
              <td className="code">{menuRowData.menu_code}</td>
              <td>{menuRowData.evv_menu_group}</td>
              <td>{menuRowData.menu_name}</td>
              {/* <td>{index + 1}</td> */}
              <td>
                <Badge
                  dot
                  fill="transparent"
                  color={
                    menuRowData.evv_menu_status === '중단' ? 'red' : undefined
                  }
                >
                  {menuRowData.evv_menu_status}
                </Badge>
              </td>
              <td>{menuRowData.created_date}</td>
              <td>{menuRowData.created_date}</td>
              <td>
                <Button
                  variant="gostPrimary"
                  LeadingIcon={<Copy />}
                  onClick={e => {
                    e.stopPropagation();
                    onClickCopy?.(menuRowData);
                  }}
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
