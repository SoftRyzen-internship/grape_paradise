'use client';

import { useState } from 'react';

import BurgerIcon from '@/../public/icons/menu.svg';

import { ButtonMain } from '@/components/ui/ButtonMain/ButtonMain';
import { Logo } from '@/components/ui/Logo';
import { NavMenu } from '@/components/ui/NavMenu';

export const Header = () => {
	const [isOpened, setIsOpened] = useState(false);

	const toggleMenuOpen = () => {
			setIsOpened(prev => !prev);
			document.body.style.overflow = isOpened ? 'auto' : 'hidden';
	};

	return (
		<header className='absolute w-full bg-green py-6'>
			<div className='container flex items-center justify-between'>
				<Logo />
				{/* <div className='hidden items-center justify-between lg:flex '> */}
					<NavMenu className='hidden lg:block' />
					<ButtonMain
						chapter='header'
						to='contacts'
						className='hidden lg:flex'
					>
						Зв’язатись з нами
					</ButtonMain>
				{/* </div> */}
				<button
					type='button'
					aria-label='Відкрити бургер меню'
					className='h-12 w-12 p-3'
					onClick={toggleMenuOpen}
				>
					<BurgerIcon className=' lg:hidden' width={24} height={24} />
				</button>
			</div>
		</header>
	);
};
