export interface IButtonMainProps {
	to: string;
	chapter: 'header' | 'about' | 'card';
	children?: React.ReactNode;
}