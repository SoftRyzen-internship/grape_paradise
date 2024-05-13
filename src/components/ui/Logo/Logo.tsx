import { FC } from 'react';
import Link from 'next/link';

import { LogoSvg } from './LogoSvg';

import { logo } from '@/data';

import { ILogoProps } from './Logo.types';

export const Logo: FC<ILogoProps> = ({ theme = 'white', size = 'small' }) => {
	return (
		<>
			<Link
				className='cursor-pointer focus:outline-1 focus:outline-white'
				href='/'
				aria-label={logo.ariaLabel}
			>
				<div className='inline-block'>
					<LogoSvg theme={theme} size={size} />
				</div>
			</Link>
		</>
	);

    
};
