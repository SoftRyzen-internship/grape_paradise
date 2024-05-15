interface IImgCardGeneration {
	src: string;
	alt: string;
}

interface IDataCardGeneration {
	title: string;
	img: IImgCardGeneration;
	description?: string;
}

export interface ISliderProps {
	loop?: boolean;
	slide?: 'service' | 'product' | 'review';
	array: IDataCardGeneration[];
	separator?: boolean;
	desktopSpaceBetween?: number;
}