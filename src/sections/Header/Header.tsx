'use client';

import { FC, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { clsx } from 'clsx';

import { Logo } from '@/components/ui/Logo';
import { NavMenu } from '@/components/ui/NavMenu';
import { ButtonMain } from '@/components/ui/ButtonMain';
import { ButtonLess } from '@/components/ui/ButtonLess';
import { BurgerMenu } from '@/components/ui/BurgerMenu';

import { headerData } from '@/data';

import BurgerIcon from '@/../public/icons/menu.svg';

export const Header: FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const pathname = usePathname();
  const routers = useRouter();

  const toggleMenuOpen = () => {
    setIsOpened(prev => !prev);
    document.body.style.overflow = isOpened ? 'auto' : 'hidden';
  };

  const handleClick = () => {
    if (pathname === '/policy') {
      routers.push('/');
    }
    return;
  };

  return (
    <header className='absolute left-0 top-0 z-20 w-full bg-transparent py-6'>
      <div className='container flex items-center justify-between '>
        <Logo theme={`${pathname === '/policy' ? 'green' : 'white'}`} />
        <NavMenu className='notLg:hidden' onClick={() => handleClick()} />
        <ButtonMain
          chapter={pathname === '/policy' ? 'policy' : 'header'}
          className={clsx('notLg:hidden')}
          onClick={() => handleClick()}
          to='contacts'
        >
          {headerData.text}
        </ButtonMain>
        <ButtonLess
          type='button'
          purpose='burger'
          aria={headerData.ariaLabelOpen}
          className=' h-12 w-12 p-3 lg:hidden'
          onClick={toggleMenuOpen}
        >
          <BurgerIcon
            width={24}
            height={24}
            className={clsx(
              pathname === '/policy' ? 'stroke-green' : 'stroke-white',
            )}
          />
        </ButtonLess>
        {isOpened && <BurgerMenu onClick={toggleMenuOpen} />}
      </div>
    </header>
  );
};
