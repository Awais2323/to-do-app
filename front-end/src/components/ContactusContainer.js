import { Box, Button, ButtonGroup, Grid, InputBase, TextField, Typography, withStyles } from '@mui/material';
import { width } from '@mui/system';
import { FaChevronCircleDown } from 'react-icons/fa';
import m1 from './m1.png';
import m2 from './m2.png';
import makeStyles from '@emotion/styled';
import twitter from './twitter 1.png';
import discord from './discord 1.png';
import instagram from './instagram 1.png';
import email from './email 1.png';
import logo from './logo.png';



const useStyles = makeStyles({
  input: {
    color: '#F9D649',
    fontSize: '24px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: '0.5em',
    textTransform: 'uppercase',
    textAlign: 'left',
  },
});

// const BootstrapInput = withStyles((theme) =>
//   createStyles({
//     input: {
//       borderRadius: 6,
//       border: '1px solid #FFF',
//       backgroundColor: "transparent",
//       color: 'red',
//       fontSize: 16,
//       padding: '10px 12px',
//       '&:focus': {
//         borderColor: 'none',
//       },
//     },
//   }),
// )(InputBase);

function ContactusContainer() {
  const classes = useStyles();
  
  let iconStyles = { fontSize: "40px", color:'#FFFFFF', margin: 0, backgroundColor: 'black', borderRadius:'50px', marginTop: '-20px'};
  return (
    <Box sx={{
      backgroundColor: "#000000",
      height: '100%',
    }}>
     <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{height: '18px', background: 'linear-gradient(270deg, #F9D649 -30.87%, #915700 100%)'}}
      >

      </Grid>
        <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{mt: 7, padding: '0px'}}
      >
        <Grid xs={'12'} >
        <Typography sx={{ color: '#F9D649', fontSize: '25px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: {xs:'0.2em' ,md:'0.5em'},
            textTransform: 'uppercase'
          }}>
         Contact US
          </Typography>
        </Grid>
        <Grid container
        direction="row"
        justifyContent="start"
        alignItems="start"
        sx={{mt: {xs:3 ,md:7}, padding: '0px 10vw'}}
        >
        <Grid xs={12} md={6} >
        <Typography sx={{ color: '#F9D649', fontSize: '24px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: {xs:'0.2em' ,md:'0.5em'},
              textTransform: 'uppercase',
            textAlign: {xs:'center' ,md:'left'},
          }}>
         Join the <br />
          fushkonation
            </Typography>
            <Typography sx={{ color: '#FFFFFF', fontSize: '11px',fontFamily: 'Inter',
            fontStyle: 'normal',
              fontWeight: 700,
              textAlign: { xs: 'center', md: 'left' },
              mt: { xs: 1, md: 1 },
              mb: {xs:3 ,md:'none'}
          }}>
        Keep up to date with the latest releases and be the first to get exclusive offers
          </Typography>
          </Grid>
          <Grid xs={12} md={6} >
          <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          >
            <Grid xs={12}>
            <Typography sx={{ color: '#F9D649', fontSize: '18px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
              textTransform: 'uppercase',
            textAlign: 'left',
            }}>
            email address
            </Typography>
            </Grid> 
              <Grid xs={12} md={6}>
                <input
                  placeholder='Enter your email'
                  style={{
                  backgroundColor: '#000000',
                  borderRadius: '6px',
                  border: '2px solid #FFFFFF',
                  color: '#F9D649',
                  fontWeight: 700,
                  outline: 'none',
                  height: '37px',
                  width: '100%',
                  marginTop: 1,
                  padding: '0px 10px'
                }} />
                {/* <TextField
                  placeholder='Enter your email'
                  style={{
                  backgroundColor: '#000000',
                  borderRadius: '6px',
                  border: '2px solid #FFFFFF',
                  color: 'red',
                  fontWeight: 700,
                  outline: 'none',
                  height: '37px',
                  width: '100%',
                  mt: 1,
                  '&:focus': {
                    borderColor: 'none',
                    },
                    input: {
                            borderRadius: 6,
                            border: '1px solid #FFF',
                            backgroundColor: "transparent",
                            color: 'red !important',
                            fontSize: 16,
                            padding: '10px 12px',
                            '&:focus': {
                              borderColor: 'none',
                            },
                    },
              }}
              /> */}
             </Grid>
             <Grid xs={12} md={'auto'}>
            <Button
            sx={{
              color: '#FFFF', fontSize: '12px', textAlign: 'center', fontFamily: 'Inter',
              borderRadius: '40px',
              fontStyle: 'normal',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '10px 25px',
              borderRadius: '40px',
              backgroundColor: '#000000',
              border: '1px solid #F9D649',
                    marginLeft: { xs: '0px', md: '50px' },
                    marginTop: {xs:'20px' ,md:'0px'},
              
            }}
          >
          SUBSCRIBE
                </Button>
              </Grid>
              </Grid>
          </Grid>
        </Grid>
        <Grid
        container
        direction="row"
        justifyContent="center"
          alignItems="center"
          sx={{mt: {xs:4 ,md:8},mb: {xs:5 ,md:10}}}
        >
          <Grid xs={2} md={1}>
            <img src={email} />
            </Grid>
            <Grid xs={2} md={1}>
          <img src={twitter} />
          </Grid>
          <Grid xs={2} md={1}>
        <img src={instagram} />
        </Grid>
        <Grid xs={2} md={1}>
      <img src={discord} />
      </Grid>
        </Grid>
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
          <Typography sx={{ color: '#F9D649', fontSize: '25px',fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.5em',
            textTransform: 'uppercase'
          }}>
         Contact US
          </Typography>
        </Grid>
        <Grid
        container
        direction="row"
        justifyContent="center"
          alignItems="center"
          sx={{mt: {xs:4 ,md:8},mb: 5, padding:'0px 10vw'}}
        >
          <Typography sx={{ color: '#FFFFFF', fontSize: '14px',fontFamily: 'Inter',
            fontStyle: 'normal',
              fontWeight: 700,
          }}>
        Get Assistance with product, account or payment related issues. Our support team will try to help you.
          </Typography>
        </Grid>
        <Grid
        container
        direction="row"
        justifyContent="center"
          alignItems="center"
        >
        <Button
            sx={{
              color: '#FFFF', fontSize: '12px', textAlign: 'center', fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '12px 25px',
              borderRadius: '10px',
              backgroundColor: '#000000',
              border: '1px solid #F9D649',
              
              
            }}
          >
          Get in touch
          </Button>
        </Grid>
        <Grid
        container
        direction="row"
        justifyContent="center"
          alignItems="center"
          sx={{mt: {xs:4 ,md:7},mb: {xs:10 ,md:25}}}
        >
          <img src={logo}
            style={{cursor: 'pointer'}}
            onClick={() => {
            window.location.href = "/";
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}  />
        </Grid>
        </Grid>
      
      </Box>
  );
}



export default ContactusContainer;
