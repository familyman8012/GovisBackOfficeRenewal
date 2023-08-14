import styled from '@emotion/styled';

const flexPositions = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
} as const;

export const ListHandlerStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3.2rem 0;
  gap: 1.6rem;

  .group {
    display: flex;
    flex-wrap: wrap;
    gap: 0 1.6rem;
  }

  .divider {
    flex: none;
    width: 100%;
    height: 0;
    margin: 0.8rem 0;
  }

  ${Object.entries(flexPositions).map(
    ([key, val]) => `&.justify-${key} { justify-content: ${val}; }`
  )}

  ${Object.entries(flexPositions).map(
    ([key, val]) => `&.align-${key} { align-items: ${val}; }`
  )}
`;
