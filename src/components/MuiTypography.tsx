import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 heading</Typography>
      <Typography variant="h2">H2 heading</Typography>
      <Typography variant="h3">H3 heading</Typography>
      <Typography variant="h4">H4 heading</Typography>
      <Typography variant="h5">H5 heading</Typography>
      <Typography variant="h6" component="h1" align="left">
        H6 heading
      </Typography>
      <Typography variant="subtitle1">H6 = subtitle2</Typography>
      <Typography variant="subtitle2">H6 = Subtitle 1</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ab
        amet impedit aspernatur ipsam repellendus cupiditate eum laborum fugit
        odio. Totam temporibus consequatur soluta nobis id veritatis mollitia,
        aut quo!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, possimus
        minus? Excepturi dolorem esse culpa nobis magni dicta at ullam, sed
        odio, temporibus velit repellendus, ipsum blanditiis voluptate vel
        natus?
      </Typography>
    </div>
  );
};
