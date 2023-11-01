import DataFilled from '@ComponentFarm/atom/icons/DataFilled';
import Pic from '@ComponentFarm/atom/icons/Pic';
import { ExpandRowStyle } from './style';

interface Props {
  show?: boolean;
  colSpan?: number;
  imageContent?: React.ReactNode;
  dataContent?: React.ReactNode;
}

const TableExpandRow = ({
  show,
  colSpan,
  imageContent,
  dataContent,
}: Props) => {
  return (
    show && (
      <ExpandRowStyle className="empty">
        <td colSpan={colSpan}>
          <div className="wrap">
            <ul className="">
              <li>
                <span className="ico">
                  <Pic />
                </span>
                <div className="cont">{imageContent}</div>
              </li>
              <li className="hide-line">
                <span className="ico">
                  <DataFilled />
                </span>
                <div className="cont">{dataContent}</div>
              </li>
            </ul>
          </div>
        </td>
      </ExpandRowStyle>
    )
  );
};

export default TableExpandRow;
