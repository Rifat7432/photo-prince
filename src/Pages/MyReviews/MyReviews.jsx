import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import ShoeReview from "../../Share/ShoeReview";
import Loading from "../../Share/Loading";
import useTitle from "../../Utilities/Utilities";

const MyReviews = () => {
  useTitle('Photo Prince - My Reviews')
  const { user, isAdded, loading, setLoading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://assignment-11-server-rifat7432.vercel.app/userReview/${user?.email}`,{
        headers:{
          authorization : `Bearer ${localStorage.getItem('token')}`
        }
      }
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
    setLoading(false);
  }, [user?.email, isAdded]);

  return (
    <div>
      {loading ? (
        <div className=" w-1/2 mx-auto">
          {" "}
          <Loading></Loading>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default MyReviews;
