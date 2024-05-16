import { ReactNode } from 'react';

export interface ISliderProps {
	prevEl: "servicesBtnBack" | "productsBtnBack" | "reviewsBtnBack";
	nextEl: "servicesBtnNext" | "productsBtnNext" | "reviewsBtnNext";	
	loop?: boolean; 
	desktopSpaceBetween?: number;
	children: ReactNode;
}
