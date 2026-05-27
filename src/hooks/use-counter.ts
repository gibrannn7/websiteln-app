"use client";

import { useEffect, useState } from "react";

export function useCounter(target: number, decimals: number = 0, duration: number = 2000, trigger: boolean = true) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!trigger) {
      return;
    }

    const startTime = performance.now();

    let animationFrameId: number;

    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime >= duration) {
        setCount(target);
      } else {
        const progress = elapsedTime / duration;
        // Ease out quad
        const easeOutProgress = progress * (2 - progress);
        const currentVal = easeOutProgress * target;
        setCount(parseFloat(currentVal.toFixed(decimals)));
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, decimals, duration, trigger]);

  return count;
}
