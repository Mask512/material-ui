import { Snackbar, Button, Alert, AlertProps } from '@mui/material';
import { useState, forwardRef } from 'react';

// custom snackbar

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  },
);

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (_e: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;

    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form submitted succesfully!"
        autoHideDuration={1000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      /> */}
      <Snackbar autoHideDuration={1000} open={open} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form Submmited succesfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};
