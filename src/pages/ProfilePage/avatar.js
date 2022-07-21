import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 100, 
      height: 100,
      fontSize: '2rem',
      
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function Avatars() {
  return (
    <>
    <Stack
     direction="row" 
     sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '3rem',
      padding: '0',
     }}>
      <Avatar {...stringAvatar('Brian M')} />
    </Stack>
    <Typography
      variant="h6"
      sx={{
        marginTop: '1rem',
        textAlign: 'center',
      }}
    >
      Brian M
    </Typography>
    <Typography
      variant="subtitle2"
      sx={{
        textAlign: 'center',
        color: 'text.secondary',
      }}
    >
      Software Engineer
    </Typography>

  </>
  );
}
