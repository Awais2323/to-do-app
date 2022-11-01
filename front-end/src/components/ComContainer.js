import { Avatar, Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import makeStyles  from '@emotion/styled';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import c1 from './c1.png';
import c2 from './c2.png';
import c3 from './c3.png';
import c4 from './c4.png';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: 'pink',
    color: 'black'
  }
}));

function ComContainer() {
  const classes = useStyles();
  let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";
  let iconStyles = { fontSize: "40px", backgroundColor:'#F9D649', margin: 0, borderRadius:'20px', marginTop: '-20px', border: 'none', cursor: 'pointer'};

  const [open, setOpen] = useState(true);

  const imageContent = [
    {
      img: c1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper accumsan porttitor. Curabitur semper enim vel dignissim congue.'
    },
    {
      img: c2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper accumsan porttitor. Curabitur semper enim vel dignissim congue.'
    },
    {
      img: c3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper accumsan porttitor. Curabitur semper enim vel dignissim congue.'
    },
    {
      img: c4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper accumsan porttitor. Curabitur semper enim vel dignissim congue.'
    }
  ]

  return (
    <Box id="Community" sx={{
      backgroundColor: "#000000",
      height: '100%',
    background: !open ? '#FFF' : '-moz-linear-gradient(top, #F9D649 50%, #F6F6F6 50%)',
    background: !open ? '#FFF' :'-webkit-linear-gradient(top, #F9D649 50%,#F6F6F6 50%)',
    background: !open ? '#FFF' : 'linear-gradient(to bottom, #F9D649 50%,#F6F6F6 50%)',
    }} >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar style={iconStyles} onClick={() => setOpen(!open)}>
        {open ? <ExpandMoreIcon htmlColor='black' fontSize='x-large' fontWeight="700" />:
          <ExpandLessIcon htmlColor='black' fontSize='x-large' fontWeight="700" />}
        </Avatar>
      </Grid>
      {open &&
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: '40px 10vw' }}
        >
          <Grid item={'auto'}>
            <Typography sx={{
              color: '#000', fontSize: '25px', fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 700,
              letterSpacing: '0.5em',
              textTransform: 'uppercase'
            }}>
              Community driven platform
            </Typography>
          </Grid>
          <Grid item={'auto'}>
            <Typography sx={{
              color: '#000', fontSize: '18px', marginTop: '30px', fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '27px',
              textAlign: 'center',
              width: '60vw'
            }}>
              Lead by your most favourite celebrities, artists and influencers, join one that you fit in best with and enjoy the perks of being in a community within the Meta Fushko gaming arena.
            </Typography>
          </Grid>
          <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 3 }}
          >
            {imageContent.map((value) =>
              <Grid xs={12} md={6} lg={3} alignItems="center" sx={{ mb: 2 }}>
                <img src={value.img} />
                <br />
                <Typography style={{
                  padding: '10px 50px',
                  color: '#373737', fontSize: '12px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  textAlign: 'left',
                  maxWidth: '225px',
                  margin: 'auto'
                }}>
                  {value.text}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      }
      </Box>
  );
}

export default ComContainer;
