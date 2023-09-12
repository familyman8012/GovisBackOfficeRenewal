import { IMenuListItem } from '@InterfaceFarm/menu';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import Copy from '@ComponentFarm/atom/icons/Copy';
import { Table, TableWrap } from '@ComponentFarm/common';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

interface IMenuListTableProps {
  list: IMenuListItem[];
  onClick: (item: IMenuListItem) => void;
  onClickCopy?: (item: IMenuListItem) => void;
  toggleSort?: (sort: string) => void;
}

const MenuListTable = ({
  list,
  onClick,
  onClickCopy,
  toggleSort,
}: IMenuListTableProps) => {
  return (
    <TableWrap>
      <Table className="basic">
        <colgroup>
          <col width={getTableWidthPercentage(120)} />
          <col width={getTableWidthPercentage(180)} />
          <col width={getTableWidthPercentage(300)} />
          {/* <col width={getWidthPercentage(180)} /> */}
          <col width={getTableWidthPercentage(180)} />
          <col width={getTableWidthPercentage(140)} />
          <col width={getTableWidthPercentage(140)} />
          <col width={getTableWidthPercentage(150)} />
        </colgroup>
        <thead>
          <tr>
            <th>메뉴 코드</th>
            <th>분류 그룹</th>
            <th>메뉴명</th>
            {/* <th>사용 매장 수 </th> */}
            <th>메뉴 분류 상태</th>
            <th>등록일</th>
            <th>수정일</th>
            <th>&nbsp;</th>
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
