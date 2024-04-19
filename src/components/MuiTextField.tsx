import { InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export const MuiTextField = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <Typography marginBlock={'1rem'} variant="h6">
        Text Field
      </Typography>
      <Stack spacing={4}>
        <Stack direction={'row'} spacing={2}>
          <TextField label="Outlined" variant="outlined" />
          <TextField label="Filled" variant="filled" />
          <TextField label="Standard" variant="standard" />
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <TextField label="Small secondary" size="small" color="secondary" />
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <TextField
            label="Form Input"
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={!value} // error state
            helperText={!value ? 'Required' : 'Don\'t share your password to anyone'}
          />
          <TextField label="Form Input" helperText="Dont share your password" />
          <TextField label="Password" type="password" />
          <TextField label="Disabled" disabled />
          <TextField
            label="Read Only"
            value={'cannot edit this'}
            InputProps={{ readOnly: true }}
          />
        </Stack>
        <Stack direction={'row'} spacing={2}>
          \
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};
