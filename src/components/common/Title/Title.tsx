'use client';

import { FC } from 'react';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';

import { useMedia } from '@/utils';

import { ITitleProps } from './Title.types';

// export const Title: FC<ITitleProps> = ({ chapter, className, children }) => {
//   return (
//     <>
//       {chapter === 'hero' ? (
//         <h1 className={clsx('main-title', className)}>{children}</h1>
//       ) : chapter === 'chapter' ? (
//         <h3 className={clsx('subtitle', className)}>{children} </h3>
//       ) : (
//         <h2 className={clsx('title', className)}>{children}</h2>
//       )}
//     </>
//   );
export const Title: FC<ITitleProps> = ({
	chapter,
	history,
	className,
	children,
}) => {
	const isDesktop = useMedia('(min-width: 1280px)');
	// const [hasMounted, setHasMounted] = useState(false);
	// useEffect(() => {
	// 	setHasMounted(true);
	// }, []);

	// if (!hasMounted) {
	// 	return null;
	// }
	const animeX = history ? 80 : -80;
	return (
		<>
			{chapter === 'hero' ? (
				<h1 className={clsx('main-title', className)}>{children}</h1>
			) : chapter === 'chapter' ? (
				<h3 className={clsx('subtitle', className)}>{children} </h3>
			) : isDesktop ? (
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8 }}
					variants={{
						hidden: {
							opacity: 0,
							x: animeX,
						},
						visible: { opacity: 1, x: 0 },
					}}
				>
					<h2 className={clsx('title', className)}>{children}</h2>
				</motion.div>
			) : (
				<h2 className={clsx('title', className)}>{children}</h2>
			)}
		</>
	);
};
