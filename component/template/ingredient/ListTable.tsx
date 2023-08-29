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

/**
 * create table data array
 * example data
 * 물류사 코드
물류사명
제품 수
등록일
수정일
상태
등록 레시피 수
S0008
CJ프레시웨이
N
97개
2023-07-02
2023-07-02
운영
S0007
본사 택배 발송
103개
2023-07-02
2023-07-02
중단
S0006
업체 직납
97개
2023-07-02
2023-07-02
운영
S0008
CJ프레시웨이
N
97개
2023-07-02
2023-07-02
운영
S0007
본사 택배 발송
103개
2023-07-02
2023-07-02
중단
S0006
업체 직납
97개
2023-07-02
2023-07-02
운영
S0008
CJ프레시웨이
N
97개
2023-07-02
2023-07-02
운영
S0007
본사 택배 발송
103개
2023-07-02
2023-07-02
중단
S0006
업체 직납
97개
2023-07-02
2023-07-02
운영
S0008
CJ프레시웨이
N
97개
2023-07-02
2023-07-02
운영
S0007
본사 택배 발송
103개
2023-07-02
2023-07-02
중단
S0006
업체 직납
97개
2023-07-02
2023-07-02
운영
S0008
CJ프레시웨이
N
97개
2023-07-02
2023-07-02
운영
 */
const TableArr = [
  {
    code: 'S0008',
    name: 'CJ프레시웨이',
    count: '97개',
    created_at: '2021-07-02',
    updated_at: '2021-07-02',
    status: '운영',
  },
  {
    code: 'S0007',
    name: '본사 택배 발송',
    count: '103개',
    created_at: '2021-07-02',
    updated_at: '2021-07-02',
    status: '중단',
  },
  {
    code: 'S0006',
    name: '업체 직납',
    count: '97개',
    created_at: '2021-07-02',
    updated_at: '2021-07-02',
    status: '운영',
  },
  {
    code: 'S0008',
    name: 'CJ프레시웨이',
    count: '97개',
    created_at: '2021-07-02',
    updated_at: '2021-07-02',
    status: '운영',
  },
  {
    code: 'S0007',
    name: '본사 택배 발송',
    count: '103개',
    created_at: '2021-07-02',
    updated_at: '2021-07-02',
    status: '중단',
  },
  {
    code: 'S0006',
    name: '업체 직납',
    count: '97개',
    created_at: '2021-07-02',
    updated_at: '2021-07-02',
    status: '운영',
  },
  {
    code: 'S0008',
    name: 'CJ프레시웨이',
    count: '97개',
    created_at: '2021-07-02',
    updated_at: '2021-07-02',
    status: '운영',
  },
  {
    code: 'S0007',
    name: '본사 택배 발송',
    count: '103개',
    created_at: '2021-07-02',
    updated_at: '2021-07-02',
    status: '중단',
  },
  {
    code: 'S0006',
    name: '업체 직납',
    count: '97개',
    created_at: '2021-07-02',
    updated_at: '2021-07-02',
    status: '운영',
  },
  {
    code: 'S0008',
    name: 'CJ프레시웨이',
    count: '97개',
    created_at: '2021-07-02',
    updated_at: '2021-07-02',
    status: '운영',
  },
];

const pageStyle = css`
  th {
    /* &:nth-of-type(1) {
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
    } */
  }
`;

const ListTable = ({ data, toggleSort }: TableProps) => {
  return (
    <TableWrap>
      <Table className="basic" css={pageStyle}>
        <colgroup>
          <col width={120} />
          <col />
          <col width={120} />
          <col width={200} />
          <col width={200} />
          <col width={160} />
        </colgroup>
        <thead>
          <tr>
            <th>물류사 코드</th>
            <th>물류사명</th>
            <th>제품 수</th>
            <th>등록일</th>
            <th>수정일</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {TableArr.map((el, i) => (
            <tr key={el.code}>
              <td className="code">{el.code}</td>
              <td>
                {el.name}
                <Badge color="orange" size="circle">
                  N
                </Badge>
              </td>
              <td>{el.count}</td>
              <td>{el.created_at}</td>
              <td>{el.updated_at}</td>
              <td>
                <Badge dot color={i % 2 === 0 ? 'green' : 'red'}>
                  {el.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrap>
  );
};

export default ListTable;
