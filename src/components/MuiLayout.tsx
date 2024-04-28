import { Box, Stack, Divider } from '@mui/material';

/** 
    Box is change for div for default , use as wrapper tag

    Stack is used to manage layout in one dimension , vertical or horizontal (flex)
**/

export const MuiLayout = () => {
  return (
    <Stack
      sx={{
        border: '1px solid',
      }}
      direction={'row'} // default column , row | column | reverse
      spacing={2} // gap
      divider={<Divider orientation='vertical' flexItem/>}

    >
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
      >
        {' '}
        MUI System CSS Properties
      </Box>
    </Stack>
  );
};
