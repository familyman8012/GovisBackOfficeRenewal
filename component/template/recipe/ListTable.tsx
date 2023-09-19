import React from 'react';
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

const tableArr = [
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '미등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0001',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
  {
    product_code: 'P0002',
    evi_product_group: '피자',
    evi_product_category: '피자',
    evi_product_status: '운영',
    product_name_ko: '오리지널 페퍼로니 피자',
    product_name_en: 'Original Pepperoni Pizza',
    recipe_count: '1',
    is_recipe_registration: '등록',
    created_date: '2021-07-02',
    updated_date: '2021-07-02',
  },
];

interface TableProps {
  data: { list: TableData[] };
  onSort: (sortField: string, sortOrder: 'asc' | 'desc') => void;
  onClick?: () => void;
}

const ListTable = ({ data, onSort, onClick }: TableProps) => {
  //   const router = useRouter();

  //   const handleSortChange = (field: keyof TableData) => () => {
  //     onSort(field);
  //   };

  return (
    <TableWrap>
      <Table className="basic">
        <colgroup>
          <col width={170} />
          <col width={120} />
          <col width={120} />
          <col width={280} />
          <col width={130} />
          <col width={150} />
          <col width={160} />
          <col width={180} />
          <col width={180} />
        </colgroup>
        <thead>
          <tr>
            <th>제품코드</th>
            <th>제품 그룹</th>
            <th>제품 분류</th>
            <th>제품명</th>
            <th>제품 상태</th>
            <th>등록 수</th>
            <th>레시피 상태</th>
            <th>레시피 등록일</th>
            <th>레시피 수정일</th>
          </tr>
        </thead>
        <tbody>
          {tableArr.map((item, i) => {
            return (
              <tr key={`${i + i}`} onClick={() => onClick?.()}>
                <td className="code">{item.product_code}</td>
                <td>{item.evi_product_group}</td>
                <td>{item.evi_product_category}</td>
                <td>{item.product_name_ko}</td>
                <td>
                  <Badge dot color={i % 2 === 0 ? 'red' : 'green'}>
                    {item.evi_product_status}
                  </Badge>
                </td>
                <td>{item.recipe_count}</td>
                <td>
                  <Badge
                    dot
                    fill="transparent"
                    color={i % 2 === 0 ? 'red' : 'green'}
                  >
                    {item.is_recipe_registration}
                  </Badge>
                </td>
                <td>{item.created_date}</td>
                <td>{item.updated_date}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TableWrap>
  );
};

export default ListTable;
