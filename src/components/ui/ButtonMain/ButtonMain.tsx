'use client';

import { FC } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-scroll';

import { IButtonMainProps } from './ButtonMain.types';

export const ButtonMain: FC<IButtonMainProps> = ({
  to,
  chapter,
  children,
  className,
  onClick,
}) => {
  return (
    <Link
      href='#'
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      offset={0}
      onClick={onClick}
      className={clsx(
        'flex cursor-pointer items-center justify-center rounded-60px font-tenor text-btn font-normal uppercase text-green transition hover:bg-green hover:text-white focus:bg-green focus:text-white md:border-green md:bg-transparent',
        {
          'h-[43px] w-[218px] border lg:border-white50 lg:text-white lg:hover:bg-white lg:hover:text-green lg:focus:bg-white lg:focus:text-green':
            chapter === 'header',
        },
        {
          'h-[59px] w-full bg-white md:w-[238px] md:border md:border-green50 lg:h-[63px] lg:w-[284px] lg:text-btn_desk':
            chapter === 'about',
        },
        {
          'h-[59px] w-full bg-white md:w-[157px] md:border md:border-green50 lg:h-[63px] lg:w-[182px] lg:text-btn_desk':
            chapter === 'card',
        },
        {
          'h-[43px] w-[218px] lg:bg-white': chapter === 'policy',
        },
        className,
      )}
    >
      {children}
    </Link>
  );
};
