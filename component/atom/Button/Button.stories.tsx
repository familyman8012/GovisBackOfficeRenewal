/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FiArrowRight, FiStar } from 'react-icons/fi';
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
        & > div + div {
          margin-top: 1.25rem; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
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
