import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Legend,
} from 'recharts';
import { BasicTooltip } from './BasicTooltip';

export const BarCharts = ({
  type,
  height,
  chartData,
  barSize,
  tickCount,
  domain,
  xKey = 'item_label',
  yKey,
  xTickFormatter,
  yTickFormatter,
  toolTip = <BasicTooltip />,
  fill,
  diffSet,
  isLegend,
  isLabelList,
  LabelListFormatter,
}: {
  type?: string;
  height?: string;
  chartData: any;
  barSize?: number;
  tickCount?: number;
  domain?: any[];
  xKey?: string;
  yKey?: string;
  xTickFormatter?: (value: string) => string;
  yTickFormatter?: (value: number) => string;
  toolTip?: any;
  fill?: string;
  isLegend?: boolean;
  diffSet?: { name: string; dataKey: string; fill: string }[];
  isLabelList?: boolean;
  LabelListFormatter?: (value: number) => string;
}) => {
  const chartDataName = Object.keys(chartData[0]);

  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} barSize={barSize}>
          <CartesianGrid strokeDasharray="2 0" vertical={false} />
          <XAxis
            dataKey={xKey}
            axisLine={false}
            tickLine={false}
            tickFormatter={xTickFormatter}
          />
          <YAxis
            tickCount={tickCount}
            axisLine={false}
            tickLine={false}
            domain={domain}
            interval={0}
            tickFormatter={yTickFormatter}
          />
          <Tooltip content={toolTip} />
          {isLegend && (
            <Legend
              iconType="circle"
              iconSize={12}
              wrapperStyle={{ paddingTop: '20px' }}
            />
          )}
          {type === 'diff' && diffSet ? (
            <>
              <Bar
                name={diffSet[0].name}
                dataKey={diffSet[0].dataKey}
                fill={diffSet[0].fill}
              />
              <Bar
                name={diffSet[1].name}
                dataKey={diffSet[1].dataKey}
                fill={diffSet[1].fill}
              />
            </>
          ) : (
            <Bar dataKey={chartDataName[1]} fill={fill}>
              {isLabelList && (
                <LabelList
                  dataKey={yKey ?? chartDataName[1]}
                  position="top"
                  formatter={LabelListFormatter}
                />
              )}
            </Bar>
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
