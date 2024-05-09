import { FC } from 'react';
import CloseIcon from '@/../public/icons/close.svg';
import { NavMenu } from '../NavMenu';
import { Logo } from '../Logo';

import { IBurgerMenuProps } from './IBurgerMenuProps.types';
import { ButtonMain } from '../ButtonMain/ButtonMain';
import styles from './BurgerMenu.module.css';


export const BurgerMenu: FC<IBurgerMenuProps> = ({ onClick }) => {
	return (
		<div className={`fixed right-0 top-0 z-10 flex h-[640px] md:h-[584px] w-screen flex-col backdrop-blur-25 ${styles.background} container overflow-hidden`}>
			<div className='flex items-center justify-between px-4 py-6 md:px-[34px]'>
				<Logo theme={'green'} size={'small'} />
				<button
					type='button'
					onClick={onClick}
					aria-label='Закрити бургер меню'
					className='h-12 w-12 p-3 transition hover:scale-110'
				>
					<CloseIcon width={24} height={24} className='fill-green' />
				</button>
			</div>

			<div className='flex flex-col items-center gap-[73px] mt-[96px]'>
				<NavMenu onClick={onClick} />
				<ButtonMain to='contacts' chapter='header'>
					Зв’язатись з нами
				</ButtonMain>
			</div>
		</div>
	);
};
