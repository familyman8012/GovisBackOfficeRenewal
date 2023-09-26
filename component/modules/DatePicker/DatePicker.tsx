import React, {
  ChangeEvent,
  SyntheticEvent,
  useState,
  useEffect,
  forwardRef,
} from 'react';
import ko from 'date-fns/locale/ko';
import dayjs from 'dayjs';
import DatepickerLibrary, { ReactDatePickerProps } from 'react-datepicker';
import { DateInputWrapper } from './style';

export type NewDate = string | ChangeEvent<Element> | null;

export interface DatePickerProps extends Partial<ReactDatePickerProps> {
  className?: string;
  selectedDate: string | null;
  onChange: any;
  disabled?: boolean;
}

interface DateInputProps {
  onClick: React.MouseEventHandler<HTMLInputElement>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  disabled?: boolean;
}

// DateInput 컴포넌트 만들기  - 기존 IcoInput 컴포넌트를 활용
const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ onClick, value, onChange, placeholder, disabled }, ref) => {
    return (
      <DateInputWrapper className={disabled ? 'disabled' : ''}>
        <input
          type="text"
          id="dateInput"
          onClick={onClick}
          value={value}
          onChange={onChange}
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
        />

        <img
          src="/images/common/icon-16-calendar.svg"
          className="ico"
          alt="calendar"
        />
      </DateInputWrapper>
    );
  }
);

DateInput.displayName = 'DateInput';

const DatePicker: React.FC<DatePickerProps> = ({
  className,
  selectedDate,
  onChange,
  dateFormat = 'yyyy-MM-dd',
  minDate,
  maxDate,
  placeholderText = 'Select date',
  showYearDropdown = false,
  showMonthDropdown = false,
  disabled = false,
  ...props
}) => {
  const [selectedDateState, setSelectedDateState] = useState<Date | null>(
    selectedDate ? dayjs(selectedDate).toDate() : null
  );

  console.log('selectedDate', selectedDate);

  useEffect(() => {
    setSelectedDateState(selectedDate ? dayjs(selectedDate).toDate() : null);
  }, [selectedDate]);

  const handleChange = (
    date: Date | null,
    event: SyntheticEvent | undefined
  ) => {
    setSelectedDateState(date);
    if (date) {
      onChange(dayjs(date).format('YYYY-MM-DD'), event);
    } else {
      onChange(null, event);
    }
  };

  return (
    <DatepickerLibrary
      selected={selectedDateState}
      onChange={handleChange}
      // @ts-ignore - customInput 의 props 가 DateInput에게 전달되도록
      customInput={<DateInput disabled={disabled} />}
      dateFormat={dateFormat}
      minDate={minDate}
      maxDate={maxDate}
      dateFormatCalendar="yyyy년 MM월"
      placeholderText={placeholderText}
      locale={ko}
      showYearDropdown={showYearDropdown}
      showMonthDropdown={showMonthDropdown}
      disabled={disabled}
      {...props}
    />
  );
};

export default DatePicker;
