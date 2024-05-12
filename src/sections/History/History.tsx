import { FC } from 'react';
import Image from 'next/image';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/common/Title';
import { ButtonMain } from '@/components/ui/ButtonMain';
import { ButtonLess } from '@/components/ui/ButtonLess';

import { historyData } from '@/data';

import Play from '@/../public/icons/play.svg';

import s from './History.module.css';

export const History: FC = () => (
	<Section
		id={historyData.id}
		sectionStyles='pt-[60px] pb-[30px] md:pt-20 md:pb-10 lg:pt-[142px] lg:pb-20'
		containerStyles={`md:flex md:items-center md:justify-between lg:relative ${s.grape}`}
	>
		<div
			className={`relative mb-12 h-[328px] md:m-0 md:h-[312px] md:w-[300px] lg:h-[579px] lg:w-[567px] ${s.frame}`}
		>
			<Image
				fill
				priority
				src={historyData.img}
				alt={historyData.alt}
				className='object-cover'
				sizes='(max-width: 768px) 448px, (max-width: 1280px) 300px, 567px'
			/>

			<ButtonLess
				type='button'
				purpose='video'
				styles='absolute -bottom-5 right-5 md:bottom-[42px] md:-right-8 lg:bottom-[109px] lg:-right-11 z-10'
			>
				{<Play className='h-[26px] w-[26px] lg:h-[64px] lg:w-[64px]' />}
			</ButtonLess>
		</div>

		<div className='md:w-[334px] lg:w-[488px]'>
			<Title styles='mb-4 w-[320px] md:mb-6 md:w-full'>
				{historyData.title}
			</Title>

			<p className='mb-3 md:mb-4 lg:mb-6 lg:text-normal_desk'>
				{historyData.description}
			</p>

			<p className='lg:normal_desk mb-6 lg:mb-[52px]'>{historyData.offer}</p>

			<ButtonMain chapter='about' to={historyData.link}>
				{historyData.button}
			</ButtonMain>
		</div>
	</Section>
);
