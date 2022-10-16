import { Stack, Rating } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MuiRating = () => {
  const [rating, setRating] = useState<number | null>(4.5);
  console.log(rating);

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRating(newValue);
  };

  return (
    <Stack spacing={2}>
      <Rating
        value={rating}
        onChange={handleChange}
        precision={0.5}
        readOnly
        icon={<FavoriteIcon fontSize="inherit" color="success" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" color="success" />}
      ></Rating>
    </Stack>
  );
};
