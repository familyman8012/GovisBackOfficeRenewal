import styled from '@emotion/styled';
import { TableWrap } from '@ComponentFarm/common';

export const SearchBox = styled.form<{ width?: number }>`
  position: relative;
  z-index: 100;
  width: ${props => `${`${Number(props.width) / 10}rem`}`};
  border-radius: 4px;
  border: 1px solid var(--color-neutral90);

  &.pop_store {
    th {
      width: 13.5rem;
    }
  }

  &.menuPopup {
    .wrap_input {
      > div {
        flex: 1;
      }
    }
  }

  table {
    width: 100%;
    text-align: left;

    th {
      width: 10rem;
      padding: 0 2rem;
      font-weight: normal;
      border-right: 1px solid var(--color-blue_gray20);
      background: var(--color-blue_gray10);
    }
    th,
    td {
      height: 6.5rem;
      border-bottom: 1px solid var(--color-blue_gray20);
    }

    td {
      padding: 0 1rem;
      .wrap_input {
        display: flex;
        gap: 0.8rem;
      }
      .box_searchkeyword,
      .box_searchkeyword .inp {
        width: 100%;
      }
    }

    tr:last-of-type {
      th,
      td {
        border-bottom: none;
      }
    }
  }
`;

export const SearchResult = styled.form<{ width: number; col?: number[] }>`
  width: ${props => `${`${props.width / 10}rem`}`};
  margin-top: 1.5rem;
  border: 1px solid var(--color-neutral90);
  border-radius: 0.6rem;

  ${TableWrap} {
    border: none;
    display: block;
    width: 100%;
  }

  tabel {
    width: 100%;
    table-layout: fixed;
  }

  thead th {
    position: sticky;
    top: 0; /* 상단에 고정 */
    background: white; /* 배경색 설정 */
    z-index: 10; /* 다른 요소들 위에 위치하도록 z-index 설정 */
  }

  thead th,
  tbody td {
    boder: 1px solid;
  }

  tbody {
    display: block;
    width: ${props => `${`${props.width / 10}rem`}`};
    height: 300px; /* 원하는 높이 설정 */
    overflow-y: auto; /* 스크롤 가능하게 설정 */

    tr {
      display: flex;
      td {
        display: flex;
        align-items: center;
      }
    }
  }

  thead tr:first-of-type th {
    background: #fff;
  }

  td {
    ${props =>
      props.col
        ?.map(
          (colWidth, index) =>
            `&:nth-of-type(${index + 1})  { width: ${`${Math.round(
              (colWidth / props.width) * 100
            )}%`} }`
        )
        .join('')}
  }

  th,
  td {
    width: fit-content;
    .txt_box {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
      *visibility: hidden;
    }
  }

  tbody td {
    height: 6.4rem;

    label {
      margin-bottom: 0;
    }

    input[type='radio'] {
      margin: 0;
    }
  }
`;
