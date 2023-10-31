import styled from '@emotion/styled';

export const SearchBox = styled.form`
  width: 64.6rem;
  padding: 2rem;
  border-radius: 4px;
  border: 1px solid var(--color-neutral90);
  background: rgba(247, 249, 252, 0.8);

  h3 {
    margin: 2rem 0 1.1rem;
    color: #687182;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 110%;

    &:first-of-type {
      margin-top: 0;
    }
  }
  select {
    display: block;
  }
`;

export const SearchResult = styled.form`
  width: 64.6rem;
  margin-top: 1.5rem;

  thead tr:first-of-type th {
    background: #fff;
  }

  th:first-of-type {
    width: calc((46 / 694) * 100%);
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
