import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AddReview from "./AddReview";
import ShoeReview from "../../Share/ShoeReview";
import { useEffect } from "react";

const Details = () => {
  const [service] = useLoaderData()
  const [isAdded,setIsAdded] = useState({})
  console.log(service);
  const { description, rating, price, _id, name, img } = service;
  return (
    <div>
      <div className="card card-compact w-3/4 mx-auto bg-base-100 border">
        <figure>
          <img src={img} className="w-full" alt="Shoes" />
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
      <div className="w-3/4 mx-auto my-12">
        {<ShoeReview isAdded={isAdded} id={_id}></ShoeReview>}
      </div>
      <div className="w-1/4 ml-auto">
        <AddReview setIsAdded={setIsAdded} service={service}></AddReview>
      </div>
    </div>
  );
};

export default Details;
