/* eslint-disable camelcase */
import React from 'react';
import { useRouter } from 'next/router';
import { IProductRes } from '@InterfaceFarm/product';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import Sort from '@ComponentFarm/atom/Sort/Sort';
import { Table, TableWrap } from '@ComponentFarm/common';
import { QueryParams } from '@HookFarm/useQueryParams';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

interface TableProps {
  data?: IProductRes;
  updateParams: (newParams: QueryParams) => void;
}

const ManageListTable = ({ data, updateParams }: TableProps) => {
  const router = useRouter();

  const handleGoIdxClick = (idx: string) => {
    router.push({
      pathname: `/product/view/${idx}`,
      query: router.query,
    });
  };

  const Th = [
    { label: '제품코드', sort: 'product_code' },
    { label: '제품분류', sort: '' },
    { label: '제품명', sort: 'product_name_ko' },
    { label: '판매분류', sort: '' },
    { label: '판매 시작일', sort: 'sale_start_date' },
    { label: '판매 종료일', sort: 'sale_end_date' },
    { label: '등록일', sort: 'created_date' },
    { label: '수정일', sort: 'updated_date' },
    { label: '제품상태', sort: '' },
    { label: '레시피', sort: '' },
  ];

  return (
    <TableWrap>
      <Table className="basic">
        <colgroup>
          {[119, 102, 293, 180, 150, 150, 150, 150, 110, 120].map((el, i) => (
            <col key={i} width={getTableWidthPercentage(el)} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {Th.map((el, i) => (
              <th key={i}>
                <span className="th_title">
                  {el.label}
                  {el.sort !== '' && (
                    <Sort updateParams={updateParams} field={el.sort} />
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.list?.map(product => (
            <tr
              key={product.product_info_idx}
              onClick={() => handleGoIdxClick(String(product.product_info_idx))}
            >
              <td className="code">{product.product_code}</td>
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
