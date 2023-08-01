/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm, Controller } from 'react-hook-form';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { countries, dates, prices } from './sampleData';
import { GoSelect, IOption, MultiSelectProps } from './Select';

const meta: Meta = {
  title: 'Atoms/Select',
  tags: ['autodocs'],
  args: {
    TotalProps: {
      props: `options, selectedOption, setSelectedOption,  placeholder?, LeadingIcon?, width?, isSearchable?, formatOptionLabel?`,
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

interface Props extends MultiSelectProps {
  darkMode: boolean;
}

const StorySelect: Story<Props> = args => {
  const [selectedPrice, setSelectedPrice] = useState<IOption | null>(null);
  const [selectedDates, setSelectedDates] = useState<IOption[] | null>(null);
  const [selectedCountries, setSelectedCountries] = useState<IOption | null>(
    null
  );

  return (
    <StoryLayout
      {...args}
      customCss={css`
        & > div + div {
          margin: 10.25rem;
          margin-left: 1.25rem;
        }
      `}
    >
      <GoSelect
        options={prices}
        selectedOption={selectedPrice}
        setSelectedOption={setSelectedPrice}
        placeholder="Select price"
      />
      <GoSelect
        isMulti
        options={dates}
        selectedOption={selectedDates}
        setSelectedOption={setSelectedDates}
        placeholder="Select dates"
      />
      <GoSelect
        options={countries}
        selectedOption={selectedCountries}
        setSelectedOption={setSelectedCountries}
        placeholder="Select country"
      />
    </StoryLayout>
  );
};
export const Default = StorySelect.bind({});

const StorySelect2: Story<Props> = args => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const options: IOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <StoryLayout
      {...args}
      customCss={css`
        & > div + div {
          margin: 10.25rem;
          margin-left: 1.25rem;
        }
      `}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="selectOption"
          control={control}
          defaultValue={null}
          rules={{ required: true }} // if this field is required
          render={({ field: { onChange, value } }) => (
            <GoSelect
              options={options}
              selectedOption={value}
              setSelectedOption={onChange}
            />
          )}
        />
        <input type="submit" value="Submit" />
      </form>
    </StoryLayout>
  );
};
export const reactHookForm = StorySelect2.bind({});
