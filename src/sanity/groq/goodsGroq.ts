import { groq } from 'next-sanity';

export const goodsGroq = groq`*[_type == "goods" && !(_id in path("drafts.**"))]{
    goodsTitle,
    imageGoods,
    imageGoodsAlt,
    slug,
    _id
}`;
