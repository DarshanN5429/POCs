import React from "react";

const RatingFilter = ({ ratingFilter, handleRatingChange }) => {
  return (
    <div>
      <label
        htmlFor="rating-select"
        className="block text-lg font-medium text-gray-700"
      >
        Select rating:
      </label>
      <select
        id="rating-select"
        onChange={handleRatingChange}
        className="mt-1 block w-full pl-4 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg shadow-sm"
        value={ratingFilter}
      >
        <option value="">All Ratings</option>
        <option value="4.5">4.5 +</option>
        <option value="4-4.4">4 - 4.4</option>
        <option value="3.5-3.9">3.5 -3.9</option>
        <option value="3-3.4">3 - 3.4</option>
        <option value="below3">Below 3</option>
      </select>
    </div>
  );
};

export default RatingFilter;
