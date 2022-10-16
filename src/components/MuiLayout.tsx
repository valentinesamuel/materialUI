import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

export const MuiLayout = () => {
  const BoxLayout = (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light"
          }
        }}
      >
        Valentine
      </Box>
      <Box height="100px" width="100px" bgcolor="success.light"></Box>{" "}
    </>
  );

  const GridLayout = (
    <Grid container my={4} rowSpacing={2} columnSpacing={4}>
      <Grid item xs={6} sm={6}>
        <Box bgcolor="primary.light" p={2}>
          Item 1
        </Box>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Box bgcolor="primary.light" p={2}>
          Item 2
        </Box>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Box bgcolor="primary.light" p={2}>
          Item 3
        </Box>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Box bgcolor="primary.light" p={2}>
          Item 4
        </Box>
      </Grid>
    </Grid>
  );

  const StackLayout = (
    <Stack
      sx={{ border: "1px solid" }}
      direction="row"
      spacing={3}
      divider={<Divider orientation="vertical" flexItem />}
    >
      {BoxLayout}
    </Stack>
  );

  return (
    <Paper elevation={4} sx={{ padding: "32px" }}>
      {GridLayout}
    </Paper>
  );
};
