import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


import Container from './Container';
import SearchBox from './SearchBox';
import FeaturedArticle from './FeaturedArticle';
import LastStories from './LastStories';
import CaseStudies from './CaseStudies';
import PopularArticles from './PopularArticles';
import Newsletter from './Newsletter';


const ProjectFeed = () => {
    const theme = useTheme();
    return (
        <Box>
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
            </Box>

            <Container>
            <FeaturedArticle />
            </Container>

            <Container paddingTop={'0 !important'}>
            <LastStories />
            </Container>

            <Container paddingTop={'0 !important'}>
            <CaseStudies />
            </Container>

            <Box paddingBottom={{ xs: 2, sm: 3, md: 4 }}>
            <Container paddingTop={'0 !important'}>
            <PopularArticles />
            </Container>
            </Box>



            <Container>
            <Newsletter />
            </Container>         
        </Box>
      
      

      

      

    );
  };
  
  export default ProjectFeed;