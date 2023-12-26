import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};

const Link = ({ size, viewBoxSize, ...props }: Props) => (
  <svg
    css={css`
      ${props.customCss}
    `}
    xmlns="http://www.w3.org/2000/svg"
    width={size || 16}
    height={size || 16}
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.19472 14.0002C5.09072 14.0002 4.04139 13.5562 3.24005 12.7502C1.64805 11.1482 1.58272 8.60816 3.09405 7.0875L8.01805 2.13416C8.53072 1.61816 9.22272 1.3335 9.96605 1.3335C10.7614 1.3335 11.5174 1.65283 12.0941 2.23283C13.2414 3.38683 13.2854 5.22083 12.1914 6.32083L7.26138 11.2735C6.94205 11.5955 6.51205 11.7722 6.05072 11.7722C5.56339 11.7722 5.10139 11.5775 4.75072 11.2248C4.04872 10.5175 4.02672 9.39016 4.70205 8.71016L9.25205 4.14016C9.51205 3.87883 9.93338 3.8775 10.1947 4.1375C10.4554 4.3975 10.4567 4.8195 10.1967 5.08016L5.64739 9.65083C5.48739 9.81216 5.50939 10.0968 5.69672 10.2848C5.79405 10.3828 5.92339 10.4388 6.05072 10.4388C6.12405 10.4388 6.22939 10.4208 6.31605 10.3335L11.2461 5.38083C11.8241 4.79883 11.7807 3.80883 11.1487 3.17283C10.5441 2.56483 9.51805 2.51683 8.96338 3.07416L4.03939 8.0275C3.04339 9.0295 3.10872 10.7268 4.18605 11.8102C4.73472 12.3628 5.44805 12.6668 6.19472 12.6668C6.86205 12.6668 7.48072 12.4148 7.93539 11.9575L12.8601 7.00416C13.1194 6.7435 13.5414 6.7415 13.8027 7.0015C14.0634 7.2615 14.0647 7.68283 13.8054 7.94416L8.88072 12.8975C8.17405 13.6082 7.22005 14.0002 6.19472 14.0002Z"
      fill="currentColor"
    />
  </svg>
);
export default Link;
