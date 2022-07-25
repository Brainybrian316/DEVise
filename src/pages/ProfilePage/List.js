import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function ConnectedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%', maxWidth: 360, 
    }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" 
        sx={{
        bgcolor: 'transparent',
        }}
        id="nested-list-subheader">
          Connect with me
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
        <GitHubIcon/>
        </ListItemIcon>
        <ListItemText primary="GitHub Link" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <EmailIcon/>
        </ListItemIcon>
        <ListItemText primary="Email Address" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LinkedInIcon />
        </ListItemIcon>
        <ListItemText primary="LinkedIn" />
      </ListItemButton>
      </List>

  );
}
