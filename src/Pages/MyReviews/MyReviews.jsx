import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import ShoeReview from "../../Share/ShoeReview";

const MyReviews = () => {
  const { user ,isAdded} = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/userReview/${user?.email}`)
    .then((res) => res.json())
    .then((data) => setReviews(data));
  }, [user?.email,isAdded]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ShoeReview editable={true} reviews={reviews}></ShoeReview>
      ) : (
        <div className="h-96 pt-28">
          <h3 className="text-4xl font-bold w-1/2  mx-auto text-center">
            No reviews were added !
          </h3>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
