'use client';

import { FC } from 'react';
import { Link } from 'react-scroll';

import { navMenuData } from '@/data';

import { INavMenuProps } from './INavMenuProps.types';

import s from './NavMenu.module.css';

export const NavMenu: FC<INavMenuProps> = ({ onClick, className }) => {
	return (
		<nav className={`${className}`}>
			<ul className='flex flex-col items-center gap-6 lg:flex-row'>
				{navMenuData.map(({ id, section, children }) => (
					<li
						key={id}
						className='font-tenor text-h3 font-normal text-green lg:font-geologica lg:text-normal lg:font-extralight lg:text-white'
					>
						<Link
							to={section}
							smooth={true}
							duration={500}
							onClick={onClick}
							href='#'
							ignoreCancelEvents={true}
							className={`relative px-0.5 pb-0.5 focus:outline-1 focus:outline-current ${s.active}`}
						>
							{children}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
