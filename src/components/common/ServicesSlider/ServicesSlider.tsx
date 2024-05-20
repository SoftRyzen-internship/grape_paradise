'use client';

import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

import { Slider } from '@/components/common/Slider';
import { SlideCardGeneration } from '@/components/common/SlideCardGeneration';

import { urlFor } from '@/sanity/lib/client';

import { IServicesSliderProps } from './ServicesSlider.types';

export const ServicesSlider: FC<IServicesSliderProps> = ({ data }) => {
  return (
    <Slider prevEl='servicesBtnBack' nextEl='servicesBtnNext'>
      {data.map(
        ({
          _id,
          servicesTitle,
          imageServices,
          imageServicesAlt,
          servicesText,
        }) => (
          <SwiperSlide key={_id} className='swiper-slide slide-conteiner'>
            <SlideCardGeneration
              title={servicesTitle}
              src={urlFor(imageServices).url()}
              alt={imageServicesAlt}
              description={servicesText}
              slide='service'
            />
          </SwiperSlide>
        ),
      )}
    </Slider>
  );
};
