import { Box, Container, Grid, Typography } from '@mui/material/';
import ProfileCard from './profileCard';
import Experience from './List';
import FriendsList from './Friends';
import Chip from './Chip';
import UserProjects from './UserProjects';

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
          {/* <Grid
            item
            xs={12} md={6} lg={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              bgcolor: 'background.paper',
            }}
          >
            <Box sx={{ p: 3 }}>
            <Experience />
            </Box>
            <Box sx={{ p: 3 }}>
            <Typography sx={{ mt: 1, mb: 2 }} variant="h6">
                Languages/Tools
                </Typography>
            <Chip/>
            </Box>
            <Box sx={{ p: 3 }}>
            <FriendsList />
            </Box>

            <Box sx={{ p: 3 }}>
            <Typography sx={{ mt: 1, mb: 2 }} variant="h6">
              My Projects
              </Typography>
              <UserProjects /> 
            </Box>
          </Grid> */}

        
        </Grid>
      </Container>
    </>
  );
}
