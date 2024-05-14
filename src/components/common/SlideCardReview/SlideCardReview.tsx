'use client';

import { clsx } from 'clsx';
import { useRef, useState, useEffect } from 'react';

import s from './SlideCardReview.module.css';


export const SlideCardReviews = () => {
	const paragraphRef = useRef(null);

	const [isOverflow, setOverflow] = useState<boolean>(false);

	useEffect(() => {
		const element = paragraphRef.current;

		if (
			element.scrollHeight > element.clientHeight ||
			element.scrollWidth > element.clientWidth
		) {
			setOverflow(true);
		} else {
			setOverflow(false);
		}
	}, []);

	return (
		<div
			className={clsx(
				'flex h-[331px] flex-col justify-between px-[24px] py-[36px] md:h-[331px] md:w-[334px] lg:h-[485px] lg:w-[580px] lg:px-[64px] lg:py-[56px]',
				s.backgroundImg,
			)}
		>
			<p
				className='h-[161px] overflow-hidden font-tenor text-normal_desk lg:h-[243px] lg:text-large_desk '
				ref={paragraphRef}
			>
				Добрий день, пані Наталя. Ще раз вам дякую за прекрасні смаколики і
				візит Добрий день, пані Наталя. Ще раз вам дякую за прекрасні смаколики і
				візит 
				Добрий день, пані Наталя. Ще раз вам дякую за прекрасні смаколики і
				візит 
				Добрий день, пані Наталя. Ще раз вам дякую за прекрасні смаколики і
				візит 
			</p>
			{isOverflow && <button className='font-tenor text-normal_desk lg:text-large_desk underline text-left'>Читати більше</button>}
			<p className='font-tenor text-normal text-green lg:text-h2'>
				<span>—</span> Глинський Олександр
			</p>
		</div>
	);
};
