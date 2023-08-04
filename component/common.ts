import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { datepickerGlobalStyle } from '@ComponentFarm/modules/DatePicker/style';

export const breakpoints = [200, 767, 800, 1200, 1600];
export const mq = breakpoints.map(
  (bp, i) =>
    `@media (min-width:${breakpoints[i]}px) and (max-width: ${
      breakpoints[i + 1]
    }px)`
);
export const folder = `@media (max-width: 359px)`;

const enFontTypes = [100, 200, 300, 'regular', 500, 600, 700, 800, 900];
const krFontTypes = [100, 300, 'regular', 500, 700, 900];
const solanoTypes = [300, 400, 500, 600, 700];
const pretendardTypes = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const montserrat = enFontTypes.map(weight => {
  let fontWeight;
  if (weight === 'regular') {
    fontWeight = 'normal';
  } else {
    fontWeight = weight;
  }

  return css`
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: ${fontWeight};
      src:
        local('montserrat'),
        url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/montserrat-v18-latin-${weight}.eot?#iefix')
          format('embedded-opentype'),
        url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/montserrat-v18-latin-${weight}.woff2')
          format('woff2'),
        url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/montserrat-v18-latin-${weight}.woff')
          format('woff'),
        url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/montserrat-v18-latin-${weight}.ttf')
          format('truetype'),
        url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/montserrat-v18-latin-${weight}.svg#Montserrat')
          format('svg');
    }
  `;
});

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

const notoSansKR = krFontTypes.map(weight => {
  let fontWeight;
  if (weight === 'regular') {
    fontWeight = 'normal';
  } else {
    fontWeight = weight;
  }

  return css`
    @font-face {
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: ${fontWeight};
      src:
        url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/noto-sans-kr-v21-korean-${weight}.eot?#iefix')
          format('embedded-opentype'),
        url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/noto-sans-kr-v21-korean-${weight}.woff2')
          format('woff2'),
        url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/noto-sans-kr-v21-korean-${weight}.woff')
          format('woff'),
        url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/noto-sans-kr-v21-korean-${weight}.ttf')
          format('truetype'),
        url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/noto-sans-kr-v21-korean-${weight}.svg#NotoSansKR')
          format('svg');
    }
  `;
});

const solanoFT = solanoTypes.map(weight => {
  return css`
    @font-face {
      font-family: 'solano';
      src:
        url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/solano-${weight}')
          format('woff2'),
        url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/solano-${weight}-2')
          format('woff'),
        url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/solano-${weight}-3')
          format('opentype');
      font-display: auto;
      font-style: normal;
      font-weight: ${weight};
      font-stretch: normal;
    }
  `;
});

// CSS Variables Setting

/*= ============================================
=                  Colors                     =
============================================= */

const COLOR = {
  orange: '#FF4600',
  bluedark: '#171C8F',
  white: '#fff',
  black: '#000',
  gray: '#707070',
  inputBorder: '#e0e0e0',
  loadingbg: '#e5e5e5',
  'color-text-action-label': '#444444',
  'color-text-action-label-active': '#181818',
  'color-text-brand': '#ff4600',
  'color-text-brand-primary': '#ffffff',
  'color-text-button-default-disabled': '#c9c9c9',
  'color-text-default': '#181818',
  'color-text-import': '#fb4637',
  'color-text-error': '#fb4637',
  'color-text-icon-default': '#747474',
  'color-text-input-disabled': '#444444',
  'color-text-link': '#FF4600',
  'color-text-link-active': '#ad3000',
  'color-text-link-disabled': '#ad3000',
  'color-text-link-focus': '#ad3000',
  'color-text-link-hover': '#d63b00',
  'color-background': '#ffffff',
  'color-background-input-checkbox-disabled': '#c9c9c9',
  'color-background-input-disabled': '#f3f3f3',
  'color-background-notification-new': '#f3f3f3',
  'color-background-row-hover': '#967575',
  'color-background-row-selected': '#f3f3f3',
  'color-background-toast': '#747474',
  'color-background-toggle': '#aeaeae',
  'color-background-toggle-disabled': '#aeaeae',
  'color-background-toggle-hover': '#939393',
  'color-brand': '#ff4600',
};

/* Font sizes */
const FONT_SIZES = {
  titleNo: '6.5rem',
  inputS: '29rem',
  inputM: '62rem',
  inputL: '84rem',
  inputHeight: '4rem',
  fontsize1: '1rem',
  fontsize2: '1.2rem',
  fontsize3: '1.3rem',
  fontsize4: '1.4rem',
  fontsize5: '1.6rem',
  fontsize6: '1.8rem',
  fontsize7: '2rem',
  fontsize8: '2.4rem',
  fontsize9: '2.8rem',
  fontsize10: '3.2rem',
};

const LINE_HEIGHTS = {
  text: 1.1,
  heading: 1.2,
};

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
    ${createVariables(FONT_SIZES, 'size')}
    ${createVariables(COLOR, 'color')}
    ${createVariables(LINE_HEIGHTS, 'lineheight')}
    --swiper-navigation-size : 8rem;
  }

  /* Type Selector */
  * {
    outline: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-touch-callout: none;
  }
  html {
    font-size: 10px;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    overflow-x: hidden;
    max-width: 100vw;
    color: var(--color-black);

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
    color: #000;
    text-decoration: none;
  }
  a:visited {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    color: var(--color-orange);
    text-decoration: none;
  }
  a:active {
    color: #000;
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

  label {
    vertical-align: middle;
    cursor: pointer;
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

  input.inp,
  select,
  textarea {
    width: 100%;
    height: var(--size-inputHeight);
    font-size: 1.6rem;
    border: 1px solid var(--color-inputBorder);
    border-radius: 2px;
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }

    &.s {
      width: var(--size-inputS);
    }
    &.m {
      width: var(--size-inputM);
    }
    &.l {
      width: var(--size-inputL);
    }
  }

  input.inp {
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
  }

  textarea {
    height: 20rem;
    ${mq[0]} {
      padding: 9px !important;
      font-size: 13px;
    }
  }

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
  .screen_out {
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 0;
    line-height: 0;
    text-indent: -9999px;
  }

  #react-kakao-maps-sdk-map-container {
    .info_label {
      span {
        color: #fff;
      }
      padding: 0.7rem 2rem;
      border-radius: 5rem;
      font-size: 1.5rem;
      background: #005ad5;
      margin: -9.5rem 0 0 -0.9rem;
      position: relative;
      color: #fff;
      margin-left: -0.2rem;

      &:after {
        content: '';
        width: 0.8rem;
        height: 2rem;
        border: 2rem solid #005ad5;
        border-color: #005ad5 transparent transparent transparent;
        border-width: 1.5rem 0.5rem;
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -0.4rem;
        box-sizing: border-box;
      }
    }
  }

  ${montserrat}
  ${notoSansKR}
  ${solanoFT}
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
