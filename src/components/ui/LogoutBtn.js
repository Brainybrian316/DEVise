import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';


export default function logoutBtn(props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#e91e63',
      },}});


  return (

    <ThemeProvider theme={theme}>
    <Button 
    sx={{ ml: 1, }}
    onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/';
          }}
       variant="contained">Logout</Button>
    </ThemeProvider>

  );
}