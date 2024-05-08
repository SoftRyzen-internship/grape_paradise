import React from 'react';
import { buttonsData, sectionsData } from '@/data';
import { ButtonMain } from './ui/ButtonMain/ButtonMain';
import { ButtonLess } from './ui/ButtonForm/ButtonLess';

export const Observer: React.FC = () => {
	return (
		<>
			<ButtonMain chapter='about' to={sectionsData.contacts}>
				{buttonsData.callButton}
			</ButtonMain>
			<ButtonLess type='submit' purpose='form'>
				{buttonsData.sendButton}
			</ButtonLess>
		</>
	);
};
