import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Form() {
  return (
    <Grid component={Paper} elevation={6} square item xs={12} sm={6} md={6}>
      <Box
        component="form"
        className="personal-information"
        noValidate
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }} component="h5">
          Personal Information
        </Typography>
        <TextField
          sx={{ m: 0.5 }}
          height="1rem"
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoFocus
          variant="filled"
        />
        <TextField
          sx={{ m: 0.5 }}
          required
          fullWidth
          name="position"
          label="Position"
          id="position"
          autoFocus
          variant="filled"
        />
        <TextField
          sx={{ m: 0.5 }}
          required
          fullWidth
          name="phone"
          label="Phone Number"
          id="phone"
          autoFocus
          autoComplete=""
          variant="filled"
        />
        <TextField
          sx={{ m: 0.5 }}
          required
          fullWidth
          name="email"
          label="Email Address"
          id="email"
          autoComplete
          autoFocus
          variant="filled"
        />
      </Box>
    </Grid>
  );
}
