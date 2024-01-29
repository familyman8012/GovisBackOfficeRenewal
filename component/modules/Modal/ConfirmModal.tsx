import { runInAction } from 'mobx';
import { observer } from 'mobx-react';
import useIsomorphicLayoutEffect from '@HookFarm/useIsomorphicLayoutEffect';
import { confirmModalStore } from '@MobxFarm/store';
import Modal from './Modal';

const ConfirmModal = () => {
  const onClose = () => {
    if (typeof confirmModalStore.onClose === 'function') {
      confirmModalStore.onClose();
    } else {
      runInAction(() => {
        confirmModalStore.closeModal();
      });
    }
  };

  const onCancel = () => {
    if (typeof confirmModalStore.onCancel === 'function') {
      confirmModalStore.onCancel();
    } else {
      runInAction(() => {
        confirmModalStore.closeModal();
      });
    }
  };

  useIsomorphicLayoutEffect(() => {
    if (!confirmModalStore.isOpen) return () => {};

    const handlekeydown = (e: KeyboardEvent) => {
      if (e.repeat) return;

      switch (e.key) {
        // ESC 클릭시 onClose 효과
        case 'Escape':
          onClose();
          break;
        case 'Enter':
          confirmModalStore.onFormSubmit();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handlekeydown);

    return () => document.removeEventListener('keydown', handlekeydown);
  }, [confirmModalStore.isOpen]);

  return (
    <Modal
      isOpen={confirmModalStore.isOpen}
      title={confirmModalStore.title}
      onClose={onClose}
      onCancel={onCancel}
      onFormSubmit={confirmModalStore.onFormSubmit}
      submitButtonText={confirmModalStore.submitButtonText}
      cancelButtonText={confirmModalStore.cancelButtonText}
      showCloseButton={confirmModalStore.showCloseButton}
      showCancelButton={confirmModalStore.showCancelButton}
      showButtons={confirmModalStore.showButtons}
    >
      {confirmModalStore.content}
    </Modal>
  );
};

export default observer(ConfirmModal);
