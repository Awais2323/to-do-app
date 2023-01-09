import React from "react";
import { GoogleLogin } from "react-google-login";

export const GoogleOauth = () => {
    const responseGoogle = (response) => {
        console.log(response,"data");
      }
    
  return (
    <div>
      <h1>GoogleOauth</h1>
      <GoogleLogin
              clientId="942132736867-u77v6ogv1qgkv24irek21m5f610is0oo.apps.googleusercontent.com"
              buttonText="Login with google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              scope="https://www.googleapis.com/auth/userinfo.email profile openid"
            />
    </div>
  );
};
