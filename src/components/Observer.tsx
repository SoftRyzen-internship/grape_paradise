import React from 'react';

import { buttonsData } from '@/data';

import { Logo } from './ui/Logo';
import { NavMenu } from './ui/NavMenu';
import { ButtonMain } from './ui/ButtonMain/ButtonMain';
import { ButtonLess } from './ui/ButtonLess/ButtonLess';

import Arrow from '../../public/icons/arrow.svg';
import Play from '../../public/icons/play.svg';

export const Observer: React.FC = () => {
	return (
		<div>
			<Logo />
			<Logo theme='green' size='big' />

			<NavMenu />

			<ButtonMain chapter='header' to='контакти'>
				{buttonsData.callButton}
			</ButtonMain>
			<ButtonMain chapter='about' to='контакти'>
				{buttonsData.callButton}
			</ButtonMain>
			<ButtonMain chapter='card' to='контакти'>
				{buttonsData.orderButton}
			</ButtonMain>
			<ButtonLess type='submit' purpose='form'>
				{buttonsData.sendButton}
			</ButtonLess>
			<div className='flex gap-2'>
				<ButtonLess type='button' purpose='slider' disabled={true}>
					{
						<Arrow className='h-6 w-6 rotate-180 fill-green stroke-green group-hover:fill-white group-hover:stroke-white group-focus:fill-white group-focus:stroke-white group-disabled:fill-green30 group-disabled:stroke-green30' />
					}
				</ButtonLess>
				<ButtonLess type='button' purpose='slider' disabled={false}>
					{
						<Arrow className='h-6 w-6 fill-green stroke-green group-hover:fill-white group-hover:stroke-white group-focus:fill-white group-focus:stroke-white group-disabled:fill-green30 group-disabled:stroke-green30' />
					}
				</ButtonLess>
			</div>
			<ButtonLess type='button' purpose='video'>
				{<Play className='h-[26px] w-[26px] lg:h-[64px] lg:w-[64px]' />}
			</ButtonLess>
		</div>
	);
};
