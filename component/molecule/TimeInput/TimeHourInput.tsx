import React, { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import styled from '@emotion/styled';
import useSyncedRef from '@HookFarm/useSyncedRef';

const TimeInputStyle = styled.div`
  display: inline-flex;
  align-items: center;

  input {
    width: 10rem;
  }

  span {
    margin-left: 1.6rem;
    &:not(:last-child) {
      margin-right: 3.2rem;
    }
  }
`;

interface Props {
  value: string | number;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const TimeHourInput = React.forwardRef<HTMLInputElement, Props>(
  ({ value, disabled, onChange }, ref) => {
    const refs = useSyncedRef<HTMLInputElement>(ref);
    const [minute, setMinute] = useState('0');
    const [hour, setHour] = useState('0');

    const numberedValue = useMemo(() => {
      const numberValue = parseInt(`${value}`, 10);

      if (Number.isNaN(numberValue)) {
        const date = dayjs(value);
      }

      parseInt(`${value}`, 10);
    }, [value]);

    // const handleCalcurateTime = useCallback(() => {
    //   const minNumber = !min ? 0 : parseInt(min, 10);
    //   const secNumber = !sec ? 0 : parseInt(sec, 10);
    //   onChange(`${minNumber * 60 + secNumber}`);
    // }, [min, sec]);

    // // value changed set min, sec input state value
    // useEffect(() => {
    //   const numberValue = parseInt(`${value}`, 10);
    //   const date = dayjs(value);
    //   if (Number.isNaN(numberedValue)) {
    //     // setHour(`${date.isValid() date.hour() : 0}`);
    //     // setMinute(date?.minute() ?? 0);
    //   } else {
    //     setMin(`${Math.floor(numberedValue / 60)}`);
    //     setSec(`${numberedValue % 60}`);
    //   }
    // }, [numberedValue]);

    const getRangedValue = (str: string, min: number, max: number) => {
      const numberValue = parseInt(str, 10);
      if (Number.isNaN(numberValue)) {
        return min?.toString();
      }
      return Math.max(Math.min(numberValue, max), min).toString();
    };

    return (
      <TimeInputStyle>
        <input
          ref={refs}
          disabled={disabled}
          className="inp"
          value={hour}
          placeholder="예: 03"
          inputMode="numeric"
          min={0}
          max={23}
          type="text"
          maxLength={2}
          onChange={e =>
            setHour(
              getRangedValue(e.target.value?.replace(/[^0-9]/g, ''), 0, 23)
            )
          }
        />
        <span>시간</span>
        <input
          className="inp"
          type="text"
          disabled={disabled}
          placeholder="예: 45"
          inputMode="numeric"
          min={0}
          max={59}
          value={minute}
          maxLength={2}
          onChange={e =>
            setMinute(
              getRangedValue(e.target.value?.replace(/[^0-9]/g, ''), 0, 59)
            )
          }
        />
        <span>분</span>
      </TimeInputStyle>
    );
  }
);

TimeHourInput.displayName = 'TimeHourInput';

export default TimeHourInput;
