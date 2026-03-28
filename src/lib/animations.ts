import { Variants } from 'framer-motion';

export const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
export const EASE_SPRING = [0.33, 1, 0.68, 1] as [number, number, number, number];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -56 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 56 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const staggerItemLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

export const charReveal: Variants = {
  hidden: { y: '115%', opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, delay: i * 0.038, ease: EASE_SPRING },
  }),
};

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 18 },
  in: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  out: { opacity: 0, y: -10, transition: { duration: 0.25, ease: EASE } },
};
