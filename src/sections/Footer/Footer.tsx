'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import { Logo } from '@/components/ui/Logo';

import { footerData } from '@/data';

import Field from '@/../public/icons/footer-field.svg';
import GoIT from '@/../public/icons/goit-icon.svg';
import SoftRyzen from '@/../public/icons/softryzen-icon.svg';

import s from './Footer.module.css';

export const Footer: FC = () => {
	const pathname = usePathname();
	const policy = pathname === '/policy';

	return (
		<footer
			className={clsx(policy && s.footer, 'relative w-full bg-bg2 pb-8 pt-7')}
		>
			<Field />
			<div className='container'>
				<div className='mb-8 flex justify-center'>
					<Logo theme={'green'} size={'big'} />
				</div>
				<div className='flex flex-col border-t-2 border-stroke pt-8'>
					<p className='mx-auto mb-4 text-center font-geologica text-small font-[250] text-bodyDark'>
						{footerData.create}
					</p>
					<div className='mx-auto mb-8 flex w-[211px] items-baseline gap-4'>
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
					<Link
						href={policy ? '/' : '/policy'}
						className='mb-8 text-center font-geologica text-small font-[250] text-bodyDark hover:text-green focus:text-green'
					>
						{policy ? footerData.home : footerData.policy}
					</Link>
					<p className='text-center font-geologica text-small font-[250] text-bodyDark'>
						{footerData.rights}
					</p>
				</div>
			</div>
		</footer>
	);
};
