import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";

// google login component
const SocialLogin = ({ text }) => {
  // get loginWithGoogle function from Context provider
  const { loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.from.pathname || "/";
  //function to login / sign up by google
  const handelSocialLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        fetch("https://assignment-11-server-rifat7432.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ user: user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            //set token to local storage and show toast and navigate
            localStorage.setItem("token", data.token);
            navigate(form, { replace: true });
            toast.success("User login successful");
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  };
  return (
    <div>
      {/* google login button */}
      <button
        className="btn btn-outline btn-primary"
        onClick={handelSocialLogin}
      >
        <p>{text} by Google </p>
      </button>
    </div>
  );
};

export default SocialLogin;
