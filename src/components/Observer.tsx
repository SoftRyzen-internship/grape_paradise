import React from 'react';
import { buttonsData, sectionsData } from '@/data';
import { ButtonMain } from './ui/ButtonMain/ButtonMain';
import { ButtonLess } from './ui/ButtonLess/ButtonLess';
import Arrow from '../../public/icons/chevron-right-r.svg';
import Play from '../../public/icons/Vector.svg';

export const Observer: React.FC = () => {
	return (
		<>
			<ButtonMain chapter='header' to={sectionsData.contacts}>
				{buttonsData.callButton}
			</ButtonMain>
			<ButtonMain chapter='about' to={sectionsData.contacts}>
				{buttonsData.callButton}
			</ButtonMain>
			<ButtonMain chapter='card' to={sectionsData.contacts}>
				{buttonsData.orderButton}
			</ButtonMain>
			<ButtonLess type='submit' purpose='form'>
				{buttonsData.sendButton}
			</ButtonLess>
			<div className='flex gap-2'>
				<ButtonLess type='button' purpose='slider'>
					{
						<Arrow className=' h-6 w-6 rotate-180 fill-green stroke-green group-hover:fill-white group-hover:stroke-white group-focus:fill-white group-focus:stroke-white' />
					}
				</ButtonLess>
				<ButtonLess type='button' purpose='slider'>
					{
						<Arrow className=' h-6 w-6 fill-green stroke-green group-hover:fill-white group-hover:stroke-white group-focus:fill-white group-focus:stroke-white' />
					}
				</ButtonLess>
			</div>
			<ButtonLess type='button' purpose='video'>
				{
					<Play className='h-[20.62px] w-[17.88px] lg:h-[37.33px] lg:w-[29.33px]' />
				}
			</ButtonLess>
		</>
	);
};
