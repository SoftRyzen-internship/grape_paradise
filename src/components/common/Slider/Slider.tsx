'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { FC } from 'react';
import { Swiper } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';

import { motion } from 'framer-motion';

import { ButtonLess } from '@/components/ui/ButtonLess';

import Arrow from '@/../public/icons/arrow.svg';

import { slidersData } from '@/data';

import { ISliderProps } from './Slider.types';

export const Slider: FC<ISliderProps> = ({
  prevEl,
  nextEl,
  loop = false,
  desktopSpaceBetween = 174,
  children,
  btnConteinerStyle,
}) => {
  return (
    <motion.div
      className='relative w-full notLg:[--opacity-hidden:100%] notLg:[--x-hidden:0px] lg:[--opacity-hidden:0%] lg:[--x-hidden:80px]'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 'var(--opacity-hidden)', x: 'var(--x-hidden, 0)' },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Swiper
        modules={[EffectFade, Navigation]}
        className='swiper mySwiper'
        slidesPerView={2}
        initialSlide={0}
        grabCursor={true}
        loop={loop}
        navigation={{
          prevEl: `.${prevEl}`,
          nextEl: `.${nextEl}`,
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1280: { slidesPerView: 2, spaceBetween: desktopSpaceBetween },
        }}
      >
        {children}
      </Swiper>

      <div
        className={`swiper-navigation absolute -bottom-20 left-1/2 right-auto z-10 flex w-[104px] -translate-x-1/2 transform items-center justify-between md:-top-[72px] md:bottom-auto md:left-auto md:right-0 md:w-[112px]  md:translate-x-0 lg:-top-32 lg:w-[164px] ${btnConteinerStyle}`}
      >
        <ButtonLess
          className={`prev-btn ${prevEl}`}
          type='button'
          aria={slidersData.ariaLabelBack}
          purpose='slider'
        >
          {<Arrow className='arrow-icon rotate-180' />}
        </ButtonLess>
        <ButtonLess
          className={`next-btn ${nextEl}`}
          type='button'
          aria={slidersData.ariaLabelNext}
          purpose='slider'
        >
          {<Arrow className='arrow-icon' />}
        </ButtonLess>
      </div>
    </motion.div>
  );
};
