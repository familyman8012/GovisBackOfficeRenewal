import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';

export interface EmptyProps {
  Icon?: ReactElement;
}

const EmptyWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #bdbdbd;
  min-height: 10vmax;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
`;

const Empty: FC<EmptyProps> = ({ Icon }) => {
  const IconSvg = Icon?.type;
  return (
    <EmptyWrap>
      {IconSvg && <IconSvg {...Icon.props} />}
      <p>데이터가 없습니다.</p>
    </EmptyWrap>
  );
};

export default Empty;
