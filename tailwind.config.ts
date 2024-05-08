import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			bg1: '#F2E8DE',
			bg2: '#FBF3EB',
			white: '#FFFFFF',
			white50: 'rgba(255, 255, 255, 0.5)',
			accent: '#9F8C79',
			stroke: '#C2B2A2',
			grey: '#A7A7A7',
			black: '#343434',
			bodyDark: '#4D4843',
			green: '#4D6116',
			logo: '#675F28',
			red: '#F60000',
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1280px',
		},
		maxWidth: {
			mob: '480px',
			tab: '768px',
			desk: '1280px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '16px',
				md: '34px',
				xl: '32px',
			},
    },
    fontFamily: {
				tenor: ['var(--font-tenor)'],
				geologica: ['var(--font-geologica)'],
			},
		extend: {
			fontSize: {
				// Н0 Використовується для рухомого рядка
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
			fontWeight: {
				semilight: '250',
			},
      backdropBlur: {
        '25': '12.5px',
      },
		},
	},
	plugins: [],
};
export default config;
