import React from 'react';
import { Link } from 'react-scroll';
import { ButtonMainProps } from './ButtonMain.types';

const ButtonMain = ({ to, children }: ButtonMainProps) => {
	return (
		<Link
			to={to}
			spy={true}
			smooth={true}
			duration={500}
			offset={40}
			className='rounded-60px flex items-center justify-center border border-transparent px-7 py-5 font-tenor text-btn font-normal uppercase text-green'
		>
			{children}
		</Link>
	);
};

export default ButtonMain;
