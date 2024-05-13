export interface IButtonMainProps {
	to: string;
	chapter: 'header' | 'about' | 'card';
	styles?: string;
	children?: React.ReactNode;
	onClick?: () => void;
}
