'use client';

import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

import { SlideCardGeneration } from '@/components/common/SlideCardGeneration';

import { urlFor } from '@/sanity/lib/client';

import { IServicesListDataProps } from './ServicesList.types';


export const ServicesList: FC<IServicesListDataProps> = ({ data }) => {
  const { imageServices, servicesTitle, imageServicesAlt, servicesText } = data;
  
	const url = urlFor(imageServices).url();

	return (
		<SwiperSlide tag='li' className='swiper-slide slide-conteiner'>
			<SlideCardGeneration
				title={servicesTitle}
				src={url}
				alt={imageServicesAlt}
				description={servicesText}
				slide='service'
			/>
		</SwiperSlide>
	);
};

ServicesList.displayName = 'SwiperSlide';
