import { Link } from "react-router-dom";
import { Button, Stack, IconButton, useMediaQuery, useTheme } from "@mui/material";
import logo from "../../assets/logo.svg";
import ShoppingCartIcon from "../../assets/header/shopping-cart-icon.svg";
import NavBar from "../molecules/NavBar";

function Header({ openLogin }) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const homeHeader = (
    <>
      <IconButton>
        <img src={ShoppingCartIcon} alt="shopping-cart-icon" />
      </IconButton>
      <Button variant="text" onClick={openLogin}>
        Login
      </Button>
      <Button style={{ whiteSpace: "nowrap" }} variant="contained">
        Sign Up
      </Button>
    </>
  );

  return (
    <Stack
      direction={isLargeScreen ? "row" : "column"}
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      sx={{ backgroundColor: "white" }}
      padding={isLargeScreen ? "20px 80px" : "20px"}
    >
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <NavBar placeholder="What do you want to learn?" />
      <Stack
        direction={isLargeScreen ? "row" : "column"}
        spacing={isLargeScreen ? "15px" : "10px"}
        justifyContent="end"
        alignItems="center"
      >
        {homeHeader}
      </Stack>
    </Stack>
  );
}

export default Header;
