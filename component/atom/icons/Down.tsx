type Props = React.SVGProps<SVGSVGElement>;
const SvgDown = (props: Props) => (
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
      d="M12 16a.993.993 0 0 1-.64-.232l-6-5a1 1 0 1 1 1.28-1.536l5.371 4.476 5.362-4.315a1 1 0 0 1 1.254 1.558l-6 4.828A1 1 0 0 1 12 16Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDown;
