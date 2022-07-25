import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';


export default function loginBtn(props) {
  const { setPage } = props;
  const theme = createTheme({
    palette: {
      primary: {
        main: '#e91e63',
      },}});


  return (
    <Link to="/login">
    <ThemeProvider theme={theme}>
    <Button 
    sx={{ mr: 1, }}
    onClick={() => setPage('login')}
       variant="contained">Login</Button>
    </ThemeProvider>
    </Link>
  );
}