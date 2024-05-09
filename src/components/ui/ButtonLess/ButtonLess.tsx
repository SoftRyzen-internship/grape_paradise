'use client';

import React from 'react';
import { ButtonLessProps } from './ButtonLess.types';
import clsx from 'clsx';

export const ButtonLess = ({ type, purpose, children }: ButtonLessProps) => {
	return (
		<button
			type={type}
			className={clsx({
				'lg lg:w-[279px]lg:text-btn_desk flex h-[59px] w-full cursor-pointer items-center justify-center rounded-60px bg-green px-7 py-5 font-tenor text-btn font-normal uppercase text-white hover:bg-darkGreen focus:bg-darkGreen md:w-[234px] lg:h-[63px]':
					purpose === 'form',
				'group flex h-12 w-12 items-center justify-center rounded-full border border-green hover:bg-green hover:fill-white lg:h-[72px] lg:w-[72px]':
					purpose === 'slider',
				'bg-white20 backdrop-blur-70 flex h-[88px] w-[88px] items-center justify-center rounded-full hover:bg-black lg:h-36 lg:w-36':
					purpose === 'video',
			})}
		>
			{children}
		</button>
	);
};
