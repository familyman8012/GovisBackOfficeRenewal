import styled from '@emotion/styled';

export const AnalysisPageStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 3.2rem -1.2rem 0;
  padding: 1.2rem;
  gap: 1.2rem;

  .item {
    display: flex;
    flex-direction: column;
    width: 25%;
    border-radius: 0.8rem;
    border: 1px solid var(--color-neutral90);
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

  .info-wrap {
    padding: 2.4rem;

    h3 {
      font-size: 2.4rem;
      line-height: 1.1;
      font-weight: bold;
    }

    .score {
      display: inline-flex;
      font-size: 1.4rem;
      padding: 0.2rem 0.4rem;
      color: var(--color-orange60);
      background-color: var(--color-gray3);
      margin: 1rem 0 1.6rem;
      border-radius: 0.2rem;
    }

    ul {
      margin-bottom: 2.2rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 120%;
    }

    p + p {
      margin-top: 1rem;
    }
  }
`;
