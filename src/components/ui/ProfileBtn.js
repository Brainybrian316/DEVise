import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export default function signupBtn(props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#33d375',
      },
    },
  });
  return (
    <Link to="/Profile">
    <ThemeProvider theme={theme}>
      <Button sx={{ mr: 1 }} variant="contained" id="fancy-nav">
        <span>Profile</span>
      </Button>
    </ThemeProvider>
    </Link>
  );
}
