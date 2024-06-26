import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useState } from 'react';

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={(_event, isExpanded) => {
          handleChange(isExpanded, 'panel1');
        }}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel-1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            eos minus voluptate vero, quibusdam consequuntur rerum est minima
            error blanditiis quis neque corrupti porro, nulla dolor! Possimus
            facere minima dignissimos.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel2')}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel-2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            eos minus voluptate vero, quibusdam consequuntur rerum est minima
            error blanditiis quis neque corrupti porro, nulla dolor! Possimus
            facere minima dignissimos.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel3')}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel-3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            eos minus voluptate vero, quibusdam consequuntur rerum est minima
            error blanditiis quis neque corrupti porro, nulla dolor! Possimus
            facere minima dignissimos.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
