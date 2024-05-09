'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { ILogoProps } from './Logo.types';
import { LogoSvg } from './LogoSvg';

export const Logo: React.FC<ILogoProps> = ({
	theme = 'white',
	size = 'small',
}) => {
	const [isActive, setIsActive] = useState(false);

	const active =
		'cursor-pointer';

	return (
		<>
			<Link
				className={active}
				href='/'
				aria-label='Logo'
				onMouseEnter={() => setIsActive(true)}
				onMouseLeave={() => setIsActive(false)}
				onFocus={() => setIsActive(true)}
				onBlur={() => setIsActive(false)}
			>
				<div className='inline-block'>
					<LogoSvg isActive={isActive} theme={theme} size={size} />
				</div>
			</Link>
		</>
	);
};
