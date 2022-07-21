import FirstName from '../../components/form/FirstName'
import GroupInput from '../../components/form/FormInput';
import LastName from '../../components/form/LastName';
import CreateAcctBtn from './CreateAcctBtn';
import './signup.css';
import { Container, Box } from '@mui/material';


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
   <h1>Create Account</h1>
      <FirstName />
      <LastName />
      <GroupInput />
      <CreateAcctBtn />
      </Box>

      </Container>
    </div>
  );
}