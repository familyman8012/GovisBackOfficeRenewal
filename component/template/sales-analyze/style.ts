import styled from '@emotion/styled';

export const VirtualTableWrap = styled.div`
  width: 100%;

  margin-bottom: 10rem;

  .topLeftGrid,
  .topRightGrid {
    font-size: 1.4rem;
    color: #687182;
    border-top: 1px solid var(--color-neutral90);
    border-bottom: 1px solid var(--color-neutral90);
    background: #f7f9fc;
  }

  .topLeftGrid,
  .bottomLeftGrid {
    border-right: 1px solid var(--color-neutral90);
  }

  .topLeftGrid {
    .ReactVirtualized__Grid__innerScrollContainer > div {
      background: #f7f9fc !important;
    }
  }

  .bottomLeftGrid {
    .ReactVirtualized__Grid__innerScrollContainer > div {
      background: #fff !important;
    }

    .wrap_storename {
      width: 100%;
    }
    .info {
      display: flex;
      margin-top: 0.8rem;
      .badge:nth-of-type(1) {
        margin-right: 0.4rem;
      }
    }
  }

  .bottomLeftGrid,
  .bottomRightGrid {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-neutral10);
    border-bottom: 1px solid var(--color-neutral90) !important;
  }

  &.scroll_empty {
    .bottomLeftGrid,
    .bottomRightGrid {
      height: auto !important;
    }
  }
`;

export const VitualTableCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color-neutral90);
`;
