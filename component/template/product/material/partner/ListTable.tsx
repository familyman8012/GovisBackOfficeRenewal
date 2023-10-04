/* eslint-disable camelcase */
import React from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { IPartnerRes } from '@InterfaceFarm/material';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import Sort from '@ComponentFarm/atom/Sort/Sort';
import { Table, TableWrap } from '@ComponentFarm/common';
import { QueryParams } from '@HookFarm/useQueryParams';

interface TableProps {
  data?: IPartnerRes;
  title: string;
  updateParams: (newParams: QueryParams) => void;
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

const ListTable = ({ data, title, updateParams }: TableProps) => {
  const router = useRouter();

  const TableThItem = [
    { id: 1, label: `${title} 코드`, sort: 'partner_company_code' },
    { id: 2, label: `${title}명`, sort: 'partner_company_name' },
    { id: 3, label: '제품 수', sort: 'material_count' },
    { id: 4, label: '등록일', sort: 'created_date' },
    { id: 5, label: '수정일', sort: 'updated_date' },
    { id: 6, label: '상태', sort: '' },
  ];

  const handleGoIdxClick = (idx: string) => {
    router.push({
      pathname: `/material/partner/view/${idx}`,
      query: router.query,
    });
  };

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
          {TableThItem.map(el => (
            <th key={el.id}>
              <span className="th_title">
                {el.label}{' '}
                {el.sort !== '' && (
                  <Sort updateParams={updateParams} field={el.sort} />
                )}{' '}
              </span>
            </th>
          ))}
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
