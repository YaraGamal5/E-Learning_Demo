import { Button, Stack, Typography, Box } from "@mui/material";
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
  let clientsLogos = [AppleLogo, IntelLogo, IBMLogo, MicrosoftLogo, GoogleLogo];
  let moreLogos = [
    AppleLogo,
    IntelLogo,
    IBMLogo,
    MicrosoftLogo,
    GoogleLogo,
    AppleLogo,
    IntelLogo,
    IBMLogo,
    MicrosoftLogo,
    GoogleLogo,
    AppleLogo,
    IntelLogo,
    IBMLogo,
    MicrosoftLogo,
    GoogleLogo,
    AppleLogo,
    IntelLogo,
  ];
  let viewLessContent = clientsLogos.map((logo, index) => {
    return (
      <Box component="span" textAlign="center" width="20%" key={index}>
        <img src={logo} alt="logo" />
      </Box>
    );
  });

  let viewAllContent = moreLogos.map((logo, index) => {
    return (
      <Box component="span" textAlign="center" width="20%" key={index}>
        <img src={logo} alt="logo" />
      </Box>
    );
  });

  return (
    <Stack
      spacing="30px"
      style={{ backgroundColor: "white" }}
      padding="50px 80px 50px 80px"
      display="inline-block"
    >
      <Box position="relative">
        <Typography textAlign="center" variant="h2" color="secondary">
          Our Clients
        </Typography>
        <Button
          position="absolute"
          variant="text"
          onClick={handleViewAllClick}
          sx={{
            fontSize: "26px",
            fontWeight: 600,
            right: "95px",
            top: "0px",
            position: "absolute",
          }}
        >
          {viewAll ? "View Less" : "View All"}
        </Button>
      </Box>
      <Stack direction="row" flexWrap="wrap" alignItems="center">
        {viewLessContent}
        {viewAll && viewAllContent}
      </Stack>
    </Stack>
  );
}

export default OurClients;