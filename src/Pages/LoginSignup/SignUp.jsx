import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import signUPImg from "../../Image/download (1).png";
import SocialLogin from "../../Share/SocialLogin";
import useTitle from "../../Utilities/Utilities";

const SignUp = () => {
  //dynamic title
  useTitle("Photo Prince - Sign Up");
  // get signUp and update function from Context provider
  const { signUp, update } = useContext(AuthContext);
  // using navigate
  const navigate = useNavigate();
  // sign up function
  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    signUp(email, password)
      .then((result) => {
        update(name, photo);
        const user = result.user;
        // sending request to get jwt token
        fetch("https://assignment-11-server-rifat7432.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ user: user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            //set token in localStorage
            localStorage.setItem("token", data.token);
          })
          .catch((e) => {});
        navigate("/");
        event.target.reset();
        toast.success("User login successful");
      })
      .catch((e) => {toast.error(`${e.message}`)});
  };
  return (
    <div className="hero my-8 rounded ">
      <div className="hero-content lg:gap-48 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            src={signUPImg}
            className="h-96 w-96 lg:mr-20 shadow-2xl rounded-lg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl sm:text-center font-bold my-6">Sign Up</h1>
          {/* sign up from  */}
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                required
                name="photo"
                type="text"
                placeholder="Photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <label className="text-lg">
              Already have account
              <Link
                to={"/login"}
                className=" text-cyan-600 link link-hover ml-4"
              >
                Login
              </Link>
            </label>
          </form>
          <div className="mx-auto mb-6">
            <SocialLogin text={"Sign Up"}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
