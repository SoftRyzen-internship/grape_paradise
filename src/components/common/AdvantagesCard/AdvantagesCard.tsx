import './AdvantagesCard.module.css';

import React from 'react';

import { advantagesData } from '@/data';

export interface AdvantagesCardProps {}

export const AdvantagesCard: React.FC<AdvantagesCardProps> = () => {
	return (
		<ul className='flex flex-col items-center gap-8'>
			{advantagesData.advantages.map(({ id, description }) => (
				<li
					key={id}
					className={`advantage-icon${id} flex flex-col items-center gap-4 px-4`}
				>
					<p className='text-center'>{description}</p>
				</li>
			))}
		</ul>
	);
};
