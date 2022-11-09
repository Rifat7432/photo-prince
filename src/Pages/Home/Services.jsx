import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import ServiceCard from "./ServiceCard";
import Loading from "../../Share/Loading";

const Services = () => {
  const { setLoading, loading } = useContext(AuthContext);
  const nsviget = useNavigate();
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    fetch("https://assignment-11-server-rifat7432.vercel.app/services/3")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      {services.length === 0 ? (
        <Loading></Loading>
      ) : (
        <div className="my-5">
          <h2 className=" text-5xl my-5 font-extrabold">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {services.map((service) => (
              <ServiceCard service={service} key={service._id}></ServiceCard>
            ))}
          </div>
          <div className="justify-center align-center flex">
            <button
              onClick={() => nsviget("/allservices")}
              className="btn btn-outline my-8 btn-primary"
            >
              Show All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
