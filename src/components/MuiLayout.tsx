import { Box } from '@mui/material';

// Box is change for div for default , use as wrapper tag

export const MuiLayout = () => {
  return (
    <>
      <Box
        component="section" // props for change tag
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          cursor: 'pointer',
          '&hover': {
            backgroundColor: 'primary.light',
          },
        }} // custom style that has access to the theme
      >
        SX styling
      </Box>
      <Box
        display={'flex'}
        height={'100px'}
        width={'100px'}
        bgcolor={'success.light'}
        p={2} // padding 16px
      > MUI System CSS Properties</Box>
    </>
  );
};
