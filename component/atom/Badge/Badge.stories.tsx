/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { Badge, BadgeProps } from './Badge';

const meta: Meta = {
  title: 'Atoms/Badge',
  tags: ['autodocs'],
  args: {
    TotalProps: {
      props: `variant(필수값), size(기본값,md)`,
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

interface Props extends BadgeProps {
  darkMode: boolean;
}

const StoryBadge: Story<Props> = args => {
  return (
    <StoryLayout
      {...args}
      customCss={css`
        display: inline-flex;
        flex-direction: column;
        & > span + span {
          margin-top: 1.25rem; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
      <Badge variant="numbering" size="xs">
        1
      </Badge>
      <Badge variant="black" size="sm" textWhite>
        처리 중
      </Badge>
      <Badge {...args}>처리 중</Badge>
      <Badge variant="gray">처리 중</Badge>

      <Badge variant="success" size="lg" LeadingIcon={<FiStar />}>
        TEXT
      </Badge>

      <Badge {...args} LeadingIcon={<FiStar />}>
        Label
      </Badge>

      <Badge
        {...args}
        LeadingIcon={
          <img
            src="https://res.cloudinary.com/tailwindcss/image/upload/v1635279277/nl_tpy2ab.svg"
            alt="nl"
            width="16"
            height="16"
          />
        }
      >
        Label
      </Badge>

      <Badge {...args} TrailingIcon={<FiArrowRight />}>
        Label
      </Badge>
      <Badge
        variant="error"
        size="lg"
        LeadingIcon={<FiStar />}
        TrailingIcon={<FiArrowRight />}
      >
        error, sm
      </Badge>
    </StoryLayout>
  );
};
export const Default = StoryBadge.bind({});

Default.args = {
  variant: 'primary',
  size: 'md',
  darkMode: false,
};

Default.argTypes = {
  variant: {
    control: 'radio',
    options: ['gray', 'primary', 'error', 'warning', 'success'],
  },
  size: {
    control: 'radio',
    options: ['sm', 'md', 'lg'],
  },
  darkMode: {
    control: 'boolean',
  },
};

Default.parameters = {
  controls: { exclude: ['LeadingIcon', 'TrailingIcon', 'className'] },
};
