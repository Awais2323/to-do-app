import { Box, Button, Checkbox,  Grid, Input, InputAdornment, Modal, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LogoutIcon from '@mui/icons-material/Logout';
import "./style.css";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import { useState } from "react";
import { Sidebar } from "../sidebar/index";
import { TaskComp } from "../TaskComp";
import { LocationComp } from "../LocationComp";
import SubjectIcon from '@mui/icons-material/Subject';
import ChatIcon from '@mui/icons-material/Chat';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const Task = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    boxShadow: 24,
    p: '40px',
    background: "#FFFFFF",
    boxShadow: '0px 2px 20px rgba(38, 36, 131, 0.25)',
    borderRadius: '8px'
  };
  
  return (
    <Grid container
    direction="row"
    justifyContent="center"
    alignItems="center">
      <Grid item xs={3}>
        <Sidebar index={index} setIndex={setIndex} />
      </Grid>
      { index ?
        <Grid item xs={6}>
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            height={"100vh"}
            style={{
              padding: "42px 0px"
            }}
          >
          <Grid item xs={"auto"}>
          <Typography variant="h7" component="h4" >
          + Check In
          </Typography>
          </Grid>
          <Grid item xs={"auto"} sx={{marginTop: "30px"}}>
          <Typography variant="h7" component="h4">
          Current location
          </Typography>
          </Grid>
          <LocationComp flag={true} location="Pustegränd, Stockholm, SE" conds="59.3293° N, 18.0686° E" />
            <Grid item xs={"auto"} sx={{ marginTop: "30px" }}>
            <Typography variant="h7" component="h4">
            Previous location
            </Typography>
            </Grid>
            <LocationComp flag={true} location="Pustegränd, Stockholm, SE" conds="59.3293° N, 18.0686° E" />
        </Grid>
        </Grid>
        :
        <Grid item xs={6}>
      <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          height={"100vh"}
          style={{
            padding: "42px 0px"
          }}
        >
        <Grid item xs={"auto"}>
        <Typography variant="h7" component="h4" onClick={() => setOpen(true)} >
          + Add new task
        </Typography>
        </Grid>
        <Grid item xs={"auto"} sx={{marginTop: "30px"}}>
        <Typography variant="h7" component="h4">
          Incomplete
        </Typography>
        </Grid>
          <TaskComp flag={false} text="text" time="Today, 17.00" />
          <TaskComp flag={false} text="text" time="Today, 17.00" />
          <Grid item xs={"auto"} sx={{ marginTop: "30px" }}>
          <Typography variant="h7" component="h4">
          Complete
          </Typography>
          </Grid>
          <TaskComp flag={true} text="text" time="Today, 17.00" />
      </Grid>
      </Grid>
      }
      <Grid xs={3} >
      </Grid>
      <Modal
  open={open}
  onClose={() =>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" sx={{fontSize: "20px", fontWeight: '600', color: "#000"}}>
    New Task
    </Typography>
    <Box sx={{padding: "30px 40px"}}>
    <Input
            id="standard-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            sx={{ padding: "10px 30px", width: "100%", marginBottom: '30px'}}
            startAdornment={<InputAdornment position="start"><ChatIcon fontSize="large"/></InputAdornment>}
            />
        <Input
            id="standard-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            sx={{ padding: "10px 30px", width: "100%", marginBottom: '30px'}}
            startAdornment={<InputAdornment position="start"><SubjectIcon fontSize="large"/></InputAdornment>}
            />  
        <Input
            id="standard-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            sx={{ padding: "10px 30px", width: "100%",}}
            startAdornment={<InputAdornment position="start"><AccessTimeIcon fontSize="large"/></InputAdornment>}
        />      
          </Box>
          <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
          <Grid item xs="auto" >
          <Button variant="contained" style={{backgroundColor: "#00000 !important",width: "345px", fontSize: "18px", color: "#FFFFFF", textTransform: "none", borderRadius: "100px"}} >
            Save
          </Button>
            </Grid>
          </Grid>
  </Box>
</Modal>
    </Grid>
  );
};
