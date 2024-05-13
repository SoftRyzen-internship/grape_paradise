import { Section } from '@/components/common/Section';
import { Title } from '@/components/common/Title';
import { heroData } from '@/data';

import s from './Hero.module.css';
import { clsx } from 'clsx';

export const Hero = () => {
	return (
		<Section
			sectionStyles={clsx(
				s.hero,
				'h-[640px] pb-[102px] pt-[144px] md:pb-[80px] md:pt-[120px] lg:pb-[95px] lg:pt-[170px]',
			)}
		>
			<Title chapter='hero' styles='mb-[64px]'>
				{heroData.title}
			</Title>
			<p className='mb-[102px] font-tenor text-normal font-extralight text-white'>
				{heroData.text}
			</p>
		</Section>
	);
};
