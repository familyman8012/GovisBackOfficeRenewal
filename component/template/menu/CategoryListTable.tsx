// List Table Component for Category List
// create have 20 row data html table

import { Table, TableWrap } from '@ComponentFarm/common';

// row data format
interface ICategoryRowData {
  menu_category_idx: number;
  menu_category_code: string;
  menu_category_name: string;
  created_date: string;
  updated_date: string;
}

interface ICategoryListTableProps {
  //   categoryList: ICategoryRowData[];
  onClick: (menu_category_idx: number) => void;
  toggleSort?: (sort: string) => void;
}

// create mockdata 20row
const mockData: ICategoryRowData[] = Array.from({ length: 20 }, (_, i) => ({
  menu_category_idx: i,
  menu_category_code: `code${i}`,
  menu_category_name: `name${i}`,
  created_date: '2021-01-01',
  updated_date: '2021-01-01',
}));

const CategoryListTable = ({
  onClick,
  toggleSort,
}: ICategoryListTableProps) => {
  return (
    <TableWrap>
      <Table className="basic">
        <colgroup>
          <col width={200} />
          <col />
          <col width={220} />
          <col width={220} />
        </colgroup>
        <thead>
          <tr>
            <th>카테고리 코드</th>
            <th>카테고리 명</th>
            <th>생성일</th>
            <th>수정일</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((categoryRowData, index) => (
            <tr
              key={categoryRowData.menu_category_code}
              onClick={() => onClick(categoryRowData.menu_category_idx)}
            >
              <td>{categoryRowData.menu_category_code}</td>
              <td>{categoryRowData.menu_category_name}</td>
              <td>{categoryRowData.created_date}</td>
              <td>{categoryRowData.updated_date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrap>
  );
};

export default CategoryListTable;
