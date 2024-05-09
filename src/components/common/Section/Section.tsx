import React from 'react';

import clsx from 'clsx';

import { ISectionProps } from './Section.types';

export const Section = ({ id, styles, children }: ISectionProps) => {
	return (
		<section id={id} className={clsx('w-full', styles)}>
			<div className='container outline outline-darkGreen'>{children}</div>
		</section>
	);
};
