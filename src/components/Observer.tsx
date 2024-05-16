'use client';

// import { SwiperSlide } from 'swiper/react';

import { FC } from 'react';

// import { buttonsData } from '@/data';

// import { Section } from '@/components/common/Section/Section';
// import { Logo } from '@/components/ui/Logo';
// import { ButtonMain } from '@/components/ui/ButtonMain/ButtonMain';
// import { ButtonLess } from '@/components/ui/ButtonLess/ButtonLess';
// import { SlideCardGeneration } from '@/components/common/SlideCardGeneration';
import { MovingLine } from '@/components/ui/MovingLine';
// import { Slider } from '@/components/common/Slider';
// import { SlideCardReviews } from '@/components/common/SlideCardReview';

// import { serviceCardData } from '@/data';
// import { productCardData } from '@/data';

// import Arrow from '@/../public/icons/arrow.svg';
// import Play from '@/../public/icons/play.svg';

export const Observer: FC = () => {
	return (
		<>
			<MovingLine />
			{/* <Section sectionStyles='pt-[144px] pb-[102px] md:pt-[120px] md:pb-[80px] lg:pt-[170px] lg:pb-[95px]'>
				<div className='my-20'>
					<Slider prevEl='productsBtnBack' nextEl='productsBtnNext' loop={true}>
						{productCardData.map(item => (
							<SwiperSlide
								key={item._id}
								className='swiper-slide slide-conteiner'
							>
								<SlideCardGeneration
									title={item.title}
									src={item.src}
									alt={item.src}
									slide='product'
								/>
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
				</ButtonLess> */}
				{/* moodal */}
				{/* <ButtonLess type='button' purpose='modal'>
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
					<SlideCardGeneration
						title={serviceCardData[1].title}
						src={serviceCardData[1].src}
						alt={serviceCardData[1].alt}
						description={serviceCardData[1].description}
						slide='service'
					/>
					<SlideCardGeneration
						title={serviceCardData[2].title}
						src={serviceCardData[2].src}
						alt={serviceCardData[2].alt}
						description={serviceCardData[2].description}
						slide='service'
					/>
				</div>
				<SlideCardReviews />
			</div> */}
		</>
	);
};
