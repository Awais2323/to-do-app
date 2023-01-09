import { Checkbox,  Grid, Typography } from "@mui/material";
import "./style.css";
export const LocationComp = ({location, conds, flag}) => {
  return (
    flag &&
    <Grid container spacing={1} className="text">
    <Grid item>
    <Typography sx={{ color: "#B9B9BE" }} >
      📍 
      </Typography>
    </Grid>

    <Grid item>
      <Typography sx={{color: "#575767", fontSize: '18px', fontWeight: "500"}}>
      {location}
      </Typography>
        
          <Typography sx={{ color: "#B9B9BE" }} >
            {conds}
          </Typography>
    </Grid>
  </Grid>
  );
};
