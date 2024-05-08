type Theme = 'white' | 'green';

export type LogoProps = {
  theme?: Theme;
};

export type LogoComponentProps = {
    isActive: boolean;
    theme?: Theme;
  };