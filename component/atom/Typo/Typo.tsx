import styled from "@emotion/styled";
import React from "react";
import { useTheme } from "@emotion/react";

type Variant =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "h6"
  | "h5"
  | "h4"
  | "h3"
  | "h2"
  | "h1";
type Weight = "normal" | "medium" | "semibold" | "bold";

type StyledTextProps = {
  variant: Variant;
  weight: Weight;
  color?: string;
  theme: any;
};

const StyledText = styled.div<StyledTextProps>`
  font-size: ${({ variant, theme }) => theme.fontSize[variant][0]};
  line-height: ${({ variant, theme }) => theme.fontSize[variant][1]};
  font-weight: ${({ weight, theme }) => theme.fontWeight[weight]};
  color: ${({ color }) => color || "inherit"};
`;

export type TypoProps = {
  as?: any;
  variant: Variant;
  color?: string;
  weight?: Weight;
  children?: React.ReactNode;
  theme?: any;
};

const Typo: React.FC<TypoProps> = ({
  as,
  variant = "md",
  color,
  weight = "normal",
  children,
}) => {
  const theme = useTheme();
  const isHeading = variant.startsWith("h");
  const Component = as || (isHeading ? variant : "p");

  return (
    <StyledText
      as={Component}
      variant={variant}
      theme={theme}
      color={color}
      weight={weight}
    >
      {children}
    </StyledText>
  );
};

export default Typo;
