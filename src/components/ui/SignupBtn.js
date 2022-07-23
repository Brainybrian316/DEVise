import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


export default function signupBtn(props) {
  const { setPage } = props;
  const theme = createTheme({
    palette: {
      primary: {
        main: '#33d375',
      },
      
    }
    });
  return (
    <ThemeProvider theme={theme}>
    <Button 
    sx={{ ml: 1, }}
    onClick={() => {setPage('signup');
  }} variant="contained"  id="fancy-nav"><span>Sign Up</span></Button>
    </ThemeProvider>
  );
}