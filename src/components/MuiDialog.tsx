import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { useState } from 'react';

export const MuiDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        sx={{ margin: '10px' }}
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Open Dialog
      </Button>
      <Dialog
        open={open}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure submit the test ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
