import React from 'react';

import { AdvantagesCard } from '@/components/common/AdvantagesCard';

import { advantagesData } from '@/data';

export const Advantages: React.FC = () => (
	<section className='section container bg-bg2'>
		<h2 className='title mb-6 pr-[71px]'>{advantagesData.title}</h2>
		<AdvantagesCard />
	</section>
);
