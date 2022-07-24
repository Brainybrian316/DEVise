import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { useLoginMutation } from '../../hooks/Mutations';
import { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import {  FormGroup, InputLabel, Input, FormHelperText } from '@mui/material';


export default function Login() {


  const { login } = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const userLoggedIn = await login({ variables: { email, password } });
    if(userLoggedIn) {
      alert('You are logged in');
      console.log(userLoggedIn);
    }
    } catch (error) {
      alert('invalid email or password');
      console.log(error);
    }
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3f51b5',
      },
    }
    });

    const inputTheme = createTheme({
      palette: {
        primary: 
        {
          main: '#FFFFFF',
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
          Log In Account
        </Typography>

          {/* LOGIN form  */}

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}>
             <ThemeProvider theme={inputTheme}>
            <FormGroup>

  <InputLabel htmlFor="email">Email address:</InputLabel>
  <Input id="email" 
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  type="email"
  required
  aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">youremail@yourdomain.com</FormHelperText>

  <InputLabel htmlFor="password">Password:</InputLabel>
  <Input id="password" 
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  type="password"
  required
  aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">At least 8 characters and one number</FormHelperText>

</FormGroup>
</ThemeProvider>

      </Box>
              
          <Box sx={{
            display: 'flex',
            alignItems: 'right',
            justifyContent: 'flex-end',
          }}>
        <ThemeProvider theme={theme}>
      <Button 
      id="form-btn"
      onClick={handleSubmit}>Log In</Button>
      </ThemeProvider>

          </Box>
          
      </Box>
      </Container>
    </div>
  )
}