type Theme = 'white' | 'green';
type Size = 'small' | 'big';

export interface ILogoProps {
  theme?: Theme;
  size?: Size;
};

export interface ILogoComponentProps {
    isActive: boolean;
    theme?: Theme;
    size?: Size;
  };