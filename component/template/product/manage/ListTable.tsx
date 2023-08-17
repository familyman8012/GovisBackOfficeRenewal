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
    category: '피자',
    name: '오리지널 페페로니 피자',
    kind: '배달/내점/포장',
    startDate: '2023-06-23',
    endDate: '2023-07-02',
    registerDate: '2023-07-02',
    modifyDate: '2023-07-02',
    status: '운영',
    recipe: '등록',
    storeCount: '97개',
  },
  {
    code: 'H_000012',
    category: '피자',
    name: '오리지널 페페로니 피자',
    kind: '배달/내점/포장',
    startDate: '2023-06-23',
    endDate: '2023-07-02',
    registerDate: '2023-07-02',
    modifyDate: '2023-07-02',
    status: '운영',
    recipe: '등록',
    storeCount: '97개',
  },
  {
    code: 'H_000012',
    category: '피자',
    name: '오리지널 페페로니 피자',
    kind: '배달/내점/포장',
    startDate: '2023-06-23',
    endDate: '2023-07-02',
    registerDate: '2023-07-02',
    modifyDate: '2023-07-02',
    status: '운영',
    recipe: '등록',
    storeCount: '97개',
  },
  {
    code: 'H_000012',
    category: '피자',
    name: '오리지널 페페로니 피자',
    kind: '배달/내점/포장',
    startDate: '2023-06-23',
    endDate: '2023-07-02',
    registerDate: '2023-07-02',
    modifyDate: '2023-07-02',
    status: '운영',
    recipe: '등록',
    storeCount: '97개',
  },
  {
    code: 'H_000012',
    category: '피자',
    name: '오리지널 페페로니 피자',
    kind: '배달/내점/포장',
    startDate: '2023-06-23',
    endDate: '2023-07-02',
    registerDate: '2023-07-02',
    modifyDate: '2023-07-02',
    status: '운영',
    recipe: '등록',
    storeCount: '97개',
  },
  {
    code: 'H_000012',
    category: '피자',
    name: '오리지널 페페로니 피자',
    kind: '배달/내점/포장',
    startDate: '2023-06-23',
    endDate: '2023-07-02',
    registerDate: '2023-07-02',
    modifyDate: '2023-07-02',
    status: '운영',
    recipe: '등록',
    storeCount: '97개',
  },
  {
    code: 'H_000012',
    category: '피자',
    name: '오리지널 페페로니 피자',
    kind: '배달/내점/포장',
    startDate: '2023-06-23',
    endDate: '2023-07-02',
    registerDate: '2023-07-02',
    modifyDate: '2023-07-02',
    status: '운영',
    recipe: '등록',
    storeCount: '97개',
  },
  {
    code: 'H_000012',
    category: '피자',
    name: '오리지널 페페로니 피자',
    kind: '배달/내점/포장',
    startDate: '2023-06-23',
    endDate: '2023-07-02',
    registerDate: '2023-07-02',
    modifyDate: '2023-07-02',
    status: '운영',
    recipe: '등록',
    storeCount: '97개',
  },
  {
    code: 'H_000012',
    category: '피자',
    name: '오리지널 페페로니 피자',
    kind: '배달/내점/포장',
    startDate: '2023-06-23',
    endDate: '2023-07-02',
    registerDate: '2023-07-02',
    modifyDate: '2023-07-02',
    status: '운영',
    recipe: '등록',
    storeCount: '97개',
  },
  {
    code: 'H_000012',
    category: '피자',
    name: '오리지널 페페로니 피자',
    kind: '배달/내점/포장',
    startDate: '2023-06-23',
    endDate: '2023-07-02',
    registerDate: '2023-07-02',
    modifyDate: '2023-07-02',
    status: '운영',
    recipe: '등록',
    storeCount: '97개',
  },
  {
    code: 'H_000012',
    category: '피자',
    name: '오리지널 페페로니 피자',
    kind: '배달/내점/포장',
    startDate: '2023-06-23',
    endDate: '2023-07-02',
    registerDate: '2023-07-02',
    modifyDate: '2023-07-02',
    status: '운영',
    recipe: '등록',
    storeCount: '97개',
  },
  {
    code: 'H_000012',
    category: '피자',
    name: '오리지널 페페로니 피자',
    kind: '배달/내점/포장',
    startDate: '2023-06-23',
    endDate: '2023-07-02',
    registerDate: '2023-07-02',
    modifyDate: '2023-07-02',
    status: '운영',
    recipe: '등록',
    storeCount: '97개',
  },
  {
    code: 'H_000012',
    category: '피자',
    name: '오리지널 페페로니 피자',
    kind: '배달/내점/포장',
    startDate: '2023-06-23',
    endDate: '2023-07-02',
    registerDate: '2023-07-02',
    modifyDate: '2023-07-02',
    status: '운영',
    recipe: '등록',
    storeCount: '97개',
  },
];

const pageStyle = css`
  th {
    &:nth-of-type(1) {
      width: calc((119 / 1536) * 100%);
    }
    &:nth-of-type(2) {
      width: calc((102 / 1536) * 100%);
    }
    &:nth-of-type(3) {
      width: calc((243 / 1536) * 100%);
    }
    &:nth-of-type(4) {
      width: calc((130 / 1536) * 100%);
    }
    &:nth-of-type(5) {
      width: calc((150 / 1536) * 100%);
    }
    &:nth-of-type(6) {
      width: calc((150 / 1536) * 100%);
    }
    &:nth-of-type(7) {
      width: calc((150 / 1536) * 100%);
    }
    &:nth-of-type(8) {
      width: calc((150 / 1536) * 100%);
    }
    &:nth-of-type(9) {
      width: calc((130 / 1536) * 100%);
    }
    &:nth-of-type(10) {
      width: calc((100 / 1536) * 100%);
    }
  }
`;

const ListTable = ({ data, toggleSort }: TableProps) => {
  return (
    <TableWrap>
      <Table className="basic" css={pageStyle}>
        <thead>
          <tr>
            <th>제품코드</th>
            <th>제품분류</th>
            <th>제품명</th>
            <th>판매분류</th>
            <th>판매 시작일</th>
            <th>판매 종료일</th>
            <th>등록일</th>
            <th>수정일</th>
            <th>제품상태</th>
            <th>레시피</th>
            <th>매장수</th>
          </tr>
        </thead>
        <tbody>
          {TableArr.map(el => (
            <tr key={el.code}>
              <td className="code">{el.code}</td>
              <td>{el.category}</td>
              <td>
                {el.name}{' '}
                <Badge color="orange" size="circle">
                  N
                </Badge>
              </td>
              <td>{el.kind}</td>
              <td>{el.startDate}</td>
              <td>{el.endDate}</td>
              <td>{el.registerDate}</td>
              <td>{el.modifyDate}</td>
              <td>
                <Badge color="green" size="sm" dot>
                  {el.status}
                </Badge>
              </td>
              <td>
                <Badge color="green" fill="transparent" size="sm" dot>
                  {el.recipe}
                </Badge>
              </td>
              <td>{el.storeCount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrap>
  );
};

export default ListTable;
