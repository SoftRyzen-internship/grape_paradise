import { FC } from 'react';
import { motion } from 'framer-motion';

import { IAnimationContainerProps } from './AnimationContainer.type';

export const AnimationContainer: FC<IAnimationContainerProps> = ({
  className,
  children,
}) => (
  <motion.div
    className={`relative w-full lg:[--opacity-hidden:0%] notLg:[--opacity-hidden:100%] notLg:[--x-hidden:0px] ${className}`}
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
    variants={{
      hidden: { opacity: 'var(--opacity-hidden)', x: 'var(--x-hidden, 0)' },
      visible: { opacity: 1, x: 0 },
    }}
  >
    {children}
  </motion.div>
);
