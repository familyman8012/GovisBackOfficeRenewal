import React, { HTMLAttributes } from 'react';
import useSyncedRef from '@HookFarm/useSyncedRef';
import { VideoWrapStyle } from './style';

const FqsVideo = React.forwardRef<
  HTMLVideoElement,
  HTMLAttributes<HTMLVideoElement> & {
    sticky?: boolean;
    src?: string;
  }
>(({ sticky, ...props }, ref) => {
  const wrapperRef = useSyncedRef<HTMLDivElement>(null);
  const [viewportIn, setViewportIn] = React.useState(false);

  React.useLayoutEffect(() => {
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
      <video ref={ref} controls muted {...props} />
    </VideoWrapStyle>
  );
});

FqsVideo.displayName = 'FqsVideo';

export default FqsVideo;
