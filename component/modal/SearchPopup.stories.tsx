import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { Button } from '@ComponentFarm/atom/Button/Button';
import SearchPopup from './SearchPopup';

const meta: Meta = {
  title: 'Modal/SearchPopup',
  tags: ['autodocs'],
  args: {
    TotalProps: {
      props: ``,
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

interface Props {
  darkMode: boolean;
}

const ResultTempArr = [
  {
    id: 0,
    kind: '피자',
    name: '오리지널 페페로니 피자',

    state: 'op',
  },
  {
    id: 1,
    kind: '피자',
    name: '베이컨 포테이토 피자',

    state: 'op',
  },
  {
    id: 2,
    kind: '피자',
    name: '매니악 페로니 피자',

    state: 'st',
  },
  {
    id: 3,
    kind: '피자',
    name: '매니악 페로니 피자',

    state: 'st',
  },
  {
    id: 4,
    kind: '피자',
    name: '매니악 페로니 피자',

    state: 'st',
  },
];

const StoryStorePopup: Story<Props> = args => {
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
      <div>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Store Modal
        </Button>
        <SearchPopup
          data={ResultTempArr}
          isOpen={isOpen}
          onClose={handlerClose}
        />
      </div>
    </StoryLayout>
  );
};
export const Default = StoryStorePopup.bind({});

const ResultTempArr2 = [
  {
    id: 0,
    kind: '시가지',
    name: '광화문',
    date: '2023-10-20',
    state: 'op',
  },
  {
    id: 1,
    kind: '시가지',
    name: '강남점',
    date: '2023-10-20',
    state: 'op',
  },
  {
    id: 2,
    kind: '직영점',
    name: '홍대점',
    date: '2023-10-20',
    state: 'st',
  },
  {
    id: 3,
    kind: '직영점',
    name: '개봉점',
    date: '2023-10-20',
    state: 'st',
  },
  {
    id: 4,
    kind: 'X-GOPIZZA',
    name: '철산점',
    date: '2023-10-20',
    state: 'st',
  },
];

const columnName = {
  searchBoxTitle: ['매장 상태', '매장 분류'],
  th: ['매장 분류', '매장명', '매장 오픈일', '매장 상태'],
  col: [46, 130, 100, 190, 180],
};

const StoryStorePopup2: Story<Props> = args => {
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
      <div>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Store Modal
        </Button>
        <SearchPopup
          title="매장 검색"
          columnName={columnName}
          data={ResultTempArr2}
          isOpen={isOpen}
          onClose={handlerClose}
        />
      </div>
    </StoryLayout>
  );
};
export const Default2 = StoryStorePopup2.bind({});

const StoryStorePopup3: Story<Props> = args => {
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
      <div>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Store Modal
        </Button>
        <SearchPopup
          title="매장 검색"
          type="radio"
          columnName={columnName}
          data={ResultTempArr2}
          isOpen={isOpen}
          onClose={handlerClose}
        />
      </div>
    </StoryLayout>
  );
};
export const RadioSty = StoryStorePopup3.bind({});
