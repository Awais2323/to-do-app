import { Avatar, Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { width } from '@mui/system';
import { FaChevronCircleDown } from 'react-icons/fa';
import m1 from './m1.png';
import m2 from './m2.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import makeStyles  from '@emotion/styled';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: 'pink',
    color: 'black'
  }
}));

function MarketContainer() {

  const [open, setOpen] = useState(true);
 
  let iconStyles = { fontSize: "40px", color:'#FFFFFF', margin: 0, backgroundColor: '#ffffff', borderRadius:'50px', marginTop: '-20px', cursor: 'pointer'};
  return (
    <Box id="Marketplace" sx={{
      backgroundColor: "#000000",
      height: '100%',
    }}>
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
        <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{mt: 7, padding: {xs:'0px 5vw',sm:'0px 7vw',lg:'0px 10vw'}}}
      >
        <Grid xs={12} md={6} sx={{padding: {xs:'0px 3vw'}}} >
          <img src={m1} style={{width: '100%', height: '100%'}} />
        </Grid>
        <Grid xs={12} md={6} sx={{padding: {xs:'0px 3vw'}}}>
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
          sx={{padding: {xs:'40px 0px', sm: '60px 0px'} }}
        >
            <Grid item={'auto'}>
          <Typography sx={{ color: '#F9D649', fontSize: '23px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.4em',
            textTransform: 'uppercase'
          }}>
          Marketplace
          </Typography>
            </Grid>
            <Grid item={'auto'}>
          <Typography sx={{ color: '#FFFFFF', fontSize: {xs:'14px', sm: '17px'},fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
                mt: '50px',
                padding: '0px 5vw',  textAlign: 'center', maxWidth: '365px'
          }}>
          Discover Collections, get upgrades or browse for special edition collectibles created by the leading artists of our time.
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
                  boxShadow: '0px 7px 6px rgba(255, 255, 255, 0.2)',
                  borderRadius: '40px',
                  backgroundColor: '#F9D649',
                  "&:hover": {
                    backgroundColor: "#F9D649",
                    cursor: "default"
                  }
            }}
          >
          LEARN MORE
          </Button>
        </Grid>
          </Grid> 
        </Grid>
        <Grid xs={12} md={6}  sx={{display:{xs: 'inherit' ,md: 'none', padding: {xs:'0px 3vw'}}}} >
          <img src={m2} style={{width: '100%', height: '100%'}} />
        </Grid>
        <Grid xs={12} sx={{ height:{xs:"20px", md: '40px'}}}></Grid>
        <Grid xs={12} md={6} sx={{padding: {xs:'0px 3vw'}}}>
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{padding: '60px 0px'}}
        >
            <Grid item={'auto'}>
          <Typography sx={{ color: '#F9D649', fontSize: '23px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.4em',
            textTransform: 'uppercase'
          }}>
          Ecosystem
          </Typography>
            </Grid>
            <Grid item={'auto'}>
          <Typography sx={{ color: '#FFFFFF', fontSize: {xs:'14px', sm: '17px'},fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
                mt: '50px',
                padding: '0px 5vw', textAlign: 'center', maxWidth: '365px'
                
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper accumsan porttitor. Curabitur semper enim vel dignissim congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper accumsan porttitor. Curabitur semper enim vel dignissim congue. 

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
                  boxShadow: '0px 7px 6px rgba(255, 255, 255, 0.2)',
                  borderRadius: '40px',
                  backgroundColor: '#F9D649',
                  "&:hover": {
                    backgroundColor: "#F9D649",
                    cursor: "default"
                  }
            }}
          >
          LEARN MORE
              </Button>
        </Grid>
          </Grid> 
        </Grid>
        <Grid xs={12} md={6} sx={{ display: { xs: 'none', md: 'inherit' }, padding: {xs:'0px 3vw'}}} >
          <img src={m2} style={{width: '100%', height: '100%'}} />
        </Grid>
      </Grid>
}
      </Box>
  );
}

export default MarketContainer;
