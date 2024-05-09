import { InputHTMLAttributes } from 'react';

export interface ICustomCheckboxProps
	extends InputHTMLAttributes<HTMLInputElement> {
	checked: boolean;
	handleChange: (checked: boolean) => void;
	errorMessage?: string;
	definition?: string;
}
