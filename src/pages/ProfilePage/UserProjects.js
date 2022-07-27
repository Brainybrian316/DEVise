import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import { color, Container } from '@mui/system';

import { CreateNewFolder } from '@mui/icons-material';
import CardCover from '@mui/joy/CardCover';
import { useGetMeQuery } from '../../hooks/Queries';


export default function MultipleInteractionCard() {

  const { me, loading, error } = useGetMeQuery();
  console.log(me);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container maxWidth="lg">
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
      {me.userProjects.map((project) => (
    <Card 
    key={project._id}
     variant="outlined" sx={{ 
      minWidth: 320, maxWidth: 750,  }}>

      <Box sx={{ position: 'relative' }}>
        <AspectRatio ratio="4/3">
          <figure>
            <img
              alt={project.title}
              width="330"
              height="247"
              sizes="338px"
              data-sizes="auto"
              src={project.mainImage}
            />
          </figure>
        </AspectRatio>
        <CardCover
          className="gradient-cover"
          sx={{
            '&:hover, &:focus-within': {
              opacity: 1,
            },
            opacity: 0,
            transition: '0.1s ease-in',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%)',
          }}
        >
          {/* The first box acts as a container that inherits style from the CardCover */}
          <Box>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                flexGrow: 1,
                alignSelf: 'flex-end',
              }}
            >
              <Typography level="h2" noWrap sx={{ fontSize: 'xs' }}>
                <Link
                  href="#dribbble-shot"
                  overlay
                  underline="none"
                  sx={{
                    color: '#fff',
                    textOverflow: 'none',
                    overflow: 'hidden',
                    display: 'block',
                  }}
                >
                  {project.title}
                </Link>
              </Typography>
              <IconButton size="sm" sx={{ 
                ml: 'auto',
                color: '#fff',
                 }}>
                <CreateNewFolder />
              </IconButton>
              <IconButton size="sm" sx={{ 
                color: '#fff',
                 }}>
                <Favorite />
              </IconButton>
            </Box>
          </Box>
        </CardCover>
      </Box>
      <Typography level="h3" noWrap sx={{ 
        pt: 2,
        fontSize: 'lg' }}>
      Summary:
      </Typography>
      <CardOverflow>
        <Typography level="paragraph" noWrap sx={{
          fontSize: 'sm',
          lineHeight: 'lg',
        }}>
          {project.summary}
        </Typography>
      </CardOverflow>
    </Card>
    ))}
    </Box>
    </Container>
  );
}
