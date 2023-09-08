import { FC, ButtonHTMLAttributes, ReactElement } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@ComponentFarm/theme';
import Spinner from '../Spinner/Spinner';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'gostPrimary'
  | 'gostSecondary'
  | 'transparent';

type ButtonSize = 'md' | 'lg';

const buttonSizes = {
  md: css`
    min-width: 10.5rem;
    height: 4.4rem;
    padding: 0 1.6rem;
    font-size: 1.4rem;
  `,
  lg: css`
    height: 5.5rem;
    padding: 0 1.4rem;
    font-size: 1.7rem;
  `,
};

const buttonVariants = {
  primary: css`
    color: var(--button-white);
    background-color: var(--button-blue);

    &:hover {
      background-color: var(--button-primaryHoverBg);
    }

    &:disabled {
      color: var(--button-disableColor);
      border: 1px solid var(--button-gray);
      background-color: var(--button-disableBackground);
    }
  `,
  secondary: css`
    color: var(--button-white);
    background-color: var(--button-black);

    &:disabled {
      color: var(--button-disableColor);
      border: 1px solid var(--button-gray);
      background-color: var(--button-disableBackground);
    }
  `,
  gostPrimary: css`
    color: var(--button-blue);
    border: 1px solid var(--button-blue);
    background-color: transparent;

    &:not(&:disabled) {
      &:hover {
        background-color: var(--button-ghostPrimaryHoverBg);
      }
    }

    &:disabled {
      color: var(--button-gray);
      border: 1px solid var(--button-gray);
    }
  `,
  gostSecondary: css`
    color: var(--button-textBlack);
    border: 1px solid var(--button-gray);
    background-color: transparent;

    &:not(&:disabled) {
      &:hover {
        background-color: var(--button-ghostSecodaryHoverBg);
      }
    }

    &:disabled {
      color: var(--button-gray);
      border: 1px solid var(--button-gray);
    }
  `,
  transparent: css`
    min-width: auto !important;
    background-color: transparent;
    border: none;
    box-shadow: none;
    &:hover {
      background-color: ${theme.colors.gray50};
    }

    &:disabled {
      background-color: ${theme.colors.gray25};
    }
  `,
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  LeadingIcon?: ReactElement;
  TrailingIcon?: ReactElement;
  IconOnly?: ReactElement;
  disabled?: boolean;
  isLoading?: boolean;
}

export const StyledButton = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
  IconOnly: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: 0.4rem;
  font-weight: 500;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  ${props => buttonVariants[props.variant]}
  ${props => buttonSizes[props.size]}
  ${props => props.IconOnly && { justifyContent: 'center' }}
`;

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  LeadingIcon,
  TrailingIcon,
  IconOnly,
  disabled,
  isLoading,
  type,
  ...buttonProps
}) => {
  const Leading = LeadingIcon?.type;
  const Trailing = TrailingIcon?.type;
  const IconOnlyType = IconOnly?.type;

  return (
    <StyledButton
      {...buttonProps}
      type={type ?? 'button'}
      variant={variant}
      size={size}
      IconOnly={!!IconOnly}
      disabled={disabled}
    >
      {Leading && (
        <Leading {...LeadingIcon.props} customCss="margin-right: 0.4rem;" />
      )}
      {!isLoading ? children : <Spinner color="white" />}
      {IconOnlyType && <IconOnlyType {...IconOnly.props} />}
      {Trailing && (
        <Trailing {...TrailingIcon.props} customCss="margin-left: 0.4rem;" />
      )}
    </StyledButton>
  );
};
