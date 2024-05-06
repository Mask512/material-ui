import { Stack, LinearProgress, CircularProgress } from '@mui/material';

export const MuiProgress = () => {
  return <Stack spacing={2} m='20px'>
    <LinearProgress />
    <LinearProgress color='success'/>
    <LinearProgress variant='determinate' value={70}/>
    <CircularProgress />
    <CircularProgress color='success'/>
    <CircularProgress variant='determinate' value={70}/>
  </Stack>;
};
