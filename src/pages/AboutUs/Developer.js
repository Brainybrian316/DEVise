import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { GitHub, LinkedIn, Web } from '@mui/icons-material';
import { devList } from './devDB';
import { Container } from '@mui/material';

export default function Developers() {
  return (
    <>
      {devList.map((dev, index) => (
        <Container style={{ width: '100%' }}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              alignContent: 'space-evenly',
              marginTop: '50px',
              marginBottom: '50px',
            }}
          >
            <Card
              style={{
                display: 'flex',
                textAlign: 'center',
              }}
              key={index}
            >
              <Box>
                <CardContent sx={{}}>
                  <Typography component="div" variant="h5">
                    Software Engineer
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {dev.name}
                  </Typography>
                </CardContent>
                <Box>
                  <IconButton>
                    <GitHub
                      onClick={() => {
                        window.open(dev.github, '_blank');
                      }}
                    />
                  </IconButton>
                  <IconButton>
                    <LinkedIn
                      onClick={() => {
                        window.open(dev.linkedin, '_blank');
                      }}
                    />
                  </IconButton>
                  <IconButton>
                    <Web  onClick={() => {
                        window.open(dev.  portfolio, '_blank');
                      }} />
                  </IconButton>
                </Box>
              </Box>
              <CardMedia component="img" sx={{ width: 151 }} image={dev.image} />
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="subtitle2">{dev.bio}</Typography>
              </Box>
            </Card>
          </Box>
        </Container>
      ))}
    </>
  );
}
