import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loinImg from "../../Image/download.jfif";
import { AuthContext } from "../../AuthContext/AuthProvider";
import SocialLogin from "../../Share/SocialLogin";
import useTitle from "../../Utilities/Utilities";
import toast from "react-hot-toast";
import { useState } from "react";

const Login = () => {
  //dynamic title
  useTitle("Photo Prince - Login");
  // using navigate
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const location = useLocation();
  const form = location.state?.from.pathname || "/";
  // get login  function from Context provider
  const { login, forgetPassword } = useContext(AuthContext);
  // login up function
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    login(email, password)
      .then((result) => {
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
            //set token in localStorage and navigate and toast
            localStorage.setItem("token", data.token);
            navigate(form, { replace: true });
            event.target.reset();
            toast.success("User login successful");
          })
          .catch((e) => {});
      })
      .catch((e) => {
        toast.error(`${e.message}`);
      });
  };

  const handleForget = () => {
    if (userEmail === "") {
      return toast.error("Enter your email");
    }
    forgetPassword(userEmail)
      .then(() => {
        toast.success('check your email to reset your password')
      })
      .catch((error) => {
        toast.error(`${error.message}`);
        // ..
      });
  };
  return (
    <div className="hero my-8 rounded">
      <div className="hero-content lg:gap-48 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            src={loinImg}
            className="h-96 w-96 lg:mr-20 shadow-2xl rounded-lg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl sm:text-center font-bold my-6">Login now!</h1>
          {/* login from  */}
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onBlur={(e) => setUserEmail(e.target.value)}
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
              <button className="btn btn-primary">Login</button>
            </div>
            <label className="text-lg">
              New to Photo Prince
              <Link
                to={"/signup"}
                className=" text-cyan-600 link link-hover ml-4"
              >
                Sign UP
              </Link>
            </label>
          </form>
          <button
                onClick={handleForget}
                className="label-text-alt mr-40 text-lg my-6  link link-hover"
              >
                Forgot password?
              </button>
          <div className="mx-auto mb-6">
            <SocialLogin text={"Login"}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
