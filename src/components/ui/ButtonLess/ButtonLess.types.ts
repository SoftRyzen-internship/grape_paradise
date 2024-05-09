export interface ButtonLessProps {
	type: 'button' | 'submit';
	purpose: 'form' | 'slider' | 'video';
	disabled?: boolean;
	children?: React.ReactNode;
}
