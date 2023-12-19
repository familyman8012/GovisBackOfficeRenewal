import React from 'react';
import { useRouter } from 'next/router';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { useQuery } from 'react-query';
import { css } from '@emotion/react';
import { fetchStoreManufacturingState } from '@ApiFarm/aistt';
import { IAisttStateReq } from '@InterfaceFarm/aistt';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import SkeletonTh from '@ComponentFarm/atom/Skeleton/SkeletonTh';
import { TableSty1 } from '@ComponentFarm/template/common/table/TableSty';
import { QueryParams } from '@HookFarm/useQueryParams';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

export const StoreManufacturingTable = ({
  params,
}: {
  params: QueryParams;
}) => {
  const router = useRouter();
  const { isLoading, data } = useQuery(
    ['StoreManufacturingStateList', params],
    () => fetchStoreManufacturingState(params as IAisttStateReq)
  );

  console.log('data', data);
  return (
    <TableSty1
      css={css`
        tr:hover {
          cursor: pointer;
          background: var(--color-indigo90);
        }
        tr:last-of-type td {
          border-bottom: none;
        }
        th,
        td {
          border: 1px solid var(--color-neutral90);

          &:first-of-type {
            border-left: none;
          }
          &:last-of-type {
            border-right: none;
          }
        }
      `}
    >
      <colgroup>
        <col width={getTableWidthPercentage(636)} />
        <col width={getTableWidthPercentage(200)} />
        <col width={getTableWidthPercentage(200)} />
        <col width={getTableWidthPercentage(200)} />
        <col width={getTableWidthPercentage(150)} />
        <col width={getTableWidthPercentage(150)} />
      </colgroup>
      <thead>
        <tr>
          <th rowSpan={2}>매장명</th>
          <th colSpan={3}>점수대별 제조 건수</th>
          <th rowSpan={2}>총 제조건수</th>
          <th rowSpan={2}>총 개선 필요 건수</th>
        </tr>
        <tr>
          <th
            css={css`
              text-align: center !important;
            `}
          >
            100점 ~ 80점
          </th>
          <th>80점 ~ 50점</th>
          <th>80점 ~ 50점</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <SkeletonTh colLength={3} />
        ) : Number(data?.list.length) > 0 ? (
          data?.list.map(item => (
            <tr
              key={item.store_idx}
              onClick={() =>
                router.push({
                  pathname: '/aistt-state/quality',
                  query: { ...router.query, store_idx: item.store_idx },
                })
              }
            >
              <td>{item.store_name}</td>
              <td>{item.top_count}</td>
              <td>{item.middle_count}</td>
              <td>{item.bottom_count}</td>
              <td>{item.manufacturing_count.toLocaleString()}</td>
              <td>{item.improvement_needed_count.toLocaleString()}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>
              <Empty Icon={<IoAlertCircleOutline size={42} />}>
                조회된 결과가 없습니다.
              </Empty>
            </td>
          </tr>
        )}
      </tbody>
    </TableSty1>
  );
};
