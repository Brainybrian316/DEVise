
import {Box, Container, Grid} from '@mui/material/';
import ProfileCard from './profileCard';



export default function ProfilePage() {
  return (
    <>
<Grid
  container
  direction="column"
  justifyContent="space-evenly"
  alignItems="flex-start"
>
  <ProfileCard />
</Grid>
</>
  );
}







