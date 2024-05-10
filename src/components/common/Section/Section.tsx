import React from 'react';

import clsx from 'clsx';

import { ISectionProps } from './Section.types';

export const Section: React.FC<ISectionProps> = ({ id, styles, children }) => {
	return (
		<section id={id} className={clsx('w-full', styles)}>
			<div className='container'>{children}</div>
		</section>
	);
};
