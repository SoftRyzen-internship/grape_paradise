interface IReviews {
  _id: string;
  reviewAuthor: string;
  reviewText: string;
}

export interface IReviewsSliderProps {
  data: IReviews[];
}
