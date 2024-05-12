export interface IButtonLessProps {
	type: 'button' | 'submit';
	purpose: 'form' | 'slider' | 'video' | 'burger';
	disabled?: boolean;
	aria?: string;
	styles?: string;
	children?: React.ReactNode;
	onClick?: () => void;
}
