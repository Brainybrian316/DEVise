
import {Box, Container, Grid, Typography,} from '@mui/material/';
import ProfileCard from './profileCard';
import Experience from './List';
import FriendsList from './Friends';




export default function ProfilePage() {
  return (
    <>
<Grid
  container
  direction="column"
  justifyContent="space-evenly"
  alignItems="center"
  sx={{mt: 3, mb: 3}}
>
  <ProfileCard />
  <Experience />
  <FriendsList/>
  
</Grid>
</>
  );
}







