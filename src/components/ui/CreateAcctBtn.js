import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


export default function CreateAcctBtn() {
  
    const theme = createTheme({
      palette: {
        primary: {
          main: '#3f51b5',
        },
        
      }
      });
    return (
      <ThemeProvider theme={theme}>
      <Button onClick={() => {alert('clicked');
    }} variant="contained">Create Account</Button>
      </ThemeProvider>
    );
}