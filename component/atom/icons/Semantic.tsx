import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Semantic = ({ size, viewBoxSize, ...props }: Props) => (
  <svg
    css={css`
      ${props.customCss}
    `}
    xmlns="http://www.w3.org/2000/svg"
    width={size || 16}
    height={size || 16}
    fill="none"
    viewBox={`0 0 ${viewBoxSize || 24} ${viewBoxSize || 24}`}
  >
    <path
      fill="#747474"
      fillRule="evenodd"
      d="M5.437 2.75a.661.661 0 0 0-.661.66v14.562c0 .365.296.661.66.661h5.49a.397.397 0 0 1 0 .793h-5.49a1.454 1.454 0 0 1-1.454-1.454V3.41c0-.803.652-1.454 1.455-1.454h8.636l4.997 4.997v4.064a.397.397 0 1 1-.793 0V7.282v.232h-3.31a1.454 1.454 0 0 1-1.455-1.454V2.75h.233-8.308Zm8.868.56v2.75c0 .365.296.66.661.66h2.75l-3.41-3.41Z"
      clipRule="evenodd"
    />
    <path
      fill="#747474"
      d="M6.285 5.887c0-.22.177-.397.396-.397h5.464a.397.397 0 1 1 0 .794H6.681a.397.397 0 0 1-.396-.397ZM6.285 9.46c0-.218.177-.396.396-.396h8.975a.397.397 0 1 1 0 .793H6.681a.397.397 0 0 1-.396-.396ZM6.92 12.995a.397.397 0 0 0 0 .793h4.831a.397.397 0 1 0 0-.793h-4.83Z"
    />
    <path
      fill="#747474"
      fillRule="evenodd"
      d="M20.276 19.832a.396.396 0 0 0-.15-.094 4.368 4.368 0 1 0-.495.534c.02.043.048.085.084.12l1.59 1.591a.397.397 0 0 0 .561-.56l-1.59-1.591Zm-3.588.787a3.574 3.574 0 1 0 0-7.15 3.574 3.574 0 0 0 0 7.15Z"
      clipRule="evenodd"
    />
    <path
      stroke="#747474"
      d="M5.437 2.75a.661.661 0 0 0-.661.66v14.562c0 .365.296.661.66.661h5.49a.397.397 0 0 1 0 .793h-5.49a1.454 1.454 0 0 1-1.454-1.454V3.41c0-.803.652-1.454 1.455-1.454h8.636l4.997 4.997v4.064a.397.397 0 1 1-.793 0V7.282v.232h-3.31a1.454 1.454 0 0 1-1.455-1.454V2.75h.233-8.308Zm8.868.56v2.75c0 .365.296.66.661.66h2.75l-3.41-3.41Z"
      clipRule="evenodd"
    />
    <path
      stroke="#747474"
      d="M6.285 5.887c0-.22.177-.397.396-.397h5.464a.397.397 0 1 1 0 .794H6.681a.397.397 0 0 1-.396-.397ZM6.285 9.46c0-.218.177-.396.396-.396h8.975a.397.397 0 1 1 0 .793H6.681a.397.397 0 0 1-.396-.396ZM6.92 12.995a.397.397 0 0 0 0 .793h4.831a.397.397 0 1 0 0-.793h-4.83Z"
    />
    <path
      stroke="#747474"
      d="M20.276 19.832a.396.396 0 0 0-.15-.094 4.368 4.368 0 1 0-.495.534c.02.043.048.085.084.12l1.59 1.591a.397.397 0 0 0 .561-.56l-1.59-1.591Zm-3.588.787a3.574 3.574 0 1 0 0-7.15 3.574 3.574 0 0 0 0 7.15Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Semantic;
