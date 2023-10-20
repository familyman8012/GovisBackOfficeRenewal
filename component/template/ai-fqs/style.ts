import styled from '@emotion/styled';

export const AnalysisPageStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: -1.2rem;
  padding: 1.2rem;
  gap: 1.2rem;
  .item {
    display: flex;
    flex-direction: column;
    width: 25%;
  }

  .video-wrap {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;

    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .badge {
      position: absolute;
      z-index: 2;
      top: 1rem;
      right: 1rem;
    }
  }
`;
