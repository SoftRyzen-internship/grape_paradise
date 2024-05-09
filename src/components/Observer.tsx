import React from 'react';
import { Logo } from '@/components/ui/Logo';
import { CustomInput } from '@/components/common/Form/CustomInput';
import { CustomTextarea } from '@/components/common/Form/CustomTextarea';

import { buttonsData } from '@/data';

import { NavMenu } from './ui/NavMenu';
import { ButtonMain } from './ui/ButtonMain/ButtonMain';
import { ButtonLess } from './ui/ButtonLess/ButtonLess';

import Arrow from '../../public/icons/arrow.svg'; //не задаються розміри іконки
import Play from '../../public/icons/play.svg'; //не задаються розміри іконки

export const Observer: React.FC = () => {
	return (
		<div className='container py-5'>
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
						<Arrow className='group-disabled:fill-green30 group-disabled:stroke-green30 h-6 w-6 fill-green stroke-green group-hover:fill-white group-hover:stroke-white group-focus:fill-white group-focus:stroke-white' />
					}
				</ButtonLess>
				<ButtonLess type='button' purpose='slider' disabled={false}>
					{
						<Arrow className='group-disabled:fill-green30 group-disabled:stroke-green30 h-6 w-6 rotate-180 fill-green stroke-green group-hover:fill-white group-hover:stroke-white group-focus:fill-white group-focus:stroke-white' />
					}
				</ButtonLess>
			</div>
			<ButtonLess type='button' purpose='video'>
				{
					<Play className='h-[20.62px] w-[17.88px] fill-white lg:h-[37.33px] lg:w-[29.33px]' />
				}
			</ButtonLess>

			<CustomInput label='Ваше ім’я' placeholder='Тетяна' />
			<CustomInput label='Ваш Номер телефону' placeholder='+3800967777323' />
			<CustomTextarea label='Ваш Коментар' placeholder='Напишіть щось' />
		</div>
	);
};
