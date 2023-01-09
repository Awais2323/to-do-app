import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

function GoogleLogin() {
  return (
    <div>
      <LoginSocialGoogle
        client_id={"942132736867-u77v6ogv1qgkv24irek21m5f610is0oo.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </div>
  );
}

export default GoogleLogin;