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
import styled from '@emotion/styled';
import { IcoInput } from '@ComponentFarm/atom/IcoInput/IcoInput';
import dayjs from 'dayjs';

const DateRangeWrap = styled.div`
  width: fit-content;
  .box_daterange_input {
    width: 20.5rem;
  }

  .react-datepicker {
    box-shadow: none;
  }

  &:has(.react-datepicker__month-dropdown),
  &:has(.react-datepicker__year-dropdown) {
    .react-datepicker__month-container:last-of-type,
    .react-datepicker__year-container:last-of-type {
      display: none;
    }
    .react-datepicker__navigation {
      display: none;
    }

    .react-datepicker__month {
      visibility: hidden;
    }

    .react-datepicker__year-option {
      &:first-of-type,
      &:last-of-type {
        display: none;
      }
    }

    .react-datepicker__header {
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4rem;
        z-index: 100;
      }
    }

    .react-datepicker__year {
      display: none;
    }

    .react-datepicker__year-read-view--down-arrow {
      display: none;
    }

    .react-datepicker__year-dropdown-container,
    .react-datepicker__month-dropdown-container {
      margin: 0;
    }
    .react-datepicker__year-dropdown-container {
      margin-right: 5px;
    }
  }
  &:has(.react-datepicker__year-dropdown) {
    .react-datepicker__month-read-view--selected-month {
      display: none;
      &:first-of-type {
        margin: 0;
      }
    }
    .react-datepicker__year-dropdown-container {
      margin-right: 0;
    }
  }

  .react-datepicker__year-option:has(
      .react-datepicker__navigation--years-upcoming
    ) {
    position: absolute !important;
    left: 15.3rem !important;
    top: -10.2rem !important;
  }

  .react-datepicker__header__dropdown {
    display: flex;
    justify-content: center;
    width: 100%;

    .react-datepicker__year-dropdown-container {
      order: 1;

      .react-datepicker__year-read-view--selected-year {
        &:after {
          content: '년';
        }
      }
    }
    .react-datepicker__month-dropdown-container {
      order: 2;
    }
  }
  .react-datepicker__month-container:not(:last-of-type) {
    .react-datepicker__current-month {
      display: none;
    }
    .react-datepicker__month-read-view,
    .react-datepicker__year-read-view {
      display: flex;

      align-items: center;

      justify-content: center;
      font-weight: 800;
      font-size: var(--font-size4);
      height: 2.4rem;
      line-height: 1.5;
      color: var(--color-neutral10);
    }

    .react-datepicker__month-read-view--selected-month,
    .react-datepicker__year-read-view--selected-year {
      visibility: visible;
    }

    .react-datepicker__month-read-view--down-arrow,
    .react-datepicker__year-read-view--down-arrow {
      visibility: visible;
      margin-top: 0.5rem;
      border-color: var(--color-neutral10);
    }

    .react-datepicker__month-dropdown,
    .react-datepicker__year-dropdown {
      position: absolute;
      display: grid;
      left: 0;
      top: 5rem;
      z-index: 10;
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      height: 24.8rem;
      background: #fff;
      border: navajowhite;

      .react-datepicker__month-option,
      .react-datepicker__year-option {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 3.6rem;
        margin: 0.4rem 0.7rem 0.4rem 0.6rem;
        font-size: 1.4rem;
        z-index: 1;
        cursor: pointer;
        border-radius: 2.1rem !important;
        font-weight: 400;

        &:hover {
          background-color: var(--color-neutral95) !important;
          color: var(--color-neutral10) !important;
        }

        &.react-datepicker__month-option--selected_month,
        &.react-datepicker__year-option--selected_year {
          .react-datepicker__month-option--selected,
          .react-datepicker__year-option--selected {
            display: none;
          }
          background-color: var(--color-blue60) !important;
          color: #fff !important;
        }
      }
    }
  }
`;

const DateRageBox = styled.div`
  margin-top: 0.4rem;
  padding: 2rem;
  border: 1px solid var(--color-neutral90);
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 40, 0.05);
  background: #fff;
  .area_calendar {
    display: flex;
    .box_btn {
      display: flex;
      flex-direction: column;
      margin-left: 2.1rem;

      button {
        display: flex;
        width: 12.3rem;
        height: 4.4rem;
        margin-bottom: 0.4rem;
        padding: 1.2rem 1.6rem;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        cursor: pointer;
        background: #fafbfc;

        &:hover {
          background: #eee;
        }
      }
    }
  }

  .area_direct_input {
    display: flex;
    dl {
      dt {
        color: var(--color-blue-gray50);
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.44rem;
      }
      dd {
        margin-top: 1.1rem;
        input {
          display: flex;
          width: 13rem;
          height: 4rem;
          padding: 1rem 1.6rem;
          align-items: center;
        }
      }
    }
    .bar {
      margin: 3.6rem 1.2rem 0;
      color: var(--color-blue-gray50);
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.68rem;
    }
  }
`;

export type DateRangeType = [Date | null, Date | null];

interface DateRangePickerProps {
  onDateRangeChange: (update: DateRangeType) => void;
  initialDateRange?: DateRangeType;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onDateRangeChange,
  initialDateRange = [null, null],
}) => {
  const [dateRange, setDateRange] = useState<DateRangeType>(initialDateRange);
  const [startDateInput, setStartDateInput] = useState('');
  const [endDateInput, setEndDateInput] = useState('');
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
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

    const date = new Date(Date.UTC(year, month - 1, day));

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
      setDateRange((prev): DateRangeType => {
        const update: DateRangeType = [date, prev[1]];
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
      setDateRange((prev): DateRangeType => {
        const update: DateRangeType = [prev[0], date];
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

  const onChange = (update: DateRangeType) => {
    const formattedUpdate: DateRangeType = [
      update[0] ? dayjs(update[0]).toDate() : null,
      update[1] ? dayjs(update[1]).toDate() : null,
    ];
    setDateRange(formattedUpdate);
    if (formattedUpdate[0]) {
      setStartDateInput(dayjs(formattedUpdate[0]).format('YYYY-MM-DD'));
    }
    if (formattedUpdate[1]) {
      setEndDateInput(dayjs(formattedUpdate[1]).format('YYYY-MM-DD'));
      setOpen(false);
    }
    onDateRangeChange(formattedUpdate);
  };
  const onClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
      setIsResetVisible(false);
    }
  };

  // const handleResetClick = () => {
  //   setDateRange([null, null]);
  //   setStartDateInput('');
  //   setEndDateInput('');
  //   setIsResetVisible(false);
  //   onDateRangeChange([null, null]);
  //   // setOpen(false);
  // };

  useEffect(() => {
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  const setDateRangeAndUpdateInputs = (range: DateRangeType) => {
    setDateRange(range);
    setStartDateInput(range[0]?.toISOString().split('T')[0] || '');
    setEndDateInput(range[1]?.toISOString().split('T')[0] || '');
    onDateRangeChange(range);
  };

  const setRangeSetting = (type: number) => {
    const today = new Date();
    const specificDaysAgo = new Date();
    if (type === 1) {
      setDateRangeAndUpdateInputs([today, today]);
    }
    if (type !== 1) {
      specificDaysAgo.setDate(today.getDate() - (type - 1));
      setDateRangeAndUpdateInputs([specificDaysAgo, today]);
    }
  };

  return (
    <DateRangeWrap>
      <div className="box_daterange_input">
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
      </div>
      {open && (
        <DateRageBox>
          <div className="area_calendar">
            <div className="box_calendar">
              <DatePicker
                selected={dateRange[0]}
                startDate={dateRange[0]}
                endDate={dateRange[1]}
                // minDate={dateRange[0]}
                onChange={onChange}
                selectsRange
                inline
                monthsShown={2}
                locale={ko}
                showYearDropdown
                showMonthDropdown
                yearDropdownItemNumber={8}
                dateFormatCalendar="yyyy년 MM월"
              />
            </div>
            <div className="box_btn">
              <button type="button" onClick={() => setRangeSetting(1)}>
                오늘
              </button>
              <button type="button" onClick={() => setRangeSetting(7)}>
                최근 7일
              </button>
              <button type="button" onClick={() => setRangeSetting(30)}>
                최근 30일
              </button>
            </div>
          </div>
          <div className="area_direct_input">
            <dl>
              <dt>시작일</dt>
              <dd>
                <input
                  type="text"
                  id="startDate"
                  className="inp"
                  // placeholder="시작일"
                  value={startDateInput}
                  onChange={handleStartDateChange}
                  onKeyDown={handleStartDateKeyDown}
                  onFocus={handleFocus}
                />
              </dd>
            </dl>
            <span className="bar">-</span>
            <dl>
              <dt>종료일</dt>
              <dd>
                <input
                  type="text"
                  id="endDate"
                  className="inp"
                  // placeholder="종료일"
                  value={endDateInput}
                  onChange={handleEndDateChange}
                  onKeyDown={handleEndDateKeyDown}
                  onFocus={handleFocus}
                  disabled={!validateDate(startDateInput)}
                  ref={refEndDate}
                />
              </dd>
            </dl>

            {/* <Button type="button" variant="primary" onClick={handleResetClick}>
              리셋
            </Button> */}
          </div>
        </DateRageBox>
      )}
    </DateRangeWrap>
  );
};

export default DateRangePicker;
