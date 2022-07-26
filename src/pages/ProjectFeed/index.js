import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Container from './Container';
import SearchBox from './SearchBox';
import FeaturedProjects from './FeaturedProjects';
import LatestProjects from './LatestProjects';
import PromotedProjects from './PromotedProjects';
import PopularProjects from './PopularProjects';
import AlertSubscription from './AlertSubscription';


const ProjectFeed = () => {
    const theme = useTheme();
    return (
        <Box>
            <Box
            position={'relative'}
            sx={{
            backgroundImage:
                'url("https://www.mrjourno.com/uploads/img/623c3d6f810ee.png")',
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
                    Check out all the latest and greatest projects!
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
            <FeaturedProjects />
            </Container>

            <Container paddingTop={'0 !important'}>
            <LatestProjects />
            </Container>

            <Container paddingTop={'0 !important'}>
            <PromotedProjects />
            </Container>

            <Box paddingBottom={{ xs: 2, sm: 3, md: 4 }}>
            <Container paddingTop={'0 !important'}>
            <PopularProjects />
            </Container>
            </Box>

            <Container>
            <AlertSubscription />
            </Container>         
        </Box>
    );
  };
  
  export default ProjectFeed;