'use client';

import { FC } from 'react';

import { Section } from '@/components/common/Section/Section';
import { SlideCardReviews } from '@/components/common/SlideCardReview';

export const Observer: FC = () => {
	return (
		<>
			<Section sectionStyles='pt-[144px] pb-[102px] md:pt-[120px] md:pb-[80px] lg:pt-[170px] lg:pb-[95px]'>
				<SlideCardReviews />
			</Section>
		</>
	);
};
