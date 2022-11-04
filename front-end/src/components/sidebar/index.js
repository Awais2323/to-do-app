import { Checkbox,  Grid, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LogoutIcon from '@mui/icons-material/Logout';
import "./style.css";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import { useState } from "react";
export const Sidebar = ({index, setIndex}) => {
  console.log("sidebar")
  return (
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          height={"100vh"}
          style={{
            padding: "42px 0px"
          }}
        >
        <Grid container>
        <Grid container
            direction="row"
            justifyContent="flex-start"
              alignItems="center"
              onClick={() => setIndex(0)}
              style={{ backgroundColor: !index?"#000000":"#FFFFFF", color: index?"#000000":"#FFFFFF", width: "70%", height: "55px", borderRadius: "0px 100px 100px 0px" }}
        >
          <Grid item xs={1} >
          </Grid>
              <Grid item xs={2} >
            <AssignmentIcon htmlColor={index?"#000000":"#FFFFFF"} fontSize="small"/>
          </Grid>
          <Grid item xs={3}>
            <Typography style={{fontSize:"18px"}}>
              Task
            </Typography>
          </Grid>
        </Grid>

        <Grid container
            direction="row"
            justifyContent="flex-start"
              alignItems="center"
              onClick={() => setIndex(1)}
              style={{backgroundColor: index?"#000000":"#FFFFFF", color: !index?"#000000":"#FFFFFF", width: "70%", height: "55px", borderRadius: "0px 100px 100px 0px", marginTop: "10px" }}
        >
          <Grid item xs={1} >
          </Grid>
              <Grid item xs={2} >
            <LocationOnIcon htmlColor={!index?"#000000":"#FFFFFF"} fontSize="small"/>
          </Grid>
          <Grid item xs={3}>
            <Typography style={{fontSize:"18px"}}>
              Location
            </Typography>
          </Grid>
            </Grid>
          </Grid>
          <Grid container>
          <Grid container
            direction="row"
            justifyContent="flex-start"
              alignItems="center"
              style={{ backgroundColor: "#FFFFFF", color: "#000000", width: "70%", height: "55px", borderRadius: "0px 100px 100px 0px", }}
        >
          <Grid item xs={1} >
          </Grid>
              <Grid item xs={2} >
            <LogoutIcon htmlColor="#000000" fontSize="small" />
          </Grid>
          <Grid item xs={3}>
            <Typography style={{fontSize:"18px", fontWeight: "500"}}>
            Logout
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  );
};