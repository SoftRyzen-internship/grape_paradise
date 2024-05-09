import s from './AdvantagesCard.module.css';

import React from 'react';

import { advantagesData } from '@/data';

export const AdvantagesCard: React.FC = () => {
	return (
		<ul className='flex flex-col items-center gap-8'>
			{advantagesData.advantages.map(({ id, description }) => (
				<li
					key={id}
					className={`${s[id]} flex flex-col items-center gap-4 px-4`}
				>
					<p className='text-center'>{description}</p>
				</li>
			))}
		</ul>
	);
};
