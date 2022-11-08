import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const ReviewRow = ({ review, editable }) => {
  const { serviceName, Name, email, img, rating, massage, dateTime } = review;
  const [newRating, setNewRating] = useState(0);
  const ratingChanged = (newRating) => {
    setNewRating(newRating);
  };
  const handleEditReview = (event) => {
    event.preventDefault();
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
            <label htmlFor="my-modal-4" className="btn  btn-ghost btn-xs">
              Read full review
            </label>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <div className=" break-words">
                  <textarea
                    defaultValue={massage}
                    className="textarea w-full h-96 text-lg textarea-bordered"
                    readOnly
                    placeholder="Bio"
                  ></textarea>
                </div>
                <div className="modal-action">
                  <label htmlFor="my-modal-4" className="btn">
                    OK
                  </label>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </th>
      <th>
        {editable && (
          <label htmlFor="my-modal-5" className="btn  btn-ghost btn-xs">
            Edit
          </label>
        )}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-5"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div>
                <p className="text-lg font-semibold w-1/2 mx-auto">Edit rating and review</p>
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
                <button className="btn p-0">
                  <label
                    htmlFor="my-modal-5"
                    style={{ cursor: "pointer" }}
                    className="p-4 flex"
                  >
                    <span className="mr-5">
                      <FaPencilAlt></FaPencilAlt>
                    </span>
                    Edit
                  </label>
                </button>
              </div>
            </form>
          </div>
        </div>
      </th>
    </tr>
  );
};

export default ReviewRow;
