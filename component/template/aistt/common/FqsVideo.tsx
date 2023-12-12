import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { Cross } from '@ComponentFarm/atom/icons';
import useSyncedRef from '@HookFarm/useSyncedRef';

const VideoWrapStyle = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0.8rem;
  border-radius: 0.8rem;
  max-width: 1024px;
  margin: 0 auto;
  overflow: hidden;
  background-color: #000;

  &:before {
    display: block;
    content: '';
    padding-bottom: 56.25%;
  }

  video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .video-position {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
  }

  .empty {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    & > div {
      color: var(--color-gray1) !important;
    }
  }
  .badge {
    position: absolute;
    z-index: 2;
    top: 1.6rem;
    right: 1.6rem;
  }

  &.viewport-out {
    .video-position {
      position: fixed;
      top: auto;
      bottom: 0;
      left: auto;
      right: 0;
      z-index: 98;
      width: 33%;
      height: 18.5625vw;
      max-width: 1024px;
      max-height: 576px;
      border-top-left-radius: 0.4rem;
      overflow: hidden;
    }
  }

  .video-fix-close {
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    top: 2rem;
    right: 2rem;
    z-index: 2;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background: transparent;
    color: var(--color-gray1);
    border: 1px solid currentColor;
    cursor: pointer;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const useLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const FqsVideo = React.forwardRef<
  HTMLVideoElement,
  HTMLAttributes<HTMLVideoElement> & {
    sticky?: boolean;
    closeButton?: boolean;
    src?: string;
  }
>(({ sticky, closeButton, ...props }, ref) => {
  const wrapperRef = useSyncedRef<HTMLDivElement>(null);
  const [viewportIn, setViewportIn] = React.useState(true);

  useLayoutEffect(() => {
    if (!wrapperRef.current || !sticky) return () => {};

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === wrapperRef.current) {
          setViewportIn(entry.isIntersecting);
        }
      });
    }, {});

    io.observe(wrapperRef.current);

    return () => io.disconnect();
  }, [wrapperRef, sticky]);

  return (
    <VideoWrapStyle
      ref={wrapperRef}
      className={sticky ? (viewportIn ? 'viewport-in' : 'viewport-out') : ''}
    >
      <div className="video-position">
        <video ref={ref} controls muted {...props} />
        {!viewportIn && closeButton && (
          <button
            type="button"
            className="video-fix-close"
            onClick={() => setViewportIn(true)}
          >
            <Cross />
          </button>
        )}
      </div>
    </VideoWrapStyle>
  );
});

FqsVideo.displayName = 'FqsVideo';

export default FqsVideo;
