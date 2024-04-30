import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { Menu } from '@mui/icons-material';

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        aria-label='logo'
        onClick={() => setIsDrawerOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
