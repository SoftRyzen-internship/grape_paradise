import s from './AdvantagesCard.module.css';

import React from 'react';

import { advantagesData } from '@/data';

export const AdvantagesCard: React.FC = () => {
	return (
		<ul className='flex flex-col items-center gap-8 md:flex-row md:items-baseline'>
			{advantagesData.advantages.map(({ id, description }) => (
				<li
					key={id}
					className={`${s[id]} flex flex-col items-center gap-4 md:w-[151px] md:gap-6 lg:w-[280px]`}
				>
					<p className='px-4 text-center md:p-0 md:text-small lg:px-[25px] lg:text-normal_desk'>
						{description}
					</p>
				</li>
			))}
		</ul>
	);
};
