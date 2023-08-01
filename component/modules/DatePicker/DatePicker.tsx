import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import {
  default as DatePickerLibrary,
  ReactDatePickerProps,
} from 'react-datepicker';
import { FiCalendar } from 'react-icons/fi';
import { IcoInput, IcoInputProps } from '@ComponentFarm/atom/IcoInput/IcoInput';

export type NewDate = Date | ChangeEvent<Element> | null;

export interface DatePickerProps extends Partial<ReactDatePickerProps> {
  selectedDate: Date | null;
  onChange: (date: NewDate, event: SyntheticEvent<any> | undefined) => void;
}

// DateInput 컴포넌트 만들기  - 기존 IcoInput 컴포넌트를 활용
export const DateInput: React.FC<IcoInputProps> = ({
  onClick,
  value,
  onChange,
  ...props
}) => (
  <IcoInput
    {...props}
    value={value}
    onClick={onClick}
    onChange={onChange}
    TrailingIcon={<FiCalendar />}
  />
);

const DatePicker: React.FC<DatePickerProps> = ({
  onChange,
  dateFormat = 'MM/dd/yyyy',
  minDate,
  maxDate,
  placeholderText = 'Select date',
  showYearDropdown = false,
  showMonthDropdown = false,
  ...props
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (
    date: Date | null,
    event: SyntheticEvent<any> | undefined
  ) => {
    setSelectedDate(date);
    onChange(date, event);
  };

  return (
    <DatePickerLibrary
      selected={selectedDate}
      onChange={handleChange}
      // @ts-ignore - customInput 의 props 가 DateInput에게 전달되도록
      customInput={<DateInput />}
      dateFormat={dateFormat}
      minDate={minDate}
      maxDate={maxDate}
      placeholderText={placeholderText}
      showYearDropdown={showYearDropdown}
      showMonthDropdown={showMonthDropdown}
      {...props}
    />
  );
};

export default DatePicker;
