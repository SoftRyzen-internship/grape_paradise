import { FC } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/common/Title';
import { Slider } from '@/components/common/Slider';
import { ServicesList } from '@/components/common/ServicesList';

import { fetchServices } from '@/sanity/request/fetchServices';

import { servicesData } from '@/data';


export interface IAssetProps {
	_ref: string;
	_type: string;
}

export interface IIimageServicesProps {
	_type: string;
	asset: IAssetProps;
}

export interface IServicesProps {
	_id: string;
	servicesTitle: string;
	imageServices: IIimageServicesProps;
	imageServicesAlt: string;
	servicesText: string;
} 

export const Services: FC = async () => {
	const services = await fetchServices();
	// console.log('services', services);

	return (
		<Section id={servicesData.id} sectionStyles='py-[30px] md:py-10 lg:py-20'>
			<Title className='smOnly:mb-6 smOnly:w-[129px]'>
				{servicesData.title}
			</Title>

			<Slider>
				{services.map((service: IServicesProps) => (
					<ServicesList key={service._id} data={service} />
				))}
			</Slider>
		</Section>
	);
};
