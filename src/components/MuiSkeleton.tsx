import { Stack, Skeleton, Box, Avatar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  },[]);

  return (
    <>
      <Stack spacing={1} width="320px" m="2rem">
        <Skeleton variant="text" />
        <Skeleton variant="circular" width="40px" height="40px" />
        <Skeleton variant="rectangular" width="320px" height="100px" />
        <Skeleton
          variant="rectangular"
          width="320px"
          height="100px"
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          width="320px"
          height="100px"
          animation={false}
        />
      </Stack>
      <Box
        sx={{
          width: '250px',
          margin: '2rem',
        }}
      >
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={256}
            height={144}
            animation="wave"
          />
        ) : (
          <img
            src="https://source.unsplash.com/random/256x144"
            alt="skeleton"
            width={256}
            height={144}
          />
        )}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            width: '100%',
            marginTop: '12px',
          }}
        >
          {loading ? (
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
          ) : (
            <Avatar>V</Avatar>
          )}

          <Stack sx={{ width: '80%' }}>
            {loading ? (
              <>
                <Typography variant="body1">
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography>
                <Typography variant="body2">
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="body1">React Mui Tutorial</Typography>
                <Typography variant="body2">Lorem ipsum dolor sit amet.</Typography>
              </>
            )}
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
