import { FC } from 'react';

import { AdvantagesCard } from '@/components/common/AdvantagesCard';

import { advantagesData } from '@/data';

import s from './Advantages.module.css';

export const Advantages: FC = () => (
	<section
		className={`relative bg-contain bg-center bg-repeat-x py-[60px] md:py-20 lg:py-[183px] ${s.advantages_bg} ${s.leaf}`}
	>
		<div className={`container ${s.bottle}`}>
			<h2 className='title mb-6 text-green md:mb-10 lg:mb-16'>
				{advantagesData.title.first}
				<span className='block'>{advantagesData.title.second}</span>
			</h2>
			<AdvantagesCard />
		</div>
	</section>
);
