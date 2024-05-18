'use client';

import { clsx } from 'clsx';
import { useRef, useState, useEffect, FC } from 'react';

import { slidersData } from '@/data';

import { Modal } from '@/components/ui/Modal';

import s from './SlideCardReview.module.css';
import { ISlideCardReviewsProps } from './SlideCardReviews.types';

export const SlideCardReviews: FC<ISlideCardReviewsProps> = ({
  text,
  author,
}) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [isOverflow, setOverflow] = useState(false);

  useEffect(() => {
    const element = paragraphRef.current;
    if (element) {
      if (
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
      ) {
        setOverflow(true);
      } else {
        setOverflow(false);
      }
    }
  }, []);

  return (
    <>
      <div
        className={clsx(
          'flex h-[331px] flex-col justify-between px-[24px] py-[36px] md:h-[331px] md:w-[334px] lg:h-[485px] lg:w-[580px] lg:px-[64px] lg:py-[56px]',
          s.backgroundImg,
        )}
      >
        <p
          className={clsx(
            'h-[161px] overflow-hidden font-tenor text-large lg:h-[243px] lg:text-large_desk',
            s.reviews,
          )}
          ref={paragraphRef}
        >
          {text}
        </p>

        {isOverflow && (
          <button
            className='text-left font-tenor text-normal_desk underline lg:text-large_desk'
            onClick={() => setModalOpen(true)}
          >
            {slidersData.readMoreButton}
          </button>
        )}

        <p className='font-tenor text-normal text-green lg:text-h2'>
          <span>—</span> {author}
        </p>
      </div>

      <Modal show={modalOpen} onClose={() => setModalOpen(false)} whiteBg>
        <div>
          <p
            className={clsx(
              'h-[161px] overflow-hidden font-tenor text-large lg:h-[243px] lg:text-large_desk',
              s.reviews,
            )}
            ref={paragraphRef}
          >
            {text}
          </p>
          <p className='font-tenor text-normal text-green lg:text-h2'>
            <span>—</span> {author}
          </p>
        </div>
      </Modal>
    </>
  );
};
