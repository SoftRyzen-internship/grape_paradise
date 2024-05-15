'use client';

import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

import { SlideCardGeneration } from '@/components/common/SlideCardGeneration';

import { urlFor } from '@/sanity/lib/client';

import { IServicesListDataProps } from './ServicesList.types';
import { Slider } from '../Slider';
import { IServicesProps } from '@/sections/Services/Services';


export const ServicesList: FC<IServicesListDataProps> = ({ data }) => {
  // const { imageServices, servicesTitle, imageServicesAlt, servicesText } = data;
  
	// const url = urlFor(service.imageServices).url();

	return (
		<Slider>
			{data.map((service: IServicesProps) => (
				// <ServicesList key={service._id} data={service} />
				<SwiperSlide
					key={service._id}
					tag='li'
					className='swiper-slide slide-conteiner'
				>
					<SlideCardGeneration
						title={service.servicesTitle}
						src={urlFor(service.imageServices).url()}
						alt={service.imageServicesAlt}
						description={service.servicesText}
						slide='service'
					/>
				</SwiperSlide>
			))}
		</Slider>
	);
};

// ServicesList.displayName = 'SwiperSlide';


// export const ServicesList: FC<IServicesListDataProps> = ({ data }) => {
// 	const { imageServices, servicesTitle, imageServicesAlt, servicesText } = data;

// 	const url = urlFor(imageServices).url();

// 	return (
// 		<SwiperSlide tag='li' className='swiper-slide slide-conteiner'>
// 			<SlideCardGeneration
// 				title={servicesTitle}
// 				src={url}
// 				alt={imageServicesAlt}
// 				description={servicesText}
// 				slide='service'
// 			/>
// 		</SwiperSlide>
// 	);
// };