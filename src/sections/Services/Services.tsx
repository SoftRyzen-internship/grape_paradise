import { FC } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/common/Title';

import { servicesData } from '@/data';


export const Services:FC = () => {
  return (
		<Section id={servicesData.id} sectionStyles='py-[30px] md:py-10 lg:py-20'>
			<Title styles='smOnly:mb-6 smOnly:w-[129px] '>
				{servicesData.title}
			</Title>
		</Section>
	);
};
