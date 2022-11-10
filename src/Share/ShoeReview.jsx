import React from "react";
import ReviewRow from "./ReviewRow";
/**
i have use this component into to place one Detail component and 
MyReview component
in this component i gating review data by {reviews} parameter
if this component usage  in Detail component then editable value is false ,
if this component usage  in MyReview component then editable value is true
 editable usage in ReviewRow component
**/

const ShoeReview = ({ reviews, editable }) => {
  // this component is a table
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
          {/* map the tr  by ReviewRow*/}
          {reviews.map((review) => (
            <ReviewRow
              review={review}
              editable={editable}
              key={review._id}
            ></ReviewRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoeReview;
