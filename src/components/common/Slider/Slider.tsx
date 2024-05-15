'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';

import { FC, useState, useRef, useEffect } from 'react';
import { clsx } from 'clsx';

import { ButtonLess } from '@/components/ui/ButtonLess/ButtonLess';
import { SlideCardGeneration } from '@/components/common/SlideCardGeneration';

import Arrow from '@/../public/icons/arrow.svg';

import { slidersData } from '@/data';

import { ISliderProps } from './Slider.types';

import s from './Slider.module.css';

export const Slider: FC<ISliderProps> = ({
	loop = false,
	slide = 'product',
	array,
	desktopSpaceBetween = 174,
	separator = true,
}) => {
	const [isPrevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true);
	const [isNextBtnDisabled, setNextBtnDisabled] = useState<boolean>(false);

	const swiperRef = useRef<any>(null);

	useEffect(() => {
		if (loop === true) {
			setPrevBtnDisabled(false);
		}
	}, [loop]);

	const handlePrev = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slidePrev();
			setNextBtnDisabled(false);
			setPrevBtnDisabled(swiperRef.current.swiper.isBeginning && !loop);
		}
	};

	const handleNext = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideNext();
			setPrevBtnDisabled(false);
			if (swiperRef.current.swiper.isEnd && !loop) {
				setNextBtnDisabled(true);
			}
		}
	};

	return (
		<div className='relative w-full'>
			<Swiper
				navigation={false}
				modules={[EffectFade, Navigation]}
				className='swiper mySwiper'
				slidesPerView={2}
				initialSlide={0}
				grabCursor={true}
				loop={loop}
				ref={swiperRef}
				breakpoints={{
					0: { slidesPerView: 1, spaceBetween: 16 },
					768: { slidesPerView: 2, spaceBetween: 40 },
					1280: { slidesPerView: 2, spaceBetween: `${desktopSpaceBetween}` },
				}}
			>
				{array.map(item => (
					<SwiperSlide
						tag='li'
						key={item.img.src}
						className={clsx('swiper-slide relative flex items-center', {
							[`${s.container} `]: separator === true,
						})}
					>
						<SlideCardGeneration data={item} slide={slide} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className='swiper-navigation absolute -bottom-20 left-1/2 right-auto z-10 flex w-[104px] -translate-x-1/2 transform items-center justify-between md:-top-24 md:bottom-auto md:left-auto md:right-0 md:w-[112px]  md:translate-x-0 lg:-top-40 lg:w-[164px] '>
				<ButtonLess
					type='button'
					aria={slidersData.ariaLabelBack}
					purpose='slider'
					disabled={isPrevBtnDisabled}
					onClick={handlePrev}
				>
					{<Arrow className='arrow-icon rotate-180' />}
				</ButtonLess>
				<ButtonLess
					type='button'
					aria={slidersData.ariaLabelNext}
					purpose='slider'
					disabled={isNextBtnDisabled}
					onClick={handleNext}
				>
					{<Arrow className='arrow-icon' />}
				</ButtonLess>
			</div>
		</div>
	);
};
