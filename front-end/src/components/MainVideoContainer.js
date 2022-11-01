import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import bg1 from './bg1.png';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player'


function MainVideoContainer() {
  return (
    <Box id="About" sx={{
        backgroundColor: "#000000",
    }} >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{padding: '65px 0px 86px'}}
      >
        <Grid item={12}>
          <Typography sx={{ color: '#FFF', fontSize: {xs: '32px', md: '34px'},fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}>
          MetaFushko
          </Typography>
        </Grid>
        <Grid >
          <Box sx={{ width: { xs: '75vw', md: '60vw' }, height: { xs: '100%', md: '100%' }, marginTop: '45px', borderRadius: '50px !important' }}>
          <div>
          <div className='player-wrapper'>
          <ReactPlayer
                  //url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
                  url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            className='react-player'
            controls
            width='100%'
            height='100%'
          />
          </div>
          </div>
        </Box>
        </Grid>
        <Grid item={12}>
          <Typography component={'p'} sx={{ color: '#FFF', fontSize: {xs: '18px', md: '23px'}, marginTop: {xs:'30px',md:'50px'}, fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '27px',
            textAlign: 'center',
            width:{xs: '75vw', md: '60vw'}
          }}>
          Bringing out of this world experiences to thrill seekers. The Meta Fushko Arena bends the laws of reality in an all encompassing immersive gaming experience.
          </Typography>
        </Grid>
        <Grid item={'auto'} sx={{marginTop: '40px'}}>
          <Button
            sx={{
              color: '#000', fontSize: '12px', textAlign: 'center', fontFamily: 'Inter',
              height: '45px',
              background:' #F9D649',
              borderRadius: '40px',
              fontStyle: 'normal',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '0px 16px',
              boxShadow: '0px 7px 6px 0px #FFFFFF33',
              ':hover': {
                background:' #F9D649',
              }
              
            }}
          >
          Explore metaverse
          </Button>
        </Grid>
        </Grid>
      </Box>
  );
}

export default MainVideoContainer;
