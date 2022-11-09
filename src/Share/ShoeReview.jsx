import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import ReviewRow from "./ReviewRow";

const ShoeReview = ({ reviews ,editable}) => {
  return (
    <div className="overflow-x-auto my-10 w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Review</th>
            <th></th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <ReviewRow review={review} editable={editable} key={review._id}></ReviewRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoeReview;
