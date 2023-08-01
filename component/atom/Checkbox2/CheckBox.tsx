import React from 'react';
// eslint-disable-next-line import/no-cycle
import { CheckBoxWrap } from './style';

export type CheckBoxSize = 'sm' | 'md' | 'lg';

export const sizes = {
  sm: '0.7rem', // 0.5rem
  md: '1.4rem', // 1rem
  lg: '2.8rem', // 2rem
};

interface CheckBoxProps {
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  chksize?: CheckBoxSize;
  readOnly?: boolean;
  disabled?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  value,
  checked,
  onChange,
  chksize = 'md',
  readOnly,
  disabled,
}) => {
  return (
    <CheckBoxWrap
      type="checkbox"
      value={value}
      checked={checked}
      onChange={onChange}
      chksize={chksize}
      readOnly={readOnly}
      disabled={disabled}
    />
  );
};

export default CheckBox;
