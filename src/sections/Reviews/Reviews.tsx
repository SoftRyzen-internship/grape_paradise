import { FC } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/common/Title';
import { ReviewsSlider } from '@/components/common/ReviewsSlider';

import { fetchReviews } from '@/sanity/request/fetchReviews';

import { reviewsData } from '@/data';

export const Reviews: FC = async () => {
  const reviews = await fetchReviews();

  return (
    <Section
      id={reviewsData.id}
      sectionStyles='pt-[30px] pb-[110px] md:pt-10 md:pb-20 lg:py-20'
    >
      <Title className='mb-8 w-[216px] md:w-[261px] lg:mb-16 lg:w-[592px]'>
        {reviewsData.title}
      </Title>
      <ReviewsSlider data={reviews} />
    </Section>
  );
};
