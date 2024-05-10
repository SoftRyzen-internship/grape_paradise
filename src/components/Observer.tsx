'use client';


import React, { useState } from 'react';
import { Logo } from '@/components/ui/Logo';
import { CustomInput } from '@/components/common/Form/CustomInput';
import { CustomTextarea } from '@/components/common/Form/CustomTextarea';
import { CustomCheckbox } from '@/components/common/Form/CustomCheckbox';

import { buttonsData } from '@/data';

import { NavMenu } from './ui/NavMenu';
import { ButtonMain } from './ui/ButtonMain/ButtonMain';
import { ButtonLess } from './ui/ButtonLess/ButtonLess';
import { ProdudtCard } from '@/components/ui/ProductCard.tsx/ProdactCard';
import { ServicesCard } from '@/components/ui/ServicesCard/ServicesCard';

import Arrow from '../../public/icons/arrow.svg';
import Play from '../../public/icons/play.svg';

export const Observer: React.FC = () => {
	const [checkbox, setCheckbox] = useState(false);
	return (
		<div className='container py-5'>
			<Logo />
			<Logo theme='green' size='big' />
			<NavMenu />
			<ServicesCard index={0} />
			<ProdudtCard index={0} />
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

			<CustomInput label='Ваше ім’я' placeholder='Тетяна' />
			<CustomInput label='Ваш Номер телефону' placeholder='+3800967777323' />
			<CustomTextarea
				label='Ваш Коментар'
				placeholder='Напишіть щось'
				className='h-36'
			/>
			<CustomCheckbox
				checked={checkbox}
				handleChange={setCheckbox}
				definition='Даю згоду на обробку персональних даних'
			/>
		</div>
	);
};
