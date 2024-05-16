import { ReactNode } from 'react';

export interface ISliderProps {
	nameBtnBack: "servicesBtnBack" | "productsBtnBack" | "ReviewsBtnBack";
	nameBtnNext: "servicesBtnNext" | "productsBtnNext" | "ReviewsBtnNext";	
	loop?: boolean; 
	desktopSpaceBetween?: number;
	children: ReactNode;
}
