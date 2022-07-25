
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { devList } from './devDB';



export default function Developers() {

  return (
    <>

    
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignContent: 'space-between'

        }}
      >
{devList.map((dev, index) => (
<Card 
style={{ display: 'flex'}}
  key={index}
>
<Box>
  <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography component="div" variant="h5">
      Software Engineer
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
      {dev.name}
    </Typography>
  </CardContent>
  <Box sx={{ 
    display: 'flex',
    justifyContent: 'space-between',
   alignItems: 'center',
    pb: 1
   }}>
    <IconButton>
      <GitHub
      onClick={() => {
        window.open(dev.github, '_blank');
      }}
       />
    </IconButton>
    <IconButton>
      <LinkedIn
      onClick={() => {
        window.open(dev.linkedin, '_blank');
      }}
       />
    </IconButton>
    <IconButton>
      <Email
        href={dev.email}
       />
    </IconButton>
  </Box>
</Box>
<CardMedia
  component="img"
  sx={{ width: 151 }}
  image={dev.image}
/>
<Box sx={{ display: 'flex', 
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
 fontSize: '1.5rem'
 }}>
<Typography variant="subtitle2">
  {dev.bio}
</Typography>
</Box>
</Card>
))}
      </Box>
  
    </>
  );
}
