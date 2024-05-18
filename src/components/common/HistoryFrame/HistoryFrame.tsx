import { FC } from 'react';
import Image from 'next/image';

import { ButtonLess } from '@/components/ui/ButtonLess';
import { HistoryGrape } from '@/components/common/HistoryGrape';
import { AnimationContainer } from '@/components/common/AnimationContainer';

import { historyData } from '@/data';

import Play from '@/../public/icons/play.svg';

import { IHistoryFrame } from './HistoryFrame.types';

import s from './HistoryFrame.module.css';

export const HistoryFrame: FC<IHistoryFrame> = ({ onClick }) => (
  <AnimationContainer className='relative h-[328px] w-full md:h-[312px] md:w-[300px] lg:h-[579px] lg:w-[567px] lg:[--x-hidden:-80px] smOnly:mb-12'>
    <HistoryGrape />
    <Image
      fill
      priority
      src={historyData.img}
      alt={historyData.alt}
      className={s.frame}
      sizes='(max-width: 768px) 448px, (max-width: 1280px) 300px, 567px'
    />

    <ButtonLess
      aria={historyData.aria}
      type='button'
      purpose='video'
      onClick={onClick}
      className='absolute -bottom-5 right-5 z-10 md:-right-8 md:bottom-[42px] lg:-right-11 lg:bottom-[109px]'
    >
      <Play className='h-[26px] w-[26px] lg:h-[64px] lg:w-[64px]' />
    </ButtonLess>
  </AnimationContainer>
);
