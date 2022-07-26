
import AspectRatio from '@mui/joy/AspectRatio';
import { Button, Typography, Box, Card, IconButton } from '@mui/material';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGetDevProjectsQuery } from '../../hooks/Queries';



export default function DevProjects() {

  const { devProjects, loading, error } = useGetDevProjectsQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;
  




  return (
    <Box sx={{ display: 'flex', m: 2,  p: 2, justifyContent: 'space-evenly', flexWrap: 'wrap', flexDirection: 'row'   }}>
    {devProjects.map(devProject => (
    <Card   key={devProject.id}sx={{ minWidth: '450px', maxWidth: '300px', m:2}}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start'  }}>
        <Typography variant='h6'>
          {devProject.title}
        </Typography>
      </Box>

      <Typography variant='body1'>
        {/* {userProject.user.firstName} */}
      </Typography>

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src={devProject.mainImage}
          alt={devProject.title}
        />
      </AspectRatio>
      <Typography level="body2">
        {devProject.summary}
      </Typography>
      <Box sx={{ display: 'flex', pt: 2 }}>
        <div>
          <Typography level="body3">Created By:  {devProject.authors}
          </Typography>
        </div>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>

      <Button
          variant="contained"
          sx={{ ml: 'auto', mr: 25, mb: 2, mt: 2
         }}
        >
          Learn  More
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
