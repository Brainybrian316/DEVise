
import {Box, Container} from '@mui/material/';
import ProfileCard from './profileCard';
import Friends from './friends';

export default function ProfilePage() {
  return (
    <>
  <Container
    maxWidth="100%"
    maxHeight="100%"
     sx = {{
      margin: '0',
      padding: '0',
      display: 'flex',
      flexDirection: 'row',
     }}
  >
  <Box
  sx={{
    width: 500,
    height: '100vh',
    backgroundColor: 'primary.light',
  }}
>
  <ProfileCard />
  <Friends />
  </Box>
<Box
  sx={{
    width: '100vw',
    height: '100vh',
    float : 'right',
    backgroundColor: '#ffab91',
  }}
>

</Box>
</Container>
</>
  );
}