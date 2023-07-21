import React from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { COLUMNS, customStyle, data } from './data';
import StickyTable from './StickyTable';

const meta: Meta = {
  title: 'MODULES/StickyTable',
  tags: ['autodocs'],
  args: {
    Desc: {
      usages: `labe에는 th에 들어갈 텍스트, renderCell에는 각 data 들을 연결해주면 됨, customStyle에는 전체 colwidth 를 배열의 첫번째요소, 두번째요소는 첫행, 마지막행을 제외한 stickyColoumn의 left 혹은 right 값, 세번째, 네번째는 그라데이션을 나타나게 할 열`,
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

const StoryDatePicker: Story<Props> = args => {
  return (
    <StoryLayout
      {...args}
      customCss={css`
        height: 500px;
      `}
    >
      <StickyTable data={data} columns={COLUMNS} customStyle={customStyle} />
    </StoryLayout>
  );
};
export const Default = StoryDatePicker.bind({});
