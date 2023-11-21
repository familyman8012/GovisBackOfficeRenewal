import React, { HTMLAttributes } from 'react';
import { Cross } from '@ComponentFarm/atom/icons';
import useSyncedRef from '@HookFarm/useSyncedRef';
import { VideoWrapStyle } from './style';

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

  React.useLayoutEffect(() => {
    if (!wrapperRef.current || !sticky) return () => {};

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.target === wrapperRef.current) {
            setViewportIn(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.75,
      }
    );

    io.observe(wrapperRef.current);

    return () => io.disconnect();
  }, [wrapperRef, sticky]);

  return (
    <VideoWrapStyle
      ref={wrapperRef}
      className={sticky ? (viewportIn ? 'viewport-in' : 'viewport-out') : ''}
    >
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
    </VideoWrapStyle>
  );
});

FqsVideo.displayName = 'FqsVideo';

export default FqsVideo;
