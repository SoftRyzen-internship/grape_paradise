import { ReactNode } from 'react';

export interface IModalProps {
	show: boolean;
	title?: string;
	errorMessage?: boolean;
	onClose: () => void;
	children: ReactNode;
}
