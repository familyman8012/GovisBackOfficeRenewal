import React from 'react';
import { IProductStatisticsResListItem } from '@InterfaceFarm/product-statistics';
import { GrayUnderLineTable } from '@ComponentFarm/template/common/table/TableSty';

export const ProductSalesTable = ({
  chartData,
  format,
}: {
  chartData?: IProductStatisticsResListItem[];
  format: string;
}) => {
  return (
    <GrayUnderLineTable>
      <thead>
        <tr>
          <th>
            <span className="hiddenZoneV">NO.</span>
          </th>
          <th>
            <span className="hiddenZoneV">time</span>
          </th>
          <th>비교일 판매</th>
          <th>기준일 판매</th>
          <th>증감율</th>
        </tr>
      </thead>
      <tbody>
        {chartData?.map((el, i: number) => (
          <tr key={el.item_label}>
            <td className="no">{i}</td>
            <td>
              {el.item_label}
              {format}
            </td>
            <td className="tac">{el.comparison_sales_count}개</td>
            <td className="tac">{el.base_sales_count}개</td>
            <td className="tac">
              {el.increase_decrease_number}개
              <span
                className={
                  el.increase_decrease_rate > 0
                    ? 'rate increase'
                    : el.increase_decrease_rate === 0
                    ? 'rate'
                    : 'rate decrease'
                }
              >
                ({el.increase_decrease_rate > 0 && '+'}
                {el.increase_decrease_rate}% )
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </GrayUnderLineTable>
  );
};
