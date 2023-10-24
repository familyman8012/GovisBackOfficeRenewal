import styled from '@emotion/styled';

export const AnalysisPageStyle = styled.div`
  display: flex;
  flex-direction: column;

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.2rem 0;

    & > div:nth-of-type(1) {
      min-width: 23.8rem;
    }
  }

  .value {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-blue60);
  }

  .video-wrap {
    position: relative;
    width: 100%;
    max-width: 1536px;
    border-radius: 0.8rem;
    overflow: hidden;

    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &:before {
      display: block;
      content: '';
      padding-bottom: 56.25%;
    }
  }

  .info {
    margin-top: 3.2rem;
    padding-bottom: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    h2 {
      flex: 100%;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
    }

    p {
      font-size: 1.6rem;
      font-weight: 400;
      color: var(--color-neutral50);

      & + p {
        margin-left: 1.6rem;
      }
    }

    .badge {
      margin-left: 1.6rem;
    }
  }

  h2 {
    font-size: 2.4rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.5;
  }

  .list,
  .summary {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .content {
      margin-top: 3.2rem;
    }
  }

  .list {
    margin-top: 6.4rem;
  }

  .summary {
    margin-top: 3.2rem;

    table {
      flex: 0 0 100%;

      th {
        background-color: var(--color-gray2);
        text-align: right;
      }
      th,
      td {
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
        height: 4.4rem;
        vertical-align: middle;
      }
    }
  }

  .inspection-img {
    h3 {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
      margin-bottom: 1.8rem;
    }

    img {
      min-width: 32.9rem;
      min-height: 20.8rem;
      background-color: red;
    }

    & + .inspection-img {
      margin-left: 7rem;
    }
  }

  .inspection {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: inherit;
      font-weight: inherit;
      line-height: 2.4rem;
    }

    .effect {
      margin-top: 1.4rem;
      display: flex;
      align-items: center;

      p {
        color: var(--color-neutral50);
        margin-left: 1.1rem;
      }

      &::before {
        content: '';
        width: 0.2rem;
        height: 2.6rem;
        border-radius: 0.2rem;
        margin-right: 1rem;
        background-color: var(--color-gray100);
      }
    }
  }

  .dropdown-btn {
    width: 2.4rem;
    height: 2.4rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    background-color: transparent;
    cursor: pointer;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

export const VideoListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3.2rem -1.2rem 0;
  padding: 0;

  .item {
    flex: 0 0 23%; /* explanation below */
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-neutral90);
    border-radius: 0.8rem;
    overflow: hidden;
    margin: 1.2rem;
    cursor: pointer;
  }

  .img-wrap {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .badge {
      position: absolute;
      z-index: 2;
      top: 1rem;
      right: 1rem;
    }
  }

  .info-wrap {
    padding: 2.4rem;

    h3 {
      font-size: inherit;
      line-height: inherit;
      line-height: 2.4rem;
    }

    .score {
      display: inline-flex;
      font-size: 1.4rem;
      padding: 0.2rem 0.4rem;
      color: var(--color-orange60);
      background-color: var(--color-gray3);
      margin: 1rem 0 1.6rem;
      border-radius: 0.2rem;
    }

    ul {
      margin-bottom: 2.2rem;
    }

    p {
      color: var(--color-neutral50);
      font-size: 1.4rem;
      line-height: 120%;
    }

    p + p {
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  }
`;

export const ExpandContentStyle = styled.tr`
  .wrap {
    position: relative;
    margin-left: 3.2%;
    padding-top: 1.5rem;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: calc(100% + 1.2rem - 0.1rem);
      height: 1rem;
      width: 0.2rem;

      background-size: 0.2rem 0.6rem;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='10' viewBox='0 0 2 10' fill='none'%3E%3Cpath d='M1 1V9' stroke='%23D5DBE5' stroke-width='2' stroke-linecap='round' stroke-dasharray='4 4'/%3E%3C/svg%3E");
    }
  }

  td {
    padding: 0 !important;
  }

  .ico {
    position: absolute;
    right: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-blue70);
    background-color: var(--color-blue80);
    border-radius: 50%;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  .cont {
    display: flex;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    padding-bottom: 5.6rem;
  }

  li {
    position: relative;
    padding-left: 2.9rem;
    &:not(.hide-line)::before {
      content: '';
      position: absolute;
      right: calc(100% + 1.2rem - 0.1rem);
      top: 3.2rem;
      width: 0.2rem;
      height: calc(100% - 4rem);
      background-color: var(--color-gray100);
      border-radius: 0.2rem;
    }
  }
`;
