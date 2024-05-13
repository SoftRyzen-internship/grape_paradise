import { FC, Fragment } from 'react';

import Marquee from 'react-fast-marquee';

import { movingLineData } from '@/data';

export const MovingLine: FC = () => {
	return (
		<Marquee>
			{movingLineData.map(({ id, text }) => (
				<Fragment key={id}>
					<p>{text}</p>
					<div className='h-3 w-3 bg-accent'></div>
				</Fragment>
			))}
		</Marquee>
	);
};
