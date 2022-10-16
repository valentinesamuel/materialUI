import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

export const MuiSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  console.log(isDarkMode);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={isDarkMode} onChange={handleChange} />}
      />
    </Box>
  );
};
