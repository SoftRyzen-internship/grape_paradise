// "use client"

import { forwardRef, useId } from 'react';
import clsx from 'clsx';

import { ICustomTextareaProps } from './CustomTextarea.types';
// import styles from "./CustomTextarea.module.css"

export const CustomTextarea = forwardRef<
	HTMLTextAreaElement,
	ICustomTextareaProps
>(({ label, className, ...rest }, ref) => {
	const id = useId();

	return (
		<div className={clsx('flex flex-col', className)}>
			{label ? <label htmlFor={id}> {label}</label> : null}
			<textarea {...rest} ref={ref} id={id} className='resize-none' />
		</div>
	);
});

CustomTextarea.displayName = 'Textarea';
