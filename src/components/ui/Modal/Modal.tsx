'use client';

import { FC, Fragment } from 'react';
import { clsx } from 'clsx';

import {
	Transition,
	Dialog,
	DialogPanel,
	DialogTitle,
	TransitionChild,
} from '@headlessui/react';

import CloseIcon from '@/../public/icons/close.svg';

import { IModalProps } from './Modal.types';

export const Modal: FC<IModalProps> = ({ show, title, onClose, children }) => {
	return (
		<Transition as={Fragment} appear show={show}>
			<Dialog
				onClose={onClose}
				as='div'
				className='fixed inset-0 z-50 flex items-center'
			>
				<div
					className='bg-black60 fixed inset-0 backdrop-blur-12.5'
					aria-hidden='true'
				>
					<div
						className={clsx(
							'fixed inset-0 flex w-screen items-center justify-center p-4 md:p-8 lg:px-[185px]',
						)}
					>
						<TransitionChild
							enter='ease-out duration-300'
							enterFrom='opacity-0 transform-[scale(60%)]'
							enterTo='opacity-100 transform-[scale(100%)]'
							leave='ease-in duration-300'
							leaveFrom='opacity-100 transform-[scale(100%)]'
							leaveTo='opacity-0 transform-[scale(60%)]'
						>
							<DialogPanel
								className={clsx(
									'flex flex-col rounded-xl border border-green bg-bg2 p-4 pb-8 md:p-6 md:pb-8',
									title && 'text-center',
								)}
							>
								<button
									type='button'
									aria-label='Закрити модальне вікно'
									onClick={onClose}
									className={clsx(
										'mb-4 h-6 w-6 self-end rounded-full transition hover:scale-125 focus:scale-125 focus:outline lg:mb-6',
										title && 'mb-10 md:mb-8 lg:mb-10',
									)}
								>
									<CloseIcon width={24} height={24} className='fill-green' />
								</button>
								{title ? (
									<DialogTitle
										as='h3'
										className='mb-2 text-xl/[1.25] font-normal md:mb-4'
									>
										{title}
									</DialogTitle>
								) : null}

								<div className='text-large font-normal text-black lg:text-large_desk'>
									{children}
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};
