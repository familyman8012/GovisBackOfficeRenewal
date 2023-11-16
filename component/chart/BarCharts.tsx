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
  xTickFormatter,
  yTickFormatter,
  toolTip = <BasicTooltip />,
  fill,
  diffFill,
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
  xTickFormatter?: (value: string) => string;
  yTickFormatter?: (value: number) => string;
  toolTip?: any;
  fill?: string;
  isLegend?: boolean;
  diffFill?: string[];
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
            dataKey={chartDataName[0]}
            axisLine={false}
            tickLine={false}
            tickFormatter={xTickFormatter}
          />
          <YAxis
            tickCount={tickCount}
            axisLine={false}
            tickLine={false}
            domain={domain}
            tickFormatter={yTickFormatter}
          />
          <Tooltip content={toolTip} />
          {isLegend && <Legend iconType="circle" iconSize={12} />}
          {type === 'diff' ? (
            <>
              <Bar dataKey={chartDataName[1]} fill={diffFill && diffFill[0]} />
              <Bar dataKey={chartDataName[2]} fill={diffFill && diffFill[1]} />
            </>
          ) : (
            <Bar dataKey={chartDataName[1]} fill={fill}>
              {isLabelList && (
                <LabelList
                  dataKey={chartDataName[1]}
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
