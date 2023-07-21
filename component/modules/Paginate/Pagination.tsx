import React, { FC } from 'react';
import Pagination from 'react-js-pagination';
import { PaginationWrap } from './style';

export interface PaginationProps {
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  handlePageChange: (pageNumber: number) => void;
}

export const Paginate: FC<PaginationProps> = ({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  handlePageChange,
}) => {
  return (
    <PaginationWrap>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
        activeClass="active"
      />
    </PaginationWrap>
  );
};
