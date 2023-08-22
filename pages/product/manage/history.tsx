import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import { FormWrap, Table, TableWrap } from '@ComponentFarm/common';
import TitleArea from '@ComponentFarm/layout/TitleArea';

const pageStyle = css`
  &.basic tr:hover {
    background: none;
  }
  th {
    &:nth-of-type(1) {
      width: calc((320 / 1536) * 100%);
    }
    &:nth-of-type(2) {
      width: calc((150 / 1536) * 100%);
    }
    &:nth-of-type(3) {
      width: calc((250 / 1536) * 100%);
    }
    &:nth-of-type(4) {
      width: calc((200 / 1536) * 100%);
    }
    &:nth-of-type(5) {
      width: calc((596 / 1536) * 100%);
    }
  }
`;

const History = () => {
  const tabData = [
    {
      title: '제품상세',
    },
    {
      title: '레시피 정보',
      label: 'N',
    },
    {
      title: '원재료 정보',
      label: '8',
    },
    {
      title: '매장정보',
      label: '97',
    },
    {
      title: '변경내역',
      label: '6',
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const history = [
    {
      id: 1,
      date: '2023-07-26',
      people: '고피자',
      item: '판매 종료일',
      classification: '등록',
      detail: '없음 > 2023년 8월 31일',
    },
  ];

  return (
    <FormWrap>
      <TitleArea
        title="제품 상세 정보"
        BtnBox={<Button variant="gostSecondary">이전</Button>}
      />
      <Tabs
        tabs={tabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => setActiveTabIndex(index)}
      />
      <h2>제품 정보 변경 내역</h2>
      <TableWrap>
        <Table className="basic" css={pageStyle}>
          <thead>
            <tr>
              <th>변경일자</th>
              <th>처리자</th>
              <th>변경항목</th>
              <th>변경구분</th>
              <th>변경내용</th>
            </tr>
          </thead>
          <tbody>
            {history.map(el => (
              <tr key={el.id}>
                <td>{el.date}</td>
                <td>{el.people}</td>
                <td>{el.item}</td>
                <td>{el.classification}</td>
                <td>{el.detail}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrap>
    </FormWrap>
  );
};

export default History;
