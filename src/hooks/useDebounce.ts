import { useEffect, useRef, useState } from 'react';

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timer = useRef<any>(null);

  useEffect(() => {
    let timerCurrent = timer.current;
    if (timerCurrent) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => setDebouncedValue(value), delay || 1000);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
