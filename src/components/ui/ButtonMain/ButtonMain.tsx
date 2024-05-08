'use client';

import React from 'react';
import { Link } from 'react-scroll';
import { ButtonMainProps } from './ButtonMain.types';

export const ButtonMain = ({ to, children }: ButtonMainProps) => {
	return (
		<Link
			to={to}
			spy={true}
			smooth={true}
			duration={500}
			offset={40}
			className='flex h-[59px] items-center justify-center rounded-60px border border-transparent bg-white px-7 py-5 font-tenor text-btn font-normal uppercase text-green hover:bg-green hover:text-white
			md:border-green md:bg-transparent
			lg:h-[63px] lg:text-btn_desk'
		>
			{children}
		</Link>
	);
};
