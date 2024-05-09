export interface IButtonLessProps {
	type: 'button' | 'submit';
	purpose: 'form' | 'slider' | 'video';
	disabled?: boolean;
	children?: React.ReactNode;
}
