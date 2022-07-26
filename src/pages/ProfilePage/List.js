import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function Experience() {
  const [Experience, setExperience] = useState('');

  const handleChange = (event) => {
    setExperience(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Experience</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Experience}
          label="Experience"
          onChange={handleChange}
        >
          <MenuItem value={10}>0-2</MenuItem>
          <MenuItem value={20}>2-4</MenuItem>
          <MenuItem value={30}>5+</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}