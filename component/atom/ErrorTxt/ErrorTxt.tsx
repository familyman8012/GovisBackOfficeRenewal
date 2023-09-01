import React, { FC } from 'react';
import styled from '@emotion/styled';

export interface ErrorTxtProps {
  children: React.ReactNode;
}

const ErrorTxtWrap = styled.p`
  width: max-content;
  margin-top: 10px;
  color: red;
`;

const ErrorTxt: FC<ErrorTxtProps> = ({ children }) => {
  return <ErrorTxtWrap>{children}</ErrorTxtWrap>;
};

export default ErrorTxt;
