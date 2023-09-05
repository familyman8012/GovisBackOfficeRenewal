import React, { HTMLAttributes, useState } from 'react';
import styled from '@emotion/styled';
import Modal from '@ComponentFarm/modules/Modal/Modal';
import { Button } from '@ComponentFarm/atom/Button/Button';
import useSyncedRef from '@HookFarm/useSyncedRef';

type ProductItem = {
  id: number;
  name: string;
};

interface ProductSelectProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'onSelect'> {
  className?: string;
  value?: string;
  disabled?: boolean;
  onSelect?: (product: ProductItem) => void;
}

const ProductSelectField = styled.div`
  display: inline-flex;
  align-items: stretch;
  width: 100%;
  height: 4.4rem;

  input {
    height: 100%;
  }

  button {
    min-width: auto;
    margin-left: 0.8rem;
  }
`;

export const ProductSelect = React.forwardRef<
  HTMLInputElement,
  Omit<ProductSelectProps, 'readOnly'>
>(({ className, children, disabled, onSelect, ...formControlProps }, ref) => {
  const refs = useSyncedRef<HTMLInputElement>(ref);
  const [showAddressPopup, setShowAddressPopup] = useState(false);

  //   const handleComplete = React.useCallback(
  //     (data: Address) => {
  //       const el = refs?.current;

  //       const triggerChangeEvent = (value: string) => {
  //         if (el) {
  //           el.value = value;
  //           const changeEvent = new Event('change', { bubbles: true });
  //           el.dispatchEvent(changeEvent);
  //           /** @ts-ignore */
  //           formControlProps.onChange?.(changeEvent);
  //         }
  //       };

  //       const extraAddress = generateExtraAddress(data);
  //       const formattedAddress = `${data.address} ${
  //         extraAddress ? `(${extraAddress})` : ''
  //       }`;

  //       triggerChangeEvent(formattedAddress);
  //       return onSearch?.(formattedAddress);
  //     },
  //     [onSearch, formControlProps.onChange]
  //   );

  const handleOpen = React.useCallback(() => setShowAddressPopup(true), []);
  const handleClose = React.useCallback(() => setShowAddressPopup(false), []);

  return (
    <ProductSelectField>
      <input
        ref={refs}
        className={`inp ${className ?? ''}`}
        readOnly
        disabled={disabled}
        {...formControlProps}
        onClick={handleOpen}
      />
      <Button
        type="button"
        disabled={disabled}
        variant="gostSecondary"
        onClick={handleOpen}
      >
        검색
      </Button>
      <Modal
        isOpen={showAddressPopup}
        showCancelButton={false}
        showCloseButton={false}
        onClose={handleClose}
      />
    </ProductSelectField>
  );
});

ProductSelect.displayName = 'ProductSelect';
