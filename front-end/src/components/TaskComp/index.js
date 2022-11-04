import { Checkbox,  Grid, Typography } from "@mui/material";
import "./style.css";
export const TaskComp = ({text, time, flag}) => {
  return (
    <Grid container spacing={1} className="text">
    <Grid item>
      <Checkbox color="default" checked={flag}  sx={{
          color: "#DADADA",
          fontSize: "24px",
          }} />
    </Grid>

    <Grid item>
      <Typography sx={{color: flag?"#B9B9BE":"#575767", fontSize: '18px', fontWeight: "500"}}>
      {text}
      </Typography>
        {!flag &&
          <Typography sx={{ color: "#B9B9BE" }} >
            ⏰ {time}
          </Typography>
        }
    </Grid>
  </Grid>
  );
};
