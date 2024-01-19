import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { ISalesKeyInFetchResponse } from '@InterfaceFarm/store-sales-keyin';
import { toPrice } from '@UtilFarm/number';

/**
 * 지정된 데이터를 기반으로 테이블 데이터를 생성하기 위한 커스텀 훅입니다.
 * @param data 테이블 데이터를 생성하는 데 사용되는 데이터입니다.
 * @returns 테이블의 생성된 컬럼과 본문을 포함하는 객체입니다.
 */
export default function useTableData(
  list: ISalesKeyInFetchResponse['list'],
  total: ISalesKeyInFetchResponse['total']
) {
  const body = React.useMemo(
    () =>
      list.length !== 0
        ? [
            ...list.map(item => ({
              ...item,
              total_quantity: item.order_item_list.reduce(
                (quantity, orderItem) => quantity + orderItem.quantity,
                0
              ),
              total_amount: item.order_item_list.reduce(
                (amount, orderItem) => amount + orderItem.amount,
                0
              ),
            })),
          ]
        : [],
    [list, total]
  );

  type TableRow = (typeof body)[0];

  const columns: ColumnDef<TableRow>[] = React.useMemo(
    () => [
      {
        id: 'store_info',
        header: '매장 정보',
        columns: [
          {
            id: 'store_name',
            header: '매장명',
            accessorKey: 'store_name',
            size: 150,
          },
          {
            id: 'date',
            header: '날짜',
            accessorKey: 'date',
            size: 100,
            footer: () => '합계',
          },
          {
            id: 'total_price',
            header: '총 매출액',
            accessorKey: 'total_price',
            cell: info => toPrice(info.getValue<string>()),
            footer: () =>
              toPrice(
                body.reduce((amount, item) => amount + item.total_price, 0)
              ),
            size: 120,
          },
        ],
      },
      ...total.map((item, index) => ({
        id: `${item.menu_info_idx}`,
        header: () => item.menu_name,
        size: 100,
        columns: [
          {
            id: `${item.menu_info_idx}.quantity`,
            header: '판매 수',
            size: 100,
            accessorFn: (row: TableRow) =>
              row?.order_item_list.find(
                orderItem => orderItem.menu_info_idx === item.menu_info_idx
              )?.quantity ?? 0,

            footer: () => total[index].quantity,
          },
          {
            id: `${item.menu_info_idx}.amount`,
            header: '판매 금액',
            size: 100,
            accessorFn: (row: TableRow) =>
              toPrice(
                row?.order_item_list.find(
                  orderItem => orderItem.menu_info_idx === item.menu_info_idx
                )?.amount ?? 0
              ),
            footer: () => toPrice(total[index].amount),
          },
        ],
      })),
      {
        id: 'total_quantity',
        accessorKey: 'total_quantity',
        header: '수량 합계',
        size: 75,
        footer: () =>
          total.reduce((quantity, item) => quantity + item.quantity, 0),
      },
      {
        id: 'total_amount',
        accessorKey: 'total_amount',
        header: '금액 합계',
        size: 100,
        cell: info => toPrice(info.getValue<string>()),
        footer: () =>
          toPrice(total.reduce((amount, item) => amount + item.amount, 0)),
      },
      {
        id: 'user_name',
        accessorKey: 'user_name',
        header: '처리인',
        size: 80,
      },
      {
        id: 'sales_keyin_idx',
        accessorKey: 'sales_keyin_idx',
        header: '',
        cell: info => (
          <Link
            className="link_popup"
            href={`/store-sales-keyin/${info.getValue<string>()}`}
          >
            수정
          </Link>
        ),
        size: 50,
      },
    ],
    [total]
  );

  const state = React.useMemo(
    () => ({
      columnPinning: {
        left: ['store_name', 'date', 'total_price'],
        right: [
          'total_quantity',
          'total_amount',
          'user_name',
          'sales_keyin_idx',
        ],
      },
    }),
    []
  );

  return { columns, data: body, state };
}
