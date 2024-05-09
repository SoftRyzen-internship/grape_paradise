import { FC } from 'react';

import { NavMenu } from '../NavMenu';
import { Logo } from '../Logo';

import { IBurgerMenuProps } from './IBurgerMenuProps.types';


export const BurgerMenu: FC<IBurgerMenuProps> = ({ onClick }) => {
  return (
		<div className='fixed right-0 top-0 z-10 flex flex-col h-screen w-screen backdrop-blur-25'>
			<div className='px-4 md:px-[34px] py-6'>
				<Logo theme={'green'} size={'small'} />
			</div>
			
			<NavMenu onClick={onClick} />
		</div>
	);
};

