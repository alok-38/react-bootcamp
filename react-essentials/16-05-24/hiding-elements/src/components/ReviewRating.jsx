import { StarIcon } from "@heroicons/react/20/solid";

function ReviewRating({ rating }) {
  // Function to render a single star, either filled or outline
  const renderStar = (index) => {
    // Check if the index is less than the rating, then render a filled star, otherwise render an outline star
    return (
      <StarIcon
        key={index}
        className={`review-star ${
          index < rating ? "text-yellow-400" : "text-gray-400"
        }`}
      />
    );
  };

  return (
    <div className="review-rating">
      {[...Array(5)].map((_, index) => renderStar(index))}
    </div>
  );
}

export default ReviewRating;
