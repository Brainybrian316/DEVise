import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';


const mock = [
  {
    image: 'https://insights.dice.com/wp-content/uploads/2020/05/shutterstock_1571829487.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    title: 'Lorem ipsum dolor sit amet,',
    author: {
      name: 'John Smith',
      avatar: 'https://i.pinimg.com/564x/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8--developer-icon.jpg',
    },
    date: 'Aug 12',
  },
  {
    image: 'https://www.digitalartsonline.co.uk/cmsdata/features/3674451/lifestyle_working_from_home_10.jpg',
    description: 'Excepteur sint occaecat cupidatat non proident',
    title: 'Consectetur adipiscing elit',
    author: {
      name: 'Jane Smith',
      avatar: 'https://i.pinimg.com/564x/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8--developer-icon.jpg',
    },
    date: 'Sep 19',
  },
  {
    image: 'https://www.velocityconsultancy.com/wp-content/uploads/2021/08/web-development.jpg',
    description: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    title: 'Labore et dolore magna aliqua',
    author: {
      name: 'John Smith',
      avatar: 'https://i.pinimg.com/564x/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8--developer-icon.jpg',
    },
    date: 'Jan 14',
  },
  {
    image: 'https://www.robertsharpassociates.com/assets/images/uploads/web1.jpeg',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    title: 'Eiusmod tempor incididunt',
    author: {
      name: 'Jane Smith',
      avatar: 'https://i.pinimg.com/564x/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8--developer-icon.jpg',
    },
    date: 'Mar 12',
  },
  {
    image: 'https://lform.com/cms/resources/media/2021/01/custom-web-design-development.jpg',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
    title: 'Sed ut perspiciatis',
    author: {
      name: 'John Smith',
      avatar: 'https://i.pinimg.com/564x/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8--developer-icon.jpg',
    },
    date: 'Oct 17',
  },
  {
    image: 'https://w10.naukri.com/mailers/2022/naukri-learning/what-is/What-is-web-development.jpg',
    description:
      'Qui blanditiis praesentium voluptatum deleniti atque corrupti',
    title: 'Unde omnis iste natus',
    author: {
      name: 'Jane Smith',
      avatar: 'https://i.pinimg.com/564x/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8--developer-icon.jpg',
    },
    date: 'Feb 06',
  },
];

const PopularProjects = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            Popular Projects
          </Typography>
          <Typography color={'text.secondary'}>
            Find what you're looking for here!
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
          >
            View all
          </Box>
        </Box>
      </Box>   
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={'a'}
              href={''}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={4}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >
                <CardMedia
                  image={item.image}
                  title={item.title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                  }}
                >
                  <Box
                    component={'svg'}
                    viewBox="0 0 2880 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      color: theme.palette.background.paper,
                      transform: 'scale(2)',
                      height: 'auto',
                      width: 1,
                      transformOrigin: 'top center',
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                      fill="currentColor"
                    />
                  </Box>
                </CardMedia>
                <Box component={CardContent} position={'relative'}>
                  <Typography variant={'h6'} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display={'flex'} flexDirection={'column'}>
                  <Box marginBottom={2}>
                    <Divider />
                  </Box>
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Box display={'flex'} alignItems={'center'}>
                      <Avatar
                        src={item.author.avatar}
                        sx={{ marginRight: 1 }}
                      />
                      <Typography color={'text.secondary'}>
                        {item.author.name}
                      </Typography>
                    </Box>
                    <Typography color={'text.secondary'}>
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item container justifyContent={'center'} xs={12}>
          <Button
            fullWidth
            variant={'outlined'}
            size={'large'}
            sx={{ height: 54, maxWidth: 400, justifyContent: 'space-between' }}
            endIcon={
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            }
          >
            Load more
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PopularProjects;