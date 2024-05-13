import './globals.css';

import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Tenor_Sans } from 'next/font/google';

import { Header } from '@/sections';

import { metaData } from '@/data';

export const metadata: Metadata = {
	title: metaData.title,
	description: metaData.description,
};

const tenor = Tenor_Sans({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-tenor',
	weight: '400',
});


export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang='uk' className={`${tenor.variable}`}>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
