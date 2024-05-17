interface IAsset {
  _ref: string;
  _type: string;
}

interface IImageServices {
  _type: string;
  asset: IAsset;
}

interface IServices {
  _id: string;
  servicesTitle: string;
  imageServices: IImageServices;
  imageServicesAlt: string;
  servicesText: string;
}

export interface IServicesSliderProps {
  data: IServices[];
}
