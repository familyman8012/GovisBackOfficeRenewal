import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';

export interface EmptyProps {
  Icon?: ReactElement;
}

const EmptyWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--color-neutral50);
  min-height: 10vmax;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 400;
  line-height: 1.2;
  min-height: 13.3rem;
  text-align: center;

  p {
    margin-top: 1rem;
    font-size: 1.4rem;
    text-align: center;
  }
`;

const Empty: FC<React.PropsWithChildren<EmptyProps>> = ({ Icon, children }) => {
  const IconSvg = Icon?.type;
  return (
    <EmptyWrap>
      {IconSvg && <IconSvg {...Icon.props} />}
      <p>{children ?? '데이터가 없습니다.'}</p>
    </EmptyWrap>
  );
};

export default Empty;
