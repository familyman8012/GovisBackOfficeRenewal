import React from 'react';
import dayjs from 'dayjs';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { VideoListStyle } from './style';

type VideoListProps = {
  list: {
    video_url: string;
    store_name: string;
    menu_name: string;
    score: number;
    created_date: string;
  }[];
};

const VideoList: React.FC<VideoListProps> = ({ list }) => {
  return (
    <VideoListStyle>
      <div className="item">
        <div className="video-wrap">
          <Badge color="green" dot>
            검수완료
          </Badge>
          <video muted controls />
        </div>
        <div className="info-wrap">
          <h3>오리지널 페퍼로니</h3>
          <ul>
            <li className="score">100점</li>
          </ul>
          <p>평촌학원가점</p>
          <p>제조일자 {dayjs().format('YYYY-MM-DD')}</p>
        </div>
      </div>
    </VideoListStyle>
  );
};

export default VideoList;
