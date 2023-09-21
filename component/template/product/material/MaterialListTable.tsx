/* eslint-disable camelcase */
import React from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { IMaterialRes } from '@InterfaceFarm/material';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import Sort from '@ComponentFarm/atom/Sort/Sort';
import { Table, TableWrap } from '@ComponentFarm/common';
import { QueryParams } from '@HookFarm/useQueryParams';

interface TableProps {
  data?: IMaterialRes;
  updateParams: (newParams: QueryParams) => void;
}

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

const ManageListTable = ({ data, updateParams }: TableProps) => {
  const router = useRouter();

  const handleGoIdxClick = (idx: string) => {
    // 현재 쿼리 파라미터를 /add 경로에 추가
    router.push({
      pathname: `/material/view/${idx}`,
      query: router.query,
    });
  };

  const TableThItem = [
    { id: 1, label: '원재료 코드', sort: 'material_code' },
    { id: 2, label: '상품 구분', sort: '' },
    { id: 3, label: '대분류', sort: '' },
    { id: 4, label: '중분류', sort: '' },
    { id: 5, label: '소분류', sort: '' },
    { id: 6, label: '구분', sort: 'evi_material_storage_type' },
    { id: 7, label: '원재료명', sort: 'material_name_ko' },
    { id: 8, label: '매입가', sort: 'purchase_price' },
    { id: 9, label: '판매가', sort: 'sale_price' },
    { id: 10, label: '제조사', sort: '' },
    { id: 11, label: '레시피 등록일', sort: 'created_date' },
    { id: 12, label: '레시피 수정일', sort: 'updated_date' },
    { id: 13, label: '상태', sort: '' },
  ];

  console.log();

  return (
    <TableWrap>
      <Table className="basic" css={pageStyle}>
        <thead>
          <tr>
            {TableThItem.map(el => (
              <th key={el.id}>
                <span className="th_title">
                  {el.label}{' '}
                  {el.sort !== '' && (
                    <Sort updateParams={updateParams} field={el.sort} />
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.list.map(material => (
            <tr
              key={material.material_code}
              onClick={() =>
                handleGoIdxClick(String(material.material_info_idx))
              }
            >
              <td className="code">{material.material_code}</td>
              <td>{material.evv_material_product_type}</td>
              <td>{material.mcn_large}</td>
              <td>{material.mcn_middle}</td>
              <td>{material.mcn_small}</td>
              <td>{material.evv_material_storage_type}</td>
              <td>{material.material_name_ko}</td>
              <td>{material.purchase_price}</td>
              <td>{material.sale_price}</td>
              <td>{material.pcn_manufacturer}</td>
              <td>{material.created_date}</td>
              <td>{material.updated_date}</td>
              <td>
                <Badge
                  color={
                    material.evv_material_status === '운영' ? 'green' : 'red'
                  }
                  size="sm"
                  dot
                >
                  {material.evv_material_status}
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
