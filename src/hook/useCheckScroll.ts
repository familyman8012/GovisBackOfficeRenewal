import React, { useEffect } from 'react';
import { debounce } from 'lodash';

const useCheckScroll = (ref: React.RefObject<HTMLDivElement>) => {
  const [hasScroll, setHasScroll] = React.useState(false);
  const [isScrollLeft, setIsScrollLeft] = React.useState(false);
  const [isScrollRight, setIsScrollRight] = React.useState(false);

  useEffect(() => {
    const wrapper = ref.current;
    if (!wrapper) return () => {};

    const onScroll = debounce(() => {
      setHasScroll(wrapper.scrollWidth > wrapper.clientWidth);
      setIsScrollLeft(wrapper.scrollLeft > 0);
      setIsScrollRight(
        wrapper.scrollLeft + wrapper.clientWidth < wrapper.scrollWidth - 1
      );
    }, 300);

    onScroll();

    window.addEventListener('resize', onScroll);
    wrapper.addEventListener('scroll', onScroll);

    return () => wrapper.removeEventListener('scroll', onScroll);
  }, [ref.current]);

  return [hasScroll, isScrollLeft, isScrollRight];
};

export default useCheckScroll;
