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
				'': purpose === 'slider',
				'': purpose === 'video',
			})}
		>
			{children}
		</button>
	);
};
