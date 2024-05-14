import { FC } from 'react';
import Image from 'next/image';

import { ButtonLess } from '@/components/ui/ButtonLess';

import { historyData } from '@/data';

import Play from '@/../public/icons/play.svg';

import s from './HistoryFrame.module.css';

export const HistoryFrame: FC = () => (
	<div
		className={`smOnly:mb-12 relative h-[328px] md:h-[312px] md:w-[300px] lg:h-[579px] lg:w-[567px] ${s.grape}`}
	>
		<Image
			fill
			src={historyData.img}
			alt={historyData.alt}
			className={s.frame}
			sizes='(max-width: 768px) 448px, (max-width: 1280px) 300px, 567px'
		/>

		<ButtonLess
			type='button'
			purpose='video'
			className='absolute -bottom-5 right-5 z-10 md:-right-8 md:bottom-[42px] lg:-right-11 lg:bottom-[109px]'
		>
			<Play className='h-[26px] w-[26px] lg:h-[64px] lg:w-[64px]' />
		</ButtonLess>
	</div>
);
