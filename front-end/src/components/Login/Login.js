import { Button, FormControl, Grid, TextField } from "@mui/material";
import React from "react";

export const Login = () => {
  return (
    <Grid container spacing={25}>
      <Grid item xs={4}></Grid>
      <Grid  item xs={4}>
        <FormControl  style={{"margin-top": "170px"}} fullWidth alignText="center">
          <TextField placeholder="email" required id="outlined-required" />
          <br/>
          <TextField
            id="outlined-password-input"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
          />
          <br/>
          <Button variant="contained" style={{background: "black"}} >
            Login
          </Button>
        </FormControl>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};
