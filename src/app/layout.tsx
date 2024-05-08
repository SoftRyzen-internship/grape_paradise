import './globals.css';

import React from 'react';

import { Metadata } from 'next';
import { Tenor_Sans, Geologica } from 'next/font/google';

import { metaData } from '@/data';

export const metadata: Metadata = {
	title: metaData.title,
	description: metaData.description,
};

const tenor = Tenor_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-tenor',
	weight: '400',
});

const geologica = Geologica({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-geologica',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='uk' className={`${tenor.variable} ${geologica.variable}`}>
			<body>{children}</body>
		</html>
	);
}
