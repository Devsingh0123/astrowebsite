import React, { useState, useMemo } from "react";

const ReviewsSection = () => {
  // Selected rating state
  const [selectedRating, setSelectedRating] = useState("All");

  // Reviews Data
  const reviews = [
    {
      id: 1,
      name: "L D...",
      date: "Fri, 13 Feb, 2026",
      rating: 5,
      message:
        "She is very nice and precise. Guided very well. Worth spending every penny.",
      initial: "L",
      bg: "bg-yellow-100",
      text: "text-yellow-700",
    },
    {
      id: 2,
      name: "D X...",
      date: "Wed, 4 Feb, 2026",
      rating: 4,
      message:
        "Thank you very much for valuable guidance and support. Highly recommend.",
      initial: "D",
      bg: "bg-green-100",
      text: "text-green-700",
    },
    {
      id: 3,
      name: "Anonymous",
      date: "Tue, 3 Feb, 2026",
      rating: 3,
      message:
        "Thank you very much for valuable guidance and support.",
      initial: "A",
      bg: "bg-red-100",
      text: "text-red-700",
    },
    {
      id: 4,
      name: "R K...",
      date: "Mon, 1 Feb, 2026",
      rating: 2,
      message: "Good but response was a little slow.",
      initial: "R",
      bg: "bg-blue-100",
      text: "text-blue-700",
    },
  ];

  // Filter Logic (optimized with useMemo)
  const filteredReviews = useMemo(() => {
    if (selectedRating === "All") return reviews;
    return reviews.filter(
      (review) => review.rating === Number(selectedRating)
    );
  }, [selectedRating, reviews]);

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border mt-10">
      
      {/* Header */}
    <div className="flex items-center justify-between border-b pb-3 mb-5 w-full">
  
  {/* Left Side */}
  <h3 className="text-xl font-semibold">
    Reviews
  </h3>

  {/* Right Side */}
  <div className="w-[120px] flex justify-end">
    <select
      value={selectedRating}
      onChange={(e) => setSelectedRating(e.target.value)}
      className="w-full text-sm text-gray-600 border px-3 py-1 rounded-lg hover:bg-gray-100 transition"
    >
      <option value="All">All Ratings</option>
      <option value="5">5 Star</option>
      <option value="4">4 Star</option>
      <option value="3">3 Star</option>
      <option value="2">2 Star</option>
      <option value="1">1 Star</option>
    </select>
  </div>

</div>
      {/* Reviews List */}
      {filteredReviews.length === 0 ? (
        <p className="text-gray-500 text-center py-5">
          No Reviews Found
        </p>
      ) : (
        filteredReviews.map((review) => (
          <div
            key={review.id}
            className="border-b pb-4 mb-4 last:border-none"
          >
            <div className="flex items-center gap-3">
              
              {/* Avatar */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${review.bg} ${review.text} font-semibold`}
              >
                {review.initial}
              </div>

              {/* Name & Date */}
              <div className="flex-1">
                <p className="font-medium">{review.name}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>

              {/* Stars */}
              <div className="flex text-yellow-400 text-sm">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>
                    {star <= review.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
            </div>

            {/* Message */}
            <p className="text-gray-700 text-sm mt-3 ml-12">
              {review.message}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewsSection;