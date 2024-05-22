type Theme = 'white' | 'green';
type Size = 'small' | 'big';

export interface ILogoProps {
  theme?: Theme;
  size?: Size;
  toScroll?: boolean;
}

export interface ILogoComponentProps {
  theme?: Theme;
  size?: Size;
}
