import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loinImg from "../../Image/download.png";
import { AuthContext } from "../../AuthContext/AuthProvider";
import SocialLogin from "../../Share/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.from.pathname || "/";
  const { login } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    login(email, password)
      .then((result) => {
        //   const user = result.user

        //   fetch('https://genius-car-server-delta.vercel.app/jwt',{
        //     method:"POST",
        //     headers:{
        //       'content-type' : 'application/json'
        //     },
        //     body:JSON.stringify({user:user.email})
        //   })
        //   .then(res=>res.json())
        //   .then(data=>{
        //     localStorage.setItem('token',data.token)
        //   })
        //   .catch(e=>console.error(e))
        navigate(form, { replace: true });
        event.target.reset();
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="hero min-h-screen rounded">
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
          <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
              <label className="text-lg">
                New to Photo Prince
                <Link to={'/signup'} className=" text-cyan-600 link link-hover ml-4">
                  Sign UP
                </Link>
              </label>
          </form>
          <div className="mx-auto mb-6">
            <SocialLogin text={'Login'}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
