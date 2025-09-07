import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import MovieSearch from "../Movie/MovieSearch";

const Nav = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Hamburger menu icon */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        {/* TMDb Logo / Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TMDb App
        </Typography>

        {/* Links / Buttons */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Movies</Button>
          <Button color="inherit">TV Shows</Button>
          <Button color="inherit">Trending</Button>
        </Box>

       <MovieSearch/>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
