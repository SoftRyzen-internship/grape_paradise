import { FC } from 'react';

import { buttonsData, titleData } from '@/data';

import { Section } from '@/components/common/Section/Section';
import { Title } from '@/components/common/Title/Title';
import { Logo } from '@/components/ui/Logo';
import { ButtonMain } from './ui/ButtonMain/ButtonMain';
import { ButtonLess } from './ui/ButtonLess/ButtonLess';
import { SlideCardGeneration } from '@/components/ui/SlideCardGeneration';
import { FormBlock } from '@/components/common/Form/FormBlock';

import Arrow from '@/../public/icons/arrow.svg';
import Play from '@/../public/icons/play.svg';

export const Observer: FC = () => {
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

				<SlideCardGeneration index={0} slide="service" />
				<SlideCardGeneration index={0} slide="product" />

				<FormBlock />

			</div>

		</>
	);
};
