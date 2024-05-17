export interface IButtonLessProps {
  type: 'button' | 'submit';
  purpose: 'form' | 'slider' | 'video' | 'burger' | 'modal';
  disabled?: boolean;
  aria?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
