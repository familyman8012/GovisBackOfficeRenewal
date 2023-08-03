import React, {
  ChangeEvent,
  SyntheticEvent,
  useState,
  useEffect,
  forwardRef,
} from 'react';
import { ko } from 'date-fns/esm/locale';
import dayjs from 'dayjs';
import {
  default as DatePickerLibrary,
  ReactDatePickerProps,
} from 'react-datepicker';
import { FiCalendar } from 'react-icons/fi';
import styled from '@emotion/styled';

export type NewDate = string | ChangeEvent<Element> | null;

export interface DatePickerProps extends Partial<ReactDatePickerProps> {
  selectedDate: string | null;
  onChange: any;
}

interface DateInputProps {
  onClick: React.MouseEventHandler<HTMLInputElement>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--size-inputHeight);
  padding: 0 0.7rem;
  font-size: 1.6rem;
  border: 1px solid var(--color-inputBorder);
  border-radius: 2px;
  -webkit-transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  input {
    width: 100%;
    font-size: 1.6rem;
    border: none;
  }
  svg {
    color: #aaa;
  }
`;

// DateInput 컴포넌트 만들기  - 기존 IcoInput 컴포넌트를 활용
const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ onClick, value, onChange }, ref) => {
    return (
      <DateInputWrapper>
        <input
          type="text"
          onClick={onClick}
          value={value}
          onChange={onChange}
          ref={ref}
        />
        <FiCalendar size={20} />
      </DateInputWrapper>
    );
  }
);

DateInput.displayName = 'DateInput';

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onChange,
  dateFormat = 'yyyy-MM-dd',
  minDate,
  maxDate,
  placeholderText = 'Select date',
  showYearDropdown = false,
  showMonthDropdown = false,
  ...props
}) => {
  const [selectedDateState, setSelectedDateState] = useState<Date | null>(
    selectedDate ? dayjs(selectedDate).toDate() : null
  );

  useEffect(() => {
    setSelectedDateState(selectedDate ? dayjs(selectedDate).toDate() : null);
  }, [selectedDate]);

  const handleChange = (
    date: Date | null,
    event: SyntheticEvent<any> | undefined
  ) => {
    setSelectedDateState(date);
    if (date) {
      onChange(dayjs(date).format('YYYY-MM-DD'), event);
    } else {
      onChange(null, event);
    }
  };

  return (
    <DatePickerLibrary
      selected={selectedDateState}
      onChange={handleChange}
      locale={ko}
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
