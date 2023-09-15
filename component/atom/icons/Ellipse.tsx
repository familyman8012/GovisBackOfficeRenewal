import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: string;
};

const Ellipse = ({ size, viewBoxSize, ...props }: Props) => (
  <svg
    css={css`
      ${props.customCss}
    `}
    xmlns="http://www.w3.org/2000/svg"
    width={size || 16}
    height={size || 17}
    viewBox="0 0 16 17"
    fill="none"
  >
    <circle cx="8" cy="8.25" r="8" fill="currentColor" />

    <path
      d="M2.66602 8.75H13.3327"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default Ellipse;
