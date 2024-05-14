import { ReactNode } from 'react';

export interface IModalProps {
	show: boolean;
	title?: string;
	onClose: () => void;
	children: ReactNode;
}
