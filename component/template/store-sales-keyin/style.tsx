import styled from '@emotion/styled';
import { Table, TableWrap } from '@ComponentFarm/common';
import { MenuOptionGroupStyle } from '../menu/style';

export const SalesTableStyle = styled(Table)`
  display: inline-table;
  border-collapse: collapse;
  white-space: nowrap;

  .group-title {
    font-weight: bold;
    font-size: 1.4rem !important;
  }

  thead td:not(:first-of-type),
  thead th:not(:first-of-type) {
    border-left: 1px solid var(--color-neutral90);
    cursor: default;
  }

  td,
  th {
    background-color: #fff;
    cursor: default;
  }

  .pinned {
    z-index: 2;
    position: sticky;
    border-left: 0 !important;
  }

  &.has-scroll {
    /* .pinned-left-last + th,
    .pinned-left-last + td {
      border-left: 0 !important;
    } */

    .pinned-left-last::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: -1px;
      right: 0;
      width: 2.5rem;
      transform: translateX(100%);
      transition: box-shadow 0.3s;
      pointer-events: none;
      box-shadow: none;
    }

    .pinned-right-first::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: -1px;
      left: 0;
      width: 2.5rem;
      transform: translateX(-100%);
      transition: box-shadow 0.3s;
      pointer-events: none;
      /* box-shadow: inset -1rem 0 1.5rem -0.8rem rgba(0, 0, 0, 0.15); */
      box-shadow: none;
    }

    &.is-scroll-left .pinned-left-last::after {
      box-shadow: inset 1rem 0 1.5rem -0.8rem rgba(0, 0, 0, 0.15);
    }

    &.is-scroll-right .pinned-right-first::after {
      box-shadow: inset -1rem 0 1.5rem -0.8rem rgba(0, 0, 0, 0.15);
    }
  }

  tfoot td {
    font-weight: 500;
    font-size: 1.1em;
  }
`;

export const SalesDataFormStyle = styled.form`
  .inline_box {
    flex: none !important;
    display: inline-flex !important;
    width: auto !important;
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  .inline_box p {
    width: auto;
  }

  .react-datepicker-wrapper {
    height: auto;
  }
`;

export const SalesTableWrap = styled(TableWrap)`
  width: 100% !important;
  overflow-x: auto;
`;

export const SalesDataDailyItemStyle = styled(MenuOptionGroupStyle)`
  .react-datepicker__input-container {
    width: 100%;
    height: 100%;
    border: 0 !important;
  }

  .save-button {
    white-space: nowrap;
  }
`;
