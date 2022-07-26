import { Box, Container, Grid, Typography } from '@mui/material/';
import ProfileCard from './profileCard';
import Experience from './List';
import FriendsList from './Friends';

export default function ProfilePage() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="stretch"
          sx={{ mt: 3, mb: 3 }}
        >
          <Grid item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            xs={12} md={6} lg={4}
          >

          <ProfileCard />
          </Grid>
          <Grid
            item
            xs={12} md={6} lg={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              bgcolor: 'background.paper',
            }}
          >
            <Experience />
            <FriendsList />
          </Grid>

        

        </Grid>
      </Container>
    </>
  );
}
