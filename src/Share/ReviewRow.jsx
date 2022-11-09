import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../AuthContext/AuthProvider";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import toast from "react-hot-toast";

const ReviewRow = ({ review, editable }) => {
  const { setIsAdded, setLoading } = useContext(AuthContext);
  const {
    service,
    serviceName,
    Name,
    email,
    img,
    rating,
    massage,
    dateTime,
    _id,
  } = review;

  const [newRating, setNewRating] = useState(0);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const ratingChanged = (newRating) => {
    setNewRating(newRating);
  };

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const onOpenModal2 = () => setOpen2(true);
  const onCloseModal2 = () => setOpen2(false);
  const handleEditReview = (event) => {
    event.preventDefault();
    if (newRating === 0) {
      return;
    }
    const form = event.target;
    const massage = form.massage.value;
    const newReview = {
      rating: newRating,
      massage,
    };
    setLoading(true);
    fetch(`https://assignment-11-server-rifat7432.vercel.app/review/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((user) => {
        setIsAdded(user);
        toast.success('Review updated successfully')
      })
      .catch((err) => console.error(err));
    setLoading(false);
  };

  const handelDelete = () => {
    const agree = window.confirm("are you sure to delete it");
    if (agree) {
      setLoading(true);

      fetch(`https://assignment-11-server-rifat7432.vercel.app/review/${_id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) =>{
          setIsAdded(data)})
          toast.success('Review deleted successfully')
        .catch((e) => console.error(e));
      setLoading(false);
    }
  };
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{Name}</div>
            <div className="text-sm opacity-50">{email}</div>
            <div className="text-sm opacity-50">{dateTime}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost font-semibold text-lg badge-sm">
          {rating}
          <span className="text-amber-500 ml-2">
            <FaStar></FaStar>
          </span>
        </span>
      </td>
      <td>
        <p className="text-lg font-semibold">
          {massage.length > 12 ? massage.slice(0, 12) + "..." : massage}
        </p>
      </td>
      <th>
        {massage.length > 12 ? (
          <div>
            <button  onClick={onOpenModal2} className="btn  btn-ghost btn-xs">Read full review</button>
            <Modal open={open2} onClose={onCloseModal2} center>
              <textarea
                defaultValue={massage}
                className="textarea w-96 my-10 h-96 text-lg textarea-bordered"
                readOnly
                placeholder="Bio"
              ></textarea>
            </Modal>
          </div>
        ) : (
          ""
        )}
      </th>
      <th>
        {editable && (
          <div className="flex items-center justify-between">
            <button
              className="btn  btn-ghost btn-xs mr-4 flex"
              onClick={onOpenModal}
            >
              <span className="mr-5">
                <FaPencilAlt></FaPencilAlt>
              </span>{" "}
              Edit
            </button>
            <button
              onClick={handelDelete}
              className="btn btn-outline btn-error rounded-full"
            >
              <FaTrashAlt></FaTrashAlt>
            </button>
          </div>
        )}
        <Modal open={open} onClose={onCloseModal} center>
          <div>
            <p className="text-lg font-semibold w-1/2 mx-auto">
              Edit rating and review
            </p>
          </div>
          <form onSubmit={handleEditReview}>
            <div className="flex items-center">
              <p className="text-2xl font-bold">Rating : </p>
              <div className="flex text-4xl font-bold w-7/12 mx-auto my-10">
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
                defaultValue={Name}
                readOnly
                placeholder=" Name"
                className="input mb-5 input-bordered input-ghost w-full"
              />
              <input
                name="Your Email"
                type="text"
                defaultValue={email}
                readOnly
                placeholder="Your Email"
                className="input mb-5 input-bordered input-ghost w-full"
              />
            </div>
            <textarea
              name="massage"
              required
              className="textarea textarea-bordered mb-5 h-36 w-full"
              placeholder="Your massage"
            ></textarea>
            <div>
              <button className="btn my-5 btn-outline btn-primary p-4 flex">
                <span className="mr-5">
                  <FaPencilAlt></FaPencilAlt>
                </span>
                Edit
              </button>
            </div>
          </form>
        </Modal>
      </th>
    </tr>
  );
};

export default ReviewRow;
