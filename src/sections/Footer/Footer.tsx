'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import Link from 'next/link';

import { Logo } from '@/components/ui/Logo';

import { footerData } from '@/data';

import GoIT from '@/../public/icons/goit-icon.svg';
import SoftRyzen from '@/../public/icons/softryzen-icon.svg';

import s from './Footer.module.css';

export const Footer: FC = () => {
  const pathname = usePathname();
  const policy = pathname === '/policy';

  return (
    <footer
      className={clsx(
        s.background,
        'relative w-full bg-bg2 bg-no-repeat pb-8',
        !policy && 'bg-[center_20px] pt-[140px] md:pt-[260px] lg:pt-[460px]',
        policy && s.footer,
        policy &&
          'bg-[center_60px] pt-[180px] md:pt-[300px] lg:bg-[center_80px] lg:pt-[500px]',
      )}
    >
      <div className='container'>
        <div className='mb-8 flex justify-center lg:mb-6'>
          <Logo theme={'green'} size={'big'} toScroll={policy ? false : true} />
        </div>
        <div className='border-t-2 border-stroke pt-8 lg:flex lg:flex-row-reverse lg:justify-between'>
          <div className='mb-8 flex flex-col gap-4 md:mx-auto md:mb-4 md:w-[402px] md:flex-row md:gap-6 lg:mx-0 lg:mb-0'>
            <p className='mx-auto text-center font-geologica text-small font-extralight text-bodyDark mdOnly:font-[250]'>
              {footerData.create}
            </p>
            <div className='mx-auto flex w-[211px] items-baseline gap-4'>
              <Link
                href={footerData.linkGoIT}
                target={footerData.target}
                rel={footerData.rel}
                aria-label={footerData.ariaGoIT}
              >
                <GoIT
                  width={64}
                  height={20}
                  className='fill-greyLogo transition hover:fill-accent focus:fill-accent'
                />
              </Link>
              <Link
                href={footerData.linkSoftRyzen}
                target={footerData.target}
                rel={footerData.rel}
                aria-label={footerData.ariaSoftRyzen}
              >
                <SoftRyzen
                  width={131}
                  height={20}
                  className='fill-greyLogo transition hover:fill-accent focus:fill-accent'
                />
              </Link>
            </div>
          </div>
          <div className='lg:flex lg:flex-row-reverse lg:justify-end'>
            <Link
              href={policy ? '/' : '/policy'}
              className='mx-auto mb-8 block w-fit font-geologica text-small font-extralight text-bodyDark hover:text-green focus:text-green md:mb-4 lg:mx-0 lg:mb-0 mdOnly:font-[250]'
            >
              {policy ? footerData.home : footerData.policy}
            </Link>
            <p
              className={clsx(
                policy ? 'lg:mr-[260px]' : 'lg:mr-[158px]',
                'text-center font-geologica text-small font-extralight text-bodyDark mdOnly:font-[250]',
              )}
            >
              &copy; {footerData.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
