import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText
} from '@mui/material';
import { useState } from 'react';

export const MuiRadioButton = () => {
  const [value, setValue] = useState('');
  console.log(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Box>
      <FormControl error={value === '6-10'}>
        <FormLabel>Years of Experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-label="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row // default : column
        >
          <FormControlLabel control={<Radio size='medium' color='warning' />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio color='success' />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        {value === '6-10' && <FormHelperText>Invalid Selection</FormHelperText>}
      </FormControl>
    </Box>
  );
};
