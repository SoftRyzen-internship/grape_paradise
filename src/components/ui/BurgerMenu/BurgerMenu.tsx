import { FC } from 'react';

import { NavMenu } from '../NavMenu';
import { Logo } from '../Logo';
import { ButtonMain } from '../ButtonMain';

import CloseIcon from '@/../public/icons/close.svg';

import { headerData } from '@/data';

import { IBurgerMenuProps } from './IBurgerMenuProps.types';

import { ButtonLess } from '../ButtonLess';

import styles from './BurgerMenu.module.css';

export const BurgerMenu: FC<IBurgerMenuProps> = ({ onClick }) => {
	return (
		<div
			className={`fixed left-0 top-0 z-50 flex h-full w-full flex-col overflow-hidden bg-bg1 lg:hidden ${styles.background}`}
		>
			<div className='container'>
				<div className='flex items-center justify-between py-6'>
					<Logo theme={'green'} size={'small'} />
					<ButtonLess
						type='button'
						purpose='burger'
						aria-label={headerData.ariaLabelClose}
						onClick={onClick}
					>
						<CloseIcon width={24} height={24} className='fill-green' />
					</ButtonLess>
					{/* <button
						type='button'
						onClick={onClick}
						aria-label={headerData.ariaLabelClose}
						className='h-12 w-12 p-3 transition hover:scale-125'
					>
						<CloseIcon width={24} height={24} className='fill-green' />
					</button> */}
				</div>

				<div className='mb-[152px] mt-[96px] flex flex-col items-center gap-[73px] md:mb-[96px]'>
					<NavMenu onClick={onClick} />
					<ButtonMain to='contacts' chapter='header' onClick={onClick}>
						{headerData.text}
					</ButtonMain>
				</div>
			</div>
		</div>
	);
};
