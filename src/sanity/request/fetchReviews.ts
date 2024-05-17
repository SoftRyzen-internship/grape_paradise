import { reviewsGroq } from '../groq/reviewsGroq';
import { client } from '../lib/client';

export const fetchReviews = async () => {
  try {
    const reviews = await client.fetch(reviewsGroq);
    return reviews;
  } catch (error) {
    return error;
  }
};
