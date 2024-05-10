import { FC } from 'react';

import { NavMenu } from '../NavMenu';
import { Logo } from '../Logo';
import { ButtonMain } from '../ButtonMain/ButtonMain';

import CloseIcon from '@/../public/icons/close.svg';

import { burgerMenuData } from '@/data';

import { IBurgerMenuProps } from './IBurgerMenuProps.types';

import styles from './BurgerMenu.module.css';

export const BurgerMenu: FC<IBurgerMenuProps> = ({ onClick }) => {
	return (
		<div
			className={`fixed right-0 top-0 z-10 flex w-screen flex-col overflow-hidden backdrop-blur-25 ${styles.background}`}
		>
			<div className='container'>
				<div className='flex items-center justify-between px-4 py-6 md:px-[34px]'>
					<Logo theme={'green'} size={'small'} />
					<button
						type='button'
						onClick={onClick}
						aria-label={burgerMenuData.ariaLabel}
						className='h-12 w-12 p-3 transition hover:scale-125'
					>
						<CloseIcon width={24} height={24} className='fill-green' />
					</button>
				</div>
				<div className='mb-[152px] mt-[96px] flex flex-col items-center gap-[73px] md:mb-[96px]'>
					<NavMenu onClick={onClick} />
					<ButtonMain to='contacts' chapter='header'>
						{burgerMenuData.text}
					</ButtonMain>
				</div>
			</div>
		</div>
	);
};
