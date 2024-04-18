import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

export const MuiButton = () => {
  const [formats, setFormats] = useState<string[] | null>([]);
  console.log(formats);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[],
  ) => {
    setFormats(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={'row'}>
        <Button variant="text" href="https://google.com" target="_blank">
          Link to google
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction={'row'}>
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
      </Stack>

      <Stack spacing={2} direction={'row'}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack spacing={2} direction={'row'}>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
      </Stack>

      <Stack display={'block'} spacing={2} direction={'row'}>
        {/* set display to block for size (default is flex) */}
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction={'row'}>
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert('clicked')}
        >
          Send (disable ripple effect)
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send (disable elevation)
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}></Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction={'row'} display={'block'} spacing={2}>
        <ButtonGroup variant="contained">
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>

        <ButtonGroup
          variant="contained"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>

        <ButtonGroup variant="contained" orientation="vertical">
          <Button>Top</Button>
          <Button>center</Button>
          <Button>Bottom</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={'row'}>
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          // exclusive // single or multiple
          // size='large'
          // orientation='vertical'
          color='primary'
          
          
        >
          <ToggleButton value={'bold'}>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={'italic'}>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={'underlined'}>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      
    </Stack>
  );
};
