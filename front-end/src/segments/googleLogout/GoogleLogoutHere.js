import React from 'react'
import GoogleLogout from 'react-google-login';

export const GoogleLogoutHere = () => {
  const logout = (data)=>{
    console.log(data,"data")
  }
  return (
    <div><GoogleLogout
    buttonText="Logout"
    onLogoutSuccess={logout}
    onClick={logout}
  />
  </div>
  )
}
