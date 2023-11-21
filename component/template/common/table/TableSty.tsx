import React from 'react';
import styled from '@emotion/styled';

export const GrayUnderLineTable = styled.table`
  width: 100%;

  th {
    padding: 1.6rem;
    text-align: center;
    color: var(--color-gray7);
    font-family: Pretendard;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 120%; /* 1.56rem */

    &:first-of-type {
      text-align: left;
    }
  }
  td {
    padding: 0 1;
    height: 7.8rem;
    text-overflow: ellipsis;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 110%;
    border-top: 1px solid var(--color-neutral90);
    border-bottom: 1px solid var(--color-neutral90);

    &:first-of-type {
      text-align: left;
    }

    &.no {
      color: var(--color-gray8);
    }

   
`;

export const TableSty2 = () => {
  return (
    <GrayUnderLineTable>
      <thead>
        <tr>
          <td>
            <span className="hiddenZoneV">NO.</span>
          </td>
          <td>
            <span className="hiddenZoneV">time</span>
          </td>
          <td>비교일 판매</td>
          <td>기준일 판매</td>
          <td>증감율</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>01:00</td>
          <td>113개</td>
          <td>113개</td>
          <td>10개 ( +11% )</td>
        </tr>
      </tbody>
    </GrayUnderLineTable>
  );
};
