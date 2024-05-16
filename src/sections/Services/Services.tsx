import { FC } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/common/Title';
import { ServicesSlider } from '@/components/common/ServicesSlider';

import { fetchServices } from '@/sanity/request/fetchServices';

import { servicesData } from '@/data';

export const Services: FC = async () => {
	const services = await fetchServices();

	return (
		<Section id={servicesData.id} sectionStyles='py-[30px] md:py-10 lg:py-20'>
			<Title className='mb-6 md:mb-8 lg:mb-16 smOnly:w-[129px]'>
				{servicesData.title}
			</Title>
			<ServicesSlider data={services} />
		</Section>
	);
};
