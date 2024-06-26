import { useContext, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

import AnimationWrapper from "../common/page-animation";
import InputBox from "../components/input.component";
import { storeInSession } from "../common/session";
import { UserContext } from "../App";

import googleIcon from "../imgs/google.png";
import signinImg from "../imgs/youngs.png";
import signupImg from "../imgs/youngs.png";
import video from "../imgs/video.mp4";

const UserAuthForm = ({ type }) => {
  const { userAuth: { access_token }, setUserAuth } = useContext(UserContext);
  const formRef = useRef(null);

  const userAuthThroughServer = (serverRoute, formData) => {
    axios.post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
      .then(({ data }) => {
        storeInSession("user", JSON.stringify(data));
        setUserAuth(data);
      })
      .catch(({ response }) => {
        toast.error(response.data.error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serverRoute = type === "sign-in" ? "/signin" : "/signup";

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

    const form = new FormData(formRef.current);
    const formData = {};

    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    const { fullname, email, password } = formData;

    if (fullname && fullname.length < 3) {
      return toast.error("Fullname must be at least 3 letters long");
    }
    if (!email.length) {
      return toast.error("Enter Email");
    }
    if (!emailRegex.test(email)) {
      return toast.error("Email is invalid");
    }
    if (!passwordRegex.test(password)) {
      return toast.error("Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters");
    }

    userAuthThroughServer(serverRoute, formData);
  };

  const imageSource = type === "sign-in" ? signinImg : signupImg;

  return (
    access_token ? (
      <Navigate to="/" />
    ) : (
      <AnimationWrapper keyValue={type}>
        <section className="relative h-screen overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black-bg opacity-80"></div>
          <div className="bg-blur-auth rounded-lg relative z-10 flex flex-col md:flex-row items-center justify-center w-auto h-auto p-6">
            <Toaster />
            <div className="flex flex-col justify-center items-center md:w-1/2 p-4 md:p-2">
              <img src={imageSource} className="w-32 h-32 md:w-full md:h-full object-cover mb-4" alt="Auth" />

            </div>

            <form ref={formRef} className="w-[80%] max-w-[400px] md:w-1/2 md:p-0" onSubmit={handleSubmit}>
            <div className="items-center justify-center">
                <h1 className="text-xl text-center font-bold font-Monaco capitalize mb-2">
                    {type === "sign-in" ? "Grab your seat and Sign In" : "Sign Up for Submitted or Attendance"}
                </h1>
                <p className="text-xl text-gray-500 text-center mb-2">
                    {type === "sign-in" ? "Ready?" : "Get Ready"}
                </p>
            </div>

              {type !== "sign-in" && (
                <InputBox
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                  icon="fi-rr-user"
                />
              )}
              <InputBox
                name="email"
                type="email"
                placeholder="Email"
                icon="fi-rr-envelope"
              />
              <InputBox
                name="password"
                type="password"
                placeholder="Password"
                icon="fi-rr-key"
              />
              <button
                className="btn-dark center mt-8"
                type="submit"
              >
                {type.replace("-", " ")}
              </button>
              {type === "sign-in" ? (
                <p className="mt-4 text-dark-grey text-xl text-center">
                  Don't have an account?
                  <Link to="/signup" className="underline text-black text-xl ml-1">
                    Register here
                  </Link>
                </p>
              ) : (
                <p className="mt-4 text-dark-grey text-xl text-center">
                  Already a member?
                  <Link to="/signin" className="underline text-black text-xl ml-1">
                    Sign in
                  </Link>
                </p>
              )}
            </form>
          </div>
        </section>
      </AnimationWrapper>
    )
  );
};

export default UserAuthForm;
