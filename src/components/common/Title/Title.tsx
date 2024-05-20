'use client';

import { FC } from 'react';
import { clsx } from 'clsx';

import { AnimationContainer } from '@/components/common/AnimationContainer';

import { ITitleProps } from './Title.types';

export const Title: FC<ITitleProps> = ({
  chapter,
  history,
  className,
  children,
}) => {
  const animation = history ? 'lg:[--x-hidden:80]' : 'lg:[--x-hidden:-80]';

  return (
    <>
      {chapter === 'hero' ? (
        <h1 className={clsx('main-title', className)}>{children}</h1>
      ) : chapter === 'chapter' ? (
        <h3 className={clsx('subtitle', className)}>{children} </h3>
      ) : (
        <AnimationContainer className={animation}>
          <h2 className={clsx('title', className)}>{children}</h2>
        </AnimationContainer>
      )}
    </>
  );
};
