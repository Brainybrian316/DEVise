import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


export default function StandardBtn() {
  
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
    }} variant="contained">Standard Button</Button>
      </ThemeProvider>
    );
}