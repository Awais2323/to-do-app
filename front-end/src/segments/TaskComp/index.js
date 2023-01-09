import { Checkbox,  Grid, Typography } from "@mui/material";
import { axiosClient } from "../../config";
import "./style.css";
import moment from "moment";
export const TaskComp = ({ task, text, time, flag, setUpdate   }) => {
  
  const updateTask= (event) => {
    event.preventDefault()
    
    try {
        axiosClient
            .post('task/update', {
              ...task, flag: true
            })
            .then((response) => {
              if (response.status === 200) {
                setUpdate(response.data.data)
                } else {
                    
                }
            })
    } catch (err) {
    }
  }

  return (
    <Grid container spacing={1} className="text">
    <Grid item>
      <Checkbox color="default" checked={flag} onClick={updateTask}  sx={{
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
            ⏰ {moment(time).format("YYYY-MM-DD HH:mm")}
          </Typography>
        }
    </Grid>
  </Grid>
  );
};
