import React from 'react';
import { buttonsData, sectionsData } from '@/data';
import { ButtonMain } from './ui/ButtonMain/ButtonMain';
import { ButtonForm } from './ui/ButtonForm/ButtonForm';

export const Observer: React.FC = () => {
	return (
		<>
			<ButtonMain chapter='about' to={sectionsData.contacts}>
				{buttonsData.callButton}
			</ButtonMain>
			<ButtonForm>{buttonsData.sendButton}</ButtonForm>
		</>
	);
};
