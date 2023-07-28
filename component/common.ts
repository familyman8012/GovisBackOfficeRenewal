import { css } from '@emotion/react';

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
  inputBorder: '#ddd',
  loadingbg: '#e5e5e5',
};

/* Font sizes */
const FONT_SIZES = {
  h2: '4.8rem',
  h3: '6.5rem',
  h4: '6.5rem',
  startH4: '4.8rem',
  subMainVisualTxt1: '6.4rem',
  subMainVisualTxt2: '4.8rem',
  subTitle: '3.2rem',
  desc: '1.8rem',
  basicTxt: '2.4rem',
  tab: '2rem',
  titleNo: '6.5rem',
  inputS: '29rem',
  inputM: '62rem',
  inputL: '84rem',
  inputHeight: '5.6rem',
};

const forVariables = (obj: any, fn: any) =>
  Object.entries(obj).map(fn).join('\n');

const createVariables = (property: any, varName: any) =>
  forVariables(
    property,
    ([name, value]: any) => `--${varName}-${name} : ${value};`
  );

// const createSizeVariables = (sizes: any, varName: any) =>
//   forVariables(sizes, ([name, percentage]: any) => `--${varName}-${name} : ${percentage}rem;`);

const reset = css`
  /* CSS Document */

  :root {
    ${createVariables(FONT_SIZES, 'size')}
    ${createVariables(COLOR, 'color')}
    --swiper-navigation-size : 8rem;
  }

  /* Type Selector */
  * {
    outline: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-touch-callout: none;
    color: var(--color-black);
  }
  html {
    /* overflow: hidden;
    max-width: 100vw; */
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

  button:disabled {
    background: #cccccc !important;
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
    font-family: 'Noto Sans KR', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: normal;
  }
  img {
    width: 100%;
  }
  img,
  fieldset,
  button {
    border: 0 none;
  }

  ul,
  ol {
    list-style: none;
  }

  dt,
  dd {
    display: block;
  }
  /* input[type="radio"] {
    width: 14px;
    height: 14px;
    margin: 0;
    padding: 0;
  } */
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

  //임시 모바일
  .webShow .pop_mobile_not {
    display: none !important;
  }

  //TypoSetting
  h2 {
    font-size: var(--size-h2);
    font-weight: bold;

    &.tit {
      text-align: center;
    }

    ${mq[0]} {
      display: none;
    }
  }
  .index h3,
  h4 {
    color: var(--color-orange);
    font-size: var(--size-h3);
    font-weight: bold;
    font-family: 'solano';
  }

  main p {
    font-size: var(--size-basicTxt);
  }

  .subTitle {
    font-size: var(--size-subTitle);
    font-weight: bold;
  }

  .subMainVisual {
    font-size: var(--size-subMainVisualTxt2);
    font-weight: bold;

    span {
      color: var(--color-white);
    }

    ${mq[0]} {
      font-size: 24px;
    }
  }

  .desc {
    font-size: var(--size-desc);
    line-height: 3rem;
  }

  .list_tab {
    display: flex;
    justify-content: center;
    margin: 5.3rem auto 5.6rem;

    &.en li span,
    &.en li h3 {
      font-family: 'Montserrat';
    }

    li {
      width: 18rem;
      height: 4rem;
      margin: 0 1.5rem;
      text-align: center;
      border-bottom: 0.4rem solid var(--color-white);

      &:first-of-type {
        margin-left: 0;
      }

      &:last-of-type {
        margin-left: 0;
      }

      a {
        display: block;
        height: 100%;
      }

      span,
      h3 {
        font-size: var(--size-tab);
        font-weight: bold;
      }

      &:hover,
      &.on {
        border-bottom: 0.4rem solid var(--color-orange);
        span,
        h3 {
          color: var(--color-orange);
        }
      }
    }

    ${mq[0]} {
      position: relative;
      z-index: 1;
      overflow: auto hidden;
      justify-content: flex-start;
      margin: 0;
      padding: 9px 10px 0;

      &::-webkit-scrollbar {
        display: none;
      }

      li {
        width: auto !important;
        height: auto;
        margin-left: 0;
        margin-right: 5px;
        padding: 9px 11px;
        flex-shrink: 0;
        span,
        h3 {
          font-size: 14px;
        }
      }
    }

    ${folder} {
      li {
        span,
        h3 {
          font-size: 12px;
        }
      }
    }
  }

  .titleNo {
    color: var(--color-bluedark);
    font-size: var(--size-titleNo);
    font-weight: bold;
    font-weight: bold;
    font-family: 'solano';
  }

  .form_txt {
    margin-bottom: 8rem;
    font-size: 2.4rem;
    text-align: center;
  }

  .box_inp {
    margin-bottom: 1.6rem;

    &:last-of-type {
      margin-bottom: 0;
    }
    &.flex {
      display: flex;
      align-items: center;

      &.baseline {
        align-items: baseline;
      }
    }

    .box_address1 {
      margin-bottom: 4px;
    }

    button {
      width: 10.6rem;
      height: 5.6rem;
      line-height: 5.6rem;
      font-size: 1.6rem;
      color: var(--color-white);
      border-radius: 0.2rem;
      background-color: #707070;
    }

    .str {
      margin: 0 0.8rem;
      font-size: 2.4rem;
    }
    .txt_desc {
      margin-left: 0.8rem;
      font-size: 1.6rem;
    }
    em.txt_desc {
      color: var(--color-orange);
      font-style: normal;
    }
  }

  label {
    display: inline-block;
    position: relative;
    width: 22rem;
    padding-left: 3.7rem;
    font-size: 2rem;

    &.req {
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 1.1rem;
        background: var(--color-orange);
      }
    }
  }

  input,
  select,
  textarea {
    height: var(--size-inputHeight);
    font-size: 1.6rem;
    border: 1px solid var(--color-inputBorder);
    border-radius: 2px;

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

  input {
    padding: 0 2.4rem;
    &[name='email2'] {
      width: 22.1rem;

      border-radius: 2px 0 0 2px;
    }

    &::placeholder {
      color: #ddd;
    }
  }

  select {
    padding: 0 1.6rem;
    appearance: none;
    background: url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_sel_arrow.svg')
      no-repeat #fff 95% 50%;

    &[name='email3'] {
      width: 22.1rem;
      border-left: none;
      border-radius: 0;
    }
  }

  textarea {
    height: 20rem;
    ${mq[0]} {
      padding: 9px !important;
      font-size: 13px;
    }
  }

  dialog {
    overflow: inherit;
    border: none;
    background: transparent;
    &::backdrop {
      opacity: 0.7;
      background-color: #000;
    }
    p.tit {
      margin: 0.8rem 0 3.8rem;
      font-size: 4rem;
      font-weight: bold;
      color: var(--color-orange);
      text-align: center;
    }
    .btn_close {
      position: absolute;
      top: 0;
      right: -10.5rem;
      width: 8rem;
      height: 8rem;
      cursor: pointer;
      background: url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/popup/btn_close.webp')
        no-repeat left top / 100%;
    }
  }

  .list_form_notice {
    margin-top: 3.2rem;
    padding-left: 22rem;
    dt,
    dd {
      font-size: 1.6rem;
      line-height: 2;
      color: #7b7b7b;
    }
  }

  .box_custom_radio {
    display: flex;
    height: 5.6rem;

    &.two {
      label {
        &:first-of-type {
          border-right: 1px solid #ddd;
        }
        .on {
          &:first-of-type {
            border-right: none;
          }
        }
      }
    }

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 14.5rem;
      height: 100%;
      padding-left: 0;
      border: 1px solid #ddd;
      border-right: 0;
      color: #707070;
      text-align: center;
      cursor: pointer;
      box-sizing: border-box;
    }
    label:last-child {
      border-left: none;
      border-right: 1px solid #ddd;
    }
    input[type='radio'] {
      overflow: hidden;
      position: absolute;
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      z-index: -1;
    }
    input[type='radio']:checked + label {
      color: #fff;
      border: 1px solid var(--color-orange);
      background: var(--color-orange);
    }
  }

  .box_custom_chk {
    position: relative;
    padding-left: 5rem;
    background-color: #fff;

    > input[type='checkbox'] {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + label {
        background: url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_chk_on.webp')
          no-repeat left 0 / 4rem;
      }
    }

    > label {
      width: auto;
      height: 4rem;
      padding-left: 5.5rem;
      background: url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_chk.webp')
        no-repeat left 0 / 4rem;
      font-size: 2rem;
      line-height: 3.6rem;
      letter-spacing: -0.02em;
      color: #1c1c1c;
      cursor: pointer;
    }
  }

  .box_textarea {
    position: relative;

    .fake-placeholder {
      position: absolute;
      top: 2.4rem;
      left: 2.4rem;
      pointer-events: none;
      font-size: 1.6rem;
      line-height: 1.5;
      color: #aaa;
    }
  }

  button.submit {
    display: block;
    width: 36rem;
    height: 8rem;
    margin: 6.4rem auto 0;
    color: var(--color-white);
    font-size: 2.4rem;
    font-weight: 500;
    text-align: center;
    line-height: 8rem;
    border-radius: 4rem;
    background-color: var(--color-orange);

    &:disabled {
      background-color: #cccccc;
    }
  }

  ${mq[0]} {
    h4 {
      margin-bottom: 28px;
      font-size: 24px;
    }
    .form_txt {
      margin-bottom: 50px;
      font-size: 12px;
      color: var(--color-orange);
      text-align: center;
    }
    .box_inp {
      margin-bottom: 20px;

      &.flex {
        display: block;
      }

      .req::before {
        width: 5.5px;
        height: 5.5px;
      }

      .txt_desc {
        display: block;
        margin: 5px 0 0 0;
        font-size: 12px;
      }

      input,
      select {
        height: 35px;
        padding: 0 9px;
        font-size: 13px;
        vertical-align: middle;
      }

      #hope_order_time1,
      #hope_order_time2 {
        width: calc(50% - 2px);
      }

      .box_address1 {
        display: flex;
        align-items: center;

        #address1 {
          width: calc(100% - 64px);

          + button {
            width: 60px;
            height: 35px;
            font-size: 13px;
            line-height: 35px;
          }
        }
      }

      label:not(.req) {
        padding-left: 0;
      }
      &:not(.box_radio) {
        label {
          display: block;
          width: 100%;
          font-size: 13px;
          margin-bottom: 8px;
          padding-left: 0;
          line-height: 1;

          &.req {
            padding-left: 9px;
          }
        }
      }

      &.box_radio > label {
        padding-left: 9px;
      }

      &:not(.box_email_area) {
        input,
        select,
        textarea {
          width: 100%;

          border-radius: 2px;
        }
      }
      &.box_email_area {
        * {
          margin: 0;
        }
        .str {
          display: inline-block;
          width: 7%;
          font-size: 13px;
          text-align: center;
        }
        input,
        select {
          width: 30%;
          box-sizing: border-box;
        }
        input:nth-of-type(1) {
          width: 33%;
        }
      }
    }
    .box_inp.box_radio,
    .box_detail_contents {
      display: block;
      label.req {
        display: block;
        width: 100%;
        margin-bottom: 8px;
        font-size: 13px;
        line-height: 1;
      }
    }
    .box_textarea {
      .fake-placeholder {
        top: 12px;
        left: 12.5px;
        font-size: 12px;
        color: #bababa;
      }
      textarea {
        height: 180px;
        font-size: 12px;
      }
    }
    .box_custom_radio {
      position: relative;
      height: 40px;
      input,
      label {
        width: 50% !important;
        height: 40px;
        margin: 0;
        padding: 0;
        font-size: 12px;
      }
    }
    .box_custom_chk {
      margin-top: 16px !important;
      padding-left: 12.5px;

      label,
      input[type='checkbox']:checked + label {
        height: 20px;
        padding-left: 30px;
        font-size: 12px;
        line-height: 20px;
        background-size: 20px;
        letter-spacing: -1px;
      }
      .openPrivacy {
        margin-left: 10px !important;
        font-size: 12px !important;
        line-height: 20px;
      }
    }
    button.submit {
      width: 100%;
      height: 50px;
      margin: 53px 0 0;
      font-size: 16px;
      line-height: 50px;
      border-radius: 25px;
    }

    .list_form_notice {
      margin-top: 24px;
      padding-left: 20px;

      dt,
      dd {
        font-size: 12px;
        line-height: 2;
        color: #7b7b7b;
      }
    }
  }

  .swiper {
    width: 100%;
    height: 100%;

    .swiper-button-prev,
    .swiper-button-next {
      width: var(--swiper-navigation-size);
      &:after {
        font-size: 0;
      }
    }

    .swiper-button-prev {
      left: var(--swiper-navigation-sides-offset, 30rem);
      background: url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/arrow_slide_left.svg')
        center / 100%;
    }

    .swiper-button-next {
      right: var(--swiper-navigation-sides-offset, 30rem);
      background: url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/arrow_slide_right.svg')
        center / 100%;
    }

    .swiper-pagination-bullet {
      width: 1.6rem;
      height: 1.6rem;
      opacity: 0.4;
      background: var(--color-white);

      &.swiper-pagination-bullet-active {
        opacity: 1;
        background: var(--color-orange);
      }

      ${mq[0]} {
        width: 8px;
        height: 8px;
      }
    }
  }

  .wrap_zoom {
    .target {
      display: block;
      width: 100%;
    }
    /* 돋보기 */
    .magnifier {
      width: 10rem;
      height: 10rem;
      position: absolute;
      border-radius: 100%;
      box-shadow:
        0 0 0 3px rgba(255, 255, 255, 0.85),
        0 0 0.3rem 0.3rem rgba(0, 0, 0, 0.25);
      display: none;
    }
  }
  //

  table {
    border-collapse: collapse;
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
  table caption {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    font-size: 0;
    line-height: 0;
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
  /* input[type="checkbox"] {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    border: none;
  }
  input[type="radio"] {
    width: 18px;
    height: 18px;
    vertical-align: middle;
    border: none;
  } */
  *:-webkit-auto:fill {
    -webkit-box-shadow: 0 0 0px 100rem white inset;
  }
  table {
    border-collapse: collapse;
    table-layout: fixed !important;
    border-spacing: 0;
  }
  ul,
  ol,
  li {
    list-style: none;
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

  .box_spinner {
    .location_indicator {
      position: relative;
      width: 3rem;
      height: 4rem;

      &:before,
      &:after {
        position: absolute;
        content: '';
      }
      &:before {
        left: 0.5rem;
        width: 2rem;
        height: 2rem;
        border-radius: 100% 100% 100% 0;
        box-shadow: 0px 0px 0px 0.2rem var(--color-orange);
        background: var(--color-orange);
        -webkit-animation: mapping 1s linear infinite;
        -moz-animation: mapping 1s linear infinite;
        animation: mapping 1s linear infinite;
        -webkit-transform: rotate(-46deg);
        -moz-transform: rotate(-46deg);
        transform: rotate(-46deg);
      }
      &:after {
        width: 3rem;
        height: 1rem;
        border-radius: 100%;
        background-color: rgba(255, 70, 0, 0.2);
        top: 2.4rem;
        z-index: -1;
      }
    }
    @keyframes mapping {
      0% {
        top: 0;
      }
      50% {
        top: -0.5rem;
      }
      100% {
        top: 0;
      }
    }
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -3rem;
    margin-left: -3rem;

    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  /*LOADER-7*/

  .loader-7 .line {
    width: 0.8rem;
    position: absolute;
    border-radius: 0.5rem;
    bottom: 0;
    background: linear-gradient(to bottom, #1ee95d, #5714ce);
  }

  .loader-7 .line1 {
    left: 0;
    -webkit-animation: line-grow 0.5s ease alternate infinite;
    animation: line-grow 0.5s ease alternate infinite;
  }

  .loader-7 .line2 {
    left: 2rem;
    -webkit-animation: line-grow 0.5s 0.2s ease alternate infinite;
    animation: line-grow 0.5s 0.2s ease alternate infinite;
  }

  .loader-7 .line3 {
    left: 4rem;
    -webkit-animation: line-grow 0.5s 0.4s ease alternate infinite;
    animation: line-grow 0.5s 0.4s ease alternate infinite;
  }

  @keyframes line-grow {
    0% {
      height: 0;
    }
    100% {
      height: 75%;
    }
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

  ${mq[0]} {
    section {
      padding: 0 20px;
    }

    .index h3,
    h4 {
      font-size: 36px;
    }

    .subTitle {
      font-size: 24px;
      font-weight: bold;
    }

    .desc {
      font-size: 14px;
      line-height: 30px;
    }
    .swiper-button-prev {
      left: 10px !important;
    }

    .swiper-button-next {
      right: 10px !important;
    }

    .swiper-button-next,
    .swiper-button-prev {
      width: 48px !important;
      height: 48px !important;
      margin-top: calc(0px - (48px / 2)) !important;
    }

    .swiper-pagination {
      bottom: 10px !important;
    }
  }

  ${folder} {
    section {
      padding: 0 10px;
    }
    .index h3,
    h4 {
      font-size: 30px;
    }

    .subTitle {
      font-size: 20px;
    }

    .desc {
      font-size: 12px;
      line-height: 1.5;
    }

    .list_form_notice {
      padding-left: 0;
      dd {
        font-size: 11px;
      }
    }
    .fake-placeholder {
      font-size: 11px !important;
    }
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

  ${montserrat}
  ${notoSansKR}
  ${solanoFT}
`;

export default reset;
