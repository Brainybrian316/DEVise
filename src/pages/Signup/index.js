import FirstName from '../../components/form/FirstName'
import GroupInput from '../../components/form/FormInput';
import LastName from '../../components/form/LastName';
import CreateAcctBtn from './CreateAcctBtn';
import Box from '@mui/material/Box';


export default function Signup() {
  return (
    <div>
      <Box sx={{ m: 2, }}>
      <FirstName />
      <LastName />
      <GroupInput />
      <CreateAcctBtn />
      </Box>
    </div>
  );
}