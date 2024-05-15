'use client';

import { FC, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { formData } from '@/data';
const { namedField, buttonText, modalInfo } = formData;

import { formSchema } from '@/utils';
import { sendMessage } from '@/actions';
import { IFormState } from '@/types';

import { ButtonLess } from '@/components/ui/ButtonLess';
import { CustomInput } from '@/components/common/Form/CustomInput';
import { CustomTextarea } from '@/components/common/Form/CustomTextarea';
import { CustomCheckbox } from '@/components/common/Form/CustomCheckbox';
import { Modal } from '@/components/ui/Modal';

import { IFormBlockProps } from './FormBlock.types';

export const FormBlock: FC<IFormBlockProps> = ({ className }) => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [sendError, setSendError] = useState<boolean>(false);

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
		setSendError(false);
		try {
			await sendMessage(data);
			reset();
		} catch (error) {
			setSendError(true);
		} finally {
			setModalOpen(true);
		}
	};

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

				<ButtonLess type='submit' purpose='form' className='mt-8 lg:mt-10'>
					{buttonText}
				</ButtonLess>
			</form>
			<Modal
				onClose={() => setModalOpen(false)}
				show={modalOpen}
				title={sendError ? modalInfo.failure.title : modalInfo.successful.title}
				errorMessage={sendError}
			>
				<div className='pb-[10px] md:px-[68px] lg:px-48'>
					<p className='mb-8 whitespace-pre-line text-xs font-extralight leading-[1.5] text-bodyDark md:text-small lg:text-normal'>
						{sendError ? modalInfo.failure.text : modalInfo.successful.text}
					</p>

					<ButtonLess
						type='button'
						purpose='modal'
						onClick={() => setModalOpen(false)}
						aria={modalInfo.button.ariaLabelClose}
						className=' inline-flex'
					>
						{modalInfo.button.text}
					</ButtonLess>
				</div>
			</Modal>
		</>
	);
};
