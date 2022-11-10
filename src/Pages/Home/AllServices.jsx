import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
//this component show all service at home page
const AllServices = () => {
  // get all service data by useLoaderData
  const services = useLoaderData();
  console.log();
  return (
    <div>
      <h2 className=" text-4xl ">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {/* map the array of service data and send them to ServiceCard component by props*/}
        {services.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
