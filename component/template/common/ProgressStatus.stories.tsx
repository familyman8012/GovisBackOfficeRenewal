/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { Progress } from '@ComponentFarm/chart/Progress';
import { AreaBox } from './AreaBox';
import { ProgressStatus } from './ProgressStatusExample';

const meta: Meta = {
  title: 'TEMPLATE/ProgressStatus',
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

const StoryCheckboxGroup: Story<Props> = args => {
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
      <AreaBox title="전체 제품판매 현황">
        <ProgressStatus>
          <span className="label">제조수</span>
          <Progress
            width="31.4rem"
            height="0.8rem"
            color="var(--color-green30)"
            progress={50}
          />
          <span className="txt_progress">14%</span>
        </ProgressStatus>
      </AreaBox>
    </StoryLayout>
  );
};
export const Default = StoryCheckboxGroup.bind({});
