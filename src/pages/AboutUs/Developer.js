
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import devDB from './devDB';



export default function Developers() {
  


  return (
    <>
    

<Card sx={{ display: 'flex' }}>
<Box sx={{ display: 'flex', flexDirection: 'column' }}>
  <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography component="div" variant="h5">
      Software Engineer
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
      Brian M
    </Typography>
  </CardContent>
  <Box sx={{ 
    display: 'flex',
    justifyContent: 'space-between',
   alignItems: 'center',
    pb: 1
   }}>
    <IconButton>
      <GitHub />
    </IconButton>
    <IconButton>
      <LinkedIn />
    </IconButton>
    <IconButton>
      <Email />
    </IconButton>
  </Box>
</Box>
<CardMedia
  component="img"
  sx={{ width: 151 }}
  image="https://i.pravatar.cc/300"
/>
<Box sx={{ display: 'flex', 
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
 fontSize: '1.5rem'
 }}>
<Typography variant="subtitle2">
Brian is a software engineer who is passionate about his craft. He is currently working on a
project called DEVise.
</Typography>
</Box>
</Card>
  
    </>
  );
}
