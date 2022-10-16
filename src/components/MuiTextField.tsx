import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="column" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="column" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
        <TextField
          label="required input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required o" : "If you like, cast your password 0. Ozwor"
          }
        />
        <TextField
          label="passwordd"
          helperText="Do not share your password with anyone"
          type="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon />
              </InputAdornment>
            )
          }}
        />
        <TextField
          variant="standard"
          label="readonly"
          InputProps={{ readOnly: true }}
          value="unchangeable"
        />
      </Stack>

      <Stack direction="column" spacing={2}>
        <TextField
          label="height"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }}
        />
      </Stack>
    </Stack>
  );
};
