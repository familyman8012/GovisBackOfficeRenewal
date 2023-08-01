import React, { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@ComponentFarm/theme';

type BadgeVariant =
  | 'numbering'
  | 'black'
  | 'gray'
  | 'primary'
  | 'error'
  | 'warning'
  | 'success';
type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';

export interface BadgeProps {
  children: ReactNode;
  variant: BadgeVariant;
  size?: BadgeSize;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
  textWhite?: boolean;
}

const badgeBase = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  font-weight: 500;
  border-radius: 2rem;
`;

const variants = {
  numbering: css`
    color: ${theme.colors.white};
    border-radius: 100%;
    background-color: ${theme.colors.black};
  `,
  black: css`
    color: ${theme.colors.gray500};
    background-color: ${theme.colors.black};
  `,
  gray: css`
    color: ${theme.colors.gray500};
    background-color: ${theme.colors.gray100};
  `,
  primary: css`
    color: ${theme.colors.primary600};
    background-color: ${theme.colors.primary100};
  `,
  error: css`
    color: #b91c1c;
    background-color: #fef2f2;
  `,
  warning: css`
    color: #92400e;
    background-color: #fef3c7;
  `,
  success: css`
    color: #064e3b;
    background-color: #d1fae5;
  `,
};

const sizes = {
  xs: css`
    min-width: 2.1rem;
    height: 2.1rem;
    font-size: 11px;
  `,
  sm: css`
    min-width: 5.4rem;
    height: 3.2rem;
    font-size: 1.4rem;
  `,
  md: css`
    min-width: 8.3rem;
    height: 3.4rem;
    font-size: 1.4rem;
  `,
  lg: css`
    min-width: 15rem;
    height: 4rem;
    font-size: 1.4rem;
  `,
};

const BadgeWrapper = styled.span<BadgeProps>`
  ${badgeBase};
  ${props => sizes[props.size || 'md']};
  ${props => variants[props.variant]};
  ${props => (props.textWhite ? 'color:white' : '')};
`;

export const Badge: FC<BadgeProps> = ({
  variant,
  size = 'md',
  LeadingIcon,
  TrailingIcon,
  children,
  textWhite,
}) => {
  const Leading = LeadingIcon?.type;
  const Trailing = TrailingIcon?.type;

  return (
    <BadgeWrapper variant={variant} size={size} textWhite={textWhite}>
      {Leading && (
        <Leading {...LeadingIcon.props} style={{ marginRight: '6px' }} />
      )}
      {children}
      {Trailing && (
        <Trailing {...TrailingIcon.props} style={{ marginLeft: '6px' }} />
      )}
    </BadgeWrapper>
  );
};
