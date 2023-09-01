/* eslint-disable camelcase */
import React from 'react';
import { css } from '@emotion/react';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { Table, TableWrap } from '@ComponentFarm/common';

interface TableData {
  idx: number;
  status: number;
  coupon_name: string;
  notification_type: number;
  coupon_type: number;
  used_qty: number;
  coupon_qty: number;
  use_start_dt: string;
  use_end_dt: string;
  coupon_idx: number;
}

interface TableProps {
  data?: { list: TableData[] };
  toggleSort: (sortField: string) => void;
}

const TableArr = [
  {
    code: 'H_000012',
    category: '본사',
    name: '피자',
    kind: '피자',
    startDate: '전용',
    endDate: '전용',
    registerDate: '효림산물 청키살사소스',
    modifyDate: '11,000,000원',
    status: '11,000,000원',
    recipe: '태원',
    storeCount: '2023-07-02',
    storeCount2: '2023-07-02',
  },
  {
    code: 'H_000012',
    category: '본사',
    name: '피자',
    kind: '피자',
    startDate: '전용',
    endDate: '전용',
    registerDate: '효림산물 청키살사소스',
    modifyDate: '11,000,000원',
    status: '11,000,000원',
    recipe: '태원',
    storeCount: '2023-07-02',
    storeCount2: '2023-07-02',
  },
  {
    code: 'H_000012',
    category: '본사',
    name: '피자',
    kind: '피자',
    startDate: '전용',
    endDate: '전용',
    registerDate: '효림산물 청키살사소스',
    modifyDate: '11,000,000원',
    status: '11,000,000원',
    recipe: '태원',
    storeCount: '2023-07-02',
    storeCount2: '2023-07-02',
  },
  {
    code: 'H_000012',
    category: '본사',
    name: '피자',
    kind: '피자',
    startDate: '전용',
    endDate: '전용',
    registerDate: '효림산물 청키살사소스',
    modifyDate: '11,000,000원',
    status: '11,000,000원',
    recipe: '태원',
    storeCount: '2023-07-02',
    storeCount2: '2023-07-02',
  },
  {
    code: 'H_000012',
    category: '본사',
    name: '피자',
    kind: '피자',
    startDate: '전용',
    endDate: '전용',
    registerDate: '효림산물 청키살사소스',
    modifyDate: '11,000,000원',
    status: '11,000,000원',
    recipe: '태원',
    storeCount: '2023-07-02',
    storeCount2: '2023-07-02',
  },
  {
    code: 'H_000012',
    category: '본사',
    name: '피자',
    kind: '피자',
    startDate: '전용',
    endDate: '전용',
    registerDate: '효림산물 청키살사소스',
    modifyDate: '11,000,000원',
    status: '11,000,000원',
    recipe: '태원',
    storeCount: '2023-07-02',
    storeCount2: '2023-07-02',
  },
  {
    code: 'H_000012',
    category: '본사',
    name: '피자',
    kind: '피자',
    startDate: '전용',
    endDate: '전용',
    registerDate: '효림산물 청키살사소스',
    modifyDate: '11,000,000원',
    status: '11,000,000원',
    recipe: '태원',
    storeCount: '2023-07-02',
    storeCount2: '2023-07-02',
  },
  {
    code: 'H_000012',
    category: '본사',
    name: '피자',
    kind: '피자',
    startDate: '전용',
    endDate: '전용',
    registerDate: '효림산물 청키살사소스',
    modifyDate: '11,000,000원',
    status: '11,000,000원',
    recipe: '태원',
    storeCount: '2023-07-02',
    storeCount2: '2023-07-02',
  },
  {
    code: 'H_000012',
    category: '본사',
    name: '피자',
    kind: '피자',
    startDate: '전용',
    endDate: '전용',
    registerDate: '효림산물 청키살사소스',
    modifyDate: '11,000,000원',
    status: '11,000,000원',
    recipe: '태원',
    storeCount: '2023-07-02',
    storeCount2: '2023-07-02',
  },
  {
    code: 'H_000012',
    category: '본사',
    name: '피자',
    kind: '피자',
    startDate: '전용',
    endDate: '전용',
    registerDate: '효림산물 청키살사소스',
    modifyDate: '11,000,000원',
    status: '11,000,000원',
    recipe: '태원',
    storeCount: '2023-07-02',
    storeCount2: '2023-07-02',
  },
  {
    code: 'H_000012',
    category: '본사',
    name: '피자',
    kind: '피자',
    startDate: '전용',
    endDate: '전용',
    registerDate: '효림산물 청키살사소스',
    modifyDate: '11,000,000원',
    status: '11,000,000원',
    recipe: '태원',
    storeCount: '2023-07-02',
    storeCount2: '2023-07-02',
  },
  {
    code: 'H_000012',
    category: '본사',
    name: '피자',
    kind: '피자',
    startDate: '전용',
    endDate: '전용',
    registerDate: '효림산물 청키살사소스',
    modifyDate: '11,000,000원',
    status: '11,000,000원',
    recipe: '태원',
    storeCount: '2023-07-02',
    storeCount2: '2023-07-02',
  },
  {
    code: 'H_000012',
    category: '본사',
    name: '피자',
    kind: '피자',
    startDate: '전용',
    endDate: '전용',
    registerDate: '효림산물 청키살사소스',
    modifyDate: '11,000,000원',
    status: '11,000,000원',
    recipe: '태원',
    storeCount: '2023-07-02',
    storeCount2: '2023-07-02',
  },
];

const pageStyle = css`
  th {
    &:nth-of-type(1) {
      width: calc((140 / 1536) * 100%);
    }
    &:nth-of-type(2) {
      width: calc((80 / 1536) * 100%);
    }
    &:nth-of-type(3) {
      width: calc((80 / 1536) * 100%);
    }
    &:nth-of-type(4) {
      width: calc((80 / 1536) * 100%);
    }
    &:nth-of-type(5) {
      width: calc((80 / 1536) * 100%);
    }
    &:nth-of-type(6) {
      width: calc((100 / 1536) * 100%);
    }
    &:nth-of-type(7) {
      width: calc((200 / 1536) * 100%);
    }
    &:nth-of-type(8) {
      width: calc((150 / 1536) * 100%);
    }
    &:nth-of-type(9) {
      width: calc((150 / 1536) * 100%);
    }
    &:nth-of-type(10) {
      width: calc((100 / 1536) * 100%);
    }
    &:nth-of-type(11) {
      width: calc((130 / 1536) * 100%);
    }
    &:nth-of-type(12) {
      width: calc((130 / 1536) * 100%);
    }
    &:nth-of-type(13) {
      width: calc((116 / 1536) * 100%);
    }
  }
`;

const ManageListTable = ({ data, toggleSort }: TableProps) => {
  return (
    <TableWrap>
      <Table className="basic" css={pageStyle}>
        <thead>
          <tr>
            <th>원재료 코드</th>
            <th>상품 구분</th>
            <th>대분류</th>
            <th>중분류</th>
            <th>소분류</th>
            <th>구분</th>
            <th>원재료명</th>
            <th>매입가</th>
            <th>판매가</th>
            <th>제조사</th>
            <th>레시피 등록일</th>
            <th>레시피 수정일</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {TableArr.map(el => (
            <tr key={el.code}>
              <td className="code">{el.code}</td>
              <td>{el.category}</td>
              <td>{el.name} </td>
              <td>{el.kind}</td>
              <td>{el.startDate}</td>
              <td>{el.endDate}</td>
              <td>
                {el.registerDate}{' '}
                <Badge color="orange" size="circle">
                  N
                </Badge>
              </td>
              <td>{el.modifyDate}</td>
              <td>{el.status}</td>
              <td>{el.recipe}</td>
              <td>{el.storeCount}</td>
              <td>{el.storeCount2}</td>
              <td>
                <Badge color="green" size="sm" dot>
                  운영
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrap>
  );
};

export default ManageListTable;
