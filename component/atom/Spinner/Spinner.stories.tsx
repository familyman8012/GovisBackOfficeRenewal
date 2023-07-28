import React from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import Spinner from './Spinner';

const meta: Meta = {
  title: 'Atoms/Spinner',
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

const StorySpinner: Story<Props> = args => {
  return (
    <StoryLayout
      {...args}
      customCss={css`
        height: 1000px;

        .spinner {
          margin-bottom: 30px;
        }
      `}
    >
      <Spinner />
      <Spinner scaleDown={2.7} />
      <Spinner type="fade" />
      <Spinner type="beat" />
      <Spinner type="climbing" />
      <Spinner type="clock" />
      <Spinner type="pacman" color="#ffd34d" />
      <Spinner type="puff" />
      <Spinner type="pulse" />
      <Spinner type="ring" />
      <Spinner type="scale" />
      <Spinner type="sync" />
    </StoryLayout>
  );
};
export const Default = StorySpinner.bind({});
