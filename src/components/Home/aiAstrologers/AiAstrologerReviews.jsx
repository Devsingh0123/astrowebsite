import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TestmonialCard from "@/components/TestmonialCard";
import { fetchAiAstrologerReviewsBySlug } from "@/redux/slice/aiAstrologerReviewSlice";

const AiAstrologerReviews = ({ slug }) => {
  const dispatch = useDispatch();
  const {
    astrologerReviews,
    astrologerReviewsSlug,
    astrologerReviewsLoading,
    astrologerReviewsError,
  } = useSelector((state) => state.aiAstrologerReview);

  useEffect(() => {
    if (slug) dispatch(fetchAiAstrologerReviewsBySlug(slug));
  }, [dispatch, slug]);

  const reviewData = astrologerReviews?.data ?? astrologerReviews;
  const reviews = Array.isArray(reviewData)
    ? reviewData
    : Array.isArray(reviewData?.data) ? reviewData.data : [];
  const isLoading = astrologerReviewsLoading || astrologerReviewsSlug !== slug;

  return (
    <section className="mb-12" aria-labelledby="astrologer-reviews-heading">
      <h2 id="astrologer-reviews-heading" className="mb-6 text-xl font-bold text-gray-800 md:text-2xl">
        Ratings & Reviews
      </h2>
      {isLoading ? (
        <p role="status" className="py-6 text-gray-500">Loading reviews...</p>
      ) : astrologerReviewsError ? (
        <div className="rounded-xl border border-amber-200 bg-white p-6">
          <p role="alert" className="text-gray-600">Unable to load reviews. Please try again.</p>
          <button type="button" onClick={() => dispatch(fetchAiAstrologerReviewsBySlug(slug))} className="mt-3 rounded-lg bg-amber-400 px-4 py-2 text-sm font-medium hover:bg-amber-500">
            Try again
          </button>
        </div>
      ) : reviews.length === 0 ? (
        <p className="rounded-xl border border-amber-200 bg-white p-6 text-gray-500">
          No reviews for this astrologer yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <TestmonialCard
              key={review.id ?? index}
              name={review.user_name || review.user?.name || review.name || "Anonymous"}
              avatar={review.user?.avatar || review.avatar}
              rating={review.rating}
              message={review.review || review.message || "No written review provided."}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default AiAstrologerReviews;
