
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/system';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useState } from 'react';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function Chips() {
  const [chipData, setChipData] = useState([
    { key: 0, label: 'HTML' },
    { key: 1, label: 'CSS' },
    { key: 2, label: 'JavaScript' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
    { key: 5, label: 'JQuery' },
    { key: 6, label: 'Java' },
    { key: 7, label: 'Angular' },
    { key: 8, label: 'Bootstrap' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Box>
  );
}
