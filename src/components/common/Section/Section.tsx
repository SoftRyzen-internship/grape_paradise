import { FC } from 'react';

import { clsx } from 'clsx';

import { ISectionProps } from './Section.types';

export const Section: FC<ISectionProps> = ({
	id,
	sectionStyles,
	containerStyles,
	children,
}) => {
	return (
		<section id={id} className={clsx('w-full', sectionStyles)}>
			<div className={clsx('container', containerStyles)}>{children}</div>
		</section>
	);
};
