import Button from '@mui/material/Button';
import { useLoginMutation } from '../../hooks/Mutations';
import { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

export default function Login() {
  const { login } = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userLoggedIn = await login({ variables: { email, password } });
      if (userLoggedIn) {
        alert('You are logged in');
        console.log(userLoggedIn);
      }
    } catch (error) {
      alert('invalid email or password');
      console.log(error);
    }
  };


  return (
    <div>
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: '#cfe8fc',
            height: 'auto',
            borderRadius: '10px',
            padding: '2rem',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: 'start',
              fontWeight: 'bold',
              color: '#3f51b5',
              fontSize: '2rem',
              marginBottom: '2rem',
            }}
          >
            Log In Account
          </Typography>

          {/* LOGIN form  */}

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem',
            }}
          >
       
            <FormControl
              sx={{
                width: '100%',
                marginBottom: '1rem',
              }}
            >
              <InputLabel htmlFor="email">Email address:</InputLabel>
              <Input 
              sx={{
                bgcolor: '#DEDEDE',
                borderRadius: '10px',
              }}
              id="email" 
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">youremail@yourdomain.com</FormHelperText>
            </FormControl>

            <FormControl
              sx={{
                width: '100%',
              }}
            >
              <InputLabel htmlFor="password">Password:</InputLabel>
              <Input 
              sx={{
                bgcolor: '#DEDEDE',
                borderRadius: '10px',
              }}
              id="password" 
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">8 characters and at least one number</FormHelperText>
            </FormControl>
            
           
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'right',
              justifyContent: 'flex-end',
            }}
          >
             <Button id="form-btn"
             sx={{
              bgcolor: '#3f51b5',
              borderRadius: '10px',
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 'bold',
              '&:hover': {
                color: '#47E9DD',
              },
             }}
             onClick={handleSubmit}
            >
                Log In
              </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
