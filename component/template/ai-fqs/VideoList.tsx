import React from 'react';

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
    <div>
      {list.map((video, index) => (
        <div key={index}>
          <video muted src={video.video_url} controls />

          <h3>{video.store_name}</h3>
          <ul>
            <li className="tag">{video.score}</li>
          </ul>
          <p>Score: {video.score}</p>
          <p>Created Date: {video.created_date}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
