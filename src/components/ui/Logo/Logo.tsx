'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GrapeHeaven } from './GrapeHeaven';
import { BovkunFamily } from './BovkunFamily';
import { LogoProps } from './Logo.types'; 


export const Logo: React.FC<LogoProps> = ({ theme }) => {
  const [isActive, setIsActive] = useState(false);

  const active =
    'cursor-pointer hover:transition-all hover:duration-150 ease-in-out focus:transition-all focus:duration-150';

  return (
    <>
      <Link
        className={active}
        href="/"
        aria-label="Logo"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      >
        <div
          className={` inline-block box-border  p-1 ${
            theme === 'green' ? 'py-1.5' : ''
          }`}
        >
          <div className="flex flex-col gap-1 items-center">
            <GrapeHeaven isActive={isActive} theme={theme} />

            <BovkunFamily isActive={isActive} theme={theme} />
          </div>
        </div>
      </Link>
    </>
  );
};
