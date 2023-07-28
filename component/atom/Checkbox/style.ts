import styled from '@emotion/styled';
// eslint-disable-next-line import/no-cycle
import { CheckBoxSize, sizes } from './CheckBox';

export const CheckBoxWrap = styled.input<{ chksize?: CheckBoxSize }>`
  width: ${props => sizes[props.chksize || 'md']};
  height: ${props => sizes[props.chksize || 'md']};
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 0.25em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;

  &:indeterminate {
    background-color: #0d6efd;
    border-color: #0d6efd;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
  }

  &:active {
    filter: brightness(90%);
  }

  &:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }

  &:checked {
    background-color: #0d6efd;
    border-color: #0d6efd;

    &[type='checkbox'] {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
    }

    &[type='radio'] {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
    }
  }

  &[type='radio'] {
    border-radius: 50%;
  }

  &:disabled {
    pointer-events: none;
    filter: none;
    opacity: 0.5;

    ~ .form-check-label {
      opacity: 0.5;
    }
  }
`;
