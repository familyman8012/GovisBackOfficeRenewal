type Props = React.SVGProps<SVGSVGElement>;
const SvgBook = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#747474"
      fillRule="evenodd"
      d="M7 19c-.551 0-1-.449-1-1 0-.551.449-1 1-1h11v2H7ZM7 5h11v10H7c-.353 0-.686.072-1 .184V6c0-.551.449-1 1-1Zm12-2H7C5.346 3 4 4.346 4 6v12c0 1.654 1.346 3 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBook;
