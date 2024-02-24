import { useEffect, useState } from 'react';

import { useDebounce } from '../useDebounce/useDebounce';

export const useMobile = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const resizeEventHandler = useDebounce((event: UIEvent) => {
    const target = event?.target as Window;
    setWindowWidth(target.innerWidth);
  }, 300);

  useEffect(() => {
    window.addEventListener('resize', resizeEventHandler);

    return () => {
      window.removeEventListener('resize', resizeEventHandler);
    };
  }, [resizeEventHandler]);

  const isMobile = windowWidth <= 450;

  return isMobile;
};
