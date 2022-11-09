import React from "react";
import { FaStar } from "react-icons/fa";

const EquipmentCard = ({ equipment }) => {
  const { name, rating, img } = equipment;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} className='h-60' alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p className="flex text-lg items-center font-semibold">
          {rating}
          <span className="text-amber-500 ml-2">
            <FaStar></FaStar>
          </span>
        </p>
      </div>
    </div>
  );
};

export default EquipmentCard;
