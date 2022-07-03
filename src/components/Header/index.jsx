import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import useStyles from "./styles";

const SIGN_IN = 'Sign in';
const SIGN_UP = 'Sign up';
const HEDER_TITLE = 'News';

function Header() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            {HEDER_TITLE}
          </Typography>
          <Box>
            <Button className={classes.button} color="inherit">{SIGN_IN}</Button>
            <Button color="inherit">{SIGN_UP}</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
