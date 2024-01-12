import React, { useState, useEffect } from "react";
import api from "../utils/api";

const fetchReviews = async (movieId) => {
  const response = await api.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/${movieId}/reviews`
  );

  const { data } = response;
  return data.results;
};

const MovieReviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadReviews = async () => {
      const reviewsData = await fetchReviews(movieId);
      setReviews(reviewsData);
    };

    if (isOpen) {
      loadReviews();
    }
  }, [movieId, isOpen]);

  if (!isOpen) {
    return (
      <button
        className="font-bold text-white mx-auto px-4 bg-blue-400 rounded-md hover:opacity-50 transition-all ease-in-out duration-500"
        onClick={() => setIsOpen(true)}
      >
        View Reviews
      </button>
    );
  }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow-2xl max-w-2xl w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Reviews</h1>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black bg-transparent hover:bg-gray-200 rounded p-2"
            >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
          <div className="overflow-y-auto max-h-96">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="mb-4">
                  <h1 className="font-semibold text-xl">{review.author}</h1>
                  <p className="text-gray-600">{review.content}</p>
                </div>
              ))
            ) : (
              <p className="text-center py-32">No reviews available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieReviews;
