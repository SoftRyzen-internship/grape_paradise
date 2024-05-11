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
	<Section id={historyData.id} sectionStyles='pt-[60px] pb-[30px]'>
		<div className={`relative mb-12 h-[328px] ${s.frame}`}>
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
				styles='absolute -bottom-5 right-5'
			>
				{<Play className='h-[26px] w-[26px] lg:h-[64px] lg:w-[64px]' />}
			</ButtonLess>
		</div>

		<div>
			<Title styles='mb-4 w-[320px] md:w-[334px] md:mb-6 lg:w-[488px]'>
				{historyData.title}
			</Title>

			<p className='mb-3'>{historyData.description}</p>

			<p className='mb-6'>{historyData.offer}</p>

			<ButtonMain chapter='about' to='contacts'>
				{historyData.button}
			</ButtonMain>
		</div>
	</Section>
);
