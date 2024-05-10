import { FC } from 'react';
import Link from 'next/link';

import { ILogoProps } from './Logo.types';
import { LogoSvg } from './LogoSvg';

export const Logo: FC<ILogoProps> = ({

	theme = 'white',
	size = 'small',
}) => {
	

	return (
		<>
			<Link
				className='cursor-pointer focus:outline-1 focus:outline-white'
				href='/'
				aria-label='Logo'
			>
				<div className='inline-block'>
					<LogoSvg theme={theme} size={size} />
				</div>
			</Link>
		</>
	);
};
