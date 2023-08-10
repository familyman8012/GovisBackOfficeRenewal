import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { datepickerGlobalStyle } from '@ComponentFarm/modules/DatePicker/style';
import {
  BACKGROUND,
  COLOR,
  FONT,
  INPUT,
  LABEL,
  LINE_HEIGHTS,
  TABS,
  TEXTCOLOR,
} from './token';

export const breakpoints = [200, 767, 800, 1200, 1600];
export const mq = breakpoints.map(
  (bp, i) =>
    `@media (min-width:${breakpoints[i]}px) and (max-width: ${
      breakpoints[i + 1]
    }px)`
);
export const folder = `@media (max-width: 359px)`;

const pretendardTypes = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const pretendard = pretendardTypes.map(
  weight => css`
    @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: ${weight === 400 ? 'normal' : weight};
      src:
        local('Pretendard'),
        url('/font/Pretendard-${weight}.woff') format('woff'),
        url('/font/Pretendard-${weight}.woff2') format('woff2');
    }
  `
);

// CSS Variables Setting

const forVariables = (obj: any, fn: any) =>
  Object.entries(obj).map(fn).join('\n');

const createVariables = (property: any, varName: any) =>
  forVariables(
    property,
    ([name, value]: any) => `--${varName}-${name} : ${value};`
  );

const reset = css`
  /* CSS Document */

  :root {
    ${createVariables(COLOR, 'color')}
    ${createVariables(TEXTCOLOR, 'textcolor')}
    ${createVariables(BACKGROUND, 'bg')}
    ${createVariables(FONT, 'font')}
    ${createVariables(LINE_HEIGHTS, 'lineheight')}
    ${createVariables(INPUT, 'input')}
    ${createVariables(LABEL, 'label')}
    ${createVariables(TABS, 'tabs')}
    --swiper-navigation-size : 8rem;
  }

  /* Type Selector */
  * {
    outline: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-touch-callout: none;
    color: var(--textcolor-default);
  }

  html {
    font-size: 10px;
  }

  body {
  }

  .sbdocs-preview pre * {
    color: #fff;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    overflow-x: hidden;
    max-width: 100vw;

    font-size: var(--font-size4);
    font-weight: var(--font-regular);
    line-height: var(--lineheight-text);

    &.overflowhidden {
      overflow: hidden;
    }
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  form,
  fieldset,
  p,
  blockquote,
  button,
  figure,
  table {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', 'Noto Sans KR', 'Helvetica Neue', Helvetica,
      Arial, sans-serif;
    line-height: normal;
  }

  img,
  fieldset,
  button {
    border: 0 none;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  dt,
  dd {
    display: block;
  }

  input[type='text']::-ms-clear {
    display: none;
  }

  a {
    border: 0;
    cursor: pointer;
  }
  a:link {
    color: var(--textcolor-link);
    text-decoration: none;
  }
  a:visited {
    color: var(--textcolor-link);
    text-decoration: none;
  }
  a:focus {
    color: var(--textcolor-linkFocus);
    text-decoration: none;
  }
  a:hover {
    color: var(--textcolor-linkHover);
    text-decoration: none;
  }
  a:active {
    color: var(--textcolor-linkActive);
    text-decoration: none;
  }
  em {
    font-style: normal;
  }

  table {
    border-collapse: collapse;
    table-layout: fixed !important;
    border-spacing: 0;
  }

  fieldset,
  button {
    border: none;
  }
  hr,
  legend {
    display: none;
    clear: both;
  }

  hr {
    display: none;
  }

  caption,
  legend {
    visibility: hidden;
    overflow: hidden;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
  }
  iframe {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: var(--font-size8);
    font-weight: var(--font-bold);
    line-height: var(--lineheight-heading);
  }

  h2 {
    font-size: var(--font-size5);
    font-weight: var(--font-semibold);
    line-height: var(--lineheight-heading);
  }

  h3 {
    font-size: var(--font-size4);
    font-weight: var(--font-semibold);
    line-height: var(--lineheight-heading);
  }

  label {
    &:not(.horizontal) {
      display: block;
      margin-bottom: 11px;
    }
    color: var(--textcolor-label);
    vertical-align: middle;
    cursor: pointer;

    .acitve {
      color: var(--textcolor-labelActive);
    }

    &:not(.small) {
      font-size: var(--input-fontsize);
    }
    font-weight: var(--font-regular);
    line-height: var(--lineheight-text);

    &.small {
      font-size: var(--label-fontsize);
    }
  }

  input.inp,
  select,
  textarea {
    width: 100%;
    height: var(--input-height);
    font-size: var(--input-fontsize);
    border: 1px solid var(--input-border);
    border-radius: 0.6rem;

    &::placeholder {
      color: var(--input-placeholder);
    }

    &:focus {
      border: 1px solid var(--input-focusBorder);

      &::placeholder {
        color: var(--input-focusPlaceholder);
      }
    }

    &:disabled {
      border: none;
      box-shadow: 0px 0px 0px 1px rgba(134, 143, 160, 0.24);
      background: var(--bg-inputDisabled, #f7f9fc);

      &::placeholder {
        color: var(--inut-disabledPlaceholder);
      }
    }
  }

  input.inp {
    padding: 1rem 1.2rem;
  }

  button {
    &:disabled {
      color: var(--textcolor-buttonDisabled);
    }
  }

  svg {
    color: var(--textcolor-iconDefault);
  }

  input {
    &:disabled {
      color: var(--textcolor-inputDisabled);
    }
  }

  select {
    padding: 0.8rem 1.2rem;
    appearance: none;
    background: url('images/common/ico_sel_arrow.svg') no-repeat #fff
      calc(100% - 12px) 50%;
  }

  .helper-text {
    &:not(.small) {
      font-size: var(--font-size4);
    }
    font-weight: var(--font-regular);
    line-height: var(--lineheight-text);

    &.small {
      font-size: var(--font-size2);
    }
  }

  textarea {
    width: 100%;
    height: 20rem;
    padding: 0.5rem;
    border: 1px solid #c6c6c6;
    border-radius: 2px;
    border-radius: 2px;
    box-sizing: border-box;
    overflow: auto;
    padding: 2.4rem;
  }

  *:-webkit-auto:fill {
    -webkit-box-shadow: 0 0 0px 100rem white inset;
  }

  /* input.inp,
  select,
  textarea {
    width: 100%;
    height: var(--input-height);
    font-size: 1.6rem;
    border: 1px solid var(--color-gray5);
    border-radius: 2px;
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }

    &.s {
      width: var(--input-small);
    }
    &.m {
      width: var(--input-middle);
    }
    &.l {
      width: var(--input-large);
    }
  } */

  /* input.inp {
    padding: 0 0.7rem;

    &::placeholder {
      color: #ddd;
    }
  }

  select {
    padding: 0 1.6rem;
    appearance: none;
    background: url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_sel_arrow.svg')
      no-repeat #fff 95% 50%;
  } */

  .react-datepicker-wrapper {
    width: 100%;
  }

  .hiddenZone {
    display: none;
  }
  .hiddenZoneV {
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

  @media (min-width: 1400px) and (max-width: 1530px) {
    html {
      font-size: 9px;
    }
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
    html {
      font-size: 8px;
    }
  }
  @media (min-width: 1000px) and (max-width: 1200px) {
    html {
      font-size: 7px;
    }
  }
  @media (min-width: 800px) and (max-width: 1000px) {
    html {
      font-size: 6px;
    }
  }
  @media (min-width: 768px) and (max-width: 800px) {
    html {
      font-size: 5px;
    }
  }

  ${pretendard}
  ${datepickerGlobalStyle}
`;

export const Content = styled.div`
  padding: 24px;
`;

export const FormWrap = styled.form`
  width: 1090px;
  margin: 0 24px;
  h3 {
    margin: 20px 0;
    padding-bottom: 10px;
    font-size: 18px;
    font-style: normal;
    border-bottom: 1px solid;
  }
  h4 {
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 600;
    line-height: 21px;
  }
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;

    &.req {
      &:after {
        display: inline-block;
        content: '*';
        color: red;
        vertical-align: middle;
        margin-left: 3px;
      }
    }
  }
  .line {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
  }
  .box_upload_image {
    width: 324px;
    .thumb {
      height: 220px;
      background: lightgray;
    }
    .box_btn {
      display: flex;
      align-items: center;
      margin: 10px;

      .txt_notice {
        margin-left: 10px;
        font-size: 14px;
      }
    }
  }
`;

export default reset;
