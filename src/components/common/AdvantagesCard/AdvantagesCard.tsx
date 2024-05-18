'use client';

import { FC } from 'react';

import { AnimationContainer } from '@/components/common/AnimationContainer';

import { advantagesData } from '@/data';

import s from './AdvantagesCard.module.css';

export const AdvantagesCard: FC = () => {
  return (
    <AnimationContainer className='lg:[--x-hidden:80px]'>
      <ul className='flex flex-col items-center gap-8 md:flex-row md:items-baseline'>
        {advantagesData.advantages.map(({ id, description }) => (
          <li
            key={id}
            className={`${s[id]} flex flex-col items-center gap-4 md:w-[151px] md:gap-6 lg:w-[280px]`}
          >
            <p className='text-center md:text-small lg:px-[25px] lg:text-normal_desk smOnly:px-4'>
              {description}
            </p>
          </li>
        ))}
      </ul>
    </AnimationContainer>
  );
};
