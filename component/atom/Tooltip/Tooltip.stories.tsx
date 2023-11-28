import React from 'react';
import { Meta } from '@storybook/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import Tooltip from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta = {
  title: 'Atoms/Tooltip',
  tags: ['autodocs'],
  args: {
    loading: false,
    checked: true,
    disabled: false,
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

export const Default = ({ darkMode }: Props) => {
  return (
    <StoryLayout className="center" darkMode={darkMode}>
      <Button>
        기본 툴팁
        <Tooltip content="툴팁 내용" />
      </Button>
      <Button>
        LEFT 툴팁
        <Tooltip direction="left" content="툴팁 내용" />
      </Button>
      <Button>
        RIGHT 툴팁
        <Tooltip direction="right" content={`툴팁 내용\n여러줄`} />
      </Button>
      <Button>
        TOP 툴팁
        <Tooltip direction="top" content="상단 툴팁 내용" />
      </Button>

      <a href="https://gopizza.kr" target="_blank">
        링크 툴팁
        <Tooltip content="상단 툴팁 내용" />
      </a>

      <div>
        클릭 툴팁 내부 링크
        <Tooltip
          eventType="click"
          direction="right"
          content={
            <a href="https://gopizza.kr" target="blank">
              툴팁 링크
            </a>
          }
        />
      </div>

      <div>
        클릭 툴팁 내부 링크
        <Tooltip
          eventType="click"
          direction="left"
          content={
            <a href="https://gopizza.kr" target="blank">
              툴팁 링크
            </a>
          }
        />
      </div>
    </StoryLayout>
  );
};
