import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import EquipmentCard from "./EquipmentCard";

const Equipment = () => {
  const [equipments, setEquipments] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-rifat7432.vercel.app/equipment")
      .then((res) => res.json())
      .then((data) => setEquipments(data));
  }, []);
  return (
    <div>
      <h2 className=" text-5xl my-5 font-extrabold">Our Equipment</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14">
        {equipments.map((equipment) => (
          <EquipmentCard
            equipment={equipment}
            key={equipment._id}
          ></EquipmentCard>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
