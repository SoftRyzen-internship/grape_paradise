'use client';

import React, { useState } from 'react';

import { buttonsData, titleData } from '@/data';

import { Section } from './common/Section/Section';
import { Title } from './common/Title/Title';
import { CustomInput } from '@/components/common/Form/CustomInput';
import { CustomTextarea } from '@/components/common/Form/CustomTextarea';
import { CustomCheckbox } from '@/components/common/Form/CustomCheckbox';
import { Logo } from '@/components/ui/Logo';
import { NavMenu } from './ui/NavMenu';
import { ButtonMain } from './ui/ButtonMain/ButtonMain';
import { ButtonLess } from './ui/ButtonLess/ButtonLess';

import Arrow from '../../public/icons/arrow.svg';
import Play from '../../public/icons/play.svg';

import { Advantages } from '@/sections/Advantages';

export const Observer: React.FC = () => {
	const [checkbox, setCheckbox] = useState(false);
	return (
		<>
			<Section styles='pt-[144px] pb-[102px] md:pt-[120px] md:pb-[80px] lg:pt-[170px] lg:pb-[95px]'>
				<Title chapter='hero'>{titleData.hero}</Title>
				<Title styles='w-[255px] md:w-[350px] lg:w-[590px]'>
					{titleData.advantages}
				</Title>
				<Title chapter='contacts' styles='text-green'>
					{titleData.contacts}
				</Title>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
					reprehenderit praesentium dicta vero nostrum magni exercitationem
					molestiae doloribus assumenda molestias libero reiciendis a, aliquam
					nisi. Doloribus nesciunt quasi blanditiis. Aspernatur. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Eius ipsum fugit fugiat
					voluptatum iusto delectus in eos inventore quis, labore quam, dolores
					dolorem porro veritatis maiores deserunt repellendus possimus eaque?
				</p>
			</Section>
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
			<Advantages />
		</>
	);
};
