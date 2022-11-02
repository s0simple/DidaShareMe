import React from "react";
import { useEffect } from "react";

const Try = () => {
  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token" + response.credential);
  };

  useEffect(() => {
    /* global google*/
    google.accounts.id.initialize({
      client_id:
        "921207643656-e4vdie291f2n8bf61psolnscct3opesf.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return <div id="signInDiv"></div>;
};

export default Try;
