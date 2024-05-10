import React from 'react';

export const metadata = {
	title: 'Grape Paradise адміністратор',
	description: 'Grape Paradise панель адміністратора',
};

export default function RootLayout({ children }) {
	return (
		<html lang='uk'>
			<body>{children}</body>
		</html>
	);
}
