/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { IoAlertCircleOutline } from 'react-icons/io5';
import Skeleton from 'react-loading-skeleton';
import { css } from '@emotion/react';
import ExportButton from '@ComponentFarm/modules/ExportButton/ExportButton';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import { IOption, Select } from '@ComponentFarm/atom/Select/Select';
import useQueryParams from '@HookFarm/useQueryParams';
import { AddTab, AreaBox } from './AreaBox';

const meta: Meta = {
  title: 'TEMPLATE/AreaBox',
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

const StoryAreaBox: Story<Props> = args => {
  return (
    <StoryLayout
      {...args}
      customCss={css`
        /* display: flex; */
        & > div + div {
          margin-top: 1rem; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
      <AreaBox title="전체 제품판매 현황" moreLink="/">
        <br />
      </AreaBox>
    </StoryLayout>
  );
};
export const Default = StoryAreaBox.bind({});

const StoryAreaBox2: Story<Props> = args => {
  const [params] = useQueryParams({
    type: 'hourly',
  });
  return (
    <StoryLayout
      {...args}
      customCss={css`
        /* display: flex; */
        & > div + div {
          margin-top: 1rem; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
      <AreaBox
        title="분석 결과"
        addFunc={
          <>
            <Button>입력 완료</Button>
          </>
        }
      >
        asdsa
      </AreaBox>
      <AreaBox
        title="판매 제품 수"
        className="noPadding"
        addFunc={
          <ExportButton
            params={params}
            endPoint="/analytics/product/sales/export/order_raw_data"
            title="판매 제품 수"
          />
        }
      >
        afsdf
      </AreaBox>
    </StoryLayout>
  );
};
export const AddFunc = StoryAreaBox2.bind({});

const StoryAreaBox6: Story<Props> = args => {
  const options: IOption[] = [
    {
      value: 'hourly',
      label: '시간순',
    },
    {
      value: 'daily',
      label: '일별순',
    },
    {
      value: 'weekly',
      label: '주간순',
    },
    {
      value: 'monthly',
      label: '월별순',
    },
  ];

  const [selectedOption] = useState(options[0]);
  // eslint-disable-next-line no-unused-vars
  const [params, updateParams] = useQueryParams({
    type: 'hourly',
  });

  return (
    <StoryLayout
      {...args}
      customCss={css`
        /* display: flex; */
        & > div + div {
          margin-top: 1rem; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
      <AreaBox
        title="전체 제품 판매 현황"
        addFunc={
          <div
            css={css`
              margin-left: auto;
            `}
          >
            <Select
              options={options}
              selectedOption={selectedOption}
              setSelectedOption={option => updateParams({ type: option.value })}
              isSearchable={false}
              prefixLabel="분류"
            />
          </div>
        }
      >
        {' '}
        <Empty Icon={<IoAlertCircleOutline size={42} />}>
          해당 조회 조건의 판매 수가 없습니다.
        </Empty>
      </AreaBox>
    </StoryLayout>
  );
};
export const AddFunc2 = StoryAreaBox6.bind({});

const StoryAreaBox4: Story<Props> = args => {
  return (
    <StoryLayout
      {...args}
      customCss={css`
        /* display: flex; */
        & > div + div {
          margin-top: 1rem; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
      <AreaBox title="지역별 제품 판매 현황" className="noPadding">
        <Skeleton height="30rem" baseColor="#fcfcfc" />
      </AreaBox>
    </StoryLayout>
  );
};
export const NoPadding = StoryAreaBox4.bind({});

const StoryAreaBox3: Story<Props> = args => {
  return (
    <StoryLayout
      {...args}
      customCss={css`
        /* display: flex; */
        & > div + div {
          margin-top: 1rem; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
      <AreaBox
        title=""
        className="noPadding"
        css={css`
          .box_head {
            margin-bottom: 0 !important;
          }
          padding: 5rem 0 !important;
        `}
      >
        <Empty Icon={<IoAlertCircleOutline size={42} />}>
          개선 필요 요인이 없습니다.
        </Empty>
      </AreaBox>
    </StoryLayout>
  );
};
export const NoPadding2 = StoryAreaBox3.bind({});

const StoryAreaBox5: Story<Props> = args => {
  const [statusSelect, setstatusSelect] = useState(0);

  return (
    <StoryLayout
      {...args}
      customCss={css`
        /* display: flex; */
        & > div + div {
          margin-top: 1rem; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
      <AreaBox
        title="제조 현황"
        className="underline tab"
        css={css`
          margin-top: 3.2rem;
        `}
        addFunc={
          <AddTab>
            {['제조 품질', '평균 제조 시간'].map((el, i: number) => (
              <li key={i} className={i === statusSelect ? 'on' : ''}>
                <button type="button" onClick={() => setstatusSelect(i)}>
                  {el}
                </button>
              </li>
            ))}
          </AddTab>
        }
      >
        {statusSelect === 0 ? <div>Content1</div> : <div>Content2</div>}
      </AreaBox>
    </StoryLayout>
  );
};
export const Tab = StoryAreaBox5.bind({});
