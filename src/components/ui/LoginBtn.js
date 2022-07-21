import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


export default function loginBtn() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#e91e63',
      },
      
    }
    });
  return (
    <ThemeProvider theme={theme}>
    <Button 
    sx={{ mr: 1, }}
    onClick={() => {alert('clicked');
  }} variant="contained">Login</Button>
    </ThemeProvider>
  );
}