import React from 'react';
import { ButtonMain } from './ui/ButtonMain/ButtonMain';
import { buttonsData, sectionsData } from '@/data';
import { ButtonForm } from './ui/ButtonForm/ButtonForm';

export const Observer: React.FC = () => {
	return (
		<>
			<ButtonMain to={sectionsData.contacts}>
				{buttonsData.callButton}
			</ButtonMain>
			<ButtonForm>{buttonsData.sendButton}</ButtonForm>
		</>
	);
};
