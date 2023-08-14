type Props = React.SVGProps<SVGSVGElement>;
const SvgBrowser = (props: Props) => (
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
      d="M7 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM5 9V6c0-.552.449-1 1-1h12c.551 0 1 .448 1 1v3H5Zm14 9c0 .552-.449 1-1 1H6c-.551 0-1-.448-1-1v-7h14v7ZM18 3H6C4.346 3 3 4.346 3 6v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBrowser;
