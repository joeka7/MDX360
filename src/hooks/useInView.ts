import { useEffect, useRef, useState } from 'react';

/**
 * Becomes true once the element is `amount` (0–1) visible, then stops observing.
 * Falls back to true where `IntersectionObserver` is unavailable.
 */
export function useInView<T extends Element>(amount = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: amount },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [amount, inView]);

  return [ref, inView] as const;
}
