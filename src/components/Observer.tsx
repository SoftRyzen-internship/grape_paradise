'use client';

import { SwiperSlide } from 'swiper/react';

import { FC } from 'react';

import { buttonsData, titleData } from '@/data';

import { Section } from '@/components/common/Section/Section';
import { Title } from '@/components/common/Title/Title';
import { Logo } from '@/components/ui/Logo';
import { ButtonMain } from '@/components/ui/ButtonMain/ButtonMain';
import { ButtonLess } from '@/components/ui/ButtonLess/ButtonLess';
import { SlideCardGeneration } from '@/components/common/SlideCardGeneration';
import { MovingLine } from '@/components/ui/MovingLine';
import { Slider } from '@/components/common/Slider';
import { SlideCardReviews } from '@/components/common/SlideCardReview';

import { serviceCardData } from '@/data';
import { productCardData } from '@/data';

import Arrow from '@/../public/icons/arrow.svg';
import Play from '@/../public/icons/play.svg';


export const Observer: FC = () => {
	return (
		<>
			<MovingLine />
			<Section sectionStyles='pt-[144px] pb-[102px] md:pt-[120px] md:pb-[80px] lg:pt-[170px] lg:pb-[95px]'>
				<Title chapter='hero'>{titleData.hero}</Title>
				<Title className='w-[255px] md:w-[350px] lg:w-[590px]'>
					{titleData.advantages}
				</Title>
				<Title chapter='chapter' className='text-green'>
					{titleData.contacts}
				</Title>

				<div className='my-20'>
					<Slider loop={true}>
						{productCardData.map(item => (
							<SwiperSlide
								tag='li'
								key={item.img.src}
								className='swiper-slide slide-conteiner'>
								<SlideCardGeneration data={item} slide='product' />
							</SwiperSlide>
						))}
					</Slider>
				</div>
				
			</Section>
			<div className='container flex flex-col gap-10 py-5'>
				<Logo />
				<Logo theme='green' size='big' />

				<ButtonMain chapter='header' to='контакти'>
					{buttonsData.callButton}
				</ButtonMain>
				<ButtonMain chapter='about' to='контакти'>
					{buttonsData.callButton}
				</ButtonMain>
				<ButtonMain chapter='card' to='контакти'>
					{buttonsData.orderButton}
				</ButtonMain>
				<ButtonLess type='submit' purpose='form'>
					{buttonsData.sendButton}
				</ButtonLess>
				{/* moodal */}
				<ButtonLess type='button' purpose='modal'>
					{buttonsData.home}
				</ButtonLess>
				<div className='flex gap-2'>
					<ButtonLess
						type='button'
						aria={`Slider's button back`}
						purpose='slider'
						disabled={true}
					>
						{<Arrow className='arrow-icon rotate-180' />}
					</ButtonLess>
					<ButtonLess
						type='button'
						aria={`Slider's button front`}
						purpose='slider'
						disabled={false}
					>
						{<Arrow className='arrow-icon' />}
					</ButtonLess>
				</div>
				<ButtonLess type='button' aria='Play video button' purpose='video'>
					{<Play className='h-[26px] w-[26px] lg:h-[64px] lg:w-[64px]' />}
				</ButtonLess>

				<div className='flex flex-col gap-4 md:flex-row'>
					<SlideCardGeneration data={serviceCardData[1]} slide='service' />
					<SlideCardGeneration data={serviceCardData[2]} slide='service' />
				</div>
				<SlideCardGeneration data={productCardData[1]} slide='product' />
			
				<SlideCardReviews/>
			</div>
		</>
	);
};
