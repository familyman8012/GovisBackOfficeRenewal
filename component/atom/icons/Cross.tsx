type Props = React.SVGProps<SVGSVGElement>;
const SvgCross = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cross_svg__a)">
      <path
        fill="#747474"
        d="M7.227 5.636a1.125 1.125 0 1 0-1.591 1.591L10.409 12l-4.773 4.773a1.125 1.125 0 0 0 1.591 1.591L12 13.591l4.773 4.773a1.125 1.125 0 0 0 1.59-1.591L13.592 12l4.773-4.773a1.125 1.125 0 0 0-1.591-1.591L12 10.409 7.227 5.636Z"
      />
    </g>
    <defs>
      <clipPath id="cross_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCross;
