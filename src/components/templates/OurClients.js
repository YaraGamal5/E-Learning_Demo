import { Button, Stack, Typography, Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import AppleLogo from "../../assets/home/apple.svg";
import IntelLogo from "../../assets/home/intel.svg";
import IBMLogo from "../../assets/home/ibm.svg";
import MicrosoftLogo from "../../assets/home/microsoft.svg";
import GoogleLogo from "../../assets/home/google.svg";

function OurClients() {
  const [viewAll, setViewAll] = useState(false);
  const handleViewAllClick = () => {
    setViewAll(!viewAll);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  let clientsLogos = [AppleLogo, IntelLogo, IBMLogo, MicrosoftLogo, GoogleLogo];
  let moreLogos = [...clientsLogos, ...clientsLogos, ...clientsLogos];
  let logosToDisplay = viewAll ? moreLogos : clientsLogos;

  return (
    <Stack
      spacing={isSmallScreen ? "20px" : "30px"}
      style={{ backgroundColor: "white" }}
      padding="50px 20px"
      display="inline-block"
    >
      <Box position="relative" textAlign="center">
        <Typography variant="h2" color="secondary">
          Our Clients
        </Typography>
        <Button
      variant="text"
      onClick={handleViewAllClick}
      sx={{
        fontSize: isSmallScreen ? "14px" : "16px",
        fontWeight: 600,
        position: "absolute",
        top: "10px",  
        right: "10px", 
      }}
    >
      {viewAll ? "View Less" : "View All"}
    </Button>
      </Box>
      <Grid container spacing={isSmallScreen ? 2 : 4}>
        {logosToDisplay.map((logo, index) => (
          <Grid item key={index} xs={6} sm={3} md={2} lg={2}>
            <Box component="span" textAlign="center">
              <img src={logo} alt="logo" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default OurClients;
