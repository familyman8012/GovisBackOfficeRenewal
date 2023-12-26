import styled from '@emotion/styled';

export const FilterTable = styled.table`
  width: 100%;
  background-color: var(--color-gray1);

  th,
  td {
    border: 1px solid var(--color-gray6);
  }

  th {
    width: fit-content;
    padding: 1.95rem 2rem 1.95rem 0;
    color: var(--color-neutral50);
    font-size: 1.4rem;
    font-weight: 700;
    border-left: none;
    text-align: right;
    background: var(--color-gray2);
  }

  td {
    border-right: 0;

    .inner {
      display: flex;
      align-items: center;
      padding: 0.8rem 1rem;
      border-right: none;

      button {
        min-width: auto;
        margin-right: 1.6rem;
      }

      .btn_box {
        display: flex;
        align-items: center;
      }

      .list_select_item {
        display: flex;
        gap: 1rem;
      }

      .select_box {
        display: flex;
        align-items: center;
        gap: 0 1.6rem;

        & + .btn_reset {
          margin-left: 1.6rem;
        }
      }
    }
  }
`;

export const FilterTableBtnBox = styled.div`
  display: flex;
  width: fit-content;
  margin: 3.6rem auto;

  button {
    width: 12.3rem;
    &:first-of-type {
      margin-right: 1.6rem;
    }
  }
`;
