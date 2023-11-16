import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from 'recharts';
import { BasicTooltip } from './BasicTooltip';
import { DonutBasicLegend } from './DonutBasicLegend';

const DonutChart = ({
  chartData,
  legend = <DonutBasicLegend />,
  toolTip = <BasicTooltip />,
}: {
  chartData: any;
  legend?: any;
  toolTip?: any;
}) => {
  // Mock data

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={false}
        />
        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          content={legend}
        />
        <Tooltip content={toolTip} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
