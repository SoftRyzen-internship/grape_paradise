import { RegisterOptions } from 'react-hook-form';

import { IFormState } from '@/components/common/Form/FormBlock';

import { formData } from '@/data';
const { name, phone, checkbox } = formData.namedField;

export const formSchema: Record<keyof IFormState, RegisterOptions> = {
	name: {
		required: `${name.errorMessage}`,
		pattern: {
			value: /^[А-Яа-яЄєІіЇїҐґʼ]|[A-Za-z\-'\s]+$/,
			message: `${name.rules}`,
		},
		minLength: {
			value: 2,
			message: `${name.minLength}`,
		},
		maxLength: {
			value: 30,
			message: `${name.maxLength}`,
		},
	},
	phone: {
		required: `${phone.errorMessage}`,
		pattern: {
			value: /^\+380\d{9}$/,
			message: `${phone.errorMessage}`,
		},
	},
	message: {},
	approval: {
		required: `${checkbox.errorMessage}`,
	},
};
