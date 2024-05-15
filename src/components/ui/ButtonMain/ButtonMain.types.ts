export interface IButtonMainProps {
	to: string;
	chapter: 'header' | 'about' | 'card' | 'modal';
	className?: string;
	children?: React.ReactNode;
	onClick?: () => void;
}
