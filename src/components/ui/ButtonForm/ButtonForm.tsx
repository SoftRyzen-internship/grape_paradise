'use client';

import React from 'react';

export const ButtonForm = ({ children }: { children: React.ReactNode }) => {
	return (
		<button
			type='submit'
			className='hover:bg-darkGreen focus:bg-darkGreen lg flex h-[59px] w-full cursor-pointer items-center justify-center rounded-60px bg-green px-7 py-5 font-tenor text-btn font-normal uppercase text-white
            md:w-[234px]
			lg:h-[63px] lg:w-[279px] lg:text-btn_desk'
		>
			{children}
		</button>
	);
};
