export interface IButtonMainProps {
	to: string;
	chapter: 'header' | 'about' | 'card';
	className?: string;
	children?: React.ReactNode;
	onClick?: () => void;
}
