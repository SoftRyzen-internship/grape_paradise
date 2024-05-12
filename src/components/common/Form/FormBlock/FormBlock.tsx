'use client';

import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { formData } from '@/data';
const { namedField, buttonText } = formData;

import { formSchema } from '@/utils';
import { ButtonLess } from '@/components/ui/ButtonLess/ButtonLess';
import { CustomInput } from '@/components/common/Form//CustomInput';
import { CustomTextarea } from '@/components/common/Form//CustomTextarea';
import { CustomCheckbox } from '@/components/common/Form//CustomCheckbox';
import { IFormBlockProps, IFormState } from './FormBlock.types';
import { sendMessage } from '@/actions';

export const FormBlock: FC<IFormBlockProps> = ({ className }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		control,
	} = useForm<IFormState>({
		defaultValues: { approval: false },
		shouldFocusError: false,
	});

	const onSubmit: SubmitHandler<IFormState> = async data => {
		try {
			await sendMessage(data);
			alert(
				`The next step will send \n${data.name}\n${data.phone}\n${data.message} to the telegram group and display a modal with info about the result for the user`,
			);

			reset();
		} catch (error) {
			alert(error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={className}>
			<CustomInput
				label={namedField.name.label}
				placeholder={namedField.name.placeholder}
				{...register('name', formSchema.name)}
				errorMessage={errors.name?.message}
			/>

			<CustomInput
				label={namedField.phone.label}
				placeholder={namedField.phone.placeholder}
				{...register('phone', formSchema.phone)}
				errorMessage={errors.phone?.message}
				className='mt-11 lg:mt-[60px]'
			/>

			<CustomTextarea
				label={namedField.textarea.label}
				placeholder={namedField.textarea.placeholder}
				{...register('message', formSchema.message)}
				className='mt-11 h-[149px] lg:mt-[60px]'
			/>

			<Controller
				name='approval'
				control={control}
				rules={formSchema.approval}
				render={({ field }) => (
					<CustomCheckbox
						checked={field.value}
						handleChange={field.onChange}
						errorMessage={errors.approval?.message}
						definition={namedField.checkbox.label}
						className='mt-[52px] lg:mt-[60px]'
					/>
				)}
			/>

			<ButtonLess type='submit' purpose='form' styles='mt-8 lg:mt-10'>
				{buttonText}
			</ButtonLess>
		</form>
	);
};
