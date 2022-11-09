import React from "react";
import { useContext } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { AuthContext } from "../../AuthContext/AuthProvider";
import Loading from "../../Share/Loading";

const AddServices = () => {
  const {    loading,setLoading,} = useContext(AuthContext)
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.Name.value;
    const price = form.Price.value;
    const img = form.Photo.value;
    const description = form.Description.value;
    const rating = form.Rating.value;
    const service = {
      img: img,
      price: "$"+ price,
      rating: rating,
      name: name,
      description: description,
    };
    setLoading(true)
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((user) => {})
      .catch((err) => console.error(err));
      setLoading(false)
  };
  return (
    <form className="relative" onSubmit={handleAddService}>
    {loading && <div className="absolute top-60 right-60">
    <Loading></Loading>
    </div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <input
          required
          name="Name"
          type="text"
          placeholder=" Name"
          className="input input-bordered mb-5 input-ghost w-full"
        />
        <input
          required
          name="Price"
          type="text"
          placeholder=" Price"
          className="input input-bordered mb-5 input-ghost w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <input
          required
          name="Photo"
          type="text"
          placeholder=" Photo"
          className="input input-bordered mb-5 input-ghost w-full"
        />
        <input
          required
          name="Rating"
          type="text"
          placeholder="Your Rating"
          className="input input-bordered mb-5 input-ghost w-full"
        />
      </div>
      <textarea
        name="Description"
        required
        className="textarea textarea-bordered mb-5 h-36 w-full"
        placeholder="Description"
      ></textarea>
      <button className="btn ml-auto p-4 flex">
        Create
        <span className="ml-5">
          <FaPencilAlt></FaPencilAlt>
        </span>
      </button>
    </form>
  );
};

export default AddServices;
