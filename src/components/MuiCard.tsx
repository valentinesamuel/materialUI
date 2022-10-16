import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width="400px">
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="http://source.unsplash.com/random"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            beatae ad voluptatibus, modi, deserunt excepturi assumenda quis
            possimus accusantium exercitationem in, fugit labore perspiciatis
            quo aut? Esse ut adipisci veritatis.
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
