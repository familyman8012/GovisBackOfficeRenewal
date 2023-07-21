import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@ComponentFarm/theme';
import Typo from '../Typo/Typo';

export interface ColorProps {
  bgColor: string;
  code?: number;
  hex?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  width: 6.5rem;
  height: 9.75rem;
`;

const ColorPreview = styled.div<ColorProps>`
  height: 5rem;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  background-color: ${props => theme.colors[props.bgColor]};
`;

const Content = styled.div`
  padding: 0 10px;
`;

const ColorBox = ({ color }: { color: ColorProps }) => {
  return (
    <Container>
      <ColorPreview bgColor={color.bgColor} />
      <Content>
        <Typo variant="md" weight="bold">
          {color.bgColor}
        </Typo>
        <Typo variant="md" color={theme.colors.gray500}>
          {color.hex}
        </Typo>
      </Content>
    </Container>
  );
};

export default ColorBox;
