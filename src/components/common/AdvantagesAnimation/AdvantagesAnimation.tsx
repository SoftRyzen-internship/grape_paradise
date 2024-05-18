'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

export const LeafBefore: FC = () => (
  <motion.div
    className='notLg:hidden'
    style={{
      content: "url('/icons/bg-big-leaf-section-4.svg')",
      position: 'absolute',
      top: '-226px',
      right: '314px',
      width: '258px',
      height: '220px',
      zIndex: 5,
    }}
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
    variants={{
      hidden: { opacity: 0, x: -80 },
      visible: { opacity: 1, x: 0 },
    }}
  />
);
export const LeafAfter: FC = () => (
  <motion.div
    className='notLg:hidden'
    style={{
      content: "url('/icons/bg-small-leaf-section-4.svg')",
      position: 'absolute',
      top: '-116px',
      right: '90px',
      width: '147px',
      height: '128px',
      zIndex: 5,
    }}
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
    variants={{
      hidden: { opacity: 0, x: 80 },
      visible: { opacity: 1, x: 0 },
    }}
  />
);

export const BottleAfter: FC = () => (
  <motion.div
    className='notLg:hidden'
    style={{
      content: "url('/icons/bg-bottle-section-4.svg')",
      position: 'absolute',
      bottom: '-303px',
      right: '313px',
      width: '387px',
      height: '275px',
      zIndex: 5,
    }}
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
    variants={{
      hidden: { opacity: 0, y: 80 },
      visible: { opacity: 1, y: 0 },
    }}
  />
);
