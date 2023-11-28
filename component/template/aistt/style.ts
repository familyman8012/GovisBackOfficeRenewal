import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { InnerTable } from '@ComponentFarm/common';

export const VideoWrapStyle = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0.8rem;
  border-radius: 0.8rem;
  max-width: 1024px;
  margin: 0 auto;
  overflow: hidden;
  background-color: #000;

  &:before {
    display: block;
    content: '';
    padding-bottom: 56.25%;
  }

  video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .video-position {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
  }

  .empty {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    & > div {
      color: var(--color-gray1) !important;
    }
  }
  .badge {
    position: absolute;
    z-index: 2;
    top: 1.6rem;
    right: 1.6rem;
  }

  &.viewport-out {
    .video-position {
      position: fixed;
      top: auto;
      bottom: 0;
      left: auto;
      right: 0;
      z-index: 98;
      width: 33%;
      height: 18.5625vw;
      max-width: 1024px;
      max-height: 576px;
      border-top-left-radius: 0.4rem;
      overflow: hidden;
    }
  }

  .video-fix-close {
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    top: 2rem;
    right: 2rem;
    z-index: 2;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background: transparent;
    color: var(--color-gray1);
    border: 1px solid currentColor;
    cursor: pointer;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

export const AnalysisPageStyle = styled.div`
  padding-top: 3.2rem;
  display: flex;
  flex-direction: column;

  .video-wrap {
    position: relative;
    width: 100%;
    max-width: 1536px;
    border-top-right-radius: 0.8rem;
    border-top-left-radius: 0.8rem;
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

    .badge {
      position: absolute;
      z-index: 2;
      top: 1.6rem;
      right: 1.6rem;
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

  .video-second-tags {
    display: inline-flex;
    align-items: center;
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

  .list {
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
`;

export const DevicePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.2rem;
  margin: 0 -3.2rem -3.2rem;
  padding: 0 3.2rem 3.2rem;

  &.bg-gray {
    background-color: var(--color-blue_gray10);
  }

  .status {
    display: flex;
    gap: 0 3.2rem;

    & > * {
      flex: 1;
    }
  }

  .camera-group .header {
    font-weight: 600;
    font-size: 1.6rem;
    border: 0;
    background-color: transparent;
    margin-bottom: 0;
    padding-left: 0.8rem;
  }

  .camera-group .option {
    display: inline-flex;
    align-items: center;
    margin-left: 0;
    border: 0;
    background-color: transparent;
    width: 100%;

    &:before {
      content: '';
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      margin-right: 1rem;
    }

    & + .option {
      margin-top: 0;
    }

    &.on::before {
      background-color: var(--color-green50);
    }

    &.off::before {
      background-color: var(--color-red50);
    }

    &.none::before {
      background-color: var(--color-gray5);
    }
  }

  .view > div:first-of-type {
    margin-bottom: 3.2rem;
  }

  .view > section:first-of-type {
    margin-top: 0;
  }
`;

export const SectionStyle = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  min-height: 4rem;
  margin: 3.2rem 0;

  .title {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.5;
  }

  .count {
    font-size: 1.4rem;
    line-height: 1.2;
    font-weight: normal;
    .number {
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--color-blue60);
    }
  }

  .select_library_control {
    min-width: 23.8rem;
  }

  .content {
    margin-top: 3.2rem;
  }
`;

export const VideoListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3.2rem -1.2rem 0;
  padding: 0;
  cursor: pointer;

  button {
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    background-color: transparent;
    appearance: none;
    cursor: pointer;
  }

  .item {
    flex: 0 0 auto;
    display: inline-flex;
    width: calc(25% - 2.4rem);
    flex-direction: column;
    border: 2px solid var(--color-neutral90);
    border-radius: 0.8rem;
    overflow: hidden;
    margin: 1.2rem;
    cursor: pointer;

    &:focus,
    &:hover {
      background-color: var(--color-blue90);
      border-color: var(--color-blue70);
    }

    &.loading {
      pointer-events: none;
      cursor: default;
    }
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
      font-size: 2.4rem;
      line-height: inherit;
      line-height: 1.1;
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

  @media screen and (min-width: 1920px) {
    .item {
      width: calc(20% - 2.4rem);
    }
  }
`;

export const ExpandRowStyle = styled.tr`
  & ~ tr.expand-content > td {
    padding: 0 !important;
  }

  & ~ tr.expand-content:hover {
    background-color: transparent !important;
  }

  td:first-of-type {
    padding: 0;
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

export const FqsAnalysisDataStyle = styled.div`
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

      path {
        fill: currentColor;
      }
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

  .inspection-img {
    h3 {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
      margin-bottom: 1.8rem;
    }

    img {
      width: 32.9rem;
      height: 20.8rem;
      object-fit: cover;
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
`;

export const FqsInfoTable = styled(InnerTable)`
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

  .info-text {
    color: var(--color-neutral60);
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.2;
  }
`;

export const StoreFormStyle = css`
  .line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  h2 {
    display: flex;
    align-items: center;
    margin-bottom: 0;

    .sub-text {
      margin-left: 1.6rem;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.4;
      color: var(--color-neutral30);
    }
  }

  .first-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .border-none {
    border: 0 !important;
  }

  // half width
  .field {
    display: inline-flex;
    align-items: center;
    width: calc(50% - 3.3rem);
    padding: 0;

    &:first-of-type {
      margin-right: 6.6rem;
    }
  }

  label:not(.label_radio):not(.label_check) {
    width: 40%;
    color: var(--color-gray500);
  }
`;
