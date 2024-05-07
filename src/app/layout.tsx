import './globals.css';

import React from 'react';

import { Metadata } from 'next';

import { metaData } from '@/data';

export const metadata: Metadata = {
	title: metaData.title,
	description: metaData.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='uk'>
			<body>{children}</body>
		</html>
	);
}
