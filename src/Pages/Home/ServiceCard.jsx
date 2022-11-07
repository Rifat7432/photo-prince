import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { description, rating, price, _id, name, img } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} className="h-64 w-full" alt="Shoes" />
        </PhotoView>
      </PhotoProvider>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description.length > 100 ? description.slice(0,100) + '...': description}</p>
        <div className="card-actions justify-end">
          <Link to={`/service/${_id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
