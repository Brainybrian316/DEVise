
import AspectRatio from '@mui/joy/AspectRatio';
import { Button, Typography, Box, Card, IconButton } from '@mui/material';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGetAllUserProjectsQuery } from '../../hooks/Queries';


export default function UserProjects() {

  const { userProjects, loading, error } = useGetAllUserProjectsQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;
  




  return (
    <Box sx={{ display: 'flex', m: 2,  p: 2, justifyContent: 'space-evenly', flexWrap: 'wrap', flexDirection: 'row'   }}>
    {userProjects.map(userProject => (
    <Card   key={userProject.id}sx={{ minWidth: '450px', maxWidth: '300px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start'  }}>
        <Typography variant='h6'>
          {userProject.title}
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

      <Typography level="body2">
        {userProject.summary}
      </Typography>

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://source.unsplash.com/random/300"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Total price:  {userProject.price}
          </Typography>
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
    ))}
    </Box>
    
  );
}
