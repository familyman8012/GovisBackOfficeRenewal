import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCalendar } from 'react-icons/fi';
import { TextInput } from '@ComponentFarm/atom/TextInput/TextInput';

export type DateRange = [Date | null, Date | null];

interface DateRangePickerProps {
  onDateRangeChange: (update: DateRange) => void;
  initialDateRange?: DateRange;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onDateRangeChange,
  initialDateRange = [null, null],
}) => {
  const [dateRange, setDateRange] = useState<DateRange>(initialDateRange);
  const [startDateInput, setStartDateInput] = useState('');
  const [endDateInput, setEndDateInput] = useState('');
  const [open, setOpen] = useState(false);
  const refEndDate = useRef<HTMLInputElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const validateDate = (dateStr: string) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateStr);
  };

  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dateStr = e.target.value;
    setStartDateInput(dateStr);
    if (validateDate(dateStr)) {
      const date = new Date(dateStr);
      setDateRange([date, dateRange[1]]);
    }
  };

  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dateStr = e.target.value;
    setEndDateInput(dateStr);
    if (validateDate(dateStr)) {
      const date = new Date(dateStr);
      setDateRange([dateRange[0], date]);
    }
  };

  const handleStartDateKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && validateDate(startDateInput)) {
      refEndDate.current?.focus();
    }
  };

  const handleEndDateKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && validateDate(endDateInput)) {
      setOpen(false);
    }
  };

  const handleFocus = () => {
    setOpen(true);
  };

  const onChange = (update: DateRange) => {
    setDateRange(update);
    if (update[1]) {
      setOpen(false);
    }
    onDateRangeChange(update);
  };

  const onClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="wrap_datepicker">
      <div style={{ width: '200px' }}>
        <TextInput
          type="text"
          value={
            startDateInput && endDateInput
              ? `${startDateInput} - ${endDateInput}`
              : ''
          }
          placeholder="Select a date range"
          onClick={() => setOpen(!open)}
          TrailingIcon={<FiCalendar />}
          readOnly
        />
        <div>
          <input
            type="text"
            id="startDate"
            placeholder="시작일"
            value={startDateInput}
            onChange={handleStartDateChange}
            onKeyDown={handleStartDateKeyDown}
            onFocus={handleFocus}
          />
          <input
            type="text"
            id="endDate"
            placeholder="종료일"
            value={endDateInput}
            onChange={handleEndDateChange}
            onKeyDown={handleEndDateKeyDown}
            onFocus={handleFocus}
            disabled={!validateDate(startDateInput)}
            ref={refEndDate}
          />
        </div>
      </div>
      {open && (
        <DatePicker
          selected={dateRange[0]}
          startDate={dateRange[0]}
          endDate={dateRange[1]}
          onChange={onChange}
          selectsRange
          monthsShown={2}
          inline
        />
      )}
    </div>
  );
};

export default DateRangePicker;
