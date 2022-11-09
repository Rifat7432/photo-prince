import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { description, rating, price, _id, name, img } = service;
  const navigate = useNavigate()
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} className="h-64 w-full" alt="unable to show thumbal" />
        </PhotoView>
      </PhotoProvider>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      { description && <p  className="text-xl">{description.length > 100 ? description.slice(0,100) + '...': description}</p>}
      <p className="text-xl">{price}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>navigate(`/service/${_id}`)} className="btn btn-outline btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
