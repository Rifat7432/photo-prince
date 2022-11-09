import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";

const AddReview = ({ service }) => {
  const navigate = useNavigate()
  
  const { _id, name ,rating} = service;
  const { user ,setIsAdded,setLoading, loading } = useContext(AuthContext);
  const [newRating, setNewRating] = useState(0);
  const ratingChanged = (newRating) => {
    setNewRating(newRating);
  };
  const handleReview = (event) => {
    const totalRating = rating + newRating
    event.preventDefault();
    if(newRating === 0){
     return ;
    }
    const dateTime = new Date().toLocaleString();
    // console.log(new Date(dateTime).getTime())
    const form = event.target;
    const massage = form.massage.value;
    const review = {
      service: _id,
      serviceName: name,
      Name: user.displayName,
      email: user.email,
      img: user.photoURL,
      rating:newRating,
      massage,
      dateTime,
    };
    setLoading(true)
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user)
        form.reset();
      })
      .catch((err) => console.error(err));

      fetch(`http://localhost:5000/services/${_id}`,{
      method:"PATCH",
      headers:{
        'content-type' : 'application/json',
      },
      body:JSON.stringify({rating : totalRating})
    })
    .then(res=>res.json())
    .then(data=>{setIsAdded(data)
    navigate(`/service/${_id}`)
    })
    .catch(e=>console.error(e))
    setLoading(false)
  
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
          {user?.uid ? (
            <form onSubmit={handleReview}>
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
                  defaultValue={user.displayName}
                  readOnly
                  placeholder=" Name"
                  className="input input-bordered input-ghost w-full"
                />
                <input
                  name="Your Email"
                  type="text"
                  defaultValue={user.email}
                  readOnly
                  placeholder="Your Email"
                  className="input input-bordered input-ghost w-full"
                />
              </div>
              <textarea
                name="massage"
                required
                className="textarea textarea-bordered h-36 w-full"
                placeholder="Your massage"
              ></textarea>
              <button className="btn p-0">
                
                <label htmlFor="my-modal-3" style={{cursor:'pointer'}} className="p-4 flex">
                  Post<span className="ml-5"><FaPaperPlane></FaPaperPlane></span>
                </label>
                
              </button>
            </form>
          ) : (
            <div>
              <h2>Please login to add a review</h2>
              <Link className="btn btn-outline btn-primary mt-2" to={"/login"}>
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddReview;
// new Date().getTime()
