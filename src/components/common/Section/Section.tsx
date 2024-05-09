import React from 'react';

export const Section = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className=''>
			<div className=''>{children}</div>
		</section>
	);
};
