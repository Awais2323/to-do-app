import { Box, Button, Checkbox,  Grid, Input, InputAdornment, Modal, TextField, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LogoutIcon from '@mui/icons-material/Logout';
import "./style.css";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import { useEffect, useState } from "react";
import { Sidebar } from "../sidebar/index";
import { TaskComp } from "../TaskComp";
import { LocationComp } from "../LocationComp";
import SubjectIcon from '@mui/icons-material/Subject';
import ChatIcon from '@mui/icons-material/Chat';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { axiosClient } from "../../config";
import PlaceIcon from '@mui/icons-material/Place';
import PushPinIcon from '@mui/icons-material/PushPin';
import moment from "moment";

export const Task = ({setToken}) => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [date, setDate] = useState('2022-08-18T21:11:54');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [conds, setConds] = useState('');
  const user = JSON.parse(localStorage.getItem('user'))
  const [taskList, setTaskList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [update, setUpdate] = useState(null);

  const handleChange = (newValue) => {
    setDate(newValue);
  };

  const submitTaskForm = (event) => {
    event.preventDefault()
    try {
        axiosClient
            .post('task/create', {
              summary: summary,
            description : description,
            date : new Date(date.$d).toISOString(),
            flag: false,
            userId: user.id
            })
            .then((response) => {
              if (response.status === 200) {
                setOpen(false)
                  getAllTask()
                } else {
                  console.log("submit")
                }
            })
    } catch (err) {
      console.log("submit")
    }
  }

  const submitLocationForm = (event) => {
    event.preventDefault()
    try {
        axiosClient
            .post('location/create', {
              location: location,
            conds: conds,
            userId: user.id
            })
            .then((response) => {
              if (response.status === 200) {
                setOpen(false)
                  getAllLocation()
                } else {
                  console.log("submit")
                }
            })
    } catch (err) {
      console.log("submit")
    }
  }

  const getAllTask = () => {
    try {
        axiosClient.get(`task/get-all?userId=${user.id}`).then((response) => {
            if (response.status === 200) {
              const res = response.data.data
              if(res)
                setTaskList(res)
            } else {
            }
        })
    } catch (err) {
    }
  }

  const getAllLocation = () => {
    try {
        axiosClient.get(`location/get-all?userId=${user.id}`).then((response) => {
            if (response.status === 200) {
                const res = response.data.data
              setLocationList(res)
            } else {
            }
        })
    } catch (err) {
    }
  }

  useEffect(() => {
    getAllTask()
    getAllLocation()
  }, [])

  useEffect(() => {
    getAllTask()
    getAllLocation()
  }, [update])

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
        <Sidebar index={index} setIndex={setIndex} setToken={setToken} />
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
          <Typography variant="h7" component="h4" sx={{cursor: "pointer"}} onClick={() => setOpen1(true)} >
          + Check In
          </Typography>
          </Grid>
          <Grid item xs={"auto"} sx={{marginTop: "30px"}}>
          <Typography variant="h7" component="h4">
          Current location
          </Typography>
            </Grid>
            {locationList.reverse().filter((l,i) => i===0 ).map((l) =>
              <LocationComp flag={true} location={l.location} conds={l.conds} />
            )}
            <Grid item xs={"auto"} sx={{ marginTop: "30px" }}>
            <Typography variant="h7" component="h4">
            Previous location
            </Typography>
            </Grid>
            {locationList.reverse().filter((l,i) => i!=0 ).map((l) =>
              <LocationComp flag={true} location={l.location} conds={l.conds} />
            )}
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
        <Typography variant="h7" component="h4" sx={{cursor: "pointer"}} onClick={() => setOpen(true)} >
          + Add new task
        </Typography>
        </Grid>
        <Grid item xs={"auto"} sx={{marginTop: "30px"}}>
        <Typography variant="h7" component="h4">
          Incomplete
        </Typography>
            </Grid>
            {taskList.filter((task) => !task.flag).map((task) =>
              <TaskComp task={task}  flag={task.flag} text={task.summary} time={task.date} setUpdate={setUpdate}  />)
            }
          <Grid item xs={"auto"} sx={{ marginTop: "30px" }}>
          <Typography variant="h7" component="h4">
          Complete
          </Typography>
          </Grid>
          {taskList.filter((task) => task.flag).map((task) =>
              <TaskComp task={task} flag={task.flag} text={task.summary} time={task.date} setUpdate={setUpdate}  />)
          }
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
            value={summary}
            onChange={(e) =>setSummary(e.target.value)}
            sx={{ padding: "10px 30px", width: "100%", marginBottom: '30px'}}
            startAdornment={<InputAdornment position="start"><ChatIcon fontSize="medium"/></InputAdornment>}
            />
        <Input
            id="standard-adornment-amount"
            value={description}
            onChange={(e) =>setDescription(e.target.value)}
            sx={{ padding: "10px 30px", width: "100%", marginBottom: '30px'}}
            startAdornment={<InputAdornment position="start"><SubjectIcon fontSize="medium"/></InputAdornment>}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
          value={date}
          onChange={handleChange}
                startAdornment={<InputAdornment position="start"><AccessTimeIcon fontSize="medium" /></InputAdornment>}
                sx={{ padding: "10px 30px" }}
          renderInput={(params) => <TextField variant="standard" {...params}  sx={{ width: "100%",}} />}
        />
          </LocalizationProvider>     
          </Box>
          <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
          <Grid item xs="auto" >
              <Button variant="contained"
                onClick={submitTaskForm}
                style={{
            backgroundColor: "#000000",
            fontSize: "18px",
            alignItems: "center",
            width: "345px",
            textTransform: "none", borderRadius: "100px"
        }} >
            Save
          </Button>
            </Grid>
          </Grid>
  </Box>
      </Modal>
      <Modal
  open={open1}
  onClose={() =>setOpen1(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" sx={{fontSize: "20px", fontWeight: '600', color: "#000"}}>
    New Location
    </Typography>
    <Box sx={{padding: "30px 40px"}}>
    <Input
            id="standard-adornment-amount"
            value={location}
            onChange={(e) =>setLocation(e.target.value)}
            sx={{ padding: "10px 30px", width: "100%", marginBottom: '30px'}}
            startAdornment={<InputAdornment position="start"><PlaceIcon fontSize="medium"/></InputAdornment>}
            />
        <Input
            id="standard-adornment-amount"
            value={conds}
            onChange={(e) =>setConds(e.target.value)}
            sx={{ padding: "10px 30px", width: "100%", marginBottom: '30px'}}
            startAdornment={<InputAdornment position="start"><PushPinIcon fontSize="medium"/></InputAdornment>}
            />    
          </Box>
          <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
          <Grid item xs="auto" >
              <Button variant="contained"
                onClick={submitLocationForm}
                style={{
            backgroundColor: "#000000",
            fontSize: "18px",
            alignItems: "center",
            width: "345px",
            textTransform: "none", borderRadius: "100px"
        }} >
            Save
          </Button>
            </Grid>
          </Grid>
  </Box>
  </Modal>
    </Grid>
  );
};
