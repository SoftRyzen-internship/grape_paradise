interface IAsset {
  _ref: string;
  _type: string;
}

interface IImageProducts {
  _type: string;
  asset: IAsset;
}

interface IProducts {
  _id: string;
  goodsTitle: string;
  imageGoods: IImageProducts;
  imageGoodsAlt: string;
}

export interface IProductsSlidesProps {
  products: IProducts[];
}
