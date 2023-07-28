import { FC, ButtonHTMLAttributes, ReactElement } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@ComponentFarm/theme';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'secondaryGray'
  | 'tertiary'
  | 'tertiaryGray';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size?: ButtonSize;
  LeadingIcon?: ReactElement;
  TrailingIcon?: ReactElement;
  IconOnly?: ReactElement;
  disabled?: boolean;
}

export const StyledButton = styled.button<{
  size: ButtonSize;
  variant: ButtonVariant;
  disabled?: boolean;
  IconOnly?: boolean;
}>`
  display: flex;
  align-items: center;
  border-radius: 0.375rem; // 6px
  font-weight: 500;
  white-space: nowrap;
  user-select: none;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  ${({ size }) => theme.buttonSizes[size]};
  ${({ variant }) => theme.buttonVariants[variant]};
  ${({ disabled }) => (disabled ? 'cursor: not-allowed; opacity: 0.6;' : '')};
  ${({ IconOnly }) => (IconOnly ? 'justify-content: center;' : '')};
`;

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  size = 'md',
  LeadingIcon,
  TrailingIcon,
  IconOnly,
  disabled,
  ...buttonProps
}) => {
  const Leading = LeadingIcon?.type;
  const Trailing = TrailingIcon?.type;
  const IconOnlyType = IconOnly?.type;

  return (
    <StyledButton
      {...buttonProps}
      type="button"
      disabled={disabled}
      size={size}
      variant={variant}
    >
      {Leading && (
        <Leading
          {...LeadingIcon.props}
          css={css`
            margin-right: ${size === '2xl' ? '0.75rem' : '0.5rem'};
          `}
        />
      )}
      {children}
      {IconOnlyType && (
        <IconOnlyType {...IconOnly.props} size={size === '2xl' ? 24 : 20} />
      )}
      {Trailing && (
        <Trailing
          {...TrailingIcon.props}
          css={css`
            margin-left: ${size === '2xl' ? '0.75rem' : '0.5rem'};
          `}
        />
      )}
    </StyledButton>
  );
};
