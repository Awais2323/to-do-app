import React from 'react'
import FacebookLogin from 'react-facebook-login';
import './style.css'
const responseFacebook = (response) => {
    console.log("login result",response);
  }

export const FacebookLoginHere = () => {
  const componentClicked = (data)=>{
    console.log(data,"data")
  }
  return (<>
    <FacebookLogin
      appId="558546932755737"
      callback={responseFacebook}
      render={(renderProps) => (
        <button onClick={renderProps.onClick}>
          <p >Login with Facebook</p>
        </button>
      )}
    />

</>
  )
}
