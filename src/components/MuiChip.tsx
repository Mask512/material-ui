import { Face } from '@mui/icons-material';
import { Avatar, Chip, Stack } from '@mui/material';
import { useState } from 'react';


// can use for filtering icon

export const MuiChip = () => {
  const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3']);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack spacing={1} m="20px" width="min-content">
      <Chip label="Chip" />
      <Chip label="Chip small primary" color="primary" size="small" />
      <Chip label="Chip Outlined" color="primary" variant="outlined" />
      <Chip label="Chip Avatar" color="primary" avatar={<Avatar>C</Avatar>} />
      <Chip label="Chip Icon" color="primary" icon={<Face />} />
      <Chip label="Click" color="success" onClick={() => alert('clicked')} />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert('clicked')}
        onDelete={() => alert('deleted')}
      />

      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
