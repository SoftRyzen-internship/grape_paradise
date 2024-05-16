'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';

import { FC } from 'react';

import { ButtonLess } from '@/components/ui/ButtonLess/ButtonLess';

import Arrow from '@/../public/icons/arrow.svg';

import { slidersData } from '@/data';

import { ISliderProps } from './Slider.types';

export const Slider: FC<ISliderProps> = ({
	nameBtnBack,
	nameBtnNext,
	loop = false,
	desktopSpaceBetween = 174,
	children,
}) => {
	return (
		<div className='relative w-full'>
			<Swiper
				modules={[EffectFade, Navigation]}
				className='swiper mySwiper'
				slidesPerView={2}
				initialSlide={0}
				grabCursor={true}
				loop={loop}
				navigation={{
					prevEl: `.${nameBtnBack}`,
					nextEl: `.${nameBtnNext}`,
				}}
				breakpoints={{
					0: { slidesPerView: 1, spaceBetween: 16 },
					768: { slidesPerView: 2, spaceBetween: 40 },
					1280: { slidesPerView: 2, spaceBetween: desktopSpaceBetween },
				}}
			>
				{children}
			</Swiper>

			<div className='swiper-navigation absolute -bottom-20 left-1/2 right-auto z-10 flex w-[104px] -translate-x-1/2 transform items-center justify-between md:-top-[72px] md:bottom-auto md:left-auto md:right-0 md:w-[112px]  md:translate-x-0 lg:-top-32 lg:w-[164px] '>
				<ButtonLess
					className={`prev-btn ${nameBtnBack}`}
					type='button'
					aria={slidersData.ariaLabelBack}
					purpose='slider'
				>
					{<Arrow className='arrow-icon rotate-180' />}
				</ButtonLess>
				<ButtonLess
					className={`next-btn ${nameBtnNext}`}
					type='button'
					aria={slidersData.ariaLabelNext}
					purpose='slider'
				>
					{<Arrow className='arrow-icon' />}
				</ButtonLess>
			</div>
		</div>
	);
};
