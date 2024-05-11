export interface IButtonLessProps {
	type: 'button' | 'submit';
	purpose: 'form' | 'slider' | 'video';
	disabled?: boolean;
	styles?: string;
	children?: React.ReactNode;
}
