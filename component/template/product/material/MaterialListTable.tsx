/* eslint-disable camelcase */
import React from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { IMaterialRes } from '@InterfaceFarm/material';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { Table, TableWrap } from '@ComponentFarm/common';

interface TableProps {
  data?: IMaterialRes;
  onSort: (sortField: string, sortOrder: 'asc' | 'desc') => void;
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

const ManageListTable = ({ data, onSort }: TableProps) => {
  const router = useRouter();

  const handleGoIdxClick = (idx: string) => {
    // 현재 쿼리 파라미터를 /add 경로에 추가
    router.push({
      pathname: `/material/view/${idx}`,
      query: router.query,
    });
  };
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
                  color={material.evv_material_status === 1 ? 'green' : 'red'}
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
