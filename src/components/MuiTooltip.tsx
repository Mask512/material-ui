import { Tooltip, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

export const MuiTooltip = () => {
  return (
    <Tooltip 
    title='Delete'
    placement='right' // by default placement is at bottom
    arrow
    enterDelay={500}
    leaveDelay={900}
    >
      <IconButton sx={{ margin: '10px' }}>
        <Delete />
      </IconButton>
    </Tooltip>
  );
};
