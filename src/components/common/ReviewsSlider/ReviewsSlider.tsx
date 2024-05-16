'use client';

import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

import { Slider } from '@/components/common/Slider';
import { IReviewsSliderProps } from './ReviewsSlider.types';
import { SlideCardReviews } from '../SlideCardReview';

export const ReviewsSlider: FC<IReviewsSliderProps> = ({ data }) => {
	return (
		<Slider
			loop={true}
			prevEl='reviewsBtnBack'
			nextEl='reviewsBtnNext'
			desktopSpaceBetween={80}
		>
			{data.map(({ _id, reviewAuthor, reviewText }) => (
				<SwiperSlide key={_id} className='swiper-slide'>
					<SlideCardReviews text={reviewText} author={reviewAuthor} />
				</SwiperSlide>
			))}
		</Slider>
	);
};
