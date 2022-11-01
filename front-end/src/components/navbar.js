import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Grid } from '@mui/material';
import logo from './logo.png';
import { Image } from '@mui/icons-material';

const pages = ['About', 'Community', 'Games', 'Marketplace'];
const settings = ['Team', 'Whitepaper', 'Support'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" style={{paddingLeft: '3vw', backgroundColor: 'transparent', boxShadow:'none'}}>
      <Container  style={{ maxWidth: '94vw', margin:'20px 0px 0px', backgroundColor: '#000000',opacity: '0.9', borderRadius: '35px', border:'1px solid #FFFFFF'}}  >
        <Toolbar disableGutters>
          <Box component={'span'} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} onClick={()=>
          {
            window.location.href = "/";
            console.log("move to top");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            
          }}>
            <img src={logo} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: 'block', md: 'none',
                  "& .MuiPaper-root": {
                    backgroundColor: "#000",
                  }
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{}} >
                  <Button href={`#${page}`} textAlign="center" sx={{ color: '#FFF' }} className="nav-btn" >{page}</Button>
                </MenuItem>
              ))}
              <MenuItem  onClick={handleCloseNavMenu}  >
              <Button
                // onClick={handleCloseNavMenu}
                  sx={{ color: '#F9D649', display: 'block', }}
                  className="nav-btn"
              >
                Jump in
                </Button>
              </MenuItem>
              <MenuItem  onClick={handleCloseNavMenu}  >
              <Button
                // onClick={handleCloseNavMenu}
                  sx={{ color: '#F9D649', display: 'block' }}
                  className="nav-btn"
              >
               Sign Up
              </Button>
              </MenuItem>
              
            </Menu>
          </Box>
          <Box component={'span'} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          onClick={()=>
            {
              window.location.href = "/";
              console.log("move to top");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              
            }}
          >
          
          <img src={logo}  />
          </Box>
          <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, paddingRight: '5vw' }}>
            <Grid xs={8} >
            <Grid container
              direction="row"
              justifyContent="flex-start"
              alignItems="center" sx={{ paddingLeft: {lg:'5vw'} }}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{
                  my: 2, px: { md: '1vw', lg: '2vw' }, color: 'white', display: 'block', fontFamily: 'Inter',
                }}
                className="nav-btn"
                href={`#${page}`}
              >
                {page}
              </Button>
            ))}
            </Grid>
            </Grid>
            <Grid xs={'auto'} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center">
              <Button
                // onClick={handleCloseNavMenu}
                  sx={{ color: '#F9D649', display: 'block', }}
                  className="nav-btn"
              >
                Jump in
                </Button>
                <Box sx={{ width: {lg:'20px'}}}></Box>
              <Button
                // onClick={handleCloseNavMenu}
                className="nav-btn"
                sx={{ color: '#F9D649', display: 'block' }}
              >
               Sign Up
              </Button>
          
              </Grid>
              </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
