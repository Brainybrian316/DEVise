import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import { Button, Typography } from '@mui/material';
import Box from '@mui/joy/Box';

import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';

import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

export default function UserProjects() {
  return (
    <Card variant="outlined" sx={{ minWidth: '320px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography level="h2" fontSize="md" sx={{ alignSelf: 'flex-start' }}>
          Yosemite National Park
        </Typography>
        <Typography level="body2">April 24 to May 02, 2021</Typography>
      </Box>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton>

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://source.unsplash.com/random/300"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            $2900
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Explore
        </Button>
      </Box>
    </Card>
  );
}
