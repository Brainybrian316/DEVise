import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


export default function signupBtn() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#33d375',
      },
      
    }
    });
  return (
    <ThemeProvider theme={theme}>
    <Button onClick={() => {alert('clicked');
  }} variant="contained">Sign Up</Button>
    </ThemeProvider>
  );
}