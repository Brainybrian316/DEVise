
import {Box, Container} from '@mui/material/';



export default function ProfilePage() {
  return (
    <>
  <Container
    maxWidth="100%"
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
    backgroundColor: 'primary.dark',
  }}
/>
<Box
  sx={{
    width: '100vw',
    height: '100vh',
    float : 'right',
    backgroundColor: 'red',
  }}
/>
</Container>
</>
  );
}