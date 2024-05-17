import { FC } from 'react';

import Marquee from 'react-fast-marquee';

import { movingLineData } from '@/data';

import s from './MovingLine.module.css';

export const MovingLine: FC = () => {
	return (
		<Marquee
			autoFill
			speed={80}
			className='mt-[140px] py-4 md:mt-[80px] md:py-6 lg:py-8'
		>
			{movingLineData.map(({ id, text }) => (
				<div
					key={id}
					className='mr-6 flex items-center justify-center md:mr-10'
				>
					<p
						className={`mr-6 font-tenor text-h0 text-accent md:mr-10 md:text-h0_tab lg:text-h0_desk ${s.item}`}
					>
						{text}
					</p>
				</div>
			))}
		</Marquee>
	);
};
