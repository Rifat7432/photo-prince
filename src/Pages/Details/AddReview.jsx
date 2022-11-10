import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import toast from "react-hot-toast";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
// this component usage to add  the login user reviews
const AddReview = ({ service }) => {
  //AddReview  Modal  state and function

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const { _id, name } = service;
  // gating user and setIsAdded setLoading state by AuthContext
  const { user, setIsAdded, setLoading } = useContext(AuthContext);
  // rating state and function
  const [newRating, setNewRating] = useState(0);
  const ratingChanged = (newRating) => {
    setNewRating(newRating);
  };
  const handleReview = (event) => {
    event.preventDefault();
    if (newRating === 0) {
      return;
    }
    // get the data of adding review
    const dateTime = new Date().toLocaleString();
    const form = event.target;
    const massage = form.massage.value;
    //make review object
    const review = {
      service: _id,
      serviceName: name,
      Name: user.displayName,
      email: user.email,
      img: user.photoURL,
      rating: newRating,
      massage,
      dateTime,
    };
    setLoading(true);
    /* Add  Review modal close function  */

    onCloseModal();
    //set review post request
    fetch("https://assignment-11-server-rifat7432.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // send jwt token to backend
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((user) => {
        setIsAdded(user);
        form.reset();
        toast.success("Review added successfully!");
      })
      .catch((err) => {
        console.error(err);
      });

    setLoading(false);
  };

  return (
    <div className="w-3/4 mx-auto">
      {/* Add  Review modal open button  */}
      <button
        onClick={onOpenModal}
        className="btn my-10 btn-primary btn-outline"
      >
        Add Your Review
      </button>
      {/* Add  Review modal  */}
      <Modal open={open} onClose={onCloseModal} center>
        {user?.uid ? (
          <form onSubmit={handleReview}>
            <div className="flex items-center">
              <p className="text-2xl font-bold">Rating : </p>
              <div className="flex text-4xl font-bold w-7/12 mx-auto my-10">
                {/* ste rating button */}

                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={50}
                  activeColor="#ffd700"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
              <input
                name="Name"
                type="text"
                defaultValue={user.displayName}
                readOnly
                placeholder=" Name"
                className="input mb-5 input-bordered input-ghost w-full"
              />
              <input
                name="Your Email"
                type="text"
                defaultValue={user.email}
                readOnly
                placeholder="Your Email"
                className="input input-bordered mb-5 input-ghost w-full"
              />
            </div>
            <textarea
              name="massage"
              required
              className="textarea textarea-bordered mb-5 h-36 w-full"
              placeholder="Your massage"
            ></textarea>
            <button
              type="submit"
              className="btn flex p-5 btn-primary mb5 btn-outline"
            >
              Post
              <span className="ml-5">
                <FaPaperPlane></FaPaperPlane>
              </span>
            </button>
          </form>
        ) : (
          <div>
            {/* if user is not login go to login button */}
            <h2>Please login to add a review</h2>
            <Link className="btn btn-outline btn-primary mt-2" to={"/login"}>
              Login
            </Link>
          </div>
        )}
      </Modal>
    </div>
  );
};
export default AddReview;
