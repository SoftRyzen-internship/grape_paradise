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
			classNames=''
		>
			{children}
		</Link>
	);
};

export default ButtonMain;
