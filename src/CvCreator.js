import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Form from "./Form";
import Preview from "./Preview";
import { AppBar, Toolbar, Typography, Grid, CssBaseline } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Chilanka", "cursive"].join(","),
  },
});

export default function SignInSide() {
    const handleChange = () => {
        
    }
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h5" noWrap>
            CV Creator
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Form />
        <Preview />
      </Grid>
    </ThemeProvider>
  );
}
