export interface IButtonMainProps {
  to: string;
  chapter: 'header' | 'about' | 'card' | 'policy';
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
