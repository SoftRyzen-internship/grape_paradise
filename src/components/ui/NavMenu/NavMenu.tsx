'use client';

import { Link } from 'react-scroll';

import { headerData } from '@/data';

import { INavMenuProps } from './INavMenuProps.types';

import s from './NavMenu.module.css';

export const NavMenu = ({ onClick }: INavMenuProps) => {
	return (
		<nav>
			<ul className='flex flex-col items-center gap-6 lg:flex-row'>
				{headerData.map(({ id, to, children }) => (
					<li
						key={id}
						className='lg:font-semilight font-tenor text-h3 text-green lg:font-geologica lg:text-normal lg:text-white'
					>
						<Link
							to={to}
							smooth={true}
							duration={500}
							onClick={onClick}
							href='#'
							ignoreCancelEvents={true}
							className={`relative px-0.5 pb-0.5 transition focus:outline-1 focus:outline-current ${s.active}`}
						>
							{children}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

