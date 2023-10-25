import React, {
  ChangeEvent,
  SyntheticEvent,
  useState,
  useEffect,
  forwardRef,
  useRef,
} from 'react';
import ko from 'date-fns/locale/ko';
import dayjs from 'dayjs';
import DatepickerLibrary, { ReactDatePickerProps } from 'react-datepicker';
import CustomHeader from './CustomHeader';
import { DateInputWrapper } from './style';

export type NewDate = string | ChangeEvent<Element> | null;

export interface DatePickerProps extends Partial<ReactDatePickerProps> {
  className?: string;
  DatePickerRef?: React.RefObject<HTMLInputElement>;
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
  DatePickerRef: React.RefObject<HTMLInputElement>;
}

// DateInput 컴포넌트 만들기  - 기존 IcoInput 컴포넌트를 활용
const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ onClick, value, onChange, placeholder, disabled, DatePickerRef }, ref) => {
    const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
      const inputElem = e.target as HTMLInputElement;
      const cursorPosition = inputElem.selectionStart;

      if (cursorPosition !== null) {
        if (cursorPosition <= 4) {
          // 년도 선택
          inputElem.setSelectionRange(0, 4);
        } else if (cursorPosition <= 7) {
          // 월 선택
          inputElem.setSelectionRange(5, 7);
        } else {
          // 일 선택
          inputElem.setSelectionRange(8, 10);
        }
      }

      onClick(e);
    };

    return (
      <DateInputWrapper className={disabled ? 'disabled' : ''}>
        <input
          type="text"
          id="dateInput"
          onClick={handleInputClick}
          value={value}
          onChange={onChange}
          ref={DatePickerRef ?? ref}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete="off"
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
  DatePickerRef,
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
  const [showMonthYearPicker, setShowMonthYearPicker] = useState(false);
  const datePickerRef = useRef<any>(null);

  useEffect(() => {
    setSelectedDateState(selectedDate ? dayjs(selectedDate).toDate() : null);
    setShowMonthYearPicker(false);
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
      ref={datePickerRef}
      selected={selectedDateState}
      onChange={handleChange}
      customInput={
        // @ts-ignore - customInput 의 props 가 DateInput에게 전달되도록
        <DateInput disabled={disabled} DatePickerRef={DatePickerRef} />
      }
      dateFormat={dateFormat}
      minDate={minDate}
      maxDate={maxDate}
      renderCustomHeader={params =>
        CustomHeader({
          showMonthYearPicker,
          setShowMonthYearPicker,
          params,
          datePickerRef,
        })
      }
      dateFormatCalendar="yyyy년 MM월"
      placeholderText={placeholderText}
      locale={ko}
      showMonthYearPicker={showMonthYearPicker}
      showYearDropdown={showYearDropdown}
      showMonthDropdown={showMonthDropdown}
      disabled={disabled}
      open
      {...props}
    />
  );
};

export default DatePicker;
