/* eslint-disable camelcase */
import React from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { IPartnerRes } from '@InterfaceFarm/material';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { Table, TableWrap } from '@ComponentFarm/common';

interface TableProps {
  data?: IPartnerRes;
}

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

const ListTable = ({ data }: TableProps) => {
  const router = useRouter();

  const handleGoIdxClick = (idx: string) => {
    // 현재 쿼리 파라미터를 /add 경로에 추가
    router.push({
      pathname: `/material/partner/view/${idx}`,
      query: router.query,
    });
  };

  console.log('data', data);

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
          {data?.list.map(partner => (
            <tr
              key={partner.partner_company_code}
              onClick={() =>
                handleGoIdxClick(String(partner.partner_company_idx))
              }
            >
              <td className="code">{partner.partner_company_code}</td>
              <td>{partner.partner_company_name}</td>
              <td>{partner.material_count}개</td>
              <td>{partner.created_date}</td>
              <td>{partner.updated_date}</td>
              <td>
                <Badge
                  dot
                  color={
                    partner.evv_partner_company_status === '운영'
                      ? 'green'
                      : 'red'
                  }
                >
                  {partner.evv_partner_company_status}
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
