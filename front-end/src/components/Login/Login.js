import { Button, FormControl, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

const handleClick = () => {
  setShowPassword(prev => !prev);
}
  return (
    <Grid container
    direction="column"
    justifyContent="center"
      alignItems="center" height={"80vh"}>
       <Grid item xs="auto" >
        <Typography style={{fontSize: "30px"}}>
          Log In
        </Typography>
      </Grid>
      <Grid item xs="auto" style={{marginTop: "50px"}} >
        <TextField placeholder="Email" required
        style={{width: "345px", border: "1px solid #E8E8E8", backgroundColor: "#F6F6F6 !important", borderRadius: "8px" }}
        />
      </Grid>
      <Grid item xs="auto" style={{marginTop: "16px"}}>
          <TextField
            id="outlined-password-input"
            placeholder="Password"
            type={showPassword?"password":"text"}
            autoComplete="current-password"
            InputProps={{
            endAdornment: true ? (
              <InputAdornment position="end">
                 <Typography
                   onClick={handleClick}
                    edge="end"
                    style={{ fontSize: "14px" }}
                 >
                   {showPassword ? 'Show' : 'UnShow'}
                 </Typography>
               </InputAdornment>
            ) : null
            }}
            style={{width: "345px", border: "1px solid #E8E8E8", backgroundColor: "#F6F6F6 !important", borderRadius: "8px" }}
        />
      </Grid>
      <Grid item xs="auto" style={{marginTop: "42px"}} >
          <Button variant="contained" style={{background: "#00000",width: "345px", fontSize: "18px", color: "#FFFFFF", textTransform: "none", borderRadius: "100px"}} >
            Log in
          </Button>
      </Grid>
    </Grid>
  );
};
