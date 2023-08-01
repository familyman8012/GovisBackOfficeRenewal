/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import RadioGroup, { RadioGroupProps } from './RadioGroup';

const meta: Meta = {
  title: 'MODULES/RadioGroup',
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

interface Props extends RadioGroupProps {
  darkMode: boolean;
}

const StoryCheckboxGroup: Story<Props> = args => {
  const options = [
    { label: 'Apple', value: '1' },
    { label: 'Pear', value: '2' },
    { label: 'Orange', value: '3' },
  ];

  const [selectedRadio, setSelectedRadio] = useState('');

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
      <RadioGroup
        options={options}
        defaultValue={selectedRadio}
        onChange={setSelectedRadio}
      />
      <p>Selected Radio: {selectedRadio}</p>
    </StoryLayout>
  );
};
export const Default = StoryCheckboxGroup.bind({});
