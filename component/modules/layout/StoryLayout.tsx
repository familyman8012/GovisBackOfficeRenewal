import React from 'react';
import { ThemeProvider, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@ComponentFarm/theme';

interface IStoryArgs {
  darkMode: boolean;
  children?: React.ReactNode;
  noPadding?: boolean;
  customCss?: SerializedStyles;
}

const Container = styled.div<{ darkMode: boolean }>`
  margin: -1rem;
  ${({ darkMode }) =>
    darkMode &&
    `
    background-color: #2D3748;
  `};
`;

const Content = styled.div<{
  noPadding?: boolean;
  customCss?: SerializedStyles;
}>`
  padding: ${({ noPadding }) => (noPadding ? '0' : '1rem')};
  ${({ customCss }) => customCss}
`;

const StoryLayout = ({
  darkMode,
  children,
  noPadding,
  customCss,
}: IStoryArgs) => {
  return (
    <ThemeProvider theme={theme as Theme}>
      <Container darkMode={darkMode}>
        <Content noPadding={noPadding} customCss={customCss}>
          {children}
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default StoryLayout;
