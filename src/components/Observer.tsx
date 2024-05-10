'use client';

import { FC, useState } from 'react';

import { buttonsData, titleData } from '@/data';

import { Section } from '@/components/common/Section/Section';
import { Title } from '@/components/common/Title/Title';
import { CustomInput } from '@/components/common/Form/CustomInput';
import { CustomTextarea } from '@/components/common/Form/CustomTextarea';
import { CustomCheckbox } from '@/components/common/Form/CustomCheckbox';
import { Logo } from '@/components/ui/Logo';
import { NavMenu } from '@/components/ui/NavMenu';
import { ButtonMain } from '@/components/ui/ButtonMain/ButtonMain';
import { ButtonLess } from '@/components/ui/ButtonLess/ButtonLess';
import { BurgerMenu } from '@/components/ui/BurgerMenu';

import Arrow from '../../public/icons/arrow.svg';
import Play from '../../public/icons/play.svg';

export const Observer: FC = () => {
	const [checkbox, setCheckbox] = useState(false);

	return (
		<>
			<Section sectionStyles='pt-[144px] pb-[102px] md:pt-[120px] md:pb-[80px] lg:pt-[170px] lg:pb-[95px]'>
				<Title chapter='hero'>{titleData.hero}</Title>
				<Title styles='w-[255px] md:w-[350px] lg:w-[590px]'>
					{titleData.advantages}
				</Title>
				<Title chapter='chapter' styles='text-green'>
					{titleData.contacts}
				</Title>
			</Section>
			<div className='container flex flex-col gap-10 py-5'>
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
						{<Arrow className='arrow-icon rotate-180' />}
					</ButtonLess>
					<ButtonLess type='button' purpose='slider' disabled={false}>
						{<Arrow className='arrow-icon' />}
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
			<BurgerMenu />
		</>
	);
};
