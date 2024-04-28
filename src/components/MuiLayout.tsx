import { Box, Stack, Divider, Grid, Paper } from '@mui/material';

/** 
    Box is change for div for default , use as wrapper tag

    Stack is used to manage layout in one dimension , vertical or horizontal (flex)

    Grid component for two dimensional layouts.

    Under the hood grid uses the flexbox module,
    Consist of 12 column
    Each item in the grid can teake up one or more columns as its width
    There are 5 breakpoints each corresponding to a certain device width
    xs : mobile device
    sm : tablet
    md: desktop
    lg & xl : larger monitors

    Paper : Create surface / visual hierarchy
**/

export const MuiLayout = () => {
  return (
    <Paper sx={{
        padding: '32px'
    }}
    elevation={8}>
      <Stack
        sx={{
          border: '1px solid',
        }}
        direction={'row'} // default column , row | column | reverse
        spacing={2} // gap
        divider={<Divider orientation="vertical" flexItem />} // divider beetwen child
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

      <Grid container my={4} 
    //   spacing={2} // gap
      rowSpacing={2} // gap row
      columnSpacing={1} // gap collumn
      >
        {/* parent */}
        <Grid item xs={12} sm={6}>
          <Box bgcolor={'primary.light'} p={2} >Item 1</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={'primary.light'} p={2} >Item 2</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={'primary.light'} p={2} >Item 3</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={'primary.light'} p={2} >Item 4</Box>
        </Grid>
      </Grid>
      <Grid container my={4}>
        <Grid item xs> {/* auto layout equal if props non value */}
          <Box bgcolor={'primary.light'} p={2} >Item 1</Box>
        </Grid>
        <Grid item xs={6} border={'1px solid'}>
          <Box bgcolor={'primary.light'} p={2} >Item 2</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor={'primary.light'} p={2} >Item 3</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor={'primary.light'} p={2} >Item 4</Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
