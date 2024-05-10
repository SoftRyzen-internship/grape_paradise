import React, { FC } from 'react';
import Image from 'next/image';

import { productCardData } from '@/data';
import { buttonsData } from '@/data';

import { ButtonMain } from '../ButtonMain/ButtonMain';

import styles from './ProductCard.module.css';
import { IProductCardProps } from './ProductCard.types';

export const ProdudtCard: FC<IProductCardProps> = ({ index = 0 }) => {
	return (
		<>
			<div className='bg-bg-2 w-fill mx-auto sm:w-[480px] md:w-[334px] lg:w-[521px]'>
				<h3 className='text-h3 lg:text-h3_desk'>
					{productCardData[index].title}
				</h3>

				<div
					className={`w-fill relative mx-auto mb-4 mt-6 h-[229px] sm:w-[480px] md:mb-6 md:h-[274px] md:w-[334px] lg:mb-10 lg:mt-10 lg:w-[521px] ${styles.containerImg} overflow-hidden`}
				>
					<Image
						className='object-cover'
						fill
						src={productCardData[index].img.src}
						alt={productCardData[index].img.alt}
						priority
					/>
				</div>

				<ButtonMain chapter='card' to='контакти'>
					{buttonsData.orderButton}
				</ButtonMain>
			</div>
		</>
	);
};
