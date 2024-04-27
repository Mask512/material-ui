import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import React, { useState } from 'react';
import { BookmarkBorder } from '@mui/icons-material';
import { Bookmark } from '@mui/icons-material';

export const MuiCheckBox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  console.log({ acceptTnC });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(e.target.checked);
  };

  const [skills, setSkills] = useState<string[]>([]);
  const [invalidSelection, setInvalidSelection] = useState(false);

  console.log({ skills });

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedSkill = e.target.value;
    const updatedSkills = [...skills];

    if (updatedSkills.includes(selectedSkill)) {
      // Skill already selected, remove it
      const index = updatedSkills.indexOf(selectedSkill);
      updatedSkills.splice(index, 1);
    } else {
      // Skill not selected, add it
      updatedSkills.push(selectedSkill);
    }

    setSkills(updatedSkills);
    // Check if HTML is the only skill selected
    setInvalidSelection(
      updatedSkills.length === 1 && updatedSkills[0] === 'HTML',
    );
  };

  return (
    <Box>
      <Box>
        {/* Checkbox basic */}
        <FormControlLabel
          label="I Accept terms and conditions"
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>
      <Box>
        {/* Checkbox no label */}
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        {/* Checkbox group */}
        <FormControl error={skills.length === 1 && skills[0] === 'HTML'}>
          <FormLabel>Skills</FormLabel>
          <FormGroup
            row // row | default column
          >
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  value={'HTML'}
                  checked={skills.includes('HTML')}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="JS"
              control={
                <Checkbox
                  value={'JS'}
                  checked={skills.includes('JS')}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="React"
              control={
                <Checkbox
                  value={'React'}
                  checked={skills.includes('React')}
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>
          {invalidSelection && (
            <FormHelperText>Invalid selection</FormHelperText>
          )}
        </FormControl>
      </Box>
    </Box>
  );
};
