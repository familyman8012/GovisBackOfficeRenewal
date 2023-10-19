import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: string;
};
const Verified = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M10.149 3.48c.445-1.973 3.257-1.973 3.702 0a1.898 1.898 0 0 0 2.865 1.186c1.71-1.08 3.698.908 2.618 2.618a1.898 1.898 0 0 0 1.186 2.865c1.973.445 1.973 3.257 0 3.702a1.898 1.898 0 0 0-1.186 2.865c1.08 1.71-.908 3.698-2.618 2.618a1.898 1.898 0 0 0-2.865 1.186c-.445 1.973-3.257 1.973-3.702 0a1.898 1.898 0 0 0-2.865-1.186c-1.71 1.08-3.698-.908-2.618-2.618A1.898 1.898 0 0 0 3.48 13.85c-1.973-.445-1.973-3.257 0-3.702a1.898 1.898 0 0 0 1.186-2.865c-1.08-1.71.908-3.698 2.618-2.618 1.109.7 2.576.092 2.865-1.186Z"
    />
    <path
      fill="#fff"
      d="m7.284 4.666-.4.634.4-.634ZM10.15 3.48l.731.165-.731-.165ZM4.666 7.284l.634-.4-.634.4ZM3.48 10.15l.165.731-.165-.731Zm0 3.702-.166.732.166-.732Zm1.186 2.865-.634-.4.634.4Zm2.618 2.618.4.634-.4-.634Zm2.865 1.186.731-.165-.731.165Zm3.702 0-.731-.165.731.165Zm2.865-1.186.4-.634-.4.634Zm2.618-2.618-.634.4.634-.4Zm1.186-2.865-.165-.731.165.731Zm0-3.702-.165.731.165-.731Zm-1.186-2.865.634.4-.634-.4Zm-2.618-2.618-.4-.634.4.634ZM13.85 3.48l.732-.166-.732.166Zm-4.32 7.99a.75.75 0 0 0-1.061 1.06l1.06-1.06ZM11 14l-.53.53a.75.75 0 0 0 1.06 0L11 14Zm4.53-3.47a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM6.884 5.3a2.648 2.648 0 0 0 3.996-1.655l-1.463-.33a1.148 1.148 0 0 1-1.732.717L6.884 5.3ZM5.3 6.884c-.653-1.035.55-2.237 1.584-1.584l.8-1.268C5.3 2.525 2.526 5.3 4.033 7.685L5.3 6.884ZM3.645 10.88A2.648 2.648 0 0 0 5.3 6.884l-1.268.8c.423.671.056 1.559-.718 1.733l.331 1.463Zm0 2.24c-1.193-.27-1.193-1.97 0-2.24l-.33-1.463c-2.753.622-2.753 4.544 0 5.166l.33-1.463ZM5.3 17.116a2.648 2.648 0 0 0-1.655-3.996l-.33 1.463a1.148 1.148 0 0 1 .717 1.732l1.268.801ZM6.884 18.7c-1.035.653-2.237-.55-1.584-1.584l-1.268-.8C2.525 18.7 5.3 21.474 7.685 19.967L6.884 18.7Zm3.996 1.655A2.648 2.648 0 0 0 6.884 18.7l.8 1.268a1.148 1.148 0 0 1 1.733.718l1.463-.33Zm2.24 0c-.27 1.193-1.97 1.193-2.24 0l-1.463.33c.622 2.753 4.544 2.753 5.166 0l-1.463-.33Zm3.996-1.655a2.648 2.648 0 0 0-3.996 1.655l1.463.33a1.148 1.148 0 0 1 1.732-.717l.801-1.268Zm1.584-1.584c.653 1.035-.55 2.237-1.584 1.584l-.8 1.268c2.385 1.507 5.159-1.267 3.652-3.653l-1.268.801Zm1.655-3.996a2.648 2.648 0 0 0-1.655 3.996l1.268-.8a1.148 1.148 0 0 1 .718-1.733l-.33-1.463Zm0-2.24c1.193.27 1.193 1.97 0 2.24l.33 1.463c2.753-.622 2.753-4.544 0-5.166l-.33 1.463ZM18.7 6.884a2.648 2.648 0 0 0 1.655 3.996l.33-1.463a1.148 1.148 0 0 1-.717-1.732L18.7 6.884ZM17.116 5.3c1.035-.653 2.237.55 1.584 1.584l1.268.8C21.475 5.3 18.7 2.526 16.315 4.033l.801 1.268ZM13.12 3.645A2.648 2.648 0 0 0 17.116 5.3l-.8-1.268a1.148 1.148 0 0 1-1.733-.718l-1.463.331Zm1.463-.33c-.622-2.753-4.544-2.753-5.166 0l1.463.33c.27-1.193 1.97-1.193 2.24 0l1.463-.33ZM8.47 12.53l2 2 1.06-1.06-2-2-1.06 1.06Zm3.06 2 4-4-1.06-1.06-4 4 1.06 1.06Z"
    />
  </svg>
);
export default Verified;
