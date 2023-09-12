import { IMenuCategoryItem } from '@InterfaceFarm/menu';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import { Table, TableWrap } from '@ComponentFarm/common';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

interface ICategoryListTableProps {
  list: IMenuCategoryItem[];
  toggleSort?: (sort: string) => void;
}

const CategoryListTable = ({ toggleSort, list }: ICategoryListTableProps) => {
  return (
    <TableWrap>
      <Table className="basic">
        <colgroup>
          <col width={getTableWidthPercentage(200)} />
          <col width={getTableWidthPercentage(900)} />
          <col width={getTableWidthPercentage(220)} />
          <col width={getTableWidthPercentage(220)} />
        </colgroup>
        <thead>
          <tr>
            <th>카테고리 코드</th>
            <th>카테고리 명</th>
            <th>등록일</th>
            <th>수정일</th>
          </tr>
        </thead>
        <tbody>
          {list.length === 0 && (
            <tr className="empty">
              <td colSpan={4}>
                <Empty>데이터가 없습니다.</Empty>
              </td>
            </tr>
          )}
          {list.map((categoryData, index) => (
            <tr key={categoryData.menu_category_code}>
              <td className="code">{categoryData.menu_category_code}</td>
              <td>{categoryData.menu_category_name}</td>
              <td>{categoryData.created_date}</td>
              <td>{categoryData.updated_date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrap>
  );
};

export default CategoryListTable;
