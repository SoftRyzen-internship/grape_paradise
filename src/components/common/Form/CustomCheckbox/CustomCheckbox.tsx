import { ChangeEvent } from 'react';
import { ICustomCheckboxProps } from './CustomCheckbox.types';
import CheckIcon from '../../../../../public/icons/check.svg';
import clsx from 'clsx';
// import styles from "./CustomCheckbox.module.css"

export const CustomCheckbox: React.FC<ICustomCheckboxProps> = ({
	checked,
	handleChange,
	errorMessage,
	definition,
	...rest
}) => {
	const onBooleanChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleChange(e.target.checked);
	};

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
					'peer-checked:bg-green30 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-green text-transparent transition peer-checked:text-green lg:h-6 lg:w-6',
					errorMessage && 'border-red',
				)}
			>
				<CheckIcon className='transition' />
			</div>
			<span className='font-semilight text-black80 text-xs/normal md:text-small lg:text-normal'>
				{definition}
			</span>
		</label>
	);
};
