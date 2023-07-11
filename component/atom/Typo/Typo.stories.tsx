import React from 'react';
import { Meta, Story } from '@storybook/react';
import StoryLayout from '@ComponentFarm/modules/layout/StoryLayout';
import Typo, { TypoProps } from './Typo';

const meta: Meta = {
  title: 'Atoms/Typo',
  tags: ['autodocs'],
  args: {
    TotalProps: {
      props: `variant, as?,color?, weight?`,
    },
    variant: {
      xs: ['12px', '18px'],
      sm: ['14px', '20px'],
      md: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '30px'],

      h6: ['24px', '32px'],
      h5: ['30px', '38px'],
      h4: ['36px', '44px'],
      h3: ['48px', '60px'],
      h2: ['60px', '72px'],
      h1: ['72px', '90px'],
    },
    fontWeight: { normal: 400, medium: 500, semibold: 600, bold: 700 },
    asDesc: {
      as: 'h1, p, span 등 태그',
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

interface Props extends TypoProps {
  darkMode: boolean;
}

const TypoHeadings: Story<Props> = ({ darkMode, ...args }) => (
  <StoryLayout darkMode={darkMode}>
    <Typo {...args} variant="h1">
      Display h1
    </Typo>
    <Typo {...args} variant="h2">
      Display h2
    </Typo>
    <Typo {...args} variant="h3">
      Display h3
    </Typo>
    <Typo {...args} variant="h4">
      Display h4
    </Typo>
    <Typo {...args} variant="h5">
      Display h5
    </Typo>
    <Typo {...args} variant="h6">
      Display h6
    </Typo>
  </StoryLayout>
);

export const Heading = TypoHeadings.bind({});

Heading.argTypes = {
  weight: {
    control: 'radio',
    options: ['normal', 'medium', 'semibold', 'bold'],
  },
  darkMode: {
    control: 'boolean',
  },
};

Heading.parameters = {
  controls: { exclude: ['customColor'] },
};

const TypoText: Story<Props> = ({ darkMode, ...args }) => (
  <StoryLayout darkMode={darkMode}>
    <Typo {...args} variant="xl">
      Text xl
    </Typo>
    <Typo {...args} variant="lg">
      Text lg
    </Typo>
    <Typo {...args} variant="md">
      Text md
    </Typo>
    <Typo {...args} variant="sm">
      Text sm
    </Typo>
    <Typo {...args} variant="xs">
      Text xs
    </Typo>
  </StoryLayout>
);

export const Text = TypoText.bind({});

Text.argTypes = {
  weight: {
    control: 'radio',
    options: ['normal', 'medium', 'semibold', 'bold'],
  },
  darkMode: {
    control: 'boolean',
  },
};
