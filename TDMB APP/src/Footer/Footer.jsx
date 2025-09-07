import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "primary.main",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">
          TMDb App &copy; {new Date().getFullYear()}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Built with React & Material-UI |{" "}
          <Link href="https://www.themoviedb.org/" target="_blank" color="inherit" underline="hover">
            TMDb API
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
