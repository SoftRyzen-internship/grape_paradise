'use client';

import { useState } from 'react';

import { Logo } from '@/components/ui/Logo';
import { NavMenu } from '@/components/ui/NavMenu';
import { ButtonMain } from '@/components/ui/ButtonMain/ButtonMain';
import { BurgerMenu } from '@/components/ui/BurgerMenu';

import { headerData } from '@/data';

import BurgerIcon from '@/../public/icons/menu.svg';
import { ButtonLess } from '@/components/ui/ButtonLess';

export const Header = () => {
	const [isOpened, setIsOpened] = useState(false);

	const toggleMenuOpen = () => {
		setIsOpened(prev => !prev);
		document.body.style.overflow = isOpened ? 'auto' : 'hidden';
	};

	return (
		<header className='w-full py-6'>
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
