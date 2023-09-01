/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FiArrowRight } from 'react-icons/fi';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { Button, ButtonProps } from './Button';
import { Export, Plus, Right } from '../icons';

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

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'gostPrimary'
  | 'gostSecondary'
  | 'transparent';

const buttons: ButtonVariant[] = [
  'primary',
  'secondary',
  'gostPrimary',
  'gostSecondary',
];

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
      <Button {...args} variant="gostSecondary" LeadingIcon={<Export />}>
        내보내기
      </Button>
      <Button {...args} LeadingIcon={<Plus />}>
        제품 등록
      </Button>
      <Button {...args} variant="gostSecondary">
        취소
      </Button>
      <Button {...args}>등록</Button>
      <Button {...args} variant="gostSecondary">
        이전
      </Button>
      <Button {...args} variant="gostSecondary" LeadingIcon={<Export />}>
        다운로드
      </Button>
      {buttons.map(el => (
        <div key={el}>
          <div
            css={css`
              display: flex;
              button {
                margin-right: 5px;
              }
            `}
          >
            <Button {...args} variant={el}>
              Button default
            </Button>
            <Button {...args} variant={el} LeadingIcon={<Plus />}>
              Button default
            </Button>
            <Button {...args} variant={el} TrailingIcon={<Right />}>
              Button default
            </Button>
          </div>
          <div
            css={css`
              display: flex;
              button {
                margin-right: 5px;
              }
            `}
          >
            <Button {...args} variant={el} disabled>
              Button default
            </Button>
            <Button {...args} variant={el} LeadingIcon={<Plus />} disabled>
              Button default
            </Button>
            <Button {...args} variant={el} TrailingIcon={<Right />} disabled>
              Button default
            </Button>
          </div>
          <div
            css={css`
              display: flex;
              button {
                margin-right: 5px;
              }
            `}
          >
            {/* sizeLg */}
            <Button {...args} variant={el} size="lg">
              Button default
            </Button>
            <Button {...args} variant={el} size="lg" LeadingIcon={<Plus />}>
              Button default
            </Button>
            <Button {...args} variant={el} size="lg" TrailingIcon={<Right />}>
              Button default
            </Button>
          </div>{' '}
          <div
            css={css`
              display: flex;
              button {
                margin-right: 5px;
              }
            `}
          >
            {/* disabled */}
            <Button {...args} variant={el} size="lg" disabled>
              Button default
            </Button>
            <Button
              {...args}
              variant={el}
              size="lg"
              LeadingIcon={<Plus />}
              disabled
            >
              Button default
            </Button>
            <Button
              {...args}
              variant={el}
              size="lg"
              TrailingIcon={<Right />}
              disabled
            >
              Button default
            </Button>
          </div>
        </div>
      ))}

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
