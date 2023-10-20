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

        <h3>오리지널 페퍼로니</h3>
        <ul>
          <li className="score" />
        </ul>

        <p>Created Date: {dayjs().format('YYYY-MM-DD')}</p>
      </div>
      <div className="item">
        <div className="video-wrap">
          <Badge color="green" dot>
            검수완료
          </Badge>
          <video muted controls />
        </div>

        <h3>오리지널 페퍼로니</h3>
        <ul>
          <li className="score" />
        </ul>

        <p>Created Date: {dayjs().format('YYYY-MM-DD')}</p>
      </div>
    </VideoListStyle>
  );
};

export default VideoList;
