
import GroupInput from '../../components/form/GroupInput';
import CreateAcctBtn from './CreateAcctBtn';
import './signup.css';
import { Container, Box, Typography } from '@mui/material';
import CreateAcctInput from '../../components/form/CreateInput';


export default function Signup() {
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
      <GroupInput />
      </Box>

        <Box sx={{
          display: 'flex',
          alignItems: 'right',
          justifyContent: 'flex-end',
        }}>
      <CreateAcctBtn />
      </Box>

      </Box>
      </Container>
    </div>
  );
}