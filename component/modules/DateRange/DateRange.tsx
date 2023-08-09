import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import ko from 'date-fns/locale/ko';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCalendar } from 'react-icons/fi';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { IcoInput } from '@ComponentFarm/atom/IcoInput/IcoInput';

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
  const [isResetVisible, setIsResetVisible] = useState(false);
  const refEndDate = useRef<HTMLInputElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const validateDate = (dateStr: string) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateStr)) {
      return false;
    }

    const [year, month, day] = dateStr.split('-').map(Number);
    if (year < 2000) {
      return false;
    }

    const date = new Date(year, month - 1, day);

    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  };

  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dateStr = e.target.value;
    setStartDateInput(dateStr);
    if (validateDate(dateStr)) {
      const date = new Date(dateStr);
      setDateRange((prev): DateRange => {
        const update: DateRange = [date, prev[1]];
        onDateRangeChange(update);
        return update;
      });
    }
  };

  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dateStr = e.target.value;
    setEndDateInput(dateStr);
    if (validateDate(dateStr)) {
      const date = new Date(dateStr);
      if (dateRange[0] && date < dateRange[0]) {
        return;
      }
      setDateRange((prev): DateRange => {
        const update: DateRange = [prev[0], date];
        onDateRangeChange(update);
        return update;
      });
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
      refEndDate.current?.blur();
    }
  };

  const handleFocus = () => {
    setOpen(true);
    setIsResetVisible(true);
  };

  const onChange = (update: DateRange) => {
    setDateRange(update);
    if (update[0]) {
      setStartDateInput(update[0].toISOString().split('T')[0]);
    }
    if (update[1]) {
      setEndDateInput(update[1].toISOString().split('T')[0]);
      setOpen(false);
    }
    onDateRangeChange(update);
  };

  const onClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
      setIsResetVisible(false);
    }
  };

  const handleResetClick = () => {
    setDateRange([null, null]);
    setStartDateInput('');
    setEndDateInput('');
    setIsResetVisible(false);
    onDateRangeChange([null, null]);
    setOpen(false);
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
        <IcoInput
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
          {!!startDateInput && !!endDateInput && isResetVisible && (
            <Button type="button" variant="primary" onClick={handleResetClick}>
              리셋
            </Button>
          )}
        </div>
      </div>
      {open && (
        <DatePicker
          selected={dateRange[0]}
          startDate={dateRange[0]}
          endDate={dateRange[1]}
          minDate={dateRange[0]}
          onChange={onChange}
          selectsRange
          inline
          locale={ko}
        />
      )}
    </div>
  );
};

export default DateRangePicker;
