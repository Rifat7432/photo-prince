import React from "react";
import { Link } from "react-router-dom";
import loinImg from "../../Image/download.png";

const Login = () => {
  return (
    <div className="hero min-h-screen rounded bg-base-200">
      <div className="hero-content lg:gap-48 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            src={loinImg}
            className="h-96 w-96 lg:mr-20 shadow-2xl rounded-lg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold my-6">Login now!</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
