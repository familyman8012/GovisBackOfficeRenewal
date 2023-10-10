import React, { FC, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Cross } from '@ComponentFarm/atom/icons';
import { IconViewArea } from '@ComponentFarm/common';
import Portal from './Portal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  onFormSubmit?: () => void;
  onCancel?: () => void;
  disabledFormSubmit?: boolean;
  submitButtonText?: string;
  cancelButtonText?: string;
  showCloseButton?: boolean;
  showCancelButton?: boolean;
  children?: ReactNode;
  showButtons?: boolean;
}

const DimmedBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const HeaderContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem;
  /* border-bottom: 1px solid var(--color-grayborder); */

  &.center {
    h2,
    .content {
      text-align: center;
    }
  }

  &.left {
    h2 {
      display: flex;
      align-items: center;
      width: 100%;
    }
    button {
      margin-left: auto;
      padding: 0 10px;
    }
  }

  h2 {
    width: 100%;
    color: var(--color-neutral10);
    font-size: var(--font-size8);
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  .content {
    width: 100%;

    p {
      margin-top: 0.4rem;
      font-size: var(--font-size4);
      line-height: var(--font-size7);
    }
  }
`;

const ButtonContainer = styled.div`
  padding: 0 2.4rem 2.4rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;

  button {
    width: 100%;
    padding: 1.6rem 0;
    font-size: 1.6rem;
    line-height: 1.35;
    border-radius: 0.4rem;
  }
`;

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  onFormSubmit,
  onCancel,
  disabledFormSubmit,
  submitButtonText = '확인',
  cancelButtonText = '취소',
  showCloseButton = false,
  showCancelButton = true,
  showButtons = true,
  children,
}) => {
  const modalContent = (
    <>
      <DimmedBackground
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // 배경 클릭 시 모달 닫힘
      />
      <motion.div
        initial={{ opacity: 0, x: '-50%', y: '-70%' }}
        animate={{ opacity: 1, x: '-50%', y: '-50%' }}
        exit={{ opacity: 0, x: '-50%', y: '-70%' }}
        transition={{ duration: 0.2 }}
        css={css`
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          min-width: 36rem;
          width: fit-width;
          background-color: white;
          border-radius: 12px;
          max-height: 100%;
          overflow-y: auto;
        `}
      >
        <HeaderContentContainer className={showCloseButton ? 'left' : 'center'}>
          {title && (
            <h2>
              {title}
              {showCloseButton && (
                <Button
                  type="button"
                  variant="transparent"
                  onClick={onClose}
                  IconOnly={
                    <IconViewArea size={24}>
                      <Cross size={24} />
                    </IconViewArea>
                  }
                  className="btn_close"
                >
                  <span className="hiddenZoneV">닫기</span>
                </Button>
              )}
            </h2>
          )}
          <div className="content">{children}</div>
        </HeaderContentContainer>
        {showButtons && (
          <ButtonContainer>
            {showCancelButton && (
              <Button variant="gostSecondary" onClick={onCancel}>
                {cancelButtonText}
              </Button>
            )}
            <Button
              type="button"
              disabled={disabledFormSubmit}
              onClick={onFormSubmit}
            >
              {submitButtonText}
            </Button>
          </ButtonContainer>
        )}
      </motion.div>
    </>
  );

  return (
    <Portal>
      <AnimatePresence>{isOpen && modalContent}</AnimatePresence>
    </Portal>
  );
};

export default Modal;
