import { FC } from 'react';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

import { Logo } from '@/components/ui/Logo';
import { ButtonLess } from '@/components/ui/ButtonLess';
import { NavMenu } from '@/components/ui/NavMenu';
import { ButtonMain } from '@/components/ui/ButtonMain';

import CloseIcon from '@/../public/icons/close.svg';

import { headerData } from '@/data';

import { IBurgerMenuProps } from './IBurgerMenuProps.types';

import s from './BurgerMenu.module.css';

export const BurgerMenu: FC<IBurgerMenuProps> = ({ onClick, isOpened }) => {
  const pathname = usePathname();

  const handleClick = (to: string) => {
    if (pathname === '/policy') {
      window.location.href = `/#${to}`;
    } else {
      onClick();
    }
  };

  return (
    <div
      className={clsx(
        `fixed left-0 top-0 z-50 flex h-full w-full flex-col overflow-hidden bg-bg1 transition lg:hidden ${s.background}`,
        {
          'translate-x-full': !isOpened,
        },
      )}
    >
      <div className='container'>
        <div className='flex items-center justify-between py-6'>
          <Logo theme={'green'} size={'small'} />
          <ButtonLess
            type='button'
            purpose='burger'
            aria-label={headerData.ariaLabelClose}
            onClick={onClick}
            className='h-12 w-12 p-3'
          >
            <CloseIcon width={24} height={24} className='fill-green' />
          </ButtonLess>
        </div>

        <div className='mb-[152px] mt-[96px] flex flex-col items-center gap-[73px] md:mb-[96px]'>
          <NavMenu onClick={handleClick} />
          <ButtonMain
            to='contacts'
            chapter='header'
            onClick={() => handleClick('contacts')}
            className='border-green'
          >
            {headerData.text}
          </ButtonMain>
        </div>
      </div>
    </div>
  );
};
