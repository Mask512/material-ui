import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from '@mui/material';
import Mail from '@mui/icons-material/Mail';

export const MuiList = () => {
  return (
    <Box sx={{ width: '400px', bgcolor: '#ddd', margin: '20px' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText
              primary="List Item 1 as a Button"
              secondary="Secondary text"
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="List Item 2" secondary="Secondary text" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText primary="List Item 3" secondary="Secondary text" />
        </ListItem>
      </List>
    </Box>
  );
};
