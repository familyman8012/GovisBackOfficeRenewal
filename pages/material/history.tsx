import React from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { FormWrap, Table, TableWrap } from '@ComponentFarm/common';
import DetailPageLayout from '@ComponentFarm/layout/Product/DetailPageLayout';
import { tabDataFunc } from '@ComponentFarm/template/product/material/const';

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
  const router = useRouter();
  const tabData = tabDataFunc('view', router?.query);
  const history = [
    {
      id: 1,
      date: '2023-07-26',
      people: '고피자',
      item: '원재료 상태',
      classification: '변경',
      detail: '운영 > 중단',
    },
  ];

  return (
    <DetailPageLayout title="원재료 상세 정보" tabData={tabData}>
      <FormWrap>
        <h2>원재료 변경 내역</h2>
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
    </DetailPageLayout>
  );
};

export default History;
