import React, { FC } from 'react';
import Image from 'next/image';

import { productCardData } from '@/data';

import styles from './ProductCard.module.css';
import { IProductCardProps } from './ProductCard.types';

export const ProdudtCard: FC<IProductCardProps> = ({ index = 0 }) => {
	return (
		<>
			<div className='bg-bg-2 mx-auto w-[328px] md:w-[334px] lg:w-[521px]'>
				<h3 className='text-h3 lg:text-h3_desk'>
					{productCardData[index].title}
				</h3>

				<div
					className={`relative mx-auto mb-4 mt-6 h-[229px] w-[328px] md:mb-6 md:h-[274px] md:w-[334px] lg:mb-10 lg:mt-10 lg:w-[521px] ${styles.containerImg} overflow-hidden`}
				>
					<Image
						className='z-5 absolute left-0 right-auto top-0 object-cover'						
						fill
						src={productCardData[index].img.src}
                        alt={productCardData[index].img.alt}
						priority
					/>
				</div>

				<button className='h-[59px] w-full border-2 border-white md:w-[157px] lg:h-[63px]'>
					замовити
				</button>
			</div>
		</>
	);
};
