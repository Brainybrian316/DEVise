import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';

import Container from './Container';
import SearchBox from './SearchBox';
import FeaturedArticle from './FeaturedArticle';
import LastStories from './LastStories';


const ProjectFeed = () => {
    const theme = useTheme();
    return (
        <Box
        position={'relative'}
        sx={{
          backgroundImage:
            'url("https://assets.maccarianagency.com/backgrounds/img1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: -13,
          paddingTop: 13,
          '&:after': {
            position: 'absolute',
            content: '" "',
            width: '100%',
            height: '100%',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1,
            background: '#161c2d',
            opacity: 0.6,
          },
        }}
      >
        <Container
          zIndex={3}
          position={'relative'}
          minHeight={{ xs: 300, sm: 400, md: 600 }}
          maxHeight={600}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box>
            <Box marginBottom={2}>
              <Typography
                variant="h2"
                align={'center'}
                sx={{
                  fontWeight: 700,
                  color: theme.palette.common.white,
                }}
              >
                Project Feed
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                align={'center'}
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                Check out the latest happenings
              </Typography>
            </Box>
          </Box>
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          width={1}
          maxHeight={120}
          bottom={0}
          position={'absolute'}
          zIndex={2}
        >
          <path
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
        <Container
          sx={{
            marginTop: '-5rem',
            position: 'relative',
            zIndex: 3,
            paddingY: '0 !important',
          }}
        >
          <SearchBox />
        </Container>
        <Container>
          <FeaturedArticle />
        </Container>
        <Container paddingTop={'0 !important'}>
          <LastStories />
        </Container>
      </Box>
      

      

      

    );
  };
  
  export default ProjectFeed;