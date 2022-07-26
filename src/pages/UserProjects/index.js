
import AspectRatio from '@mui/joy/AspectRatio';
import { Button, Typography, Box, Card, IconButton } from '@mui/material';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function UserProjects() {




  return (
    <Box sx={{ display: 'flex', m: 2,  p: 2, }}>

    <Card sx={{ minWidth: '320px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start'  }}>
        <Typography variant='h6'>
          Yosemite National Park
          <IconButton
          sx={{ ml: 3 }}
          >
          <BookmarkAdd />
        </IconButton>
        <IconButton sx={{ color: 'red'}}>
          <FavoriteIcon />
        </IconButton>
        </Typography>
      </Box>

      <Typography level="body2">April 24 to May 02, 2021</Typography>

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://source.unsplash.com/random/300"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Total price: $1,000</Typography>
        </div>
   
          <Button
          variant="contained"
          sx={{ ml: 'auto', mr: 2, mb: 2
         }}
        >
          VIEW
        </Button>
      </Box>
    </Card>
    </Box>
  );
}
