import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notLg: { max: '1279.98px' },
    },
    maxWidth: {
      mob: '480px',
      tab: '768px',
      desk: '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2.125rem',
        lg: '2rem',
      },
    },

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bg1: '#F2E8DE',
        bg2: '#FBF3EB',
        white: '#FFFFFF',
        white50: 'rgba(255, 255, 255, 0.5)',
        white40: 'rgba(255, 255, 255, 0.4)',
        white20: 'rgba(255, 255, 255, 0.2)',
        accent: '#9F8C79',
        stroke: '#C2B2A2',
        grey: '#A7A7A7',
        greyLogo: '#9A9A9A',
        black: '#343434',
        black60: 'rgba(0, 0, 0, 0.6)',
        black80: 'rgba(0, 0, 0, 0.8)',
        bodyDark: '#4D4843',
        green: '#4D6116',
        greenModal: '#395734',
        darkGreen: '#405012',
        green50: 'rgba(77, 97, 22, 0.5)',
        green30: 'rgba(77, 97, 22, 0.3)',
        logo: '#675F28',
        logo60: 'rgba(103, 95, 40, 0.6)',
        red: '#F60000',
      },
      fontFamily: {
        tenor: ['var(--font-tenor)'],
        geologica: ['Geologica', 'sans-serif'],
      },
      fontSize: {
        h0: ['24px', '1.25'],
        h0_tab: ['40px', '1.25'],
        h0_desk: ['62px', '1.25'],
        h1: ['28px', '1.25'],
        h1_tab: ['32px', '1.25'],
        h1_desk: ['50px', '1.25'],
        h2: ['22px', '1.25'],
        h2_tab: ['28px', '1.25'],
        h2_desk: ['46px', '1.25'],
        h3: ['20px', '1.25'],
        h3_desk: ['30px', '1.25'],

        btn: '16px',
        btn_desk: '20px',

        small: ['14px', '1.5'],
        normal: ['16px', '1.5'],
        normal_desk: ['18px', '1.5'],
        large: ['18px', '1.3'],
        large_desk: ['26px', '1.3'],
      },

      backdropBlur: {
        '12.5': '12.5px',
        '25': '25px',
        '70': '70px',
      },
      borderRadius: {
        '60px': '60px',
      },
    },
  },
  plugins: [],
};
export default config;
