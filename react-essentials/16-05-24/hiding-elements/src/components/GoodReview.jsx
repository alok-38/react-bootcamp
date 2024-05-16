import ReviewRating from "./ReviewRating";

// Good review has rating >= 4
// If no author, hide entire Review
// If good review, show ReviewRating, otherwise hide it. In place of review content, say "No review".
export default function GoodReview({ review }) {
  // Check if review object exists and has all required properties
  if (!review || !review.author || !review.rating || !review.content) {
    return null; // Hide the entire review if any required property is missing
  }

  // Extracting data from the review object
  const { author, rating, content } = review;

  // Determine if the review is good (rating >= 4)
  const isGoodReview = rating >= 4;

  return (
    <div className="review">
      {/* Display author's avatar and name */}
      <div className="review-wrapper">
        <img className="review-avatar" src={author.avatar} alt={author.name} />
        <div className="review-left">
          <h4 className="review-author">{author.name}</h4>
          {/* Show ReviewRating if it's a good review, otherwise hide it */}
          {isGoodReview && <ReviewRating rating={rating} />}
        </div>
      </div>
      {/* Show the review content if it's a good review, otherwise display "No review" */}
      <div className="review-content">
        {isGoodReview ? content : "No review"}
      </div>
    </div>
  );
}
