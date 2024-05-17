'use client';

import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

import { Slider } from '@/components/common/Slider';
import { SlideCardReviews } from '@/components/common/SlideCardReview';

import { IReviewsSliderProps } from './ReviewsSlider.types';

export const ReviewsSlider: FC<IReviewsSliderProps> = ({ data }) => {
  return (
    <Slider
      loop={true}
      prevEl='reviewsBtnBack'
      nextEl='reviewsBtnNext'
      desktopSpaceBetween={80}
      btnConteinerStyle='md:-top-[88px] lg:-top-40'
    >
      {data.map(({ _id, reviewAuthor, reviewText }) => (
        <SwiperSlide key={_id} className='swiper-slide'>
          <SlideCardReviews text={reviewText} author={reviewAuthor} />
        </SwiperSlide>
      ))}
    </Slider>
  );
};
