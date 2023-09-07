/* eslint-disable camelcase */
import React from 'react';
import { css } from '@emotion/react';
import { IProductRes } from '@InterfaceFarm/product';
import { Badge, BadgeColor } from '@ComponentFarm/atom/Badge/Badge';
import { Table, TableWrap } from '@ComponentFarm/common';

interface TableProps {
  data?: IProductRes;
  toggleSort: (sortField: string) => void;
}

const pageStyle = css`
  th {
    &:nth-of-type(1) {
      width: calc((119 / 1536) * 100%);
    }
    &:nth-of-type(2) {
      width: calc((102 / 1536) * 100%);
    }
    &:nth-of-type(3) {
      width: calc((293 / 1536) * 100%);
    }
    &:nth-of-type(4) {
      width: calc((180 / 1536) * 100%);
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
      width: calc((110 / 1536) * 100%);
    }
    &:nth-of-type(10) {
      width: calc((120 / 1536) * 100%);
    }
  }
`;

const prdouctStatusBadge: Record<string, BadgeColor> = {
  '282': 'green',
  '283': 'yellow',
  '284': 'red',
};

const ManageListTable = ({ data, toggleSort }: TableProps) => {
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
          </tr>
        </thead>
        <tbody>
          {data?.list.map(product => (
            <tr key={product.product_code}>
              <td className="code">{product.product_code}</td>
              <td>{product.evi_product_category_str}</td>
              <td>{product.product_name_ko}</td>
              <td>{product.evi_sale_type_str}</td>
              <td>{product.sale_start_date}</td>
              <td>{product.sale_end_date}</td>
              <td>{product.created_date}</td>
              <td>{product.updated_date}</td>
              <td>
                <Badge
                  color={prdouctStatusBadge[product.evi_product_status]}
                  size="sm"
                  dot
                >
                  {product.evi_product_status_str}
                </Badge>
              </td>
              <td>
                <Badge
                  color={product.is_recipe_registration === 1 ? 'green' : 'red'}
                  fill="transparent"
                  size="sm"
                  dot
                >
                  {product.is_recipe_registration === 1 ? '등록' : '미등록'}
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
