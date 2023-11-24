import React from 'react';
import { IProductStatisticsRes } from '@InterfaceFarm/product-statistics';
import { TableSty2 } from '@ComponentFarm/template/common/table/TableSty';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

const SalesProductTable = ({ data }: { data: IProductStatisticsRes }) => {
  return (
    <TableSty2>
      <colgroup>
        {[120, 390, 342, 342, 342].map((el, i) => (
          <col key={i} width={getTableWidthPercentage(el, 1536)} />
        ))}
      </colgroup>
      <thead>
        <tr>
          <th colSpan={2}>전체 {data?.list.length}개</th>
          <th>{data?.total.total_base_sales_count.toLocaleString()} 개</th>
          <th>{data?.total.total_comparison_sales_count.toLocaleString()}개</th>
          <th>
            {data?.total.total_increase_decrease_number.toLocaleString()}개 (
            {data && data?.total.total_increase_decrease_rate > 0 && '+'}
            {data?.total.total_increase_decrease_rate}%)
          </th>
        </tr>
        <tr>
          <th>구분</th>
          <th>지역명</th>
          <th>기준일 판매</th>
          <th>비교일 판매</th>
          <th>증감율</th>
        </tr>
      </thead>
      <tbody>
        {data.list.map((el, i) => (
          <tr key={i}>
            <td>
              <span className="hiddenZoneV">{i}</span>
            </td>
            <td>{el.item_label}</td>
            <td>{el.base_sales_count.toLocaleString()}개</td>
            <td>{el.comparison_sales_count.toLocaleString()}개</td>
            <td>
              {el.increase_decrease_number.toLocaleString()}개 (
              {el.increase_decrease_rate > 0 && '+'}
              {el.increase_decrease_rate}%)
            </td>
          </tr>
        ))}
      </tbody>
    </TableSty2>
  );
};

export default SalesProductTable;
