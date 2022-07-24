

import './signup.css';
import { Container, Box, Typography } from '@mui/material';
import CreateAcctInput from './CreateInput';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { useCreateUserMutation } from '../../hooks/Mutations';
import { useState } from 'react';


export default function Signup(props) {
 
  

  const theme = createTheme({
    palette: {
      primary: {
        main: '#3f51b5',
      },
      
    }
    });
  return (
    <div>
      <Container maxWidth="sm">
      <Box sx={{ 
        bgcolor: '#cfe8fc', 
        height: 'auto',
        borderRadius: '10px',
        padding: '2rem',
         }}>

        <Typography variant="h4" sx={{
          textAlign: 'start',
          fontWeight: 'bold',
          color: '#3f51b5',
          fontSize: '2rem',
          marginBottom: '2rem',
        }}>
          Create Account
        </Typography>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}>
      <CreateAcctInput/>
      </Box>

        <Box sx={{
          display: 'flex',
          alignItems: 'right',
          justifyContent: 'flex-end',
        }}>
      <ThemeProvider theme={theme}>
      <Button 
      id="form-btn"
      onClick={() => {alert('clicked');
    }} variant="contained">Create Account</Button>
      </ThemeProvider>
      </Box>

      </Box>
      </Container>
    </div>
  );
}