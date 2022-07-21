import { Container, Box, Typography, Button, TextField, Input  } from '@mui/material';



export default function Contact() {
  return (
    <>

      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1" gutterBottom>
           Thank you for joining DEVise. We are always looking for new members to join our growing community. If you have any questions, please feel free to contact us. We would love to hear from you.
          </Typography>
          </Box>

          <Box my={4}>
            <Typography variant="p" component="p" gutterBottom>
              Email input goes here
            </Typography>
        </Box>
        
        <Box 
          sx={{ display: { xs: 'flex', md: 'flex' } }}
          my={4}>
          <Typography 
          sx={{ mr: 2 }}
          variant="p" 
          component="p" 
          gutterBottom>
            Interested in this project being put into production?
          </Typography>
          <Input 
          type="radio" 
          name="yes" 
          value="yes" />
          <Typography variant="p" component="p" gutterBottom>
            Yes
          </Typography>
          <Input type="radio" name="no" value="no" />
          <Typography variant="p" component="p" gutterBottom>
            No
          </Typography>
        </Box>


      </Container>
  
    </>
  );
}