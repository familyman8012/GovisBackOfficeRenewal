type Props = React.SVGProps<SVGSVGElement>;
const SvgArrowDownFilled = (props: Props) => (
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
      d="M12 17c-.506 0-.99-.233-1.326-.642L6.46 11.26a2.087 2.087 0 0 1-.26-2.211C6.508 8.402 7.115 8 7.788 8h8.426c.673 0 1.28.402 1.585 1.049.346.733.245 1.6-.258 2.21l-4.214 5.099c-.336.409-.82.642-1.326.642Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDownFilled;
