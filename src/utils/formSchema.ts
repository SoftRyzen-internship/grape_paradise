import { RegisterOptions } from 'react-hook-form';
import { IFormState } from '@/components/common/Form/FormBlock/FormBlock.types';
import { formData } from '@/data';
const { name, phone, checkbox } = formData.namedField;

export const formSchema: Record<keyof IFormState, RegisterOptions> = {
	name: {
		required: `${name.errorMessage}`,
		pattern: {
			value: /^[А-Яа-яЄєІіЇїҐґʼ']+$/,
			message: `${name.errorMessage}`,
		},
		minLength: {
			value: 2,
			message: `${name.errorMessage}`,
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
