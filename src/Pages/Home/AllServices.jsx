import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const AllServices = () => {
  const services = useLoaderData();
  return (
    <div>
      <h2 className=" text-4xl">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
