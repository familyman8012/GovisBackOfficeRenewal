import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const datepickerGlobalStyle = css`
  .reactdatepicker {
    border-radius: 0.4rem;
    box-shadow: 0px 2px 4px rgba(58, 58, 58, 0.2);
    border: 0;
    color: #333;
    background: #fff;
    font: inherit;
  }

  & > div:not(.react-datepicker__tab-loop) {
    width: 100%;
  }

  .react-datepicker__month-container {
    max-width: 270px;
  }

  .react-datepicker__month-container + .react-datepicker__month-container {
    border-left: 1px solid #828282;
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__month-container,
  .react-datepicker__header {
    border-radius: inherit;
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    display: flex;
    flex-wrap: nowrap;
  }

  .react-datepicker__input-container,
  .react-datepicker-wrapper {
    height: 100%;
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    width: 0.7rem;
    height: 0.7rem;
    border-width: 1px 1px 0 0;
  }

  .react-datepicker__navigation {
    height: 4rem;
    width: 4rem;
    top: 0;
    position: absolute;
  }

  .react-datepicker__portal {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .react-datepicker__header {
    padding: 0;
    border-bottom: 0;

    .react-datepicker__day-names {
      padding: 0;
    }
  }

  .react-datepicker__day--outside-month {
    color: #828282;
  }

  .react-datepicker__day {
    border-radius: 50%;

    &--disabled {
      cursor: not-allowed;
    }

    &:not(.react-datepicker__day--disabled) {
      &:active,
      &:focus,
      &:hover {
        background: #f2f2f2;
        color: #000;
      }
    }
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 2.8rem;
    height: 2.8rem;
    margin: 0.6rem 0.3rem;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }

  .react-datepicker__day--today,
  .react-datepicker__month-text--today,
  .react-datepicker__quarter-text--today,
  .react-datepicker__year-text--today {
    font-weight: normal;
  }

  .react-datepicker__day--outside-month {
    background: transparent !important;
    pointer-events: none !important;
    color: transparent !important;
  }

  .react-datepicker__current-month {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 16px;
    padding: 14px 8px 12px;
    height: 39px;
  }

  .react-datepicker__day-names {
    border-top: 1px solid #828282;
    margin-bottom: 0;
  }

  .react-datepicker__navigation-icon--next {
    right: 0;
    top: -4px;
    &::before {
      left: -4px;
    }
  }
  .react-datepicker__navigation-icon--previous {
    left: 0;
    top: -4px;
    &:before {
      right: -4px;
    }
  }

  .react-datepicker__header {
    background: #fff;
  }

  svg:not(.gv-button) {
    position: absolute;
    width: 18px;
    height: 18px;
    right: 10px;
    top: 10px;
    color: #828282;
    pointer-events: none;
  }

  &__none-editable {
    width: 100%;
    min-height: 39px;
    background: transparent;
    border: 0;
  }

  // hide
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::after,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after {
    content: none;
  }

  .react-datepicker-popper[data-placement^='bottom'] {
    padding-top: 15px;
  }

  .react-datepicker__time-list-item--selected {
    background-color: blue;
    color: #fff;
  }

  .react-datepicker-popper {
    z-index: 4;
  }

  .react-datepicker__day-names {
    font-family: 'Noto Sans KR', 'Montserrat' !important;
  }

  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month--in-range {
    background-color: rgba(0, 0, 0, 0.5);
    color: #000;
    border-radius: 50%;
    &:active,
    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--range-start,
  .react-datepicker__day--range-end,
  .react-datepicker__month--selected,
  .react-datepicker__month--range-start,
  .react-datepicker__month--range-end {
    background-color: blue;
    color: #fff;
    border-radius: 50%;

    &:active,
    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.75);
    }
  }

  .react-datepicker__day--selected {
    &.react-datepicker__day--outside-month {
      background: transparent !important;
    }
  }

  .react-datepicker__day--keyboard-selected {
    background: blue;
    color: #fff;

    &:active,
    &:focus {
      background-color: rgba(0, 0, 0, 0.75);
    }

    &.react-datepicker__day--outside-month {
      background: transparent !important;
    }
  }

  .react-datepicker__navigation-icon {
    font-size: 12px;
    color: #000;

    &::before {
      border-color: #000;
    }
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after {
    border-bottom-color: #fff;
  }
`;

export const DateWrapper = styled.div``;

export const DateInputWrapper = styled.div`
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
