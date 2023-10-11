/* eslint-disable camelcase */
import React from 'react';
import { css } from '@emotion/react';
import { IPartnerCountryRes } from '@InterfaceFarm/material';
import ToggleSort from '@ComponentFarm/atom/Sort/ToggleSort';
import { Table, TableWrap } from '@ComponentFarm/common';
import { QueryParams } from '@HookFarm/useQueryParams';
import useSortable from '@HookFarm/useSortable';

interface TableProps {
  data?: IPartnerCountryRes;
  updateParams: (newParams: QueryParams) => void;
}

const pageStyle = css`
  th {
    &:nth-of-type(1) {
      width: calc((600 / 1536) * 100%);
    }
    &:nth-of-type(2) {
      width: calc((700 / 1536) * 100%);
    }
  }
`;

const ListTable = ({ data, updateParams }: TableProps) => {
  const { sortState, toggleSort } = useSortable(updateParams);

  const Th = [
    { id: 1, label: '원산지 코드', sort: 'origin_code' },
    { id: 2, label: '원산지명', sort: 'origin_name' },
    { id: 3, label: '등록일', sort: 'created_date' },
  ];

  return (
    <TableWrap>
      <Table className="basic" css={pageStyle}>
        <thead>
          <tr>
            {Th.map((el, i) => (
              <th key={i} onClick={() => el.sort && toggleSort(el.sort)}>
                <span className="th_title">
                  {el.label}
                  {el.sort && <ToggleSort el={el} sortState={sortState} />}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.list.map(country => (
            <tr key={country.origin_code}>
              <td className="code">{country.origin_code}</td>
              <td>{country.origin_name}</td>
              <td>{country.created_date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrap>
  );
};

export default ListTable;
