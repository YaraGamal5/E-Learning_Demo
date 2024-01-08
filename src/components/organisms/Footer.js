import { Box, Stack, Typography, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import FooterLink from "../molecules/FooterLink";
import logo from "../../assets/logo.svg";
import FacebookIcon from "../../assets/footer/facebook-icon.svg";
import { useLocation } from "react-router-dom";
import LinkedinIcon from "../../assets/footer/linkedin-icon.svg";
import TwitterIcon from "../../assets/footer/twitter-icon.svg";
import WhatsappIcon from "../../assets/footer/whatsapp-icon.svg";
import YoutubeIcon from "../../assets/footer/youtube-icon.svg";

function Footer() {
  const location = useLocation();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const icons = [FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon, YoutubeIcon];
  const clients = ["IBM", "Intel", "Apple"];
  const sitePages = ["Home", "About us", "Contact us"];
  const support = ["Terms & Conditions", "Privacy Policy"];

  const renderedIcons = icons.map((icon, index) => (
    <img src={icon} alt="socialmedia icon" key={index} height="15px" width="15px" />
  ));

  const renderedLinks = sitePages.map((link, index) => (
    <FooterLink
      selected={link === "Home" && location.pathname === "/"}
      key={index}
    >
      {link}
    </FooterLink>
  ));

  const renderedClients = clients.map((client, index) => (
    <Typography variant="footerItem" key={index}>
      {client}
    </Typography>
  ));

  const renderedSupport = support.map((item, index) => (
    <FooterLink key={index}>{item}</FooterLink>
  ));

  return (
    <Stack>
      <Container
        sx={{ backgroundColor: "white", padding: isMediumScreen ? "20px" : "40px 80px" }}
      >
        <Grid container spacing={isMediumScreen ? 2 : 5}>
          <Grid item xs={12} md={4}>
            <Box>
              <img src={logo} alt="logo" style={{ marginBottom: isMediumScreen ? "20px" : "25px" }} />
              <Typography variant="body1" marginBottom={isMediumScreen ? "20px" : "10px"}>
                Discover the fastest, most effective
                <br />
                way to build your skills with courses,
                <br />
                certificates, and degrees.
                <br />
                Get started with us.
              </Typography>
              <Stack spacing={isMediumScreen ? "10px" : "20px"} direction="row">
                {renderedIcons}
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Stack
              alignContent={isMediumScreen ? "center" : "start"}
              flexWrap="wrap"
              alignItems={isMediumScreen ? "center" : "start"}
              spacing="10px"
            >
              <Typography variant="footerTitle" marginBottom={isMediumScreen ? "10px" : "10px"} >
                Sitemap
              </Typography>
              {renderedLinks}
            </Stack>
          </Grid>
          <Grid item xs={12} md={2}>
            <Stack
              alignContent={isMediumScreen ? "center" : "start"}
              flexWrap="wrap"
              alignItems={isMediumScreen ? "center" : "start"}
              spacing="10px"
            >
              <Typography variant="footerTitle" marginBottom={isMediumScreen ? "10px" : "10px"}>
                Our Clients
              </Typography>
              {renderedClients}
            </Stack>
          </Grid>
          <Grid item xs={12} md={2}>
            <Stack
              alignContent={isMediumScreen ? "center" : "start"}
              flexWrap="wrap"
              alignItems={isMediumScreen ? "center" : "start"}
              spacing="10px"
            >
              <Typography variant="footerTitle" marginBottom={isMediumScreen ? "10px" : "10px"} >
                Support
              </Typography>
              {renderedSupport}
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container color="#cfcfc2" sx={{ padding: isMediumScreen ? "15px 20px" : "25px 80px" }}>
        <Typography textAlign="center" fontWeight={600} fontSize={isMediumScreen ? "12px" : "14px"}>
          Designed and developed at inova LLC
        </Typography>
      </Container>
    </Stack>
  );
}

export default Footer;
