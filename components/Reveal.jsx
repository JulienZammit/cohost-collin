'use client';

import { motion } from 'framer-motion';

const variants = {
  up: { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -32 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
};

export default function Reveal({
  children,
  from = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
  as = 'div',
  once = true,
  amount = 0.25,
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants[from] || variants.up}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({ children, className = '', delayChildren = 0.08, stagger = 0.09 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { delayChildren, staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', from = 'up' }) {
  return (
    <motion.div className={className} variants={variants[from] || variants.up}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
