'use client';

import { SwiperSlide } from 'swiper/react';

import { FC } from 'react';

import { urlFor } from '@/sanity/lib/client';

import { Slider } from '@/components/common/Slider';
import { SlideCardGeneration } from '@/components/common/SlideCardGeneration';

import { IProductsSlidesProps } from './ProductsSlider.types';

export const ProductsSlides: FC<IProductsSlidesProps> = ({ products }) => {
	return (		
			<Slider loop={true}>
				{products.map(item => (
					<SwiperSlide
						tag='li'
						key={item._id}
						className='swiper-slide slide-conteiner'
					>
						<SlideCardGeneration
							title={item.goodsTitle}
							src={urlFor(item.imageGoods).url()} 
							alt={item.imageGoodsAlt}
							slide='product'
						/>
					</SwiperSlide>
				))}
			</Slider>		
	);
};
