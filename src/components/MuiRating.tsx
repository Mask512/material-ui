import { Stack, Rating } from '@mui/material';
import React, { useState } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log(value);
  
  const handleChange = (
    _event: React.ChangeEvent<object>,
    newValue: number | null,
  ) => {
    setValue(newValue)
  };

  return (
    <Stack spacing={2}>
      <Rating value={value} onChange={handleChange} precision={0.5} size='large' 
      icon={<Favorite fontSize='inherit' color='error'/>} // custom icon
      emptyIcon={<FavoriteBorder fontSize='inherit' />} // custom icon
    // readOnly
    // highlightSelectedOnly
      />
    </Stack>
  );
};
