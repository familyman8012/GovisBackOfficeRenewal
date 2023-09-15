import React, { useCallback, useEffect, useMemo, useState } from 'react';
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

/**
 * min, sec을 입력받아 time second string으로 변환 어떤 텍스트를 입력해도 숫자만 입력되도록 해야하고 min, sec을 입력받아 time second string으로 변환해서 onChange로 넘겨줘야함
 */

interface Props {
  value: string | number;
  onChange: (value: string) => void;
}

const TimeSecondInput = React.forwardRef<HTMLInputElement, Props>(
  ({ value, onChange }, ref) => {
    const refs = useSyncedRef<HTMLInputElement>(ref);
    const [min, setMin] = useState('');
    const [sec, setSec] = useState('');
    const numberedValue = useMemo(() => parseInt(`${value}`, 10), [value]);

    const handleCalcurateTime = useCallback(() => {
      const minNumber = !min ? 0 : parseInt(min, 10);
      const secNumber = !sec ? 0 : parseInt(sec, 10);
      onChange(`${minNumber * 60 + secNumber}`);
    }, [min, sec]);

    // value changed set min, sec input state value
    useEffect(() => {
      if (Number.isNaN(numberedValue)) {
        setMin(`0`);
        setSec(`0`);
      } else {
        setMin(`${Math.floor(numberedValue / 60)}`);
        setSec(`${numberedValue % 60}`);
      }
    }, [numberedValue]);

    useEffect(() => handleCalcurateTime(), [min, sec]);

    return (
      <TimeInputStyle>
        <input
          ref={refs}
          className="inp"
          value={min}
          placeholder="예: 03"
          inputMode="numeric"
          min={0}
          max={59}
          type="text"
          maxLength={2}
          onChange={e => {
            setMin(e.target.value?.replace(/[^0-9]/g, ''));
          }}
        />
        <span>분</span>
        <input
          className="inp"
          type="text"
          placeholder="예: 45"
          inputMode="numeric"
          min={0}
          max={59}
          value={sec}
          maxLength={2}
          onChange={e => {
            setSec(e.target.value?.replace(/[^0-9]/g, ''));
          }}
        />
        <span>초</span>
      </TimeInputStyle>
    );
  }
);

TimeSecondInput.displayName = 'TimeSecondInput';

export default TimeSecondInput;
