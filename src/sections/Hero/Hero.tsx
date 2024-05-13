import { FC } from 'react';

import { clsx } from 'clsx';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/common/Title';

import { heroData } from '@/data';

import s from './Hero.module.css';

export const Hero: FC = () => {
	return (
		<Section
			sectionStyles={clsx(
				s.hero,
				'relative min-h-[640px] pb-[102px] pt-[144px] md:min-h-[584px] md:pb-[80px] md:pt-[120px] lg:min-h-[800px] lg:pb-[95px] lg:pt-[170px]',
			)}
		>
			<Title chapter='hero' styles='mb-[64px] md:mb-[48px] lg:mb-[49px]'>
				{heroData.title}
			</Title>
			<p className='font-tenor text-normal font-extralight text-white md:ml-auto md:w-[398px] lg:w-[487px] lg:text-normal_desk'>
				{heroData.text}
			</p>
		</Section>
	);
};
