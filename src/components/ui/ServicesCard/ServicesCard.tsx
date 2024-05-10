import React, { FC } from 'react';
import Image from 'next/image';

import { serviceCardData } from '@/data';
import { buttonsData } from '@/data';

import { ButtonMain } from '../ButtonMain/ButtonMain';

import styles from './ServicesCard.module.css';
import { IServiceCardProps } from './ServicesCard.types';

export const ServicesCard: FC<IServiceCardProps> = ({ index = 0 }) => {
	return (
		<>
			<div className='bg-bg-2 mx-auto w-fill sm:w-[480px] md:w-[330px] lg:w-[521px]'>

				<h3 className='text-h3 lg:text-h3_desk'>
					{serviceCardData[index].title}
				</h3>

				<div
					className={`z-5 relative mx-auto mb-4 mt-6 w-fill h-[229px] sm:w-[480px] md:h-[274px] md:w-[330px] lg:mb-8 lg:mt-10 lg:w-[521px] ${styles.containerImg} overflow-hidden`}
				>
					<Image
						className='object-cover'
						fill
						src={serviceCardData[index].img.src}
						alt={serviceCardData[index].img.alt}
						priority
					/>
				</div>
				<p className='mb-6 h-[168px] text-normal md:mb-8 lg:mb-12 lg:h-[135px] lg:text-normal_desk'>
					{serviceCardData[index].description}
				</p>
 				
				<ButtonMain chapter='card' to='контакти'>
					{buttonsData.orderButton}
				</ButtonMain> 

			</div>
		</>
	);
};
