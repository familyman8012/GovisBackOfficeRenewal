import React from 'react';
import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';

const colors: { [key: string]: SerializedStyles } = {
  red: css`
    color: var(--color-red50);
    background: var(--color-red90);
  `,
  blue: css`
    color: var(--color-blue70);
    background: var(--color-blue90);
  `,
  yellow: css`
    color: var(--color-yellow50);
    background: var(--color-yellow90);
  `,
  orange: css`
    color: var(--color-orange70);
    background: var(--color-red90);
  `,
};

export type TextBadgeColor = 'red' | 'blue' | 'yellow' | 'orange';

interface TextBadgeProps {
  text?: string;
  color: TextBadgeColor;
}

const TextBadgeWrap = styled.div<TextBadgeProps>`
  display: inline-flex;
  align-items: center;
  height: 2.6rem;
  padding: 0 0.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 0.4rem;

  ${props => colors[props.color]};
`;

export const TextBadge = ({ text, color }: TextBadgeProps) => {
  return <TextBadgeWrap color={color}>{text}</TextBadgeWrap>;
};
