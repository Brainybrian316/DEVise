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
            <Input
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              autoComplete="email"
              autoFocus
            />
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
          sx={{ mr: 2 }}
          type="radio"
          name="radio-button-demo"
          label="Yes"
          value="yes"
          inputProps={{ 'aria-label': 'Yes' }}
          />
          <Typography
          sx={{ mr: 2 }}
          variant="p"
          component="p"
          gutterBottom>
            Yes
          </Typography>
          <Input
          sx={{ mr: 2 }}
          type="radio"
          name="radio-button-demo"
          label="No"
          value="no"
          inputProps={{ 'aria-label': 'No' }}
          />
                <Typography 
          sx={{ mr: 2 }}
          variant="p"
          component="p"
          gutterBottom>
            No
          </Typography>
        </Box>


      </Container>
  
    </>
  );
}