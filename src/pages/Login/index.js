import { useLoginMutation } from '../../hooks/Mutations';
import { useState } from 'react';
import GroupInput from '../../components/form/GroupInput';
import CreateLoginBtn from './CreateLoginBtn';
import './login.css';
import { Container, Box, Typography } from '@mui/material';

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
      <GroupInput>
      <div className="login-form">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input  onChange={(e) => setEmail(e.target.value)}
                  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input onChange={(e) => setPassword(e.target.value)}
                  type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>          
              </form>
              </div>
      </GroupInput>
      </Box>
              
          <Box sx={{
            display: 'flex',
            alignItems: 'right',
            justifyContent: 'flex-end',
          }}>
          <CreateLoginBtn>
          <button type="submit" className="btn btn-primary"
                  onClick={handleSubmit}>
                    Submit
                    </button>
          </CreateLoginBtn> 
          </Box>
          
      </Box>
      </Container>
    </div>
  )
}