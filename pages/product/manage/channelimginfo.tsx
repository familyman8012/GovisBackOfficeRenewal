import React, { useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Export } from '@ComponentFarm/atom/icons';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import { FormWrap, Table, TableWrap } from '@ComponentFarm/common';
import TitleArea from '@ComponentFarm/layout/TitleArea';

const pageStyle = css`
  &.basic tr:hover {
    background: none;
  }
  th {
    &:nth-of-type(1) {
      width: calc((150 / 1536) * 100%);
    }
    &:nth-of-type(2) {
      width: calc((400 / 1536) * 100%);
    }
    &:nth-of-type(3) {
      width: calc((200 / 1536) * 100%);
    }
    &:nth-of-type(4) {
      width: calc((260 / 1536) * 100%);
    }
    &:nth-of-type(5) {
      width: calc((260 / 1536) * 100%);
    }
    &:nth-of-type(6) {
      width: calc((266 / 1536) * 100%);
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
  const tabData = [
    {
      title: '제품등록',
    },
    {
      title: '채널별 제품 이미지',
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [channelImg, setChannelImg] = useState<any>([
    {
      id: 1,
      url: '',
      Name: 'POS',
      Resolution: '201 x 120',
      regDate: '2023-07-23',
      modDate: '2023-07-23',
    },
    {
      id: 2,
      url: '',
      Name: 'KIOSK',
      Resolution: '201 x 120',
      regDate: '2023-07-23',
      modDate: '2023-07-23',
    },
    {
      id: 3,
      url: '',
      Name: '배달의 민족',
      Resolution: '201 x 120',
      regDate: '2023-07-23',
      modDate: '2023-07-23',
    },
    {
      id: 4,
      url: '',
      Name: '요기요',
      Resolution: '201 x 120',
      regDate: '2023-07-23',
      modDate: '2023-07-23',
    },
    {
      id: 5,
      url: '',
      Name: '쿠팡이즈',
      Resolution: '201 x 120',
      regDate: '2023-07-23',
      modDate: '2023-07-23',
    },
    {
      id: 6,
      url: '',
      Name: '땡겨요',
      Resolution: '201 x 120',
      regDate: '2023-07-23',
      modDate: '2023-07-23',
    },
  ]);

  const handlerTemp = () => {
    setChannelImg({
      url: '',
      Name: 'POS',
      Resolution: '201 x 120',
      regDate: '2023-07-23',
      modDate: '2023-07-23',
    });
  };

  return (
    <FormWrap>
      <TitleArea
        title="제품 등록"
        BtnBox={
          <Button variant="gostSecondary" onClick={handlerTemp}>
            이전
          </Button>
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
              <th>등록일</th>
              <th>수정일</th>
              <th>
                <span className="hiddenZoneV">이미지 다운로드</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {channelImg.map((el: any) => (
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
                <td>{el.regDate}</td>
                <td>{el.modDate}</td>
                <td>
                  <Button variant="gostSecondary" LeadingIcon={<Export />}>
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
