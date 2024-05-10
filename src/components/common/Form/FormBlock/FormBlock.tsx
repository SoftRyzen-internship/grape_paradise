'use client';

import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { clsx } from 'clsx';

import { ButtonLess } from '@/components/ui/ButtonLess/ButtonLess';
import { CustomInput } from '@/components/common/Form//CustomInput';
import { CustomTextarea } from '@/components/common/Form//CustomTextarea';
import { CustomCheckbox } from '@/components/common/Form//CustomCheckbox';
import { IFormBlockProps, IFormState } from './FormBlock.types';

export const FormBlock: FC<IFormBlockProps> = ({ className }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		control,
	} = useForm<IFormState>({
		defaultValues: { approval: false },
	});

	const onSubmit = (data: IFormState) => {
		console.log(data);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={clsx('', className)}>
			<CustomInput
				label='Ваше ім’я'
				placeholder='Тетяна'
				{...register('name')}
				errorMessage={errors.name?.message}
			/>

			<CustomInput
				label='Ваш Номер телефону'
				placeholder='+380967777323'
				{...register('phone')}
				errorMessage={errors.phone?.message}
			/>

			<CustomTextarea
				label='Ваш Коментар'
				placeholder='Напишіть щось'
				{...register('message')}
			/>

			<Controller
				name='approval'
				control={control}
				render={({ field }) => (
					<CustomCheckbox
						checked={field.value}
						handleChange={field.onChange}
						errorMessage={errors.approval?.message}
						definition='Даю згоду на обробку персональних даних'
					/>
				)}
			/>

			<ButtonLess type='submit' purpose='form'>
				Надіслати заявку
			</ButtonLess>
		</form>
	);
};
