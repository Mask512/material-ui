import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

export const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="navigation speed dial"
      sx={{
        position: 'absolute',
        bottom: 16,
        right: 16,
      }}
      icon={
        <SpeedDialIcon
        // openIcon={<ShareIcon/>} // custom icon
        />
      }
    >
      <SpeedDialAction
        icon={<ContentCopyIcon />}
        tooltipTitle="Copy"
        tooltipOpen
      />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
    </SpeedDial>
  );
};
