'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const HistoryGrape: React.FC = () => (
  <motion.div
    className='notLg:hidden'
    style={{
      content: "url('/icons/bg-grape-section-2.svg')",
      position: 'absolute',
      top: '-62px',
      left: '452px',
      width: '214px',
      height: '235px',
    }}
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
    variants={{
      hidden: { opacity: 0, x: -80, y: 80 },
      visible: { opacity: 1, x: 0, y: 0 },
    }}
  />
);
