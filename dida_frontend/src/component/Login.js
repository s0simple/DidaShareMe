import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import Logo from "../assets/logo.png";
import { useEffect } from "react";
import { gapi } from "gapi-script";
// import { newClient } from "../sanityApi/client";
import { newClient } from "../sanityApi/client";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    // console.log("success:", res);
    localStorage.setItem("user", JSON.stringify(res.profileObj));

    const { name, googleId, imageUrl } = res.profileObj;

    const doc = {
      _id: googleId,
      _type: "user",
      userName: name,
      image: imageUrl,
    };

    newClient.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  const onFailure = (err) => {
    console.log("failed:", err);
  };

  // const responseGoogle = (response) => {
  //   console.log("Encoded JWT ID token" + response.credential);
  // };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 ">
        <div className="p-5">
          <img src={Logo} alt="" className="don" />
        </div>

        <div className="shadow-2x1">
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
            render={(renderProps) => (
              <button
                className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                type="button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <FcGoogle className="mr-4" />
                Sign in with Google
              </button>
            )}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy="single_host_origin"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
