import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaPencilAlt } from "react-icons/fa";
import { AuthContext } from "../../AuthContext/AuthProvider";
import Loading from "../../Share/Loading";
import useTitle from "../../Utilities/Utilities";

const AddServices = () => {
  useTitle('Photo Prince - Add Services')

  const { loading, setLoading, user } = useContext(AuthContext);
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.Name.value;
    const price = form.Price.value;
    const img = form.Photo.value;
    const description = form.Description.value;
    const service = {
      img: img,
      price: "$" + price,
      name: name,
      description: description,
    };
    setLoading(true);
    fetch("https://assignment-11-server-rifat7432.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((user) => {
        toast.success('service added successfully')
      })
      .catch((err) => console.error(err));
    setLoading(false);
  };
  return (
    <div>
      {" "}
      {loading ? (
        <div className="relative">
          <div className="absolute top-60 right-60">
            <Loading></Loading>
          </div>
        </div>
      ) : (
        <form className="my-10 bg-slate-100 rounded-xl p-10" onSubmit={handleAddService}>
          <p>To add a new service submit the form</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <input
              required
              name="Name"
              type="text"
              placeholder=" Name"
              className="input input-bordered mb-5 bg-white input-ghost w-full"
            />
            <input
              required
              name="Price"
              type="text"
              placeholder=" Price"
              className="input input-bordered mb-5 bg-white input-ghost w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <input
              required
              name="Photo"
              type="text"
              placeholder=" Photo"
              className="input input-bordered mb-5 bg-white input-ghost w-full"
            />
            <input
              defaultValue={user?.email}
              readOnly
              type="text"
              placeholder="Your Rating"
              className="input input-bordered mb-5 bg-white input-ghost w-full"
            />
          </div>
          <textarea
            name="Description"
            required
            className="textarea textarea-bordered mb-5 h-36 w-full"
            placeholder="Description"
          ></textarea>
          <button className="btn btn-primary ml-auto p-4 flex">
            Create
            <span className="ml-5">
              <FaPencilAlt></FaPencilAlt>
            </span>
          </button>
        </form>
      )}
    </div>
  );
};

export default AddServices;
