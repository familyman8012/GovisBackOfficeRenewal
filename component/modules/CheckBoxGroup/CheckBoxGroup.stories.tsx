/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm, Controller } from 'react-hook-form';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import CheckBoxGroup, { CheckBoxGroupProps } from './CheckBoxGroup';

const meta: Meta = {
  title: 'MODULES/CheckBoxGroup',
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

interface Props extends CheckBoxGroupProps {
  darkMode: boolean;
}

const StoryCheckboxGroup: Story<Props> = args => {
  const options = [
    { label: 'Apple', value: '1' },
    { label: 'Pear', value: '2' },
    { label: 'Orange', value: '3' },
  ];

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const onChange = (checkedValues: string[]) => {
    setSelectedValues(checkedValues);
    console.log('checked = ', checkedValues, selectedValues);
  };

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
      <CheckBoxGroup options={options} onChange={onChange} />
    </StoryLayout>
  );
};
export const Default = StoryCheckboxGroup.bind({});

const StoryCheckboxGroup2: Story<Props> = args => {
  const options = [
    { label: 'Apple', value: '1' },
    { label: 'Pear', value: '2' },
    { label: 'Orange', value: '3' },
  ];

  type FormData = {
    fruits: string[];
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: any) => console.log(data);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="fruits"
          control={control}
          rules={{ required: 'At least one fruit is required.' }}
          render={({ field: { onChange, value } }) => (
            <CheckBoxGroup
              options={options}
              defaultValue={value}
              onChange={onChange}
            />
          )}
        />
        {errors.fruits && <p>{errors.fruits.message}</p>}
        <input type="submit" />
      </form>
    </StoryLayout>
  );
};
export const ReactHookForm = StoryCheckboxGroup2.bind({});
