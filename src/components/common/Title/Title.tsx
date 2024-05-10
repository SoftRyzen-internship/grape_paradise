import { FC } from 'react';

import { clsx } from 'clsx';

import { ITitleProps } from './Title.types';

export const Title: FC<ITitleProps> = ({ chapter, styles, children }) => {
	return (
		<>
			{chapter === 'hero' ? (
				<h1 className={clsx('main-title', styles)}>{children}</h1>
			) : chapter === 'contacts' ? (
				<h3 className={clsx('subtitle', styles)}>{children} </h3>
			) : (
				<h2 className={clsx('title', styles)}>{children}</h2>
			)}
		</>
	);
};
