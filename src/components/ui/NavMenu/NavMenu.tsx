'use client';

import { FC } from 'react';
import { Link } from 'react-scroll';

import { navMenuData } from '@/data';

import { INavMenuProps } from './INavMenuProps.types';

import styles from './NavMenu.module.css';

export const NavMenu: FC<INavMenuProps> = ({ onClick }) => {
	return (
		<nav>
			<ul className='flex flex-col items-center gap-6 lg:flex-row'>
				{navMenuData.map(({ id, section, children }) => (
					<li
						key={id}
						className='font-tenor text-h3 text-green lg:font-geologica lg:text-normal lg:font-semilight lg:text-white'
					>
						<Link
							to={section}
							smooth={true}
							duration={500}
							onClick={onClick}
							href='#'
							ignoreCancelEvents={true}
							className={`relative px-0.5 pb-0.5 transition focus:outline-1 focus:outline-current ${styles.active}`}
						>
							{children}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
