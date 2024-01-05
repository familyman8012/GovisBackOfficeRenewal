/* eslint-disable react/destructuring-assignment */
import React, { useMemo } from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { OrderDonutLegend } from '@ComponentFarm/template/product-analyze/order/OrderDonutLegend';
import DonutChart from './DonutChart';
import RingChart from './RingChart';
import ScoreLabel from './ScoreLabel';

const meta: Meta = {
  title: 'CHART/DonutChart',
  tags: ['autodocs'],
  args: {
    TotalProps: {
      props: ``,
    },
  },
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
      source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};

export default meta;

interface Props {
  darkMode: boolean;
}

const chartServerData = [
  {
    item_label: '시가지',
    base_sales_count: 6588,
    comparison_sales_count: 6529,
    increase_decrease_number: 59,
    increase_decrease_rate: 0.9,
  },
  {
    item_label: '학원가',
    base_sales_count: 1473,
    comparison_sales_count: 1447,
    increase_decrease_number: 26,
    increase_decrease_rate: 1.8,
  },
  {
    item_label: '주거지',
    base_sales_count: 1448,
    comparison_sales_count: 1456,
    increase_decrease_number: -8,
    increase_decrease_rate: -0.55,
  },
  {
    item_label: '대학가',
    base_sales_count: 742,
    comparison_sales_count: 671,
    increase_decrease_number: 71,
    increase_decrease_rate: 10.58,
  },
  {
    item_label: '쇼핑',
    base_sales_count: 343,
    comparison_sales_count: 341,
    increase_decrease_number: 2,
    increase_decrease_rate: 0.59,
  },
];

const StoryDonutChart: Story<Props> = args => {
  const chartData = useMemo(
    () =>
      chartServerData.map((el, i) =>
        i === 0
          ? { ...el, fill: '#06B6D4' }
          : i === 1
          ? { ...el, fill: '#3B82F6' }
          : i === 2
          ? { ...el, fill: '#0EA5E9' }
          : { ...el, fill: '#6366F1' }
      ),
    [chartServerData]
  );

  return (
    <StoryLayout
      {...args}
      customCss={css`
        /* display: flex; */
        & > div + div {
          margin-top: 1rem; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
      <div style={{ height: '40rem' }}>
        <DonutChart
          height="50rem"
          chartData={chartData}
          legend={<OrderDonutLegend />}
        />
      </div>
    </StoryLayout>
  );
};
export const Default = StoryDonutChart.bind({});

const StoryDonutChart2: Story<Props> = args => {
  const data = [
    { name: 'Score', value: 40 },
    { name: 'Remaining', value: 100 - 40 },
  ];

  return (
    <StoryLayout
      {...args}
      customCss={css`
        /* display: flex; */
        & > div + div {
          margin-top: 1rem; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
      <RingChart
        chartData={data}
        size="12rem"
        gradient={['#ffa4a4', '#f24768']}
        labelComponent={<ScoreLabel />}
      />
    </StoryLayout>
  );
};
export const RingChartStory = StoryDonutChart2.bind({});
