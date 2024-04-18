import { Stack, TextField, Typography } from '@mui/material';

export const MuiTextField = () => {
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
          <TextField label="Form Input" required />
          <TextField label="Form Input" helperText="Dont share your password" />
          <TextField label="Password" type="password" />
          <TextField label="Disabled" disabled />
          <TextField label="Read Only" value={'cannot edit this'} InputProps={{readOnly: true}} />
        </Stack>
      </Stack>
    </>
  );
};
