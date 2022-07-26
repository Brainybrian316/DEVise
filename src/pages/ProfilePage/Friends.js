import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography, Avatar, IconButton,  } from '@mui/material';
import React from 'react';



export default function FriendsList() {


  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  return (
    <>
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
    </>
  );
}
