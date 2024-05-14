import { clsx } from 'clsx';
import Image from '../../../../node_modules/next/image';

export const SlideCardReviews = () => {
	return (
		<div
			className={clsx(
				'flex h-[331px] flex-col justify-between bg-white px-[24px] py-[36px] md:h-[331px] md:w-[334px] lg:h-[485px] lg:w-[580px] lg:px-[64px] lg:py-[56px]',
			)}
		>
			<p className=' lg:text-h2'>
				Добрий день, пані Наталя. Ще раз вам дякую за прекрасні смаколики і
				візит
			</p>
			<p><span>—</span> Глинський Олександр</p>
		</div>
	);
};
