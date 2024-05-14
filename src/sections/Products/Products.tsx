import { FC } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/common/Title';
import { SlideCardGeneration } from '@/components/common/SlideCardGeneration';

import { productsData } from '@/data';
import { productCardData } from '@/data';


export const Products: FC = () => (
	<Section
		id={productsData.id}
		sectionStyles='py-[30px] md:py-[40px] lg:py-[80px]'
    containerStyles='container'
	>
    <Title styles='w-[255px] md:w-[302px] lg:w-1/2 mb-6 md:mb-8 lg:mb-16'>{productsData.title}</Title>
		{/* <Slider array={productCardData} slide='product' loop = {true} /> */}
		<div className='flex md:items-center md:justify-between md:gap-40 lg:gap-174'>
			<SlideCardGeneration data={productCardData[1]} slide='product' />
      <SlideCardGeneration data={productCardData[2]} slide='product' />
		</div>
	</Section>
);
