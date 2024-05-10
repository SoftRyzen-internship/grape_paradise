import { forwardRef, useId } from 'react';
import clsx from 'clsx';
import { ICustomTextareaProps } from './CustomTextarea.types';

export const CustomTextarea = forwardRef<
	HTMLTextAreaElement,
	ICustomTextareaProps
>(({ label, className, ...rest }, ref) => {
	const id = useId();

	return (
		<div className={clsx('flex flex-col gap-2', className)}>
			{label ? (
				<label
					htmlFor={id}
					className={clsx(
						'font-tenor font-normal uppercase leading-[1.3] text-black lg:leading-tight',
					)}
				>
					{' '}
					{label}
				</label>
			) : null}
			<textarea
				{...rest}
				ref={ref}
				id={id}
				className='h-full resize-none border-b border-stroke bg-transparent py-[10px] font-semilight caret-logo transition placeholder:text-grey placeholder:transition hover:border-logo focus:border-logo focus:outline-0 focus:placeholder:opacity-0 lg:py-4'
			/>
		</div>
	);
});

CustomTextarea.displayName = 'CustomTextarea';
