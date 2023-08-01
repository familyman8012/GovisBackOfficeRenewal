/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BsSave } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa6';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import { HiOutlineBuildingStorefront } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { Button, ButtonProps } from './Button';

const meta: Meta = {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  args: {
    TotalProps: {
      props: `variant, size?, LeadingIcon?, TrailingIcon?, IconOnly?, disabled?`,
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

interface Props extends ButtonProps {
  darkMode: boolean;
}

const StoryButton: Story<Props> = args => {
  return (
    <StoryLayout
      {...args}
      customCss={css`
        button {
          margin-bottom: 20px;
        }
      `}
    >
      <Button {...args}>검색</Button>
      <Button variant="outline">다운로드</Button>
      <Button variant="white" LeadingIcon={<HiOutlineBuildingStorefront />}>
        매장
      </Button>
      <Button variant="white" LeadingIcon={<FaPlus />}>
        등록
      </Button>

      <Button variant="transparent" LeadingIcon={<BsSave />}>
        저장
      </Button>
      <Button variant="transparent" LeadingIcon={<IoClose />} />

      <Button {...args} isLoading>
        저장
      </Button>

      <Button {...args}>Button CTA</Button>

      <Button {...args} LeadingIcon={<FiStar />}>
        Button CTA
      </Button>

      <Button {...args} TrailingIcon={<FiArrowRight />}>
        Button CTA
      </Button>

      <Button {...args} IconOnly={<FiArrowRight />} />
    </StoryLayout>
  );
};
export const Default = StoryButton.bind({});

Default.args = {
  variant: 'primary',
  size: 'md',
  darkMode: false,
  disabled: false,
};

Default.argTypes = {
  variant: {
    control: 'radio',
    options: [
      'primary',
      'secondary',
      'secondaryGray',
      'tertiary',
      'tertiaryGray',
    ],
  },
  size: {
    control: 'radio',
    options: ['sm', 'md', 'lg', 'xl', '2xl'],
  },
  disabled: {
    control: 'boolean',
  },
  darkMode: {
    control: 'boolean',
  },
};
