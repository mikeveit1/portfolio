import { useState, useEffect } from 'react';

export const useFadeIn = (delays: number[] = [300]) => {
  const [visibleStages, setVisibleStages] = useState<boolean[]>(
    new Array(delays.length).fill(false)
  );

  useEffect(() => {
    const timers = delays.map((delay, index) =>
      setTimeout(() => {
        setVisibleStages(prev => {
          const newStages = [...prev];
          newStages[index] = true;
          return newStages;
        });
      }, delay)
    );

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return visibleStages;
};

