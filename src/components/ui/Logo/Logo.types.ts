type Theme = 'white' | 'green';
type Size = 'small' | 'big';

export interface ILogoProps {
  theme?: Theme;
  size?: Size;
  toScroll?: boolean;
  onClick: () => void;
}

export interface ILogoComponentProps {
  theme?: Theme;
  size?: Size;
}
