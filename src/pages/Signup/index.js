import FirstName from '../../components/form/FirstName'
import GroupInput from '../../components/form/FormInput';
import LastName from '../../components/form/LastName';
import CreateAcctBtn from './CreateAcctBtn';
import './signup.css';
import { Container, Box, Typography } from '@mui/material';


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
      <FirstName />
      <LastName />
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