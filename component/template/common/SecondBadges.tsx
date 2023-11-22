import dayjs from 'dayjs';
import styled from '@emotion/styled';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';

interface Props {
  beforeSecond: number; // 1 = 1second
  afterSecond: number; // 1 = 1second
  onClickSecond?: (beforeSecond: number, afterSecond: number) => void;
}

const SecondBadgeStyle = styled.div`
  display: inline-flex;
  align-items: center;

  .gt {
    display: inline-flex;
    margin: 0 0.7rem;
    width: 1.6rem;
    height: 1.6rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'%3E%3Cpath d='M7 11L10 8L7 5' stroke='%23868FA0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-size: 100% 100%;
    vertical-align: middle;
  }
`;

const SecondBadges = ({ beforeSecond, afterSecond, onClickSecond }: Props) => {
  return (
    <SecondBadgeStyle
      role="button"
      tabIndex={0}
      className="video-second-tags"
      onClick={e => {
        e.stopPropagation();
        onClickSecond?.(beforeSecond, afterSecond);
      }}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          onClickSecond?.(beforeSecond, afterSecond);
        }
      }}
    >
      <Badge color="gray" size="sm">
        {dayjs.unix(beforeSecond).format('mm:ss')}
      </Badge>
      <span className="gt" />
      <Badge color="gray" size="sm">
        {dayjs.unix(afterSecond).format('mm:ss')}
      </Badge>
    </SecondBadgeStyle>
  );
};

export default SecondBadges;
