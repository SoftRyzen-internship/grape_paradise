'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';

import { LogoSvg } from './LogoSvg';

import { logo } from '@/data';

import { ILogoProps } from './Logo.types';

export const Logo: FC<ILogoProps> = ({
  theme = 'white',
  size = 'small',
  toScroll,
}) => {
  return (
    <>
      {toScroll ? (
        <LinkScroll
          href='#'
          to='hero'
          smooth={true}
          spy={true}
          duration={500}
          offset={0}
          className='cursor-pointer focus:outline-1 focus:outline-white'
          aria-label={logo.ariaLabel}
        >
          <div className='inline-block'>
            <LogoSvg theme={theme} size={size} />
          </div>
        </LinkScroll>
      ) : (
        <Link
          href='/'
          className='cursor-pointer focus:outline-1 focus:outline-white'
          aria-label={logo.ariaLabel}
        >
          <div className='inline-block'>
            <LogoSvg theme={theme} size={size} />
          </div>
        </Link>
      )}
    </>
  );
};
