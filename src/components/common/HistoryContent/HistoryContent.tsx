import { FC, Suspense } from 'react';

import { Title } from '@/components/common/Title';
import { ButtonMain } from '@/components/ui/ButtonMain';

import { historyData } from '@/data';

export const HistoryContent: FC = () => (
  <div className='md:w-[334px] lg:w-[488px]'>
    <Title history={true} className='mb-4 w-[320px] md:mb-6 md:w-full'>
      {historyData.title}
    </Title>

    <p className='mb-3 md:mb-4 lg:mb-6 lg:text-normal_desk'>
      {historyData.description}
    </p>

    <p className='lg:normal_desk mb-6 lg:mb-[52px]'>{historyData.offer}</p>

    <Suspense>
      <ButtonMain chapter='about' to={historyData.link}>
        {historyData.button}
      </ButtonMain>
    </Suspense>
  </div>
);
