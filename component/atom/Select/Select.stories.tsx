/* eslint-disable react/destructuring-assignment */
import React, { useCallback, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { countries, dates, prices } from './sampleData';
import { GoSelect, SelectProps, IOption } from './Select';

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

interface Props extends SelectProps {
  darkMode: boolean;
}

const formatOptionLabel = ({ label }: IOption) => <div>{label}</div>;

const StorySelect: Story<Props> = args => {
  const [selectedPrice, setSelectedPrice] = useState<IOption | null>(null);
  const [selectedDate, setSelectedDate] = useState<IOption | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<IOption | null>(null);

  const onSelectPrice = useCallback((option: IOption | null) => {
    setSelectedPrice(option);
  }, []);

  const onSelectDate = useCallback((option: IOption | null) => {
    setSelectedDate(option);
  }, []);

  const onSelectCountry = useCallback((option: IOption | null) => {
    setSelectedCountry(option);
  }, []);

  return (
    <StoryLayout
      {...args}
      customCss={css`
        & > div + div {
          margin: 10.25rem; /* Corresponds to space-y-5 in Tailwind CSS */
          margin-left: 1.25rem;
        }
      `}
    >
      <GoSelect
        options={prices}
        selectedOption={selectedPrice}
        setSelectedOption={onSelectPrice}
        placeholder="Select price"
      />
      <GoSelect
        options={dates}
        selectedOption={selectedDate}
        setSelectedOption={onSelectDate}
        placeholder="Select date"
      />
      <GoSelect
        options={countries}
        selectedOption={selectedCountry}
        setSelectedOption={onSelectCountry}
        placeholder="Select country"
        formatOptionLabel={formatOptionLabel} // 이 부분을 변경하였습니다.
      />
    </StoryLayout>
  );
};
export const Default = StorySelect.bind({});
