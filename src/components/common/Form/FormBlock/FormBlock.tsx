'use client';

import { FC, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { formData } from '@/data';
const { namedField, buttonText } = formData;

import { formSchema } from '@/utils';
import { sendMessage } from '@/actions';
import { IFormState } from '@/types';

import { ButtonLess } from '@/components/ui/ButtonLess/ButtonLess';
import { CustomInput } from '@/components/common/Form//CustomInput';
import { CustomTextarea } from '@/components/common/Form/CustomTextarea';
import { CustomCheckbox } from '@/components/common/Form/CustomCheckbox';

import { IFormBlockProps } from './FormBlock.types';
import { Modal } from '@/components/ui/Modal';

export const FormBlock: FC<IFormBlockProps> = ({ className }) => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		control,
		watch,
		setValue,
	} = useForm<IFormState>({
		defaultValues: { approval: false },
		shouldFocusError: false,
	});

	useFormPersist('storageForm', {
		watch,
		setValue,
		exclude: ['approval'],
	});

	const onSubmit: SubmitHandler<IFormState> = async data => {
		try {
			await sendMessage(data);
			setModalOpen(true);

			reset();
		} catch (error) {
			alert(error);
		}
	};
	// const onSubmit: SubmitHandler<IFormState> = async data => {
	// 	console.log(data);
	// 	setModalOpen(true);
	// };

	return (
		<>
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

				<Modal
					onClose={() => setModalOpen(false)}
					show={modalOpen}
					title='Дякуємо за вашу заявку!'
				>
					<p className=''>
						{`Ваші дані були успішно відправлені. Будь ласка, очікуйте, ми
					зв'яжемося з вами найближчим часом для обговорення деталей.`}
					</p>
				</Modal>
			</form>
		</>
	);
};
