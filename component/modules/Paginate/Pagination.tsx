import React, { FC } from 'react';
import { default as PaginationLibrary } from 'react-js-pagination';
import { PaginationWrap } from './style';

export interface PaginationProps {
  pageInfo: number[];
  totalCount: number;
  handlePageChange: (pageNumber: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  pageInfo,
  totalCount,
  handlePageChange,
}) => {
  return (
    <PaginationWrap>
      <PaginationLibrary
        activePage={pageInfo[0]}
        itemsCountPerPage={pageInfo[1]}
        totalItemsCount={totalCount}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
        activeClass="active"
      />
    </PaginationWrap>
  );
};
