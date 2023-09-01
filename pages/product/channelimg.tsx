import React, { useState } from 'react';
import { runInAction } from 'mobx';
import Image from 'next/image';
import { css } from '@emotion/react';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Plus } from '@ComponentFarm/atom/icons';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import { FormWrap, Table, TableWrap } from '@ComponentFarm/common';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { confirmModalStore } from '@MobxFarm/store';

const pageStyle = css`
  &.basic tr:hover {
    background: none;
  }
  th {
    &:nth-of-type(1) {
      width: calc((150 / 1536) * 100%);
    }
    &:nth-of-type(2) {
      width: calc((800 / 1536) * 100%);
    }
    &:nth-of-type(3) {
      width: calc((300 / 1536) * 100%);
    }
    &:nth-of-type(4) {
      width: calc((286 / 1536) * 100%);
    }
  }
  td {
    padding: 2rem 0;
    &:nth-of-type(1) {
      text-align: center;

      .thumb {
        display: block;
        position: relative;
        width: 5.6rem;
        height: 5.6rem;
        margin: 0 auto;
      }
    }
  }
`;

const Channelimg = () => {
  const confirmModal = () => {
    runInAction(() => {
      confirmModalStore.openModal({
        title: '제품 이미지 등록 완료',
        content: <p>채널별 제품 이미지 등록이 완료되었습니다.</p>,
        onFormSubmit: () => {
          console.log('Form submitted!');
        },
        onCancel: () => {
          alert('aaa');
        },
        showCancelButton: false,
      });
    });
  };

  const tabData = [
    {
      title: '제품등록',
    },
    {
      title: '채널별 제품 이미지',
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [channelImg, setChannelImg] = useState([
    { id: 1, url: '', Name: 'POS', Resolution: '201 x 120' },
    { id: 2, url: '', Name: 'KIOSK', Resolution: '201 x 120' },
    { id: 3, url: '', Name: '배달의 민족', Resolution: '201 x 120' },
    { id: 4, url: '', Name: '요기요', Resolution: '201 x 120' },
    { id: 5, url: '', Name: '쿠팡이즈', Resolution: '201 x 120' },
    { id: 6, url: '', Name: '땡겨요', Resolution: '201 x 120' },
  ]);

  return (
    <FormWrap>
      <TitleArea
        title="제품 등록"
        BtnBox={
          <>
            <Button variant="gostSecondary">취소</Button>
            <Button type="button" onClick={confirmModal}>
              저장
            </Button>
          </>
        }
      />
      <Tabs
        tabs={tabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => setActiveTabIndex(index)}
      />
      <h2>채널별 제품 이미지 목록</h2>
      <TableWrap>
        <Table className="basic" css={pageStyle}>
          <thead>
            <tr>
              <th>
                <span className="hiddenZoneV">썸네일 이미지</span>
              </th>
              <th>채널명</th>
              <th>해상도</th>
              <th>이미지 등록</th>
            </tr>
          </thead>
          <tbody>
            {channelImg.map(el => (
              <tr key={el.id}>
                <td>
                  <span className="thumb">
                    <Image
                      src="/images/product/manage/channel/thumb_default.svg"
                      fill
                      alt="기본 이미지"
                    />
                  </span>
                </td>
                <td>{el.Name}</td>
                <td>{el.Resolution}</td>
                <td>
                  <Button variant="gostSecondary" LeadingIcon={<Plus />}>
                    이미지 추가
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrap>
    </FormWrap>
  );
};

export default Channelimg;
