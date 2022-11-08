import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const ReviewRow = ({ review }) => {
  const { serviceName, Name, email, img, rating, massage, dateTime } = review;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
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
              Read full massage
            </label>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <div className=" break-words">
                <textarea defaultValue={massage} className="textarea w-full h-96 text-lg textarea-bordered"  
                readOnly
                placeholder="Bio"></textarea>
                </div>
                <div className="modal-action">
                  <label htmlFor="my-modal-4" className="btn">OK
                  </label>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </th>
    </tr>
  );
};

export default ReviewRow;
