
import AspectRatio from '@mui/joy/AspectRatio';
import { Button, Typography, Box, Card, IconButton } from '@mui/material';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGetAllUserProjectsQuery } from '../../hooks/Queries';
import { Container } from '@mui/system';


export default function UserProjects() {

  const { userProjects, loading, error } = useGetAllUserProjectsQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;
  




  return (
    <Box sx={{ display: 'flex', m: 2,  p: 2, justifyContent: 'space-evenly', flexWrap: 'wrap', flexDirection: 'row'   }}>
    {userProjects.map(userProject => (
    <Card   key={userProject.id}sx={{ minWidth: '450px', maxWidth: '300px', m:2}}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start'  }}>
        <Typography variant='h6'>
          {userProject.title}
        </Typography>
      </Box>

      <Typography variant='body1'>
        {/* {userProject.user.firstName} */}
      </Typography>

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src={userProject.mainImage}
          alt={userProject.title}
        />
      </AspectRatio>
      <Typography level="body2">
        {userProject.summary}
      </Typography>
      <Box sx={{ display: 'flex', pt: 2 }}>
        <div>
          <Typography level="body3">Total price:  {userProject.price}
          </Typography>
        </div>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>

      <Button
          variant="contained"
          sx={{ ml: 'auto', mr: 33, mb: 2, mt: 2
         }}
        >
          VIEW
        </Button>
      <IconButton
          sx={{ ml: 3 }}
          >
          <BookmarkAdd />
        </IconButton>
        <IconButton sx={{ color: 'red'}}>
          <FavoriteIcon />
        </IconButton>
        </Box>
    </Card>
    ))}

    </Box>
    
  );
}
