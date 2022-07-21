
import { Container, Box, Typography, Button, TextareaAutosize, Input, InputLabel, } from '@mui/material';
import emailjs from '@emailjs/browser';



export default function Contact(props) {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_YOUR_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
   
  };



  return (
    <>

      <Container maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#ffd180',
          borderRadius: '10px',
          mx: 'auto',
          mt: 3,
        }}
      >
         <form className="contact-form" action="" onSubmit={sendEmail}>
        <Box my={2}>
          <Typography variant="h4" component="h1" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1" gutterBottom>
           Thank you for joining DEVise. We are always looking for new members to join our growing community. If you have any questions, please feel free to contact us. We would love to hear from you.
          </Typography>
          </Box>

          <Box>
            <InputLabel htmlFor="Email">Email:</InputLabel>
            <Input
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid #ced4da',
                borderRadius: '4px',
                marginTop: '10px',
                width: '100%',
              }}
              id="Email"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              color= 'secondary'
              placeholder='Enter your email'
              required
            />
        </Box>

        <Box>
            <InputLabel htmlFor="Message">Message:</InputLabel>
            <TextareaAutosize
              style={{ width: '100%', fontFamily: 'Arial',
             fontSize: '16px', 
            }}
              minRows={3}
              id="Message"
              name="message"
              type="message"
              autoComplete="message"
              autoFocus
              color= 'secondary'
              placeholder='Enter your message'
            />
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
          id="yes"
          type="radio"
          name="radio-button-demo"
          label="yes"
          value="yes"
          inputProps={{ 'aria-label': 'yes' }}
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
          id="no"
          type="radio"
          name="radio-button-demo"
          label="no"
          value="no"
          inputProps={{ 'aria-label': 'no' }}
          />
                <Typography 
          sx={{ mr: 2 }}
          variant="p"
          component="p"
          gutterBottom>
            No
          </Typography>
        </Box>

        <Box>
          <Button
            sx={{
              border: '1px solid #ced4da',
              borderRadius: '4px',
              marginTop: '10px',
              marginBottom: '10px',
              float: 'right',
            }}
            variant="contained"
            color="primary"
            type="submit"
            value="Send"
            onClick={() => {
              alert('Thank you for your interest in DEVise. We will be in touch soon.');
            }}
          >
            Submit
          </Button>
        </Box>
        </form>
      </Container>
  
    </>
  );
}