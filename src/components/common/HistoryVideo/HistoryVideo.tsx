import { FC } from 'react';

import { Modal } from '@/components/ui/Modal';

import { IHistoryVideoProps } from './HistoryVideo.types';

export const HistoryVideo: FC<IHistoryVideoProps> = ({ onClose, show }) => {
	return (
		<Modal onClose={onClose} show={show}>
			<div className='relative h-[452px] w-[280px] md:h-[351px] md:w-[566px] lg:h-[475px] lg:w-[957px]'>
				<iframe
					className='absolute inset-0 h-full w-full'
					src='https://www.youtube.com/embed/ovSJ9TDDgRE'
					allowFullScreen
					title='YouTube Video'
				></iframe>
			</div>
		</Modal>
	);
};
