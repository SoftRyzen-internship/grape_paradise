'use client';

import { FC, useEffect, useState } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/common/Title';

import { servicesData } from '@/data';
import { IDataCardGeneration } from '@/components/common/SlideCardGeneration/SlideCardGeneration.types';
import { fetchServices } from '@/sanity/request/fetchServices';

export const Services: FC = () => {
	const [services, setServices] = useState<IDataCardGeneration[]>([]);
	
	console.log('services', services);

	useEffect(() => {
		const fetchData = async () => {
			const servicesSanity = await fetchServices();
			setServices(servicesSanity);
		};

		fetchData();
	}, []);

	return (
		<Section id={servicesData.id} sectionStyles='py-[30px] md:py-10 lg:py-20'>
			<Title styles='smOnly:mb-6 smOnly:w-[129px]'>{servicesData.title}</Title>
		</Section>
	);
};
