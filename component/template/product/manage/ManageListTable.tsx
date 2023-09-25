/* eslint-disable camelcase */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { IProductRes } from '@InterfaceFarm/product';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import Sort from '@ComponentFarm/atom/Sort/Sort';
import { Table, TableWrap } from '@ComponentFarm/common';
import { QueryParams } from '@HookFarm/useQueryParams';

interface TableProps {
  data?: IProductRes;
  updateParams: (newParams: QueryParams) => void;
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

const ManageListTable = ({ data, updateParams }: TableProps) => {
  const router = useRouter();

  const handleGoIdxClick = (idx: string) => {
    // 현재 쿼리 파라미터를 /add 경로에 추가
    router.push({
      pathname: `/product/view/${idx}`,
      query: router.query,
    });
  };

  const TableThItem = [
    { id: 1, label: '제품코드', sort: 'product_code' },
    { id: 2, label: '제품분류', sort: '' },
    { id: 3, label: '제품명', sort: 'product_name_ko' },
    { id: 4, label: '판매분류', sort: '' },
    { id: 5, label: '판매 시작일', sort: 'sale_start_date' },
    { id: 6, label: '판매 종료일', sort: 'sale_end_date' },
    { id: 7, label: '등록일', sort: 'created_date' },
    { id: 8, label: '수정일', sort: 'updated_date' },
    { id: 9, label: '제품상태', sort: '' },
    { id: 10, label: '레시피', sort: '' },
  ];

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
                  )}{' '}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.list.map(product => (
            <tr
              key={product.product_info_idx}
              onClick={() => handleGoIdxClick(String(product.product_info_idx))}
            >
              <td className="code">
                <Link
                  href={{
                    pathname: `/product/view/${product.product_info_idx}`,
                    query: router.query,
                  }}
                  passHref
                  prefetch
                >
                  {product.product_code}
                </Link>
              </td>
              <td>{product.evi_product_category_str}</td>
              <td>{product.product_name_ko}</td>
              <td>{product.evi_sale_type_str.join('/')}</td>
              <td>{product.sale_start_date}</td>
              <td>
                {product.sale_end_date !== '0000-00-00' ? (
                  product.sale_end_date
                ) : (
                  <span style={{ paddingLeft: '3.5rem' }}>-</span>
                )}
              </td>
              <td>{product.created_date}</td>
              <td>{product.updated_date}</td>
              <td>
                <Badge
                  color={
                    product.evi_product_status_str === '운영'
                      ? 'green'
                      : product.evi_product_status_str === '중단'
                      ? 'yellow'
                      : 'red'
                  }
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
