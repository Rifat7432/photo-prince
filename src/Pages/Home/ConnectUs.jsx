import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";
// this component show how user  Connect Us
const ConnectUs = () => {
  return (
    <div className="bg-neutral p-10 w-full">
      <p className="w-1/4 mb-8 mx-auto sm:text-xl font-bold  text-slate-200">
        Contact with us
      </p>
      <div className="footer p-10  text-neutral-content">
        <div className="flex items-center sm:text-xl font-bold ">
          <FaPhoneAlt></FaPhoneAlt>
          <p>+2546 251 2658</p>
        </div>
        <div>
          <div className="flex items-center sm:text-xl font-bold ">
            <FaMapMarkerAlt></FaMapMarkerAlt>
            <p>Mirpur, Dhaka</p>
          </div>
        </div>
        <div className="flex items-center sm:text-xl font-bold ">
          <FaRegEnvelope></FaRegEnvelope>
          <p>md6546854@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectUs;
