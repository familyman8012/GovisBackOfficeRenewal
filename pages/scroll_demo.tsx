import React from 'react';
import { css } from '@emotion/react';
import InfinityVirtualizedTable from '@ComponentFarm/modules/VirtualizedTable/Infinity';
import OneDataTable from '@ComponentFarm/modules/VirtualizedTable/oneDataTable';

const ScrollDemo = () => {
  return (
    <div
      css={css`
        p {
          margin-left: 10px;
          color: #ababab;
          margin-bottom: 50px;
        }
      `}
    >
      <div>
        <InfinityVirtualizedTable />
        <p>Infinity Scroll 적용에제</p>
      </div>
      <div>
        <OneDataTable />
        <p>데이터 한번에 불러왔을때.</p>
      </div>
    </div>
  );
};

export default ScrollDemo;
