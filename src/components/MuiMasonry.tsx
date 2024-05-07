import {
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import { Masonry } from '@mui/lab';
import { ExpandMore } from '@mui/icons-material';

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 60, 50, 40];

export const MuiMasonry = () => {
  return (
    <Box sx={{ width: 500, minHeight: 400, margin: 2 }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              //   display: 'flex',
              //   justifyContent: 'center',
              //   alignItems: 'center',
              //   height,
              border: '1px solid',
            }}
          >
            <Accordion
              sx={{
                minHeight: height,
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Content</AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};
