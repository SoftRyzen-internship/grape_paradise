'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { clsx } from 'clsx';

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
				'relative w-full bg-bg2 bg-repeat-x pb-8',
				!policy && 'bg-[center_top] pt-[115px] md:pt-[238px] lg:pt-[438px]',
				policy && s.footer,
				policy && 'bg-[center_28px] pt-[140px] md:pt-[270px] lg:pt-[480px]',
			)}
		>
			<div className='container'>
				<div className='mb-8 flex justify-center lg:mb-6'>
					<Logo theme={'green'} size={'big'} />
				</div>
				<div className='border-t-2 border-stroke pt-8 lg:flex lg:flex-row-reverse lg:justify-between'>
					<div className='mb-8 flex flex-col gap-4 md:mx-auto md:mb-4 md:w-[402px] md:flex-row md:gap-6 lg:mx-0 lg:mb-0'>
						<p className='mdOnly:font-[250] mx-auto text-center font-geologica text-small font-extralight text-bodyDark'>
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
							className='mdOnly:font-[250] mx-auto mb-8 block w-fit font-geologica text-small font-extralight text-bodyDark hover:text-green focus:text-green md:mb-4 lg:mx-0 lg:mb-0'
						>
							{policy ? footerData.home : footerData.policy}
						</Link>
						<p
							className={clsx(
								policy ? 'lg:mr-[260px]' : 'lg:mr-[158px]',
								'mdOnly:font-[250] text-center font-geologica text-small font-extralight text-bodyDark',
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
