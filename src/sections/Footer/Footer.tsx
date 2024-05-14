import { FC } from 'react';

import clsx from 'clsx';

import { Logo } from '@/components/ui/Logo';

import Field from '@/../public/images/footer/footer.svg';
import GoIT from '@/../public/icons/goit-icon.svg';
import SoftRyzen from '@/../public/icons/softryzen-icon.svg';

import { footerData } from '@/data';

import s from './Footer.module.css';
import Link from 'next/link';

export const Footer: FC = () => {
	return (
		<footer className={clsx(s.footer, 'w-full bg-bg2 pb-8 pt-7')}>
			<Field />
			<div className='container'>
				<div className='mb-8 flex justify-center'>
					<Logo theme={'green'} size={'big'} />
				</div>
				<div className='flex flex-col border-t-2 border-stroke pt-8'>
					<p className='mx-auto mb-4 text-center'>{footerData.create}</p>
					<div className='mx-auto mb-8 flex w-[211px] items-baseline gap-4'>
						<GoIT width={64} height={19} />
						<SoftRyzen className='w-[131px] fill-green' />
					</div>
					<Link href={'/policy'} className='mb-8 text-center'>
						{footerData.policy}
					</Link>
					<p className='text-center'>{footerData.rights}</p>
				</div>
			</div>
		</footer>
	);
};
