import { groq } from 'next-sanity';

export const reviewsGroq = groq`*[_type == "review" && !(_id in path("drafts.**"))]{
  reviewAuthor,
  reviewText,
  _id
}`;
