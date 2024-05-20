'use client';

import { FC } from 'react';
import { Link } from 'react-scroll';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

import { navMenuData } from '@/data';

import { INavMenuProps } from './INavMenuProps.types';

import s from './NavMenu.module.css';

export const NavMenu: FC<INavMenuProps> = ({ onClick, className }) => {
  const pathname = usePathname();

  return (
    <nav className={`${className}`}>
      <ul className='flex flex-col items-center gap-6 lg:flex-row'>
        {navMenuData.map(({ id, section, children }) => (
          <li
            key={id}
            className={clsx(
              'font-tenor text-h3 font-normal text-green lg:font-geologica lg:text-normal lg:font-extralight ',
              pathname === '/policy' ? 'lg:text-green' : 'lg:text-white',
            )}
          >
            <Link
              to={section}
              smooth={true}
              duration={500}
              onClick={() => onClick(section)}
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
