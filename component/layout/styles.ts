import styled from '@emotion/styled';

export const LayoutWrap = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftMenuWrap = styled.div`
  display: flex;
`;

export const Depth1 = styled.div`
  width: 9.2rem;
  height: 100%;
  padding: 3.2rem 2.4rem;
  background: var(--color-blue);
`;

export const SubDepth = styled.div`
  width: 22.8rem;
  height: 100%;
  padding: 3.2rem 2.4rem;
  background: #ebebf3;
`;

export const Content = styled.main`
  width: 100%;
  padding: 3.2rem;
`;

export const TitleAreaWrap = styled.div`
  display: flex;
  align-items: center;

  .btn_box {
    display: flex;
    margin-left: auto;

    button {
      &:not(&:last-of-type) {
        margin-right: 0.8rem;
      }
    }
  }
`;

export const ListHandlerWrap = styled.div`
  padding: 3.2rem 0;
  .line {
    display: flex;
    &:not(&:last-of-type) {
      margin-bottom: 1.6rem;
    }
    .field {
      margin-right: 1.6rem;
    }
    button.btn_reset {
      min-width: auto;
      height: 4rem;
      padding: 0;
      color: var(--color-neutral60);
      svg {
        path {
          fill: var(--color-neutral50);
        }
      }
    }
  }

  .left {
    display: flex;
  }
  .right {
    margin-left: auto;
  }
`;
