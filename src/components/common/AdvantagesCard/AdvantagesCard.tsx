import React from 'react';

import { advantagesData } from '@/data';

export interface AdvantagesCardProps {}

export const AdvantagesCard: React.FC<AdvantagesCardProps> = () => {
	return (
		<ul className='flex flex-col gap-8 px-4'>
			{advantagesData.advantages.map(({ id, icon, description }) => (
				<li key={id}>
					{icon}
					<p className='text-center'>{description}</p>
				</li>
			))}
		</ul>
	);
};
