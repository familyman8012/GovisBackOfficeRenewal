import React, { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type BadgeVariant = 'gray' | 'primary' | 'error' | 'warning' | 'success';
type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  children: ReactNode;
  variant: BadgeVariant;
  size?: BadgeSize;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
}

const badgeBase = css`
  display: inline-flex;
  align-items: center;
  border-radius: 20px;
  font-size: 16px;
`;

const variants = {
  gray: css`
    background-color: #f0f3f5;
    color: #1f2933;
  `,
  primary: css`
    background-color: #ecf8ff;
    color: #1e3a8a;
  `,
  error: css`
    background-color: #fef2f2;
    color: #b91c1c;
  `,
  warning: css`
    background-color: #fef3c7;
    color: #92400e;
  `,
  success: css`
    background-color: #d1fae5;
    color: #064e3b;
  `,
};

const sizes = {
  sm: css`
    height: 22px;
    padding: 0 8px;
    font-size: 12px;
  `,
  md: css`
    height: 24px;
    padding: 0 10px;
    font-size: 12px;
  `,
  lg: css`
    height: 28px;
    padding: 0 12px;
    font-size: 14px;
  `,
};

const BadgeWrapper = styled.div<BadgeProps>`
  ${badgeBase};
  ${props => variants[props.variant]};
  ${props => sizes[props.size || 'md']};
`;

export const Badge: FC<BadgeProps> = ({
  variant,
  size = 'md',
  LeadingIcon,
  TrailingIcon,
  children,
}) => {
  const Leading = LeadingIcon?.type;
  const Trailing = TrailingIcon?.type;

  return (
    <BadgeWrapper variant={variant} size={size}>
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
