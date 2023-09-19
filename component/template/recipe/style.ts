import { css } from '@emotion/react';
import styled from '@emotion/styled';

const flexPositions = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
} as const;

export const ListHandlerStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3.2rem 0;
  gap: 1.6rem;

  .group {
    display: flex;
    flex-wrap: wrap;
    gap: 0 1.6rem;
  }

  .divider {
    flex: none;
    width: 100%;
    height: 0;
    margin: 0.8rem 0;
  }

  ${Object.entries(flexPositions).map(
    ([key, val]) => `&.justify-${key} { justify-content: ${val}; }`
  )}

  ${Object.entries(flexPositions).map(
    ([key, val]) => `&.align-${key} { align-items: ${val}; }`
  )}
`;

export const RegisterRecipeWrap = styled.div`
  h3 {
    font-weight: 700;
    padding: 3.2rem 0;
    margin: 0;
    font-size: var(--font-size6);
  }

  .recipe-title {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    border-bottom: 0;
    font-weight: 700;
  }

  .recipe-title-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      max-width: 30rem;
    }
  }

  .time-input {
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
  }

  .recipe-steps {
    display: flex;
    flex-wrap: wrap;

    > h3 {
      flex: none;
      width: 100%;
      border-bottom: 1px solid var(--color-neutral90);
    }

    .left {
      width: 28.4rem;
    }

    .right {
      flex: 1;
      width: calc(100% - 28.4rem);
    }
  }

  .steps {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #f7f7fa;
    border-right: 1px solid var(--color-neutral90);
    box-sizing: border-box;
    height: 100%;

    li {
      position: relative;
      padding: 2rem 1.2rem;
      cursor: pointer;
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--color-gray500);

      &.active {
        color: var(--color-blue);
        background: var(--color-gray1);
        border: 1px solid var(--color-neutral90);
        border-left: 0;
        border-right: 0;
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 100%;
          width: 1px;
          height: 100%;
          background: var(--color-gray1);
        }
      }

      & + li {
        margin-top: 0.4rem;
      }
    }
  }

  .step-add {
    display: flex;
    width: 100%;
    padding: 1.2rem;

    button {
      width: 100%;
      background-color: var(--color-gray1);
      border-radius: 0.6rem;
      border: 1px solid var(--color-neutral90);
    }
  }

  .right {
    flex: 1;
  }

  .steps ul {
    width: 100%;
  }
`;

export const RecipeStepWrap = styled.div`
  h3 {
    font-weight: 600;
    font-size: var(--font-size6);
    border-bottom: 0;
    padding: 0;
    margin-bottom: 2.8rem;
    line-height: 1.5;
  }

  label {
    width: auto;
  }

  .ingredient-buttons {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 1rem;
    background: var(--table-headerBackground);
    border-bottom: 1px solid var(--color-neutral90);
  }

  .ingredient-table-wrap {
    border: 1px solid var(--color-neutral90);

    svg {
      color: var(--color-red50);
      cursor: pointer;
    }

    .box_inp {
      display: flex;

      gap: 0 0.8rem;
    }

    .center {
      text-align: center;
    }

    td,
    th {
      border-top: 1px solid var(--color-neutral90);
    }

    thead th,
    thead td {
      text-align: left;
      border-top: 0;
    }
  }

  section + section {
    margin-top: 6.4rem;
    table,
    td,
    th {
      border-top: 0;
    }
  }

  .quill .ql-editor,
  .quill .ql-container {
    min-height: 30rem;
  }

  .recipe-desc {
    min-height: 30rem;
  }

  .computed-cost {
    font-weight: 400;
  }

  .ingredient-info {
    display: inline-flex;
    align-items: center;
    font-weight: 400;
    .img {
      width: 4rem;
      height: 4rem;
      margin-right: 2.8rem;
      border: 1px solid #f1f3f9;
      border-radius: 0.4rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .info {
      color: var(--color-neutral10);
      line-height: 1.5;
      span {
        color: var(--color-neutral50);
      }
    }
  }
`;

export const Alert = styled.p`
  display: flex;
  padding: 1rem 1.2rem;
  border-radius: 0.4rem;
  background: var(--color-gray2);
  align-items: center;
  margin-bottom: 6.4rem;

  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 0.4rem;
  }

  a,
  button {
    appearance: none;
    background: transparent;
    margin-left: 1.6rem;
    font-size: 1.4rem;
    line-height: 1.2;
    text-decoration-line: underline;
    color: var(--color-neutral50);
    cursor: pointer;
    padding: 0;
  }
`;

export const RecipeListWrap = styled.div`
  h3 {
    font-weight: 700;
    padding: 3.2rem 0;
    margin: 0;
    font-size: var(--font-size6);
    border-bottom: 1px solid var(--color-neutral90);
    display: flex;
    justify-content: space-between;
  }

  .empty-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.2;
    gap: 1.6rem;
    padding-top: 20rem;
  }

  .recipe-list {
    margin-top: 3.2rem;
    border-radius: 0.6rem;
    border: 1px solid var(--color-neutral90);
  }

  table td,
  table th {
    text-align: left;
    /* &:nth-of-type(1) {
      text-align: center;
    } */
  }

  table thead tr td,
  table thead tr th {
    text-align: left;
  }

  table tbody tr td,
  table tbody tr th {
    border-top: 1px solid var(--color-neutral90);
  }

  .recipe-title {
    color: var(--color-blue);
    text-decoration: underline;
  }

  .recipe-item-info {
    display: flex;
    align-items: center;

    input {
      margin: 1.5rem;
    }
    label {
      display: flex;
      .txt_box {
        display: none;
      }
    }
  }

  .recipe-item-action {
    display: flex;
    gap: 1.6rem;
    align-items: center;
    justify-content: space-between;
  }

  .recipe-item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid var(--color-neutral90);
    border-radius: 0.4rem;
  }

  .icon-btn {
    display: inline-flex;
    width: 3.2rem;
    height: 3.2rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--color-gray1);
    border: 1px solid var(--color-neutral90);
    cursor: pointer;
  }
`;

export const RecipeFormStyle = css`
  width: 100%;
  margin: 0;

  h3 {
    font-size: 1.8rem;
  }

  .image-wrap img {
    max-width: 22rem;
    object-fit: contain;
  }

  [class^='field'] {
    display: flex;

    label {
      margin-right: 3.2rem;
      color: var(--color-gray500);
      font-weight: 600;
      font-size: 1.4rem;
      max-width: 24rem;
    }

    p {
      flex: none;
      width: 100%;
    }
  }

  .line {
    display: flex;
    gap: 0 4%;
    margin-right: 4.6rem;
    justify-content: space-between;
  }

  .line1 {
    .field1,
    .group {
      flex: 1;
    }
  }

  .line2 {
    > * {
      flex: 1;
    }
  }

  .field1 {
    justify-content: space-between;
  }

  .field1,
  .field2,
  .field3 {
    .box_upload_image,
    .inp {
      flex: 1;
    }
  }

  .field3 {
    flex-wrap: nowrap;
  }

  .group {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2.4rem 0;
  }

  h4 {
    padding-bottom: 1rem;
    border-bottom: 1px solid #ddd;
  }
`;

export const RecipeSwitchStyle = styled.section`
  margin: 3.2rem 0;
  h3 {
    font-weight: 600;
    font-size: var(--font-size6);
    border-bottom: 0;
    padding: 0;
    margin-bottom: 2.8rem;
    line-height: 1.5;
  }

  .switch-wrap {
    display: flex;
    gap: 0.8rem;
    margin-bottom: 3.2rem;
    select {
      max-width: 37.2rem;
      border-radius: 0.4rem;
    }
    button {
      min-width: 0;
    }
  }
`;
