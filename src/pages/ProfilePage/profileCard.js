
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useGetUserQuery } from '../../hooks/Queries';






const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProfileCard() {
  const [expanded, setExpanded] = React.useState(false);

  const { user, loading, error } = useGetUserQuery('62e00c4f20fc6c75f60f55e6');

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  console.log(user);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            BM
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user.firstName + ' ' + user.lastName}
        subheader="Full-Stack Developer"
      />
  
      <CardContent>
        <Typography variant="subtitle1">
        About Me:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Some fake text about me man...Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentos, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="GitHub">
          <GitHub />
        </IconButton>
        <IconButton aria-label="Email Address">
          <Email />
        </IconButton>
        <IconButton aria-label="LinkedIn">
          <LinkedIn />
        </IconButton>
      </CardActions>
    </Card>
    </>
  );
}
