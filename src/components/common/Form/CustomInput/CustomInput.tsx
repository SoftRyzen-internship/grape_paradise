'use client';

import { forwardRef, useId } from 'react';
import clsx from 'clsx';

// import styles from "./CustomInput.module.css"
import { ICustomInputProps } from './CustomInput.types';

export const CustomInput = forwardRef<HTMLInputElement, ICustomInputProps>(
	({ label, errorMessage, className, ...rest }, ref) => {
		const id = useId();

		return (
			<div className={clsx('relative flex flex-col', className)}>
				{label ? <label htmlFor={id}>{label}</label> : null}
				<input {...rest} ref={ref} id={id} />
				{errorMessage ? (
					<div>
						<span>{errorMessage}</span>
					</div>
				) : null}
			</div>
		);
	},
);

CustomInput.displayName = 'Input';
