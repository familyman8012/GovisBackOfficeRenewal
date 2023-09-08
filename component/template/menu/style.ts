import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Modal from '@ComponentFarm/modules/Modal/Modal';
import { Button } from '@ComponentFarm/token';

export const CategoryRegisterModalStyle = styled(Modal)``;

export const MenuOptionListStyle = styled.section`
  border-radius: 0.4rem;
  h2 {
    margin-bottom: 0;
  }
  .wrap {
    border-radius: 0.4rem;
    min-height: 46.6rem;
    border: 1px solid var(--color-neutral90);
    display: flex;
    flex-direction: row;
    align-items: stretch;

    > .view {
      flex: 1;
      padding: 3.2rem;
    }
  }
  .side {
    flex: none;
    min-width: 30rem;
    width: 22.6%;
    padding: 1.6rem;
    border-right: 1px solid var(--color-neutral90);
    max-height: 50rem;
    overflow-y: auto;

    > button {
      width: 100%;
      margin-bottom: 1.6rem;
    }
  }

  .list {
    border-bottom: 1px solid var(--color-neutral90);
    padding-bottom: 1.2rem;
  }
`;

export const MenuOptionGroupStyle = styled.div`
  .header {
    display: flex;
    align-items: center;
    margin: 0 -1.6rem;
    padding: 0 1.6rem;

    .title {
      flex: 1;
      display: inline-flex;
      font-size: 1.6rem;
      line-height: 1.1;
      width: 100%;
      font-weight: 600;
      color: var(--color-neutral50);
      padding: 1.2rem 0;

      &:empty {
        height: calc(1.6rem * 1.1);
        box-sizing: content-box;
      }
    }

    input {
      flex: 1;
      margin: 0.6rem 0;
      height: 3rem;
      border-radius: 0.2rem;
    }

    .icon-btn {
      display: inline-flex;
      width: 1.6rem;
      height: 1.6rem;
      align-items: center;
      justify-content: center;
      background: transparent;
      margin-left: 0.8rem;
      cursor: pointer;
    }

    &:hover,
    &:active {
      background-color: var(--color-gray4);
    }
  }

  .dropdown {
    position: relative;
    display: inline-flex;

    .dropdown-list {
      position: absolute;
      top: calc(100% + 0.4rem);
      left: -1.5rem;
      display: flex;
      flex-direction: column;
      width: 9rem;
      padding: 0.6rem 0;
      border-radius: 0.4rem;
      border: 1px solid var(--color-neutral90);
      background: var(--color-gray1);
      color: var(--color-neutral10);

      button {
        font-size: 1.4rem;
        line-height: 1.2;
        padding: 0.8rem 1.2rem;
        cursor: pointer;
        background: transparent;
        appearance: none;
        text-align: left;

        &:hover,
        &:active {
          background: var(--color-gray2);
        }
      }
    }
  }

  .option {
    display: flex;
    padding: 1rem 1.6rem;
    font-weight: 400;
    font-size: 1.6rem;
    border-radius: 0.4rem;
    background-color: transparent;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;

    &.active {
      background-color: ${Button.ghostPrimaryHoverBg};
      color: var(--color-blue);
      font-weight: 600;
    }

    &.invalid {
      color: var(--color-red50);
      /* border: 1px solid var(--color-red50); */
    }
  }

  > .content button {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const MenuOptionDetailStyle = styled.div`
  .header {
    margin-bottom: 12px;
    input {
      border-radius: 0.4rem;
      max-width: 74.6rem;
    }
  }
`;

export const FormStyle = css`
  h2 {
    border: 0;

    &:nth-of-type(2) {
      border-bottom: 1px solid var(--color-neutral90);
    }
  }

  .field1 {
    display: inline-flex;
    gap: 0.8rem;
    width: 52rem;

    select {
      width: 21%;
      min-width: 15rem;
    }

    input {
      width: 100%;
      flex: 1;
      margin-left: 0.8rem;
    }

    .box_inp {
      flex: none;
      width: 52rem;
    }
  }

  .field3 select {
    width: 32.6rem;
  }

  .field4 input {
    width: 32.6rem;
  }

  [class^='line'] {
    margin-bottom: 3.2rem;
  }

  [class^='field'] {
    display: inline-flex;
    gap: 0.8rem;
    width: 100%;
  }

  .box_inp {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    p {
      width: 100%;
    }
  }

  .price {
    input {
      margin: 0 0.8rem;
      width: 13.5rem;
    }

    span {
      font-weight: normal;
      color: var(--color-neutral10);
    }

    & + .price {
      margin-left: 5%;
    }
  }
`;
