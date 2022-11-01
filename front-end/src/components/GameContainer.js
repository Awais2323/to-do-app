import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { width } from '@mui/system';
import { FaChevronCircleDown } from 'react-icons/fa';
import g1 from './g1.png';


function GameContainer() {
 

  return (
    <Box id="Games" sx={{
      backgroundColor: "#FFFFFF",
      height: '100%',
      pb: {xs:5, sm:8}
    }}>
     
        <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{mt: 8, padding: {xs:'0px 5vw',sm:'0px 7vw',lg:'0px 10vw'}}}
      >
        <Grid xs={12} md={6} >
          <img src={g1} style={{width: '100%', height: '100%'}} />
        </Grid>
        <Grid xs={12} md={6} >
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{padding: {xs:'30px 0px', sm: '60px 0px'} }}
        >
            <Grid item={'auto'}>
          <Typography sx={{ color: '#373737', fontSize: '23px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.4em',
            textTransform: 'uppercase'
          }}>
          Miniverse
          </Typography>
            </Grid>
            <Grid item={'auto'}>
          <Typography sx={{ color: '#373737', fontSize: {xs:'14px', sm: '17px'},fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
                mt: {xs:'30px', sm: '50px'},
                padding: '0px 5vw', textAlign: 'center', maxWidth: '365px'
          }}>
          Jump into your own exclusive miniverse. Welcoming all members to connect and contribute towards the growth of their community.
          </Typography>
            </Grid>
            <Grid item={'auto'} sx={{marginTop: '40px'}}>
          <Button
            sx={{
              color: '#000', fontSize: '12px', textAlign: 'center', fontFamily: 'Inter',
              height: '45px',
              borderRadius: '40px',
              fontStyle: 'normal',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '0px 16px',
                  width: '180px',
                  boxShadow: " 0px 7px 6px grey !important",
                  borderRadius: '40px',
            }}
          >
          LEARN MORE
          </Button>
        </Grid>
          </Grid> 
        </Grid>
        <Grid xs={12} md={6} sx={{display:{xs: 'inherit' ,md: 'none'}}} >
          <img src={g1} style={{width: '100%', height: '100%'}} />
        </Grid>
        <Grid xs={12} sx={{ height:{xs:"20px", md: '40px'}}}></Grid>
        <Grid xs={12} md={6}>
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{padding: {xs:'30px 0px', md:'60px 0px'}}}
          >
            <Grid item={'auto'}>
          <Typography sx={{ color: '#373737', fontSize: '23px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.4em',
            textTransform: 'uppercase'
          }}>
          GAMES
          </Typography>
            </Grid>
            <Grid item={'auto'}>
          <Typography sx={{ color: '#373737', fontSize: {xs:'14px', sm: '17px'},fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
                mt: {xs:'30px', sm: '50px'},
                padding: '0px 5vw', textAlign: 'center', maxWidth: '365px'
          }}>
          The stakes are high and the rewards are big! Four categories of games to choose from, each with its unique thrilling experience. Jump into glass bridge for a chance at the first $5000 grand jackpot.
          </Typography>
            </Grid>
            <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center">
                <Grid xs={12} md={'auto'} sx={{marginTop: {xs:'20px', md:'40px'}}}>
          <Button
            sx={{
              color: '#000', fontSize: '12px', textAlign: 'center', fontFamily: 'Inter',
              height: '45px',
              borderRadius: '40px',
              fontStyle: 'normal',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
                  padding: '0px 16px',
                  width: '180px',
                  boxShadow: '0px 7px 6px grey',
                    borderRadius: '40px'
            }}
          >
          LEARN MORE
                  </Button>
                </Grid>
                <Grid xs={12} md={'auto'} sx={{marginTop: {xs:'20px', md:'40px'}, marginLeft:{ xs: '0px', md: '40px'}}}>
              <Button
              sx={{
              color: '#000', fontSize: '12px', textAlign: 'center', fontFamily: 'Inter',
              height: '45px',
              borderRadius: '40px',
              fontStyle: 'normal',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
                  padding: '0px 16px',
                  width: '180px',
                  boxShadow: '0px 7px 6px grey',
                  borderRadius: '40px'
            }}
          >
          JUMP IN
                </Button>
                </Grid>
        </Grid>
          </Grid> 
        </Grid>
        <Grid xs={12} md={6} sx={{display:{xs: 'none' ,md: 'inherit'}}} >
          <img src={g1} style={{width: '100%', height: '100%'}} />
        </Grid>
      </Grid>
      </Box>
  );
}

export default GameContainer;
