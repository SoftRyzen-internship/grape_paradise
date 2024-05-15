import { FC } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/common/Title';

import { fetchServices } from '@/sanity/request/fetchServices';

import { servicesData } from '@/data';


export const Services: FC = async () => {
	const services = await fetchServices();
	console.log('services', services[0].imageServices);

	return (
		<Section id={servicesData.id} sectionStyles='py-[30px] md:py-10 lg:py-20'>
			<Title className='smOnly:mb-6 smOnly:w-[129px]'>{servicesData.title}</Title>
		</Section>
	);
};
