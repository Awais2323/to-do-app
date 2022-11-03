import { Checkbox,  Grid, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./style.css";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
export const Task = () => {
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} className="grid-margin">
        <Grid container>
          <Grid item xs={3} className="icon">
            <AssignmentIcon></AssignmentIcon>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h7" component="h4">
              Task
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={3} className="icon">
            <LocationOnIcon color="primary"></LocationOnIcon>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h7" component="h4">
              Location
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9} className="grid-margin">
        <Typography variant="h7" component="h4" >
          + Add new task
        </Typography>
       
        <br />
        <Typography variant="h7" component="h4">
          Incomplete
        </Typography>

        <Grid container spacing={1} className="text">
          <Grid item>
            <Checkbox name="gilad" />
          </Grid>

          <Grid item>
            <Typography variant="h7" component="h4">
              Incomplete
            </Typography>
            <Typography variant="p" component="p">
              <AccessAlarmsIcon color="error" fontSize="12"></AccessAlarmsIcon>
              remaining
            </Typography>
          </Grid>
        </Grid>

        <br />
        <br />
        <Typography variant="h7" component="h4">
          Completed
        </Typography>

        <Grid container spacing={1} className="text">
          <Grid item>
            <Checkbox checked name="gilad" />
          </Grid>

          <Grid item>
            <Typography variant="h7" component="h4" color={"#C0C0C0"}>
              Incomplete
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
