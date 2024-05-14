import { FC } from 'react';
import { clsx } from 'clsx';

import { IButtonLessProps } from './ButtonLess.types';

export const ButtonLess: FC<IButtonLessProps> = ({
	type,
	purpose,
	disabled,
	aria,
	className,
	children,
	onClick,
}) => {
	return (
		<button
			type={type}
			disabled={disabled}
			aria-label={aria}
			onClick={onClick}
			className={clsx(
				'transition disabled:border-green30 disabled:hover:bg-transparent disabled:focus:bg-transparent',
				{
					'flex h-[59px] w-full cursor-pointer items-center justify-center rounded-60px bg-green px-7 py-5 font-tenor text-btn font-normal uppercase text-white hover:bg-darkGreen focus:bg-darkGreen md:w-[234px] lg:h-[63px] lg:w-[279px] lg:text-btn_desk':
						purpose === 'form',
					' group flex h-12 w-12 items-center justify-center rounded-full border border-green hover:bg-green hover:fill-white focus:bg-green lg:h-[72px] lg:w-[72px]':
						purpose === 'slider',
					'flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white20 backdrop-blur-70 hover:bg-white40 focus:bg-white40 lg:h-36 lg:w-36':
						purpose === 'video',
					'rounded-full transition hover:scale-125 focus:scale-125 focus:outline-current':
						purpose === 'burger',
				},
				className,
			)}
		>
			{children}
		</button>
	);
};
