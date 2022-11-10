import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import ShoeReview from "../../Share/ShoeReview";
import Loading from "../../Share/Loading";
import useTitle from "../../Utilities/Utilities";
// this component usage to show the reviews of login user
const MyReviews = () => {
  //dynamic title
  useTitle("Photo Prince - My Reviews");
  //get user info and a state to AuthContext
  const { user, isAdded } = useContext(AuthContext);
  //review and loading state
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    //send request to get Review data  by user email
    fetch(
      `https://assignment-11-server-rifat7432.vercel.app/userReview/${user?.email}`,
      {
        headers: {
          // send jwt token to backend
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((e) => console.error(e));
    setLoading(false);
  }, [user?.email, isAdded]);

  return (
    <div>
      {loading ? (
        <div className=" w-1/2 mx-auto">
          {/* conditional rendering to show spinner */}
          <Loading></Loading>
        </div>
      ) : (
        <div>
          {reviews.length > 0 ? (
            // showing user review
            // ShoeReview component usage also detail component
            // editable={true} usage for make difference between this
            // component and detail component
            // if editable=true edit , delete  button will show
            //otherwise edit , delete  button will not show
            <ShoeReview editable={true} reviews={reviews}></ShoeReview>
          ) : (
            // if there are no review then show this
            <div className="h-96 pt-28">
              <h3 className="text-4xl font-bold w-1/2  mx-auto text-center">
                No reviews were added !
              </h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
