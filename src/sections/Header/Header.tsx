'use client';

import { useState } from 'react';

import { Logo } from '@/components/ui/Logo';
import { NavMenu } from '@/components/ui/NavMenu';
import { ButtonMain } from '@/components/ui/ButtonMain/ButtonMain';
import { BurgerMenu } from '@/components/ui/BurgerMenu';

import { headerData } from '@/data';

import BurgerIcon from '@/../public/icons/menu.svg';

export const Header = () => {
	const [isOpened, setIsOpened] = useState(false);

	const toggleMenuOpen = () => {
		setIsOpened(prev => !prev);
		document.body.style.overflow = isOpened ? 'auto' : 'hidden';
	};

	return (
		<header className='w-full  py-6'>
			<div className='container flex items-center justify-between '>
				<Logo />
				<NavMenu className='hidden lg:block' />
				<ButtonMain chapter='header' to='contacts' className='hidden lg:flex'>
					{headerData.text}
				</ButtonMain>
				<button
					type='button'
					aria-label={headerData.ariaLabelOpen}
					className='h-12 w-12 p-3 transition hover:scale-125 lg:hidden'
					onClick={toggleMenuOpen}
				>
					<BurgerIcon width={24} height={24} />
				</button>
				{isOpened && <BurgerMenu onClick={toggleMenuOpen} />}
			</div>
		</header>
	);
};

