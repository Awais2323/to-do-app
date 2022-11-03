import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 765,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Model = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              New Task
            </Typography>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={10}>
                <TextField
                  id="standard-basic"
                  fullWidth
                  label="Summary"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  fullWidth
                  label="Description"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  fullWidth
                  label="Due Date"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};