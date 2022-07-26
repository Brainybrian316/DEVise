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


export default function MultipleInteractionCard() {
  return (
    <Container maxWidth="lg">
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
    <Card variant="outlined" sx={{ minWidth: 320, maxWidth: 750,  }}>
   
      <Box sx={{ position: 'relative' }}>
        <AspectRatio ratio="4/3">
          <figure>
            <img
              alt="Yosemite by Casey Horner"
              width="330"
              height="247"
              sizes="338px"
              data-sizes="auto"
              src="https://source.unsplash.com/random/300"
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
              <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                <Link
                  href="#dribbble-shot"
                  overlay
                  underline="none"
                  sx={{
                    color: '#fff',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: 'block',
                  }}
                >
                  Project Title
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>

      </CardOverflow>
    </Card>
    </Box>
    </Container>
  );
}
