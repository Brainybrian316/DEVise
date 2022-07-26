import * as React from 'react';
import './navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SignupBtn from './ui/SignupBtn';
import LoginBtn from './ui/LoginBtn';
import { Link } from 'react-router-dom';

// *************variables*****************
const pages = ['IdeaBin', 'UserProjects', 'membership', 'About', 'Contact',];
const settings = ['Profile', 'Logout'];


export default function NavBar() {
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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box
            id="logo"
            component="img"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            alt="DEVise logo"
            src='https://i.postimg.cc/ThFt1dmY/DEVise-D-Logo-Ver1-0.png'
        />

          {/* <Link to="/"
            style={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 'bold',
              }}
          > */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DEVISE
          </Typography>
          {/* </Link> */}

          
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                  <Link style={{textDecoration: "none", color: "black"}}
                     to={`/${page}`}>{page}</Link>
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            id="logo"
            component="img"
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            alt="DEVise logo"
            src='https://i.postimg.cc/ThFt1dmY/DEVise-D-Logo-Ver1-0.png'
        />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DEVISE
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Link style={{textDecoration: "none", color: "white"}}
               to={`/${page}`}>
                {page}
                </Link>
              </Button>
            ))}
          </Box>

            {localStorage.getItem('token') ? (
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    <Button
      onClick={handleCloseNavMenu}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      <Link style={{textDecoration: "none", color: "white"}}
      to="/Profile">
        Profile
      </Link>
    </Button>
    <Button
      onClick={handleCloseNavMenu}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      <Link style={{textDecoration: "none", color: "white"}}
      onClick= {() => {
        localStorage.removeItem('token');
        window.location.href = '/';
      }
      }
      to="/Logout">
        Logout
      </Link>
    </Button>
  </Box>
            ) : (
          <Box sx={{ flexGrow: 0, }}>
            <LoginBtn  />
            <SignupBtn />
            <Menu
              sx={{ mt: '45px', }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            )}


              



          
      
        </Toolbar>
      </Container>
    </AppBar>
  );
};

// {localStorage.getItem('token') ? (
//   <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//     <Button
//       onClick={handleCloseNavMenu}
//       sx={{ my: 2, color: 'white', display: 'block' }}
//     >
//       <Link style={{textDecoration: "none", color: "white"}}
//       to="/Profile">
//         Profile
//       </Link>
//     </Button>
//     <Button
//       onClick={handleCloseNavMenu}
//       sx={{ my: 2, color: 'white', display: 'block' }}
//     >
//       <Link style={{textDecoration: "none", color: "white"}}
//       to="/Logout">
//         Logout
//       </Link>
//     </Button>
//   </Box>
// ) : (
//   <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//     <Button
//       onClick={handleCloseNavMenu}
//       sx={{ my: 2, color: 'white', display: 'block' }}
//     >
//       <Link style={{textDecoration: "none", color: "white"}}
//       to="/Signup">
//         Signup
//       </Link>
//     </Button>
//     <Button
//       onClick={handleCloseNavMenu}
//       sx={{ my: 2, color: 'white', display: 'block' }}
//     >
//       <Link style={{textDecoration: "none", color: "white"}}
//       to="/Login">
//         Login
//       </Link>
//     </Button>
//   </Box>
// )}