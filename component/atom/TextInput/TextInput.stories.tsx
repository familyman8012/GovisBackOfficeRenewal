/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FiAlertCircle, FiHelpCircle, FiMail } from 'react-icons/fi';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { TextInput, TextInputProps } from './TextInput';

const meta: Meta = {
  title: 'Atoms/TextInput',
  tags: ['autodocs'],
  args: {
    TotalProps: {
      props: `type, value, handleChange, label?, leadingText?, placeholder, error?,  helperText?, LeadingIcon?, TrailingIcon?, disabled?`,
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

interface Props extends TextInputProps {
  darkMode: boolean;
}

const StoryTextInput: Story<Props> = args => {
  const [text1, setText1] = React.useState<string>('');

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
      <div>
        <TextInput
          type="email"
          value={text1}
          onChange={event => setText1(event.target.value)}
          label="Email"
          placeholder="veronica@example.com"
          helperText="This is a hint text to help the user."
          disabled={args.disabled}
        />
        <div style={{ marginBottom: '1rem' }} />
        <TextInput
          type="email"
          value={text1}
          onChange={event => setText1(event.target.value)}
          label="Email"
          placeholder="veronica@example.com"
          helperText="This is a hint text to help the user."
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div style={{ marginBottom: '1rem' }} />
        <TextInput
          type="email"
          value={text1}
          onChange={event => setText1(event.target.value)}
          label="Email"
          placeholder="veronica@example.com"
          helperText="This is a hint text to help the user."
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div style={{ marginBottom: '1rem' }} />
        <TextInput
          type="email"
          value={text1}
          onChange={event => setText1(event.target.value)}
          label="Email"
          placeholder="veronica@example.com"
          error="This is an error message."
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiAlertCircle />}
          disabled={args.disabled}
        />
      </div>
      <div>
        <TextInput
          type="text"
          value={text1}
          onChange={event => setText1(event.target.value)}
          label="Website"
          placeholder="example.com"
          leadingText="https://"
          helperText="This is a hint text to help the user."
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div style={{ marginBottom: '1rem' }} />
        <TextInput
          type="text"
          value={text1}
          onChange={event => setText1(event.target.value)}
          label="Website"
          placeholder="example.com"
          leadingText="https://"
          error="This is an error message."
          TrailingIcon={<FiAlertCircle />}
          disabled={args.disabled}
        />
      </div>
    </StoryLayout>
  );
};
export const Default = StoryTextInput.bind({});

Default.args = {
  disabled: false,
};

Default.argTypes = {
  disabled: {
    control: 'boolean',
  },
  darkMode: {
    control: 'boolean',
  },
};

const StoryTextInput2: Story<Props> = args => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = handleSubmit(data => console.log(data));

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
      <form onSubmit={onSubmit}>
        <TextInput
          type="text"
          name="firstName"
          placeholder="이메일을 입력하세요"
          register={register('firstName', {
            required: 'First name is required',
            maxLength: 20,
          })}
          error={errors.firstName && String(errors.firstName.message)}
        />
        <div style={{ marginBottom: '1rem' }} />
        <TextInput
          type="text"
          name="secondName"
          placeholder="입력하세요"
          label="Second"
          register={register('secondName', {
            required: 'secondName is required',
            maxLength: 20,
          })}
          error={errors.secondName && String(errors.secondName.message)}
          helperText="This is a hint text to help the user."
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <input type="submit" />
      </form>
    </StoryLayout>
  );
};
export const ReactHookForm = StoryTextInput2.bind({});
