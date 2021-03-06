import { useState } from 'react';
import {
  InputLabel,
  Input,
  Box,
  FormControl,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useCreateUserMutation } from '../../hooks/Mutations';

export default function Signup() {
  const {createUser} = useCreateUserMutation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCreated = await createUser({
        variables: {
          input: {
          firstName,
          lastName,
          username,
          email,
          password,
        },
      },
      });
      if (userCreated) {
        localStorage.setItem('token', userCreated.data.createUser.token);
        window.location.href = 'profile';
        console.log(userCreated);
      }
    }
    catch (error) {
      alert('Something went wrong');
      console.log(error);
    }
  }


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { data } = await createUser({
  //     variables: {
  //       firstName,
  //       lastName,
  //       username,
  //       email,
  //       password,
  //     },
  //   });
  //   console.log(data);
  // }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#3f51b5',
      },
    },
  });

  return (
    <div>
      <Container maxWidth="sm"
        sx={{ m: 2,  ml: 'auto', mr: 'auto', p: 2 }}
      >
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
              marginBottom: '1rem',
            }}
          >
            Create Account
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <FormControl
              sx={{
                width: '45%',
                marginRight: '1rem',
                marginBottom: '1rem',
              }}
            >
              <InputLabel htmlFor="firstName">First Name</InputLabel>
              <Input
                sx={{
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  color: '#3f51b5',
                  backgroundColor: '#D8D8D8',
                }}
                id="firstName"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>

            <FormControl
              sx={{
                width: '45%',
              }}
            >
              <InputLabel htmlFor="lastName">Last Name</InputLabel>
              <Input
                sx={{
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  color: '#3f51b5',
                  backgroundColor: '#D8D8D8',
                }}
                id="lastName"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <FormControl
              sx={{
                width: '100%',
                marginBottom: '1rem',
              }}
            >
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                sx={{
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  color: '#3f51b5',
                  backgroundColor: '#D8D8D8',
                }}
                id="username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
          </Box>

          <FormControl
            sx={{
              width: '100%',
              marginBottom: '1rem',
            }}
          >
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              sx={{
                borderRadius: '10px',
                fontWeight: 'bold',
                color: '#3f51b5',
                backgroundColor: '#D8D8D8',
              }}
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl
            sx={{
              width: '100%',
            }}
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              sx={{
                borderRadius: '10px',
                fontWeight: 'bold',
                color: '#3f51b5',
                backgroundColor: '#D8D8D8',
              }}
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Box
            sx={{
              paddingTop: '2em',
              display: 'flex',
              alignItems: 'right',
              justifyContent: 'flex-end',
            }}
          >
            <ThemeProvider theme={theme}>
              <Button
                id="form-btn"
                variant="contained"
                onClick={handleSubmit}
              >
                Create Account
              </Button>
            </ThemeProvider>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
