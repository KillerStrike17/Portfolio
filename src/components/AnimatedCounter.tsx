import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

interface Props {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({ end, prefix = '', suffix = '', duration = 2, className }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;
    const el = ref.current;
    if (!el) return;
    const controls = animate(0, end, {
      duration,
      ease: 'easeOut',
      onUpdate(value) {
        const rounded = Math.round(value);
        const formatted = rounded >= 1000 ? rounded.toLocaleString() : rounded.toString();
        el.textContent = prefix + formatted + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, end, duration, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
};

export default AnimatedCounter;
