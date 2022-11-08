import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReviewRow from "./ReviewRow";

const ShoeReview = ({ id,isAdded }) => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews)
  useEffect(() => {
    fetch(`http://localhost:5000/review/${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [isAdded]);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <ReviewRow review={review}  key={review._id}></ReviewRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoeReview;
