import { FC } from 'react';

import { Section } from '@/components/common/Section/Section';
import { Title } from '@/components/common/Title/Title';
import { AdvantagesCard } from '@/components/common/AdvantagesCard';

import { advantagesData } from '@/data';

import s from './Advantages.module.css';

export const Advantages: FC = () => (
	<Section
		sectionStyles={`relative py-[60px] md:py-20 lg:py-[183px] ${s.advantages_bg}`}
		containerStyles={`${s.leaf}`}
	>
		<div className={`${s.bottle}`}>
			<Title styles='mb-6 w-[255px] md:w-[350px] md:mb-10 lg:w-[590px] lg:mb-16'>
				{advantagesData.title}
			</Title>

			<AdvantagesCard />
		</div>
	</Section>
);
