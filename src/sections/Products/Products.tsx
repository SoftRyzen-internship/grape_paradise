import { FC } from 'react';

import { fetchGoods } from '../../sanity/request/fetchGoods';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/common/Title';
import { ProductsSlides } from '@/components/common/ProductsSlider';
import { MovingLine } from '@/components/common/MovingLine';

import { productsData } from '@/data';

export const Products: FC = async () => {
	const products = await fetchGoods();

	return (
		<Section
			id={productsData.id}
			sectionStyles='py-[30px] md:py-[40px] lg:pt-[80px] lg:pb-0'
		>
			<Title className='mb-6 w-[255px] md:mb-8 md:w-[302px] lg:mb-8 lg:w-1/2'>
				{productsData.title}
			</Title>
			<ProductsSlides products={products} />
			<div className='mt-[140px] md:mt-[80px]'>
				<MovingLine />
			</div>
		</Section>
	);
};
