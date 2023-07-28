import React, { FC, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { css } from '@emotion/react';
import { Button } from '@ComponentFarm/atom/Button/Button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const ModalPop = (
    <>
      <AnimatePresence>
        {isOpen && (
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
              width: fit-width;
              height:;
              background-color: white;
              padding: 1em;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            `}
          >
            {children}
            <Button
              variant="primary"
              onClick={onClose}
              style={{ position: 'absolute', top: '10px', right: '10px' }}
            >
              x
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
  return typeof window !== 'undefined'
    ? createPortal(ModalPop, document.body)
    : null;
};

export default Modal;
