import { goodsGroq } from '../groq/goodsGroq';
import { client } from '../lib/client';


export const fetchGoods = async () => {
  try {
    const goods = await client.fetch(goodsGroq);
  return goods;
  } catch (error) {
    return error
  }
  
};