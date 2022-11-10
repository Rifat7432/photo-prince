import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AddReview from "./AddReview";
import ShoeReview from "../../Share/ShoeReview";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { FaStar } from "react-icons/fa";
import Loading from "../../Share/Loading";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import useTitle from "../../Utilities/Utilities";
// this component usage to show the Details fo a service reviews
const Details = () => {
  //dynamic title
  useTitle("Photo Prince - Service Details");
  //get  a service to useLoaderData
  const [service] = useLoaderData();
  const { description, price, _id, name, img } = service;
  //get  a state to AuthContext
  const { isAdded } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setLoading(true);
    //send request to get Review data  by service id
    fetch(
      `https://assignment-11-server-rifat7432.vercel.app/serviceReview/${_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
    setLoading(false);
  }, [isAdded]);
  return (
    <div className="my-20">
      {reviews.length === 0 && loading ? (
        /* conditional rendering to show spinner */
        <Loading></Loading>
      ) : (
        // detail card
        <div>
          <div className="card card-compact sm:w-3/4 sm:mx-auto bg-base-100 border">
            <PhotoProvider>
              <PhotoView src={img}>
                <img
                  src={img}
                  className="w-full rounded"
                  alt="unable to show thumbal"
                />
              </PhotoView>
            </PhotoProvider>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p className="font-semibold text-xl ">{description}</p>
              <div className="card-actions justify-evenly">
                <p className="font-semibold text-lg ">Price : {price}</p>
                <span className="badge badge-ghost font-semibold text-lg ">
                  {/* show ratings by calculating total user and ratings */}
                  Rating :{" "}
                  {reviews.length === 0
                    ? 0
                    : (
                        reviews.reduce((p, c) => p + c.rating, 0) /
                        reviews.length
                      ).toFixed(1)}
                  <span className="text-amber-500 ml-2">
                    <FaStar></FaStar>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="w-3/4 mx-auto my-12">
            {reviews.length > 0 ? (
              // showing user review
              // ShoeReview component usage also detail component
              // editable={true} usage for make difference between this
              // component and detail component
              // if editable=true edit , delete  button will show
              //otherwise edit , delete  button will not show
              <ShoeReview editable={false} reviews={reviews}></ShoeReview>
            ) : (
              // if there are no review then show this
              <h3 className="text-4xl font-bold w-1/2 m-auto text-center">
                No reviews were added !
              </h3>
            )}
          </div>
          <div className="w-1/4 mx-auto">
            {/* send AddReview component data  b*/}
            <AddReview service={service}></AddReview>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
