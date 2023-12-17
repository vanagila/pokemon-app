import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="./assets/pokemon-logo.png"
            alt="logo do pokemon"
            style={{ width: "150px", height: "auto" }}
          />

          <Box sx={{ flexGrow: 1 }}>
            <Button variant="contained">Contained</Button>
            <Button variant="contained">Contained</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
