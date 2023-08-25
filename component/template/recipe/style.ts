import styled from '@emotion/styled';
import { FormWrap } from '@ComponentFarm/common';

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

export const RecipeStepWrap = styled(FormWrap)`
  padding: 3.2rem;

  h3 {
    padding-top: 0;
    font-weight: 600;
    font-size: var(--font-size4);
    border-bottom: 0;
    margin-bottom: 0;
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

  .guide-text {
    margin-left: 1.6rem;
    color: var(--color-neutral50);
    font-weight: 500;
  }

  .ingredient-remove {
    margin: 3.2rem 0;
  }

  section + section {
    margin-top: 6.4rem;
    table,
    td,
    th {
      border-top: 0;
    }
  }

  section:nth-of-type(2) h3 {
    border-bottom: 1px solid var(--color-neutral90);
  }

  section:last-child table {
    text-align: center;

    table,
    td,
    th {
      text-align: center;
      border-top: 0;
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
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-top: 3.2rem;
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
    align-items: center;
    gap: 1.6rem;
  }

  .recipe-item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid var(--color-neutral90);
    border-radius: 0.4rem;
  }
`;
