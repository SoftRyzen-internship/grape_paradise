interface IImgCardGeneration {
    src: string;
    alt: string;
}

interface IDataCardGeneration {
    title: string;
    img: IImgCardGeneration;
    description?: string;
}

export interface ISlideCardGenerationProps {
    data: IDataCardGeneration;
    slide?: 'service' | 'product';
}