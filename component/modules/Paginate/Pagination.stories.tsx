/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Pagination from 'react-js-pagination';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import useQueryParams from '@HookFarm/useQueryParams';
import { PaginationProps } from './Pagination';
import { PaginationWrap } from './style';

// Create a client

const meta: Meta = {
  title: 'Modules/Pagination',
  tags: ['autodocs'],
  args: {
    Desc: `기본 라브리 사용, 실사용시 totalItemsCount에는 data?.count 등 count값`,
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

interface Props extends PaginationProps {
  darkMode: boolean;
}

const StoryPagination: Story<Props> = args => {
  const [params, updateParams] = useQueryParams({
    page: 1,
    size: 10,
    search_type: 0,
  });
  const handlePageChange = (pageNumber: number) => {
    updateParams({ page: pageNumber });
  };

  return (
    <StoryLayout {...args}>
      <PaginationWrap>
        <Pagination
          activePage={Number(params.page)}
          itemsCountPerPage={Number(params.size)}
          totalItemsCount={100}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
          activeClass="active"
        />
      </PaginationWrap>
    </StoryLayout>
  );
};
export const Default = StoryPagination.bind({});

Default.args = {
  darkMode: false,
};

Default.parameters = {
  controls: { exclude: ['setPageNumber'] },
};
