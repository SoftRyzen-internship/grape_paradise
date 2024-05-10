import { ChangeEvent, FC } from 'react';
import { clsx } from 'clsx';
import CheckIcon from '@/../public/icons/check.svg';
import { ICustomCheckboxProps } from './CustomCheckbox.types';

export const CustomCheckbox: FC<ICustomCheckboxProps> = ({
	checked,
	handleChange,
	errorMessage,
	definition,
	...rest
}) => {
	const onBooleanChange = (e: ChangeEvent<HTMLInputElement>) =>
		handleChange(e.target.checked);

	return (
		<label
			htmlFor='checkbox'
			className='inline-flex cursor-pointer items-center gap-3'
		>
			<input
				{...rest}
				id='checkbox'
				type='checkbox'
				checked={checked}
				onChange={onBooleanChange}
				className='peer absolute appearance-none'
			></input>
			<div
				className={clsx(
					'flex h-5 w-5 shrink-0 items-center justify-center rounded border border-green text-transparent transition peer-checked:bg-green30 peer-checked:text-green lg:h-6 lg:w-6',
					errorMessage && 'border-red',
				)}
			>
				<CheckIcon className='transition' />
			</div>
			<span className='text-xs/normal font-extralight text-black80 md:text-small lg:text-normal'>
				{definition}
			</span>
		</label>
	);
};
