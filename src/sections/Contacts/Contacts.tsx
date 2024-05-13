import { FC } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/common/Title';
import { FormBlock } from '@/components/common/Form';

import { contactsData } from '@/data';

import s from './Contacts.module.css';

export const Contacts: FC = () => {
	return (
		<Section
			sectionStyles={`relative pt-[80px] lg:pt-[130px] ${s.contacts_bg}`}
			containerStyles='md:flex justify-between'
		>
			<div className='smOnly:mb-10'>
				<Title chapter='chapter' styles='text-green font-normal'>
					{contactsData.subtitle}
				</Title>
				<address className='w-[320px] font-tenor text-large not-italic text-black lg:text-h3_desk mdOnly:w-[200px]'>
					<p className='mb-[15px] mt-6 md:my-8'>
						{contactsData.address1}
						<br />
						{contactsData.address2}
					</p>
					<a
						href={`tel:${contactsData.phone.replace(/-/g, '').replace(/\s/g, '')}`}
					>
						{contactsData.phone}
					</a>
				</address>
			</div>
			<FormBlock className='md:w-[401px] lg:w-[602px]' />
		</Section>
	);
};
