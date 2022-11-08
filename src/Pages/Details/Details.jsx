import React from "react";
import { useLoaderData } from "react-router-dom";
import AddReview from "./AddReview";

const Details = () => {
  const [service] = useLoaderData();
  console.log(service);
  const { description, rating, price, _id, name, img } = service;
  return (
    <div>
      <div className="card card-compact w-3/4 mx-auto bg-base-100 border">
        <figure>
          <img src={img} className='w-full' alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-around">
            <p>Price : {price}</p>
            <p>Rating : {rating}</p>
          </div>
        </div>
      </div>
      <AddReview service={service}></AddReview>
    </div>
  );
};

export default Details;
