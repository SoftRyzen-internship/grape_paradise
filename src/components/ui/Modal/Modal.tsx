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

import { formData } from '@/data';
const { modalInfo } = formData;

import { ButtonLess } from '@/components/ui/ButtonLess';

import { IModalProps } from './Modal.types';

import s from './Modal.module.css';

export const Modal: FC<IModalProps> = ({
  show,
  title,
  errorMessage,
  whiteBg,
  onClose,
  children,
}) => {
  return (
    <Transition as={Fragment} appear show={show}>
      <Dialog
        onClose={onClose}
        as='div'
        className='fixed inset-0 z-50 flex items-center'
      >
        <div
          className='fixed inset-0 bg-black60 backdrop-blur-12.5'
          aria-hidden='true'
        >
          <div
            className={clsx(
              'fixed inset-0 flex w-screen items-center justify-center p-4 md:p-8',
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
                  'relative flex flex-col overflow-hidden rounded-xl border border-green bg-bg2 p-4 pb-8 text-left md:p-6 md:pb-8',
                  title && 'text-center',
                  title && s['bg-modal'],
                  whiteBg && 'bg-white',
                )}
              >
                <ButtonLess
                  type='button'
                  purpose='burger'
                  aria={modalInfo.button.ariaLabelClose}
                  onClick={onClose}
                  className={clsx(
                    'mb-4 self-end rounded-full',
                    title && 'mb-10 md:mb-8 lg:mb-10',
                  )}
                >
                  <CloseIcon width={24} height={24} className='fill-green' />
                </ButtonLess>

                {title ? (
                  <DialogTitle
                    as='h3'
                    className={clsx(
                      'z-10 mb-2 text-h3 font-normal text-greenModal md:mb-4 lg:text-h3_desk',
                      errorMessage ? 'text-red' : 'text-greenModal',
                    )}
                  >
                    {title}
                  </DialogTitle>
                ) : null}

                <div className='z-10 text-large font-normal text-black lg:text-large_desk'>
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
