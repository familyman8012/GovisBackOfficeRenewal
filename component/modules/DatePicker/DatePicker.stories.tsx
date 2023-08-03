import React, { SyntheticEvent, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm, Controller } from 'react-hook-form';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import DatePicker, { DatePickerProps, NewDate } from './DatePicker';

// Define the form data structure
interface IFormInput {
  selectedDate: string;
}

const meta: Meta = {
  title: 'MODULES/DatePicker',
  tags: ['autodocs'],
  args: {
    TotalProps: {
      props: `selectedDate, onChange, dateFormat, minDate, maxDate, placeholderText, showYearDropdown,
      showMonthDropdown`,
    },
    propsDesc: {
      selectedDate: '초기에 설정된 날짜값',
      onChange: '날짜가 변경될 때마다 발동하는 함수',
      dateFormat: '날짜 형식, yyyy/MM/dd, MM/dd/yyyy 등',
      minDateMaxDate: '사용자가 선택할 수 있는 날짜의 최소값과 최대값',
      placeholderText:
        '날짜를 선택하기 전에 표시되는 placeholder 텍스트를 설정',
      showYearDropdown: '년/월을 드롭다운으로 선택할 수 있는 옵션을 제공',
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

interface Props extends DatePickerProps {
  darkMode: boolean;
}

const StoryDatePicker: Story<Props> = args => {
  const [selectedDate, setSelectedDate] = useState('2023-08-05');
  const handleSubmit = () => {
    console.log(selectedDate);
  };

  return (
    <StoryLayout
      {...args}
      customCss={css`
        height: 500px;
      `}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <DatePicker
            selectedDate={selectedDate}
            onChange={(newDate: string) => setSelectedDate(newDate)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </StoryLayout>
  );
};
export const Default = StoryDatePicker.bind({});

const StoryDatePicker2: Story<Props> = args => {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      selectedDate: '2023-08-07', // 이곳에서 defaultValue를 제공합니다.
    },
  });
  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <StoryLayout
      {...args}
      customCss={css`
        height: 500px;
      `}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="selectedDate"
          render={({ field }) => (
            <DatePicker
              selectedDate={field.value}
              onChange={(
                newDate: NewDate,
                event: SyntheticEvent<any> | undefined
              ) => {
                field.onChange(String(newDate));
              }}
            />
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </StoryLayout>
  );
};
export const ReactHookForm = StoryDatePicker2.bind({});
