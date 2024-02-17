import type { MutableRefObject } from 'react';
import { useCallback, useRef } from 'react';

export const useDebounce = <T>(
  callback: (...args: T[]) => void,
  delay: number,
) => {
  const timer = useRef() as MutableRefObject<NodeJS.Timeout>;

  return useCallback((...args: T[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(callback, delay, ...args);
  }, []);
};
