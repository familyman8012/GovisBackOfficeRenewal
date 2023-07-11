import React, { ElementType } from 'react';
import { Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

type Variant =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'h6'
  | 'h5'
  | 'h4'
  | 'h3'
  | 'h2'
  | 'h1';
type Weight = 'normal' | 'medium' | 'semibold' | 'bold';

type StyledTextProps = {
  variant: Variant;
  weight: Weight;
  color?: string;
  theme: Theme;
};

const StyledText = styled.div<StyledTextProps>`
  font-size: ${({ variant, theme }) => theme.fontSize[variant][0]};
  line-height: ${({ variant, theme }) => theme.fontSize[variant][1]};
  font-weight: ${({ weight, theme }) => theme.fontWeight[weight]};
  color: ${({ color }) => color || 'inherit'};
`;

export type TypoProps = {
  as?: ElementType;
  variant: Variant;
  color?: string;
  weight?: Weight;
  children?: React.ReactNode;
};

const Typo: React.FC<TypoProps> = ({
  as = 'p',
  variant = 'md',
  color,
  weight = 'normal',
  children,
}) => {
  const theme = useTheme();
  const isHeading = variant.startsWith('h');
  const Component = as || (isHeading ? variant : undefined); // Modified this line

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
