import React, { FC, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Cross } from '@ComponentFarm/atom/icons';
import { IconViewArea } from '@ComponentFarm/common';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  onFormSubmit?: () => void;
  showCloseButton?: boolean;
  showCancelButton?: boolean;
  children?: ReactNode;
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
  border-bottom: 1px solid var(--color-grayborder);

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
    font-size: var(--font-size6);
    font-weight: bold;
    line-height: var(--font-size9);
  }

  .content {
    margin-top: 0.4rem;
    font-size: var(--font-size4);
    line-height: var(--font-size7);
  }
`;

const ButtonContainer = styled.div`
  padding: 24px;
  display: flex;
  gap: 1.2rem;
  justify-content: center;

  button {
    width: 100%;
    padding: 1rem 1.6rem;
    font-size: 1.6rem;
  }
`;

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  onFormSubmit,
  showCloseButton = false,
  showCancelButton = true,
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
          min-width: 31.2rem;
          width: fit-width;
          background-color: white;
          border-radius: 12px;
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
                      <Cross />
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
        <ButtonContainer>
          {showCancelButton && (
            <Button variant="gostSecondary" onClick={onClose}>
              취소
            </Button>
          )}
          <Button type="button" onClick={onFormSubmit}>
            확인
          </Button>
        </ButtonContainer>
      </motion.div>
    </>
  );

  return typeof window !== 'undefined'
    ? createPortal(
        <AnimatePresence>{isOpen && modalContent}</AnimatePresence>,
        document.body
      )
    : null;
};

export default Modal;
