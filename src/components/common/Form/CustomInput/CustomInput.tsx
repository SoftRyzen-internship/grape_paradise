import { forwardRef, useId } from 'react';
import { clsx } from 'clsx';

import { ICustomInputProps } from './CustomInput.types';

import ErrorIcon from '@/../public/icons/error.svg';

export const CustomInput = forwardRef<HTMLInputElement, ICustomInputProps>(
	({ label, errorMessage, className, ...rest }, ref) => {
		const id = useId();

		return (
			<div className={clsx('relative flex flex-col gap-2', className)}>
				{label ? (
					<label
						htmlFor={id}
						className={clsx(
							'font-tenor font-normal uppercase leading-[1.3] text-black lg:leading-tight',
						)}
					>{`${label} *`}</label>
				) : null}
				<input
					{...rest}
					ref={ref}
					id={id}
					className={clsx(
						'border-b border-stroke bg-transparent py-[10px] font-semilight caret-logo transition placeholder:text-grey placeholder:transition hover:border-logo focus:border-logo focus:outline-0 focus:placeholder:opacity-0 lg:py-4',
						errorMessage && 'border-red/100 hover:border-red focus:border-red',
					)}
				/>
				{errorMessage ? (
					<>
						<span className='absolute bottom-0 left-0 flex translate-y-full pt-1 text-xs/normal font-semilight text-red transition'>
							{errorMessage}
						</span>
						<ErrorIcon
							width={24}
							height={24}
							className='absolute right-0 top-1/2 fill-red'
						/>
					</>
				) : null}
			</div>
		);
	},
);

CustomInput.displayName = 'CustomInput';
