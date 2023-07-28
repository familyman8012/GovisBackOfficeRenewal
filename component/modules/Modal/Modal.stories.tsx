import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Modal from './Modal';

const meta: Meta = {
  title: 'MODULES/Modal',
  tags: ['autodocs'],
  args: {
    Desc: {
      usages: `labe에는 th에 들어갈 텍스트, renderCell에는 각 data 들을 연결해주면 됨, customStyle에는 전체 colwidth 를 배열의 첫번째요소, 두번째요소는 첫행, 마지막행을 제외한 stickyColoumn의 left 혹은 right 값, 세번째, 네번째는 그라데이션을 나타나게 할 열`,
    },
  },
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
      source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};

export default meta;

type ModalButtonProps = {
  children: React.ReactNode;
};

interface Props extends ModalButtonProps {
  darkMode: boolean;
}

const StoryModal: Story<Props> = (args, children) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handlerClose = () => {
    setIsOpen(false);
  };

  return (
    <StoryLayout
      {...args}
      customCss={css`
        height: 500px;
      `}
    >
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={handlerClose}>
        <p>This is my modal content.</p>
      </Modal>
    </StoryLayout>
  );
};
export const Default = StoryModal.bind({});
