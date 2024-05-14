'use client';

import { FC, useState, useRef, useEffect } from 'react';
import { clsx } from 'clsx';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { EffectFade, Navigation, FreeMode } from 'swiper/modules';

import { ISliderProps } from './Slider.types';

import Arrow from '@/../public/icons/arrow.svg';

import { ButtonLess } from '@/components/ui/ButtonLess/ButtonLess';

import s from './Slider.module.css';
import { SlideCardGeneration } from '../SlideCardGeneration';

export const Slider: FC<ISliderProps> = ({
	loop = false,
	slide = 'product',
	array,
	desktopSpaceBetween = 174,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPrevBtn, setIsPrevBtn] = useState<boolean>(true);
	const [isNextBtn, setIsNextBtn] = useState<boolean>(false);
	const [isLoop, setIsLoop] = useState<boolean>(false);
	const [isVisibleSeparator, setIsVisibleSeparator] = useState<boolean>(true);

	const swiperRef = useRef<any>(null);

	useEffect(() => {
		if (loop === true) {
			setIsLoop(true);
			setIsPrevBtn(false);
		}
	}, [loop]);

	const handlePrev = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slidePrev();
			setCurrentIndex(prevIndex => prevIndex - 1);
			setIsNextBtn(false);
			if (currentIndex === 1 && !isLoop) {
				setIsPrevBtn(true);
			}
		}
		setTimeout(() => setIsVisibleSeparator(true), 300);
	};

	const handleNext = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideNext();
			setCurrentIndex(prevIndex => prevIndex + 1);
			setIsPrevBtn(false);
			if (swiperRef.current.swiper.isEnd && !isLoop) {
				setIsNextBtn(true);
			}
		}
		setTimeout(() => setIsVisibleSeparator(true), 300);
	};

	return (
		<div
			className={clsx('w-full', {
				[`${s.container} relative`]: isVisibleSeparator === true,
			})}
		>
			<Swiper
				navigation={false}
				modules={[EffectFade, Navigation]}
				className='swiper mySwiper'
				slidesPerView={2}
				initialSlide={0}
				grabCursor={true}
				loop={isLoop}
				ref={swiperRef}
				onSlideChange={swiper => {
					setIsVisibleSeparator(false);
					setCurrentIndex(swiper.activeIndex);
				}}
				breakpoints={{
					0: { slidesPerView: 1, spaceBetween: 16 },
					768: { slidesPerView: 2, spaceBetween: 40 },
					1280: { slidesPerView: 2, spaceBetween: `${desktopSpaceBetween}` },
				}}
			>
				{array.map(item => (
					<SwiperSlide
						tag='li'
						key={item.title}
						className='swiper-slide flex items-center'
					>
						<SlideCardGeneration data={item} slide={slide} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className='swiper-navigation absolute -bottom-20 left-1/2 right-auto z-10 flex w-[104px] -translate-x-1/2 transform items-center justify-between md:-top-24 md:bottom-auto md:left-auto md:right-0 md:w-[112px]  md:translate-x-0 lg:-top-40 lg:w-[164px] '>
				<ButtonLess
					type='button'
					aria={`Slider's button back`}
					purpose='slider'
					disabled={isPrevBtn}
					onClick={handlePrev}
				>
					{<Arrow className='arrow-icon rotate-180' />}
				</ButtonLess>
				<ButtonLess
					type='button'
					aria={`Slider's button front`}
					purpose='slider'
					disabled={isNextBtn}
					onClick={handleNext}
				>
					{<Arrow className='arrow-icon' />}
				</ButtonLess>
			</div>
		</div>
	);
};
