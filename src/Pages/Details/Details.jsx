import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AddReview from "./AddReview";
import ShoeReview from "../../Share/ShoeReview";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { FaStar } from "react-icons/fa";


const Details = () => {
  const [service] = useLoaderData();
  const { description, rating, price, _id, name, img } = service;
  const { isAdded } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(reviews.length===0)
  useEffect(() => {
    fetch(`http://localhost:5000/serviceReview/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [isAdded]);
  return (
    <div>
      <div className="card card-compact w-3/4 mx-auto bg-base-100 border">
        <figure>
          <img src={img} className="w-full" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-semibold text-xl ">{description}</p>
          <div className="card-actions justify-evenly">
            <p className="font-semibold text-lg ">Price : {price}</p>
            <span className="badge badge-ghost font-semibold text-lg ">Rating : {reviews.length === 0 ? 0 :(rating/reviews.length).toFixed(1)}<span className="text-amber-500 ml-2">
            <FaStar></FaStar>
          </span></span>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto my-12">
        {reviews.length > 0 ? <ShoeReview editable={false}  reviews={reviews}></ShoeReview>:<h3 className="text-4xl font-bold w-1/2 m-auto text-center">No reviews were added !</h3>}
      </div>
      <div className="w-1/4 ml-auto">
        <AddReview  service={service}></AddReview>
      </div>
    </div>
  );
};

export default Details;
