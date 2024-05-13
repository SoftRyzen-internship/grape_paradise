import { reviewsGroq } from '../groq/reviewsGroq';
import { client } from '../lib/client';


export const fetchReviews = async () => {
  const reviews = await client.fetch(reviewsGroq);
  return reviews;
};