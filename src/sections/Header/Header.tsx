'use client';

import { FC, useState } from 'react';

import { Logo } from '@/components/ui/Logo';
import { NavMenu } from '@/components/ui/NavMenu';
import { ButtonMain } from '@/components/ui/ButtonMain';
import { ButtonLess } from '@/components/ui/ButtonLess';
import { BurgerMenu } from '@/components/ui/BurgerMenu';

import { headerData } from '@/data';

import BurgerIcon from '@/../public/icons/menu.svg';

export const Header:FC = () => {
	const [isOpened, setIsOpened] = useState(false);

	const toggleMenuOpen = () => {
		setIsOpened(prev => !prev);
		document.body.style.overflow = isOpened ? 'auto' : 'hidden';
	};

	return (
		<header className='absolute left-0 top-0 z-20 w-full bg-transparent py-6'>
			<div className='container flex items-center justify-between '>
				<Logo />
				<NavMenu className='notLg:hidden' />
				<ButtonMain chapter='header' to='contacts' styles='notLg:hidden'>
					{headerData.text}
				</ButtonMain>
				<ButtonLess
					type='button'
					purpose='burger'
					aria={headerData.ariaLabelOpen}
					styles='lg:hidden'
					onClick={toggleMenuOpen}
				>
					<BurgerIcon width={24} height={24} />
				</ButtonLess>
				{isOpened && <BurgerMenu onClick={toggleMenuOpen} />}
			</div>
		</header>
	);
};
