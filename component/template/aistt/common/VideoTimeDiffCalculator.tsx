/**
 * 비디오 프레임 간의 시간 차이를 OCR을 사용하여 계산합니다.
 */
import React from 'react';
import styled from '@emotion/styled';
import { getTimeWithOCR, getVideoFrame } from '@UtilFarm/videoOCR';

export type VideoTimeDiff = {
  time: number;
  videoTime: number;
  diff: number;
};

const VideoTimeDiffWrap = styled.div`
  position: absolute;
  pointer-events: none;
  width: 0;
  height: 0;
  overflow: hidden;
  z-index: -1;
  opacity: 0;

  &.debug {
    position: relative;
    pointer-events: auto;
    width: 640px;
    height: auto;
    opacity: 1;
    z-index: auto !important;
  }
`;

interface Props {
  videoSrc?: string;
  debug?: boolean;
  onLoaded: (data: VideoTimeDiff[]) => void;
  onError?: (error: Error) => void;
}

const FRAME_COUNT = 4 as const;

async function* frameAsyncIterable(
  totalDuration: number,
  video: HTMLVideoElement,
  canvas: HTMLCanvasElement
) {
  const cycle = totalDuration / FRAME_COUNT;

  for (let i = FRAME_COUNT; i >= 0; i -= 1) {
    // eslint-disable-next-line no-await-in-loop
    const dataURL = await getVideoFrame(cycle * i, video, canvas);
    yield { time: Math.min(cycle * i, totalDuration), dataURL };
  }
}

// 비디오 전체시간의 FRAME_COUNT 수 만큼 분할하여 프레임 시간을 구함
const getFrameListByDuration = async (
  totalDuration: number,
  video: HTMLVideoElement,
  canvas: HTMLCanvasElement
) => {
  const arr = [];
  // eslint-disable-next-line no-restricted-syntax
  for await (const data of frameAsyncIterable(totalDuration, video, canvas)) {
    arr.push(data);
  }

  return arr;
};

const VideoTimeDiffCalculator = ({
  videoSrc,
  debug,
  onLoaded,
  onError,
}: Props) => {
  const ref = React.useRef<HTMLVideoElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  // 최초 비디오 로드시 OCR을 통해 시간정보를 추출 후 상위 컴포넌트로 전달
  const onInitialize = React.useCallback(async () => {
    const video = ref.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    canvas.width = 160;
    canvas.height = 32;

    const frameList = await getFrameListByDuration(
      video.duration,
      video,
      canvas
    );

    const timeDiffInfoList = await Promise.all(
      frameList.map(async data => {
        const timeSecond = await getTimeWithOCR(
          data?.dataURL ?? '',
          data.time,
          video.duration
        );

        if (typeof timeSecond !== 'number') return null;

        return {
          time: data.time,
          videoTime: timeSecond,
          diff: timeSecond - data.time,
        };
      })
    ).catch(error => {
      onError?.(error);
    });

    onLoaded(
      (timeDiffInfoList?.filter(item => item !== null) ?? []) as VideoTimeDiff[]
    );
  }, [onLoaded, onError]);

  return (
    <VideoTimeDiffWrap className={debug ? 'debug' : ''}>
      <video
        key={videoSrc}
        ref={ref}
        src={videoSrc}
        width={640}
        height={360}
        muted
        controls
        crossOrigin="anonymous"
        onLoadedData={onInitialize}
        onError={e => onError?.(e as any)}
      />
      <canvas ref={canvasRef} />
    </VideoTimeDiffWrap>
  );
};

export default VideoTimeDiffCalculator;
