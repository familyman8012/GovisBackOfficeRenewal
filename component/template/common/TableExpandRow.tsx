import React, { useState } from 'react';
import styled from '@emotion/styled';
import CircleUp from '@ComponentFarm/atom/icons/CircleUp';

const ExpandRowStyle = styled.tr`
  & ~ tr.expand-content > td {
    padding: 0 !important;
  }

  & ~ tr.expand-content:hover {
    background-color: transparent !important;
  }

  td:first-of-type {
    padding: 0;
  }

  .dropdown-btn {
    width: 2.4rem;
    height: 2.4rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    background-color: transparent;
    cursor: pointer;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

interface Props {
  show?: boolean;
  content?: React.ReactNode;
}

const TableExpandRow = ({
  show = false,
  content,
  children,
}: React.PropsWithChildren<Props>) => {
  const [expanded, setExpanded] = useState(show);

  const toggleExpand = () => setExpanded(val => !val);

  return (
    <>
      <ExpandRowStyle onClick={toggleExpand}>
        <td className="right">
          <button type="button" className="dropdown-btn">
            <CircleUp transform={`rotate(${expanded ? 180 : 90})`} />
          </button>
        </td>
        {children}
      </ExpandRowStyle>
      {expanded && (
        <tr className="expand-content">
          <td colSpan={React.Children.count(children) + 1}>{content}</td>
        </tr>
      )}
    </>
  );
};

export default TableExpandRow;
