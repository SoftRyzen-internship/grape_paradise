export interface ButtonLessProps {
	type: 'button' | 'submit';
	purpose: 'form' | 'slider' | 'video';
	children?: React.ReactNode;
}
