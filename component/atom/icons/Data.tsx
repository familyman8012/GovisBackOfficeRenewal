type Props = React.SVGProps<SVGSVGElement>;
const SvgData = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#747474"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 20.408h18M9.886 11.41H5.65v8.998h4.236v-8.997ZM18.355 4h-4.237v16.409h4.237V4Z"
    />
    <path
      stroke="#747474"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.118 7.174H9.882V20.41h4.236V7.174Z"
    />
  </svg>
);
export default SvgData;
