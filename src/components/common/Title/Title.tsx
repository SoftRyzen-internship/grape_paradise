'use client';

import { FC } from 'react';
import { clsx } from 'clsx';

import { ITitleProps } from './Title.types';
import { AnimationContainer } from '../AnimationContainer';

export const Title: FC<ITitleProps> = ({ chapter, className, children }) => {
  return (
    <>
      {chapter === 'hero' ? (
        <h1 className={clsx('main-title', className)}>{children}</h1>
      ) : chapter === 'chapter' ? (
        <h3 className={clsx('subtitle', className)}>{children} </h3>
      ) : (
        <AnimationContainer className='lg:[--x-hidden:-80]'>
          <h2 className={clsx('title', className)}>{children}</h2>
        </AnimationContainer>
      )}
    </>
  );
};
