import { FC } from 'react';

import clsx from 'clsx';

import { Logo } from '@/components/ui/Logo';

import Foot from '../../../public/icons/bg-footer-form-frame-top.svg';

import s from './Footer.module.css';

export const Footer: FC = () => {
	return (
		<footer className={clsx(s.footer, 'w-full pb-8 pt-28')}>
			<div className='container'>
				<Foot className='fill-black' />
				<div className='mx-auto block'>
					<Logo theme={'green'} size={'big'} />
				</div>
			</div>
		</footer>
	);
};
