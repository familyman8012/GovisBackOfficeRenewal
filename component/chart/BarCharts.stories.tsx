/* eslint-disable react/destructuring-assignment */
import React, { useMemo } from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { calCulateXformat } from '@ComponentFarm/template/product-analyze/all/const';
import { BarCharts } from './BarCharts';

const meta: Meta = {
  title: 'CHART/BarCharts',
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
      // description: {
      //   component: '![Alt text](/images/storybook/chart_desc.png)',
      // },
    },
  },
};

export default meta;

interface Props {
  darkMode: boolean;
}
const allData = [
  {
    item_label: '00',
    base_sales_count: 5,
    comparison_sales_count: 0,
    increase_decrease_number: 5,
    increase_decrease_rate: 0,
  },
  {
    item_label: '01',
    base_sales_count: 1,
    comparison_sales_count: 0,
    increase_decrease_number: 1,
    increase_decrease_rate: 0,
  },
  {
    item_label: '02',
    base_sales_count: 0,
    comparison_sales_count: 0,
    increase_decrease_number: 0,
    increase_decrease_rate: 0,
  },
  {
    item_label: '03',
    base_sales_count: 0,
    comparison_sales_count: 0,
    increase_decrease_number: 0,
    increase_decrease_rate: 0,
  },
  {
    item_label: '04',
    base_sales_count: 0,
    comparison_sales_count: 0,
    increase_decrease_number: 0,
    increase_decrease_rate: 0,
  },
  {
    item_label: '05',
    base_sales_count: 0,
    comparison_sales_count: 0,
    increase_decrease_number: 0,
    increase_decrease_rate: 0,
  },
  {
    item_label: '06',
    base_sales_count: 0,
    comparison_sales_count: 0,
    increase_decrease_number: 0,
    increase_decrease_rate: 0,
  },
  {
    item_label: '07',
    base_sales_count: 0,
    comparison_sales_count: 0,
    increase_decrease_number: 0,
    increase_decrease_rate: 0,
  },
  {
    item_label: '08',
    base_sales_count: 0,
    comparison_sales_count: 0,
    increase_decrease_number: 0,
    increase_decrease_rate: 0,
  },
  {
    item_label: '09',
    base_sales_count: 0,
    comparison_sales_count: 0,
    increase_decrease_number: 0,
    increase_decrease_rate: 0,
  },
  {
    item_label: '10',
    base_sales_count: 27,
    comparison_sales_count: 0,
    increase_decrease_number: 27,
    increase_decrease_rate: 0,
  },
  {
    item_label: '11',
    base_sales_count: 369,
    comparison_sales_count: 0,
    increase_decrease_number: 369,
    increase_decrease_rate: 0,
  },
  {
    item_label: '12',
    base_sales_count: 508,
    comparison_sales_count: 0,
    increase_decrease_number: 508,
    increase_decrease_rate: 0,
  },
  {
    item_label: '13',
    base_sales_count: 463,
    comparison_sales_count: 0,
    increase_decrease_number: 463,
    increase_decrease_rate: 0,
  },
  {
    item_label: '14',
    base_sales_count: 290,
    comparison_sales_count: 0,
    increase_decrease_number: 290,
    increase_decrease_rate: 0,
  },
  {
    item_label: '15',
    base_sales_count: 548,
    comparison_sales_count: 0,
    increase_decrease_number: 548,
    increase_decrease_rate: 0,
  },
  {
    item_label: '16',
    base_sales_count: 686,
    comparison_sales_count: 0,
    increase_decrease_number: 686,
    increase_decrease_rate: 0,
  },
  {
    item_label: '17',
    base_sales_count: 639,
    comparison_sales_count: 0,
    increase_decrease_number: 639,
    increase_decrease_rate: 0,
  },
  {
    item_label: '18',
    base_sales_count: 851,
    comparison_sales_count: 0,
    increase_decrease_number: 851,
    increase_decrease_rate: 0,
  },
  {
    item_label: '19',
    base_sales_count: 707,
    comparison_sales_count: 0,
    increase_decrease_number: 707,
    increase_decrease_rate: 0,
  },
  {
    item_label: '20',
    base_sales_count: 487,
    comparison_sales_count: 0,
    increase_decrease_number: 487,
    increase_decrease_rate: 0,
  },
  {
    item_label: '21',
    base_sales_count: 309,
    comparison_sales_count: 0,
    increase_decrease_number: 309,
    increase_decrease_rate: 0,
  },
  {
    item_label: '22',
    base_sales_count: 158,
    comparison_sales_count: 0,
    increase_decrease_number: 158,
    increase_decrease_rate: 0,
  },
  {
    item_label: '23',
    base_sales_count: 61,
    comparison_sales_count: 0,
    increase_decrease_number: 61,
    increase_decrease_rate: 0,
  },
];

const channelData = [
  {
    item_label: 'POS',
    base_sales_count: 1067,
    comparison_sales_count: 1599,
    increase_decrease_number: -532,
    increase_decrease_rate: -33.27,
  },
  {
    item_label: '키오스크',
    base_sales_count: 572,
    comparison_sales_count: 629,
    increase_decrease_number: -57,
    increase_decrease_rate: -9.06,
  },
  {
    item_label: '배달의민족',
    base_sales_count: 413,
    comparison_sales_count: 402,
    increase_decrease_number: 11,
    increase_decrease_rate: 2.74,
  },
  {
    item_label: '쿠팡이츠',
    base_sales_count: 399,
    comparison_sales_count: 398,
    increase_decrease_number: 1,
    increase_decrease_rate: 0.25,
  },
  {
    item_label: '요기요',
    base_sales_count: 169,
    comparison_sales_count: 213,
    increase_decrease_number: -44,
    increase_decrease_rate: -20.66,
  },
  {
    item_label: '땡겨요',
    base_sales_count: 124,
    comparison_sales_count: 124,
    increase_decrease_number: 0,
    increase_decrease_rate: 0,
  },
];

const increaseServerData = [
  {
    item_label: '시가지',
    base_sales_count: 2662,
    comparison_sales_count: 2649,
    increase_decrease_number: 13,
    increase_decrease_rate: 0.49,
  },
  {
    item_label: '학원가',
    base_sales_count: 1746,
    comparison_sales_count: 3294,
    increase_decrease_number: -1548,
    increase_decrease_rate: -46.99,
  },
  {
    item_label: '대학가',
    base_sales_count: 1107,
    comparison_sales_count: 1243,
    increase_decrease_number: -136,
    increase_decrease_rate: -10.94,
  },
  {
    item_label: '쇼핑',
    base_sales_count: 486,
    comparison_sales_count: 558,
    increase_decrease_number: -72,
    increase_decrease_rate: -12.9,
  },
  {
    item_label: '주거지',
    base_sales_count: 463,
    comparison_sales_count: 588,
    increase_decrease_number: -125,
    increase_decrease_rate: -21.26,
  },
];

const StoryBarChartsGroup: Story<Props> = args => {
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
      <div>
        <BarCharts
          height="55.7rem"
          chartData={allData}
          barSize={6}
          tickCount={11}
          xTickFormatter={formatValue =>
            `${calCulateXformat(formatValue, 'chart')}`
          }
          fill="var(--color-orange90)"
        />
      </div>
    </StoryLayout>
  );
};
export const Default = StoryBarChartsGroup.bind({});

const StoryBarChartsGroup2: Story<Props> = args => {
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
      <div>
        <BarCharts
          type="diff"
          height="40rem"
          chartData={channelData}
          barSize={6}
          tickCount={7}
          isLegend
          diffSet={[
            {
              name: '기준일',
              dataKey: 'base_sales_count',
              fill: '#5A6ACF',
            },
            {
              name: '비교일',
              dataKey: 'comparison_sales_count',
              fill: '#E6E8EC',
            },
          ]}
        />
      </div>
    </StoryLayout>
  );
};
export const Diff = StoryBarChartsGroup2.bind({});

const StoryBarChartsGroup3: Story<Props> = args => {
  const increaseData = useMemo(
    () =>
      increaseServerData.map(el => {
        return {
          name: el.item_label,
          value: el.increase_decrease_rate,
          fill: el.increase_decrease_rate > 0 ? '#FF4600' : '#2264E5',
        };
      }),
    [increaseServerData]
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
      <div>
        <BarCharts
          height="50rem"
          barSize={30}
          hasGrid
          xKey="name"
          chartData={increaseData}
          isTooltip={false}
          isLabelList
          LabelListFormatter={(value: number) =>
            `${value > 0 ? '+' : ''}${Number(
              value.toFixed(2)
            ).toLocaleString()}%`
          }
        />
      </div>
    </StoryLayout>
  );
};
export const Increase = StoryBarChartsGroup3.bind({});
