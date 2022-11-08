import React from "react";
import { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";

const AddReview = ({ service }) => {
  const {  _id, name, } = service;
  const location = useLocation()
  const {user} = useContext(AuthContext)
  const handleOrder = (event) => {
    event.preventDefault();
    const dateTime = new Date().toLocaleString();
    const form = event.target;
    const Name = form.Name.value;
    const email = form.YourEmail.value;
    const massage = form.massage.value;
    const review = {
      service: _id,
      serviceName: name,
      Name,
      email,
      massage,
      dateTime,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((user) => {
        form.reset()
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="w-3/4 mx-auto">
      <label htmlFor="my-modal-3" className="btn">
        Add Review
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {
            user?.uid ?  <form onSubmit={handleOrder}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
              <input
                name="Name"
                type="text"
                placeholder=" Name"
                className="input input-bordered input-ghost w-full"
              />
              <input
                name="YourEmail"
                type="text"
                placeholder="Your Email"
                className="input input-bordered input-ghost w-full"
              />
            </div>
            <textarea
              name="massage"
              className="textarea textarea-bordered h-36 w-full"
              placeholder="Your massage"
            ></textarea>
            <button className="btn p-0">
              {" "}
              <label htmlFor="my-modal-3" className="p-4">
                Post
              </label>
            </button>
          </form>
          : 
          <div>
            <h2>You have to Login for add any review</h2>
            <Link  className="btn btn-outline btn-primary mt-2" to={'/login'}>Login</Link>
          </div>
          }
         
        </div>
      </div>
    </div>
  );
};

export default AddReview;
