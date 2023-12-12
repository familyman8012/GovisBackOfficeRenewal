import React from 'react';
import { useQuery } from 'react-query';
import { fetchStoreManufacturingState } from '@ApiFarm/aistt';
import { IAisttStateReq } from '@InterfaceFarm/aistt';
import SkeletonTh from '@ComponentFarm/atom/Skeleton/SkeletonTh';
import { TableSty1 } from '@ComponentFarm/template/common/table/TableSty';
import { QueryParams } from '@HookFarm/useQueryParams';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

export const StoreManufacturingTable = ({
  params,
}: {
  params: QueryParams;
}) => {
  const { data } = useQuery(['StoreManufacturingStateList', params], () =>
    fetchStoreManufacturingState(params as IAisttStateReq)
  );

  return (
    <TableSty1>
      <colgroup>
        <col width={getTableWidthPercentage(936)} />
        <col width={getTableWidthPercentage(300)} />
        <col width={getTableWidthPercentage(300)} />
      </colgroup>
      <thead>
        <tr>
          <th>매장명</th>
          <th>총 제조건수</th>
          <th>총 개선 필요 건수</th>
        </tr>
      </thead>
      <tbody>
        {data ? (
          data?.list.map(item => (
            <tr key={item.store_idx}>
              <td>{item.store_name}</td>
              <td>{item.manufacturing_count.toLocaleString()}</td>
              <td>{item.improvement_needed_count.toLocaleString()}</td>
            </tr>
          ))
        ) : (
          <SkeletonTh colLength={3} />
        )}
      </tbody>
    </TableSty1>
  );
};
