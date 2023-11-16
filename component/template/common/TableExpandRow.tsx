import React, { useState } from 'react';
import CircleUp from '@ComponentFarm/atom/icons/CircleUp';
import { ExpandRowStyle } from '../aistt/style';

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
