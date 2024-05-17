import { FC } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/common/Title';
import { AdvantagesCard } from '@/components/common/AdvantagesCard';

import { advantagesData } from '@/data';

import s from './Advantages.module.css';
import {
  BottleAfter,
  LeafAfter,
  LeafBefore,
} from '@/components/common/HistoryAnimation';

export const Advantages: FC = () => (
  <Section
    sectionStyles={`relative py-[60px] md:py-20 lg:py-[183px] ${s.advantages_bg}`}
    containerStyles={`relative ${s.leaf}`}
  >
    <LeafBefore />
    <LeafAfter />

    <div className={`relative ${s.bottle}`}>
      <Title className='mb-6 w-[255px] md:mb-10 md:w-[350px] lg:mb-16 lg:w-[590px]'>
        {advantagesData.title}
      </Title>

      <AdvantagesCard />
      <BottleAfter />
    </div>
  </Section>
);
