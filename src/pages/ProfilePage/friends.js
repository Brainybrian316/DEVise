import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';


import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {


  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid item xs={12} md={6}>
          <Demo>
          <Typography sx={{ mt: 1, mb: 2 }} variant="h6" component="div">
            Friends List
          </Typography>
            <List>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <Avatar />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Friends"
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
    </Box>
  );
}
