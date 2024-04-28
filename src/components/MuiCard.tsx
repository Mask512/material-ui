import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';

const reactImg =
  'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png';

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component={'img'}
          height={240}
          image={reactImg}
          sx={{
            padding: '4px',
            objectFit: 'contain',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color={'text.secondary'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
            atque voluptas eum facilis delectus
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
