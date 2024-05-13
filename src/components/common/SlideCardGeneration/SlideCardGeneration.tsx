import { FC } from 'react';
import { clsx } from 'clsx';
import Image from 'next/image';

import { ButtonMain } from '@/components/ui/ButtonMain/ButtonMain';
import { Title } from '@/components/common/Title/Title';

import { serviceCardData } from '@/data';
import { productCardData } from '@/data';
import { buttonsData } from '@/data';

import { ISlideCardGenerationProps } from './SlideCardGeneration.types';

import s from './SlideCardGeneration.module.css';

export const SlideCardGeneration: FC<ISlideCardGenerationProps> = ({
	index = 0,
	slide,
}) => {
	const className = clsx(
		'z-5 w-fill relative  h-[229px] overflow-hidden sm:w-[448px] md:h-[274px] md:w-[330px] lg:mb-8 lg:mt-10 lg:w-[521px]',
		s.containerImg,
		{ 'mb-4 mt-6 lg:mb-4 lg:mt-5': slide === 'service' },
		{ 'mt-4 lg:mb-8 lg:mt-8': slide === 'product' },
	);

	return (
		<>
			<div
				className={clsx(
					'w-fill flex cursor-pointer flex-col justify-between md:w-[330px] lg:w-[521px]',
					s.containerCard,
					{ 'min-h-[545px] md:h-[598px] lg:h-[633px]': slide === 'service' },
					{ 'min-h-[354px] md:h-[406px] lg:h-[455px]': slide === 'product' },
				)}
			>
				<div>
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
							sizes='(max-width: 768px) 448px, (max-width: 1280px) 330px, 521px'
							priority
						/>
					</div>
					{slide === 'service' && (
						<p className='w-full text-normal lg:text-normal_desk'>
							{serviceCardData[index].description}
						</p>
					)}
				</div>
				<div className='mt-6 md:mt-0 '>
					<ButtonMain chapter='card' to='контакти'>
						{buttonsData.orderButton}
					</ButtonMain>
				</div>
			</div>
		</>
	);
};
