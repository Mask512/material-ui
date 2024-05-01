import { Stack, Avatar, AvatarGroup } from '@mui/material';

export const MuiAvatar = () => {
  return (
    <Stack spacing={4} margin="10px">
      <Stack direction="row" spacing={1}>
        <Avatar
          sx={{
            bgcolor: 'primary.light',
          }}
        >
          DSP
        </Avatar>
        <Avatar
          sx={{
            bgcolor: 'success.light',
          }}
        >
          CK
        </Avatar>
        <Avatar>DDD</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar>DDD</Avatar>
        <Avatar
          src="https://randomuser.me/api/portraits/men/88.jpg"
          alt="Jane Doe"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/50.jpg"
          alt="Jane Doe"
        />
        <Avatar>DS</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar>DDD</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/men/88.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/50.jpg"
            alt="Jane Doe"
          />
          <Avatar>DS</Avatar>
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar variant="square">DDD</Avatar>
        <Avatar
          sx={{
            height: '100px',
            width: '100px'
          }}
          src="https://randomuser.me/api/portraits/men/88.jpg"
          alt="Jane Doe"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/50.jpg"
          alt="Jane Doe"
        />
        <Avatar>DS</Avatar>
      </Stack>
    </Stack>
  );
};
