import React, { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type BadgeSize = 'sm' | 'md' | 'lg' | 'circle';
type BadgeColor =
  | 'green'
  | 'yellow'
  | 'indigo'
  | 'blue'
  | 'red'
  | 'gray'
  | 'orange';
type BadgeFill = 'fill' | 'outline' | 'transparent';

export interface BadgeProps {
  children: ReactNode;
  size?: BadgeSize;
  color?: BadgeColor;
  dot?: boolean;
  fill?: BadgeFill;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
  textWhite?: boolean;
}

const badgeBase = css`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  font-weight: 500;
  border-radius: 1.6rem;
`;

const sizes = {
  sm: css`
    padding: 0.2rem 0.8rem;
    font-size: 1.2rem;
    line-height: 1.8rem;
  `,
  md: css`
    padding: 0.2rem 1rem;
    font-size: 1.4rem;
    line-height: 2rem;
  `,
  lg: css`
    padding: 0.4rem 1.2rem;
    font-size: 1.4rem;
    line-height: 2rem;
  `,
  circle: css`
    padding: 0 0.6rem;
    font-size: 1.2rem;
    line-height: 1.8rem;
    border-radius: 50%;
  `,
};

const colors = {
  green: css`
    color: var(--bage-greenLabel);
    border: 1px solid var(--bage-greenBorder);
    background-color: var(--bage-greenBg);
  `,
  yellow: css`
    color: var(--bage-yellowLabel);
    border: 1px solid var(--bage-yellowBorder);
    background-color: var(--bage-yellowBg);
  `,
  indigo: css`
    color: var(--bage-indigoLabel);
    border: 1px solid var(--bage-indigoBorder);
    background-color: var(--bage-indigoBg);
  `,
  blue: css`
    color: var(--bage-blueLabel);
    border: 1px solid var(--bage-blueBorder);
    background-color: var(--bage-blueBg);
  `,
  red: css`
    color: var(--bage-redLabel);
    border: 1px solid var(--bage-redBorder);
    background-color: var(--bage-redBg);
  `,
  gray: css`
    color: var(--bage-grayLabel);
    border: 1px solid var(--bage-grayBorder);
    background-color: var(--bage-grayBg);
  `,
  orange: css`
    color: var(--bage-orangeLabel);
    border: 1px solid var(--bage-orangeBorder);
    background-color: var(--bage-orangeBg);
  `,
};

const BadgeWrapper = styled.span<BadgeProps>`
  ${badgeBase};
  ${props => sizes[props.size || 'md']};
  ${props => colors[props.color || 'green']};
  ${props =>
    props.dot
      ? `&:before {
    display: inline-block;
    content: '';
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 0.4rem;
    border-radius: 50%;
    background: currentColor;
  }`
      : ''}
  ${props => (props.fill === 'outline' ? 'background:none' : '')}
  ${props =>
    props.fill === 'transparent' ? 'border:none;background:none' : ''}
`;

export const Badge: FC<BadgeProps> = ({
  size = 'md',
  color = 'green',
  dot,
  fill = 'fill',
  LeadingIcon,
  TrailingIcon,
  children,
  textWhite,
}) => {
  const Leading = LeadingIcon?.type;
  const Trailing = TrailingIcon?.type;

  return (
    <BadgeWrapper
      size={size}
      color={color}
      dot={dot}
      fill={fill}
      textWhite={textWhite}
    >
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
