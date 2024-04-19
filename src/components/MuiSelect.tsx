import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';

export const MuiSelect = () => {
  const [country, setCountry] = useState('');
  const [countries, SetCountries] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value as string);
  };
  const handleChangeMulti = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    SetCountries(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <>
      <Box width={'200px'}>
        <TextField
          label="Select Country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="ID">Indonesia</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="CN">China</MenuItem>
        </TextField>
      </Box>
      <Box width={'250px'} marginBlock={'1rem'}>
        <TextField
          label="Select Country"
          select
          value={countries}
          onChange={handleChangeMulti}
          fullWidth
          helperText="Can choose more than one"
          SelectProps={{multiple: true}}
          size='small'
          color='secondary'
          error={countries.length === 0}
        >
          <MenuItem value="ID">Indonesia</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="CN">China</MenuItem>
        </TextField>
      </Box>
    </>
  );
};
