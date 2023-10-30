import React from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { Button } from '@ComponentFarm/atom/Button/Button';

const meta: Meta = {
  title: 'Modal/SearchPopup',
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

const StoryStorePopup: Story<Props> = args => {
  return (
    <StoryLayout
      {...args}
      customCss={css`
        height: 500px;
      `}
    >
      <div>
        <Button variant="primary">Open Store Modal</Button>
      </div>
    </StoryLayout>
  );
};
export const Default = StoryStorePopup.bind({});
