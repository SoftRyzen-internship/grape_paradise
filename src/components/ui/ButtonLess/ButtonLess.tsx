'use client';

import React from 'react';

import clsx from 'clsx';

import { IButtonLessProps } from './ButtonLess.types';

export const ButtonLess: React.FC<IButtonLessProps> = ({
	type,
	purpose,
	disabled,
	children,
}) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={clsx(
				'transition disabled:border-green30 disabled:hover:bg-transparent disabled:focus:bg-transparent',
				{
					'lg lg:w-[279px]lg:text-btn_desk flex h-[59px] w-full cursor-pointer items-center justify-center rounded-60px bg-green px-7 py-5 font-tenor text-btn font-normal uppercase text-white hover:bg-darkGreen focus:bg-darkGreen md:w-[234px] lg:h-[63px]':
						purpose === 'form',
					' group flex h-12 w-12 items-center justify-center rounded-full border border-green hover:bg-green hover:fill-white lg:h-[72px] lg:w-[72px]':
						purpose === 'slider',
					'flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white20 backdrop-blur-70 hover:bg-white40 focus:bg-white40 lg:h-36 lg:w-36':
						purpose === 'video',
				},
			)}
		>
			{children}
		</button>
	);
};
