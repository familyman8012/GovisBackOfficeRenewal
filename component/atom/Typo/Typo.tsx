import React, { ElementType, HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { theme } from '@ComponentFarm/theme';

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
};

const StyledText = styled.div<StyledTextProps>`
  font-size: ${({ variant }) => theme.fontSize[variant][0]};
  line-height: ${({ variant }) => theme.fontSize[variant][1]};
  font-weight: ${({ weight }) => theme.fontWeight[weight]};
  color: ${({ color }) => color || 'inherit'};
`;

export type TypoProps = {
  as?: ElementType;
  variant: Variant;
  color?: string;
  weight?: Weight;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLElement>; // HTML element attrs를 extend해서 추가함.

const Typo: React.FC<TypoProps> = ({
  as = 'p',
  variant = 'md',
  color,
  weight = 'normal',
  children,
  ...rest
}) => {
  const isHeading = variant.startsWith('h');
  const Component = as || (isHeading ? variant : undefined); // Modified this line

  return (
    <StyledText
      as={Component}
      variant={variant}
      color={color}
      weight={weight}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export default Typo;
