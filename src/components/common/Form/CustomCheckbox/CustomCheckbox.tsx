import { ChangeEvent } from 'react';
import { clsx } from 'clsx';

import { ICustomCheckboxProps } from './CustomCheckbox.types';

import CheckIcon from '@/../public/icons/check.svg';

export const CustomCheckbox: React.FC<ICustomCheckboxProps> = ({
	checked,
	handleChange,
	errorMessage,
	definition,
	className,

	...rest
}) => {
	const onBooleanChange = (e: ChangeEvent<HTMLInputElement>) =>
		handleChange(e.target.checked);

	return (
		<label
			htmlFor='checkbox'
			className={clsx(
				'inline-flex cursor-pointer items-center gap-3',
				className,
			)}
		>
			<input
				{...rest}
				id='checkbox'
				type='checkbox'
				checked={checked}
				onChange={onBooleanChange}
				className='peer absolute appearance-none'
			/>
			<span
				className={clsx(
					'flex h-5 w-5 shrink-0 items-center justify-center rounded border border-green text-transparent transition peer-checked:bg-green30 peer-checked:text-green peer-hover:bg-green30 peer-focus:bg-green30 lg:h-6 lg:w-6',
					errorMessage && 'border-red',
				)}
			>
				<CheckIcon className='transition' />
			</span>
			<span className='text-xs/normal font-extralight text-black80 md:text-small lg:text-normal'>
				{definition}
			</span>
		</label>
	);
};
