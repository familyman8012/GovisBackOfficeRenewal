// components/StickyTable.js
import React, { SyntheticEvent } from 'react';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import styled from '@emotion/styled';

const StickyTableWrap = styled.div`
  overflow-x: auto; /* 테이블이 너무 넓어지면 스크롤바가 생깁니다 */
  overflow-y: auto;
  max-width: 100%;
  height: 500px;

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    width: 200px;

    text-align: left;
    padding: 8px;
  }

  .stickyColumn {
    position: sticky;
    left: 0;
    background-color: #f9f9f9;
    z-index: 2;

    &:nth-of-type(2) {
      left: 200px;
    }
  }
  /* 상단 헤더 고정 */
  thead th {
    position: sticky;
    top: 0;
    background-color: #f9f9f9;
    z-index: 2; /* 매장명과 합계 컬럼보다 높은 z-index 값을 주어 상단에 고정 */

    &.stickyColumn {
      z-index: 3;
    }
  }
`;

const fetchDates = async ({ pageParam = 1 }) => {
  // Next.js API 라우트를 호출합니다. 여기서는 페이지 번호를 쿼리 파라미터로 전달합니다.
  const res = await axios.get(`/api/dates?page=${pageParam}`);
  // 응답 데이터를 반환합니다.
  // getNextPageParam 함수에서 사용할 수 있도록, 다음 페이지 정보도 함께 반환합니다.
  return res.data;
};

const StickyTable = () => {
  // 예제 데이터

  const stores = Array.from({ length: 150 }, (_, index) => `매장${index + 1}`);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery('dates', fetchDates, {
      getNextPageParam: (lastPage, pages) => lastPage.nextPage,
    });

  const dates = data?.pages.flatMap(page => page.dates) ?? [];

  // 스크롤 이벤트 핸들러
  const handleScroll = (e: SyntheticEvent) => {
    const { scrollLeft, clientWidth, scrollWidth } = e.currentTarget;
    // 가로 스크롤이 거의 끝에 도달했는지 확인합니다.
    if (
      scrollWidth - scrollLeft <= clientWidth * 1.5 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage(); // 다음 페이지 데이터를 불러옵니다.
    }
  };

  return (
    <StickyTableWrap onScroll={handleScroll}>
      <table>
        <thead>
          <tr>
            <th className="stickyColumn">매장명</th>
            <th className="stickyColumn">합계</th>
            {dates.map(date => (
              <th key={date}>{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stores.map(store => (
            <tr key={store}>
              <td className="stickyColumn">{store}</td>
              <td className="stickyColumn">합계 데이터</td>
              {dates.map(date => (
                <td key={date}>4,118,700</td> // 실제 데이터로 채울 부분
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StickyTableWrap>
  );
};

export default StickyTable;
