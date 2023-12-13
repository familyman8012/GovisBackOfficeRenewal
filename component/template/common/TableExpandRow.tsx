import React, { useCallback, useState } from 'react';
import CircleUp from '@ComponentFarm/atom/icons/CircleUp';
import { ExpandRowStyle } from '../aistt/style';

interface Props {
  show?: boolean;
  content?: React.ReactNode;
  onExpand?: () => void;
}

const TableExpandRow = ({
  show = false,
  content,
  onExpand,
  children,
}: React.PropsWithChildren<Props>) => {
  const [expanded, setExpanded] = useState(show);

  const toggleExpand = useCallback(() => {
    if (!expanded && onExpand) {
      onExpand(); // 확장될 때 onExpand 함수 호출
    }
    setExpanded(val => !val);
  }, [expanded, onExpand]);

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
