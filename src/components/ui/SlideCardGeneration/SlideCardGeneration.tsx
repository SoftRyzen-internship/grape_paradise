import { FC } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';

import { serviceCardData } from '@/data';
import { productCardData } from '@/data';
import { buttonsData } from '@/data';

import { ButtonMain } from '@/components/ui/ButtonMain/ButtonMain';
import { Title } from '@/components/common/Title/Title';

import { ISlideCardGenerationProps } from './SlideCardGeneration.types';

import s from './SlideCardGeneration.module.css';

export const SlideCardGeneration: FC<ISlideCardGenerationProps> = ({
	index = 0,
	slide,
}) => {

	const className = clsx(
		'z-5 w-fill relative mx-auto mb-4 mt-6 h-[229px] overflow-hidden sm:w-[480px] md:h-[274px] md:w-[330px] lg:mb-8 lg:mt-10 lg:w-[521px]',
		s.containerImg,
		{ 'md:mb-6': slide === 'product', 'lg:mb-11': slide === 'product' },
	);

	return (
		<>
			<div className='bg-bg-2 w-fill mx-auto sm:w-[480px] md:w-[330px] lg:w-[521px]'>
				<Title chapter='chapter' styles='text-black'>
					{slide === 'service'
						? serviceCardData[index].title
						: productCardData[index].title}
				</Title>

				<div className={className}>
					<Image
						className='object-cover'
						fill
						src={
							slide === 'service'
								? serviceCardData[index].img.src
								: productCardData[index].img.src
						}
						alt={
							slide === 'service'
								? serviceCardData[index].img.alt
								: productCardData[index].img.alt
						}
						priority
					/>
				</div>
				{slide === 'service' && (
					<p className='mb-6 h-[168px] text-normal md:mb-8 lg:mb-12 lg:h-[135px] lg:text-normal_desk'>
						{serviceCardData[index].description}
					</p>
				)}

				<ButtonMain chapter='card' to='контакти'>
					{buttonsData.orderButton}
				</ButtonMain>
			</div>
		</>
	);
};
