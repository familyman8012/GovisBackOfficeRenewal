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
    gap: 0 10rem;
    > h3 {
      flex: none;
      width: 100%;
      margin-bottom: 3.2rem;
      border-bottom: 1px solid var(--color-neutral90);
    }
  }

  .steps {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.4rem;
    gap: 0.4rem;
    background-color: #f7f7fa;
    border-radius: 0.8rem;
    border: 1px solid var(--color-neutral90);
    box-sizing: border-box;

    li {
      width: 14.3rem;
      height: 3.6rem;
      padding: 0.8rem 1.2rem;
      cursor: pointer;
      font-size: 1.4rem;
      border-radius: 0.6rem;
      font-weight: 500;
      color: var(--color-gray500);

      &.active {
        color: var(--color-neutral30);
        background: var(--color-gray1);
        border: 1px solid var(--color-neutral90);
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.1);
      }

      & + li {
        margin-top: 0.4rem;
      }
    }
  }

  .step-add {
    display: flex;
    width: 100%;
    background-color: #fff;
    border-radius: 0.6rem;
    border: 1px solid var(--color-neutral90);

    button {
      width: 100%;
    }
  }

  .right {
    flex: 1;
  }
`;

export const RecipeStepWrap = styled.div`
  h3 {
    padding-top: 0;
    font-weight: 600;
    font-size: var(--font-size4);
    border-bottom: 0;
    margin-bottom: 0;
  }

  table {
    width: 100%;
    text-align: left;
    table-layout: fixed;
    border: 1px solid var(--color-neutral90);
    border-spacing: 0;
    border-left: 0;
    border-right: 0;

    th,
    td {
      padding: 2rem;
      vertical-align: top;
      border: 1px solid var(--color-neutral90);
      border-right: 0;

      &:first-child {
        border-left: 0;
      }
    }

    th:first-child,
    td:first-child {
      border-left: 0;
    }
  }

  section + section {
    margin-top: 6.4rem;
  }
`;
